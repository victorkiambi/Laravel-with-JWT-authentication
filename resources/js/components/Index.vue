<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
  export default {
    components: {
      CoreDrawer: () => import('@/js/components/core/Drawer'),
      CoreFooter: () => import('@/js/components/core/Footer'),
      CoreAppBar: () => import('@/js/components/core/AppBar'),
      CoreView: () => import('@/js/components/core/View')
    }
  }
</script>
