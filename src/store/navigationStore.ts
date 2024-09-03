import { defineStore } from 'pinia';

export const useNavigationStore = defineStore('navigation', {
    state: () => ({
        currentPage: 'home',
    }),
    actions: {
        setCurrentPage(page: string) {
            this.currentPage = page;
        },
    },
});