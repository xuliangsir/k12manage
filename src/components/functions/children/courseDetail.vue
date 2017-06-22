<template>
  <div class="redCoach_content">
    {{msg}}
  </div>
</template>
<script>
  export default{
    data(){
      return{
        msg:'我是课程详情'
      }
    }
  }
</script>
<style scoped>
  .redCoach_content{
    width: 98%;
    height: 600px;
    margin-top: 10px;
    margin-left: 10px;
    border: 1px solid #bfcbd9;
    border-radius: 5px;
  }
</style>
