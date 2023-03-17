import { type App } from 'vue'
import { loadElementPlusIcon } from './element-plus-icon'
import { loadVxeTable } from './vxe-table'

export function loadPlugins(app: App) {
  loadElementPlusIcon(app)
  loadVxeTable(app)
}
