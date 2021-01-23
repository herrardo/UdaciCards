import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIFICATION_KEY = 'udacity_flash_cards::notifications';

export const clearLocalNotification = () => (
  AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync,
  )
);

const createStudyNotification = () => ({
  title: 'Dude do some quiz!!!',
  body: '👋 Cont forget to do some learning today!',
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    sticky: false,
    vibrate: true,
  },
});

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          console.log(status);
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            Notifications.scheduleNotificationAsync({
              content:createStudyNotification(),
              trigger:{
                seconds: 5,
                repeat: true,
            }});

            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
};
