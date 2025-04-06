import { useNotifications } from '~/features/notifications/model/useNotifications';

export default defineNuxtPlugin(() => {
  const notifications = useNotifications();

  return {
    provide: {
      notifications
    }
  }
})
