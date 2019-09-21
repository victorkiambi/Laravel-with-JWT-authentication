<template>
    <v-app>
      <router-view></router-view>
    </v-app>
</template>
<script>
  
export default {
  components:{
   
  }
   
}
</script>
<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
