<script lang="ts" setup>
import { ref } from 'vue'
import AdminDashboard from './admin/index.vue'
import EditorDashboard from './editor/index.vue'
import { useUserStore } from '@/store/modules/user'

type CurrentRoleType = 'admin' | 'editor'

const userStore = useUserStore()
const currentRole = ref<CurrentRoleType>('admin')
if (!userStore.roles.includes('admin'))
  currentRole.value = 'editor'
</script>

<template>
  <component :is="currentRole === 'admin' ? AdminDashboard : EditorDashboard" />
</template>
