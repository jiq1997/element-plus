import { ElAffix } from '@element-plus/components/affix'
import { ElAlert } from '@element-plus/components/alert'
import { ElAutocomplete } from '@element-plus/components/autocomplete'
import { ElAvatar } from '@element-plus/components/avatar'
import { ElBacktop } from '@element-plus/components/backtop'
import { ElBadge } from '@element-plus/components/badge'
import {
  ElBreadcrumb,
  ElBreadcrumbItem,
} from '@element-plus/components/breadcrumb'
import { ElButton, ElButtonGroup } from '@element-plus/components/button'
import { ElCalendar } from '@element-plus/components/calendar'
import { ElCard } from '@element-plus/components/card'
import { ElCarousel, ElCarouselItem } from '@element-plus/components/carousel'
import { ElCascader } from '@element-plus/components/cascader'
import { ElCascaderPanel } from '@element-plus/components/cascader-panel'
import { ElCheckTag } from '@element-plus/components/check-tag'
import {
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
} from '@element-plus/components/checkbox'
import { ElCol } from '@element-plus/components/col'
import { ElCollapse, ElCollapseItem } from '@element-plus/components/collapse'
import { ElCollapseTransition } from '@element-plus/components/collapse-transition'
import { ElColorPicker } from '@element-plus/components/color-picker'
import { ElConfigProvider } from '@element-plus/components/config-provider'
import {
  ElAside,
  ElContainer,
  ElFooter,
  ElHeader,
  ElMain,
} from '@element-plus/components/container'
import { ElDatePicker } from '@element-plus/components/date-picker'
import {
  ElDescriptions,
  ElDescriptionsItem,
} from '@element-plus/components/descriptions'
import { ElDialog } from '@element-plus/components/dialog'
import { ElDivider } from '@element-plus/components/divider'
import { ElDrawer } from '@element-plus/components/drawer'
import {
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
} from '@element-plus/components/dropdown'
import { ElEmpty } from '@element-plus/components/empty'
import { ElForm, ElFormItem } from '@element-plus/components/form'
import { ElIcon } from '@element-plus/components/icon'
import { ElImage } from '@element-plus/components/image'
import { ElImageViewer } from '@element-plus/components/image-viewer'
import { ElInput } from '@element-plus/components/input'
import { ElInputNumber } from '@element-plus/components/input-number'
import { ElLink } from '@element-plus/components/link'
import {
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubMenu,
} from '@element-plus/components/menu'
import { ElPageHeader } from '@element-plus/components/page-header'
import { ElPagination } from '@element-plus/components/pagination'
import { ElPopconfirm } from '@element-plus/components/popconfirm'
import { ElPopover } from '@element-plus/components/popover'
import { ElPopper } from '@element-plus/components/popper'
import { ElProgress } from '@element-plus/components/progress'
import {
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
} from '@element-plus/components/radio'
import { ElRate } from '@element-plus/components/rate'
import { ElResult } from '@element-plus/components/result'
import { ElRow } from '@element-plus/components/row'
import { ElScrollbar } from '@element-plus/components/scrollbar'
import {
  ElOption,
  ElOptionGroup,
  ElSelect,
} from '@element-plus/components/select'
import { ElSelectV2 } from '@element-plus/components/select-v2'
import { ElSkeleton, ElSkeletonItem } from '@element-plus/components/skeleton'
import { ElSlider } from '@element-plus/components/slider'
import { ElSpace } from '@element-plus/components/space'
import { ElStatistic } from '@element-plus/components/statistic'
import { ElCountdown } from '@element-plus/components/countdown'
import { ElStep, ElSteps } from '@element-plus/components/steps'
import { ElSwitch } from '@element-plus/components/switch'
import { ElTable, ElTableColumn } from '@element-plus/components/table'
import { ElAutoResizer, ElTableV2 } from '@element-plus/components/table-v2'
import { ElTabPane, ElTabs } from '@element-plus/components/tabs'
import { ElTag } from '@element-plus/components/tag'
import { ElText } from '@element-plus/components/text'
import { ElTimePicker } from '@element-plus/components/time-picker'
import { ElTimeSelect } from '@element-plus/components/time-select'
import { ElTimeline, ElTimelineItem } from '@element-plus/components/timeline'
import { ElTooltip } from '@element-plus/components/tooltip'
import { ElTooltipV2 } from '@element-plus/components/tooltip-v2'
import { ElTransfer } from '@element-plus/components/transfer'
import { ElTree } from '@element-plus/components/tree'
import { ElTreeSelect } from '@element-plus/components/tree-select'
import { ElTreeV2 } from '@element-plus/components/tree-v2'
import { ElUpload } from '@element-plus/components/upload'
import { ElWatermark } from '@element-plus/components/watermark'
import { ElTour, ElTourStep } from '@element-plus/components/tour'
import { ElAnchor, ElAnchorLink } from '@element-plus/components/anchor'

