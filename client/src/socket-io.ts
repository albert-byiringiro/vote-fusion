import { AppActions, AppState } from "./state";

export const socketIOUrl =  `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}/${import.meta.env.VITE_POLLS_NAMESPACE}`

type CreateSocketOptions = {
    socketIOUrl: string;
    state: AppState;
    actions: AppActions;
}