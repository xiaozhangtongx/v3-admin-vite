import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  /** 排除 */
  exclude: ['node_modules'],
  /** 预设 */
  presets: [
    /** 属性化模式 & 无值的属性模式 */
    presetAttributify(),
    /** 默认预设 */
    presetUno(),
    // 图标预设
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
      scale: 1.2,
      warn: true,
    }),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
