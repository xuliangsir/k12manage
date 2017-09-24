<template>
  <div class="redCoach">
    <div class="redCoach_title">
      <span>已认证教练</span>
    </div>
    <div class="redCoach_bar">
      <router-link :to="{path:'/certifiedCoach/coachList'}">
        <el-button>已认证教练</el-button>
      </router-link>
      <el-button :disabled="true" type="text" class="export"><i class="el-icon-upload2"></i> 导出CSV文件</el-button>
      <!--<router-link>-->
        <i class="el-icon-search"></i>
      <!--</router-link>-->
      <el-input class="search" placeholder="请输入查询条件" style="width: 200px;"></el-input>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
  .redCoach_title{
    margin-top: 10px;
    margin-left: 10px;
    font-size: 20px;
  }
  .redCoach_bar{
    width: 98%;
    margin-top: 10px;
    margin-left: 10px;
  }

  .el-icon-search{
    line-height: 36px;
    margin-left: -50px;
    margin-right: 20px;
    z-index: 10;
    position: relative;
    float: right;
    color: #bfcbd9;
  }
  .search{
    float: right;
    margin-right: 10px;
  }
  .export{
    float: right;
  }
</style>
