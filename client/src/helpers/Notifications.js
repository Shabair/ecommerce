import { notification } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const openNotification = (msg='', dis='') => {
  notification.open({
    message: msg,
    description: dis
  });
}


export const ErrorNotification = (msg='', dis='') => {
  notification.open({
    message: msg,
    description:dis,
    icon: <ExclamationCircleOutlined style={{ color: '#ff4545' }} />,
  });
}

export default openNotification
