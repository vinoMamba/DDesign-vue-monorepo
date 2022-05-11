import { InformationCircleOutline } from '@vicons/ionicons5'

export const MessageIcon = (type: 'info' | 'success' | 'warning' | 'error') => {
  const iconMap = {
    info: <InformationCircleOutline />,
    success: <InformationCircleOutline />,
    warning: <InformationCircleOutline />,
    error: <InformationCircleOutline />,
  }
  return iconMap[type]
}
