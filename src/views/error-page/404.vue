<script lang="ts" setup>
import ErrorPageLayout from './components/ErrorPageLayout.vue'
import Svg404 from '@/assets/error-page/404.svg'
</script>

<template>
  <ErrorPageLayout>
    <el-image :src="Svg404" />
  </ErrorPageLayout>
</template>
