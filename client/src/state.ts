import { proxy } from "valtio";
import { Poll } from "../../shared/poll-types";

export enum AppPage {
    Welcome = 'welcome',
    Create = 'create',
    Join = 'join'
}

export type AppState = {
    isLoading: boolean,
    currentPage: AppPage;
    poll?: Poll
}

const state: AppState = proxy({
    isLoading: false,
    currentPage: AppPage.Welcome,
})

const actions = {
    setPage: (page: AppPage): void => {
        state.currentPage = page
    },
    startOver: (): void => {
        actions.setPage(AppPage.Welcome)
    },
    startLoading: (): void => {
        state.isLoading = true
    },
    stopLoading: (): void => {
        state.isLoading = false
    },
    initializePoll: (poll?: Poll): void => {
        state.poll = poll
    }
}

export { state, actions }