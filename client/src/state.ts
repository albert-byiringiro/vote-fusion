import { proxy, ref } from "valtio";
import { Poll } from "../../shared/poll-types";
import { derive, subscribeKey } from "valtio/utils";
import { getTokenPayload } from "./utils";
import { Socket } from "socket.io-client";
import { createSocketWithHandlers, socketIOUrl } from "./socket-io";
import { nanoid } from "nanoid";

export enum AppPage {
    Welcome = 'welcome',
    Create = 'create',
    Join = 'join',
    WaitingRoom = 'waiting-room',
}

type Me = {
    id: string;
    name: string;
}

type WsError = {
    type: string;
    message: string;
}

type WsErrorUnique = WsError & {
    id: string;
}

export type AppState = {
    isLoading: boolean;
    me?: Me;
    currentPage: AppPage;
    poll?: Poll;
    accessToken?: string;
    socket?: Socket;
    wsErrors: WsErrorUnique[];
}

const state: AppState = proxy({
    isLoading: false,
    currentPage: AppPage.Welcome,
    wsErrors: [],
})

const stateWithComputed: AppState = derive(
    {
    me: (get) => {
        const accessToken = get(state).accessToken;

        if (!accessToken) {
            return;
        }

        const token = getTokenPayload(accessToken)

        return {
            id: token.sub,
            name: token.name
        }
    },
    isAdmin: (get) => {
        if (!get(state).me) {
            return false
        }

        return get(state).me?.id === get(state).poll?.adminID
    }
    },
    {
        proxy: state
    }
)

const actions = {
    setPage: (page: AppPage): void => {
        state.currentPage = page
    },
    startOver: (): void => {
        actions.reset();
        localStorage.removeItem('accessToken');
        actions.setPage(AppPage.Welcome);
    },
    startLoading: (): void => {
        state.isLoading = true
    },
    stopLoading: (): void => {
        state.isLoading = false
    },
    initializePoll: (poll?: Poll): void => {
        state.poll = poll
    },
    setPollAccessToken: (token?: string): void => {
        state.accessToken = token
    },
    initializeSocket: (): void => {
        if (!state.socket) {
            state.socket = ref(
                createSocketWithHandlers({
                    socketIOUrl,
                    state,
                    actions
                })
            )
        } else {
            state.socket.connect()
        }
    },
    startVote: (): void => {
        state.socket?.emit('start_vote')
    },
    updatePoll: (poll: Poll): void => {
        state.poll = poll
    },
    addWsError: (error: WsError): void => {
        state.wsErrors = [
            ...state.wsErrors,
            {
                ...error,
                id: nanoid(6),
            },
        ];
    },
    removeWsError: (id: string): void => {
        state.wsErrors = state.wsErrors.filter((error) => error.id !== id)
    },
    nominateEvent: (text: string): void => {
        state.socket?.emit('nominate', { text })
    },
    removeNomination: (id: string): void => {
        state.socket?.emit('remove_nomination', { id })
    },
    removeParticipant: (id: string): void => {
        state.socket?.emit('remove_participant', { id })
    },
    reset: (): void => {
        state.socket?.disconnect();
        state.poll = undefined;
        state.accessToken = undefined;
        state.isLoading = false;
        state.socket = undefined;
        state.wsErrors = [];
    }
}

subscribeKey(state, 'accessToken', () => {
    if (state.accessToken) {
        localStorage.setItem('accessToken', state.accessToken)
    }
})

export type AppActions = typeof actions

export { stateWithComputed as state, actions }