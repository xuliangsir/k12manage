<template>
  <div class="actionStorageManagement">
    <div class="actionStorageManagement_title">动作库管理</div>
    <div class="actionStorageManagement_bar">
      <router-link :to="{path:'/action/storageAlreadyHave'}">
        <el-button>已有动作库</el-button>
      </router-link>
      <router-link :to="{path:'/action/addActions'}">
        <el-button>添加动作</el-button>
      </router-link>
    </div>
    <!--<keep-alive>-->
      <router-view class="actionStorageManagement_content"></router-view>
    <!--</keep-alive>-->
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
  .actionStorageManagement_title{
    margin-top: 10px;
    margin-left: 10px;
    font-size: 20px;
  }
  .actionStorageManagement_bar{
    width: 98%;
    margin-top: 10px;
    margin-left: 10px;
  }
  .actionStorageManagement_content{
    width: 98%;
    /*height: 650px;*/
    margin-top: 10px;
    margin-left: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #bfcbd9;
  }
</style>
