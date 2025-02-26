import { defineStore } from 'pinia';

export type SnackbarColor = 'success' | 'error' | 'info' | 'warning';

export interface Snackbar {
  text: string;
  color?: SnackbarColor;
}

export const useNotificationsStore = defineStore('notificationsStore', () => {
  const queue = ref<Snackbar[]>([]);

  const addSnackbar = (item: Snackbar) => {
    queue.value.push(item);
  };

  return {
    queue,
    addSnackbar,
  };
});
