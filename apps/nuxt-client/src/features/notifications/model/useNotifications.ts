import { type SnackbarColor, useNotificationsStore } from '~/features/notifications/model/store';


export interface Notification {
  text: string;
}

export const useNotifications = () => {
  const variants: SnackbarColor[] = ['success', 'error', 'info', 'warning'];
  const notifications = {} as Record<SnackbarColor, (notification: Notification) => void>;
  const notificationsStore = useNotificationsStore();

  for (const variant of variants) {
    notifications[variant] = (notification: Notification) => {
      notificationsStore.addSnackbar({
        text: notification.text,
        color: variant,
      });
    };
  }

  return notifications;
};