import type { Plugin } from 'vue'

export default [
  ElAffix as 'SlAffix',
  ElAlert as 'SlAlert',
  ElAutocomplete as 'SlAutocomplete',
  ElAutoResizer as 'SlAutoResizer',
  ElAvatar as 'SlAvatar',
  ElBacktop as 'SlBacktop',
  ElBadge as 'SlBadge',
  ElBreadcrumb as 'SlBreadcrumb',
  ElBreadcrumbItem as 'SlBreadcrumbItem',
  ElButton as 'SlButton',
  ElButtonGroup as 'SlButtonGroup',
  ElCalendar as 'SlCalendar',
  ElCard as 'SlCard',
  ElCarousel as 'SlCarousel',
  ElCarouselItem as 'SlCarouselItem',
  ElCascader as 'SlCascader',
  ElCascaderPanel as 'SlCascaderPanel',
  ElCheckTag as 'SlCheckTag',
  ElCheckbox as 'SlCheckbox',
  ElCheckboxButton as 'SlCheckboxButton',
  ElCheckboxGroup as 'SlCheckboxGroup',
  ElCol as 'SlCol',
  ElCollapse as 'SlCollapse',
  ElCollapseItem as 'SlCollapseItem',
  ElCollapseTransition as 'SlCollapseTransition',
  ElColorPicker as 'SlColorPicker',
  ElConfigProvider as 'SlConfigProvider',
  ElContainer as 'SlContainer',
  ElAside as 'SlAside',
  ElFooter as 'SlFooter',
  ElHeader as 'SlHeader',
  ElMain as 'SlMain',
  ElDatePicker as 'SlDatePicker',
  ElDescriptions as 'SlDescriptions',
  ElDescriptionsItem as 'SlDescriptionsItem',
  ElDialog as 'SlDialog',
  ElDivider as 'SlDivider',
  ElDrawer as 'SlDrawer',
  ElDropdown as 'SlDropdown',
  ElDropdownItem as 'SlDropdownItem',
  ElDropdownMenu as 'SlDropdownMenu',
  ElEmpty as 'SlEmpty',
  ElForm as 'SlForm',
  ElFormItem as 'SlFormItem',
  ElIcon as 'SlIcon',
  ElImage as 'SlImage',
  ElImageViewer as 'SlImageViewer',
  ElInput as 'SlInput',
  ElInputNumber as 'SlInputNumber',
  ElLink as 'SlLink',
  ElMenu as 'SlMenu',
  ElMenuItem as 'SlMenuItem',
  ElMenuItemGroup as 'SlMenuItemGroup',
  ElSubMenu as 'SlSubMenu',
  ElPageHeader as 'SlPageHeader',
  ElPagination as 'SlPagination',
  ElPopconfirm as 'SlPopconfirm',
  ElPopover as 'SlPopover',
  ElPopper as 'SlPopper',
  ElProgress as 'SlProgress',
  ElRadio as 'SlRadio',
  ElRadioButton as 'SlRadioButton',
  ElRadioGroup as 'SlRadioGroup',
  ElRate as 'SlRate',
  ElResult as 'SlResult',
  ElRow as 'SlRow',
  ElScrollbar as 'SlScrollbar',
  ElSelect as 'SlSelect',
  ElOption as 'SlOption',
  ElOptionGroup as 'SlOptionGroup',
  ElSelectV2 as 'SlSelectV2',
  ElSkeleton as 'SlSkeleton',
  ElSkeletonItem as 'SlSkeletonItem',
  ElSlider as 'SlSlider',
  ElSpace as 'SlSpace',
  ElStatistic as 'SlStatistic',
  ElCountdown as 'SlCountdown',
  ElSteps as 'SlSteps',
  ElStep as 'SlStep',
  ElSwitch as 'SlSwitch',
  ElTable as 'SlTable',
  ElTableColumn as 'SlTableColumn',
  ElTableV2 as 'SlTableV2',
  ElTabs as 'SlTabs',
  ElTabPane as 'SlTabPane',
  ElTag as 'SlTag',
  ElText as 'SlText',
  ElTimePicker as 'SlTimePicker',
  ElTimeSelect as 'SlTimeSelect',
  ElTimeline as 'SlTimeline',
  ElTimelineItem as 'SlTimelineItem',
  ElTooltip as 'SlTooltip',
  ElTooltipV2 as 'SlTooltipV2',
  ElTransfer as 'SlTransfer',
  ElTree as 'SlTree',
  ElTreeSelect as 'SlTreeSelect',
  ElTreeV2 as 'SlTreeV2',
  ElUpload as 'SlUpload',
  ElWatermark as 'SlWatermark',
  ElTour as 'SlTour',
  ElTourStep as 'SlTourStep',
  ElAnchor as 'SlAnchor',
  ElAnchorLink as 'SlAnchorLink',
] as Plugin[]
