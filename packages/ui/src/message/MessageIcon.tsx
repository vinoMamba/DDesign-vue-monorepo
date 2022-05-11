import {
  InformationCircleOutline,
  CheckmarkCircleSharp,
  AlertCircleOutline,
  CloseCircleOutline,
} from '@vicons/ionicons5'

export const MessageIcon = (type: 'info' | 'success' | 'warning' | 'error') => {
  const iconMap = {
    info: <InformationCircleOutline />,
    success: <CheckmarkCircleSharp />,
    warning: <AlertCircleOutline />,
    error: <CloseCircleOutline />,
  }
  return iconMap[type]
}
