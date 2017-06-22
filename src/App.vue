<template>
  <div class="app" style="height: 100%">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('this.$getApi:' + this.$getApi);
      console.log('master')
    }
  }

</script>

<style>


</style>
