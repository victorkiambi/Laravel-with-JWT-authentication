<template>
    <div id="main">
        <header id="header">
            <Menu></Menu>
        </header>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
 
  export default {
    data() {
      return {
        //
      }
    },
    components: {
      
    }
  }
</script>