<script lang="ts" setup>
import ErrorPageLayout from './components/ErrorPageLayout.vue'
import Svg403 from '@/assets/error-page/403.svg'
</script>

<template>
  <ErrorPageLayout>
    <el-image :src="Svg403" />
  </ErrorPageLayout>
</template>
