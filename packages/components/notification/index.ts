import { withInstallFunction } from '@element-plus/utils'

import Notify from './src/notify'

export const ElNotification = withInstallFunction(Notify, '$notify')
export const SlNotification = ElNotification
export default ElNotification

export * from './src/notification'
