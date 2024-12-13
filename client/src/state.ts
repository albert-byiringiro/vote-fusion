import { proxy } from "valtio";

export enum AppPage {
    Welcome = 'welcome',
    Create = 'create',
    Join = 'join'
}

export type AppState = {
    isLoading: boolean,
    currentPage: AppPage;
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
    }
}

export { state, actions }