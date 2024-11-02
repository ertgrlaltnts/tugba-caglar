import { notification } from "antd";

export const successNotification = (message) => {
  notification.success({
    message: message,
  });
};

export const errorNotification = (message) => {
  notification.error({
    message: message,
  });
};
