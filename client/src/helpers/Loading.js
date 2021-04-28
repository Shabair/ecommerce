import { notification } from 'antd';

const openNotification = (msg='', dis='') => {
  notification.open({
    message: msg,
    description: dis
  });
}

export default openNotification
