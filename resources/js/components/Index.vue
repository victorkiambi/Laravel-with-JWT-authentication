<template>
  <v-app>
<Menu></Menu>
    <core-drawer />

    <core-view />

    <!-- <core-footer /> -->
  </v-app>
</template>

<script>
import Menu from '@/js/components/Menu'
  export default {
    components: {
      Menu,
      CoreDrawer: () => import('@/js/components/core/Drawer'),
      CoreFooter: () => import('@/js/components/core/Footer'),
      CoreAppBar: () => import('@/js/components/core/AppBar'),
      CoreView: () => import('@/js/components/core/View')
    }
  }
</script>
