<script lang="ts" setup>
import { type ThemeName, useTheme } from '@/hooks/useTheme'

const { themeList, activeThemeName, setTheme } = useTheme()

const handleSetTheme = (name: ThemeName) => {
  setTheme(name)
}
</script>

<template>
  <el-dropdown trigger="click" @command="handleSetTheme">
    <div>
      <el-tooltip effect="dark" content="主题模式" placement="bottom">
        <svg-icon name="i-icon-park-outline-theme text-xl" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(theme, index) in themeList"
          :key="index"
          :disabled="activeThemeName === theme.name"
          :command="theme.name"
        >
          <span>{{ theme.title }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
