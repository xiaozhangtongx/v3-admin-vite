import { type App } from 'vue'
import { loadVxeTable } from './vxe-table'

export function loadPlugins(app: App) {
  loadVxeTable(app)
}
