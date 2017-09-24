<template>
  <div class="coachAut">
    <div class="coachTitle">
      <span>教练认证</span>
    </div>
    <div class="coachBar">
      <router-link :to="{path:'/Authentication/uncertifiedList'}">
        <el-button>待审核教练</el-button>
      </router-link>
      <router-link :to="{path:'/Authentication/certifiedList'}">
        <el-button>已认证教练</el-button>
      </router-link>
      <router-link :to="{path:'/Authentication/certifySearchList'}">
        <i class="el-icon-search"></i>
      </router-link>
      <el-input class="search" placeholder="请输入查询条件" v-model="SearchValue" style="width: 200px;"></el-input>
      <!--<el-select :disabled="true" v-model="value" placeholder="请选择" class="selection">-->
        <!--<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>-->
      <!--</el-select>-->
    </div>
    <!--<keep-alive>-->
    <router-view :forSearchList="SearchValue"></router-view>
    <!--</keep-alive>-->
    <!--<div class="coachFoot">
      <el-button :disabled="true">全部审核</el-button>
      <el-button :disabled="true">批量审核</el-button>
      <el-pagination class="pagination" layout="prev, pager, next" :total="1000"></el-pagination>
    </div>-->
  </div>
</template>


<script>
  export default{
    data(){
      return{
//        options: [{
//          value: '选项1',
//          label: '用户姓名'
//        }, {
//          value: '选项2',
//          label: '用户电话'
//        }],
//        value: '',

        SearchValue:'',
      }
    },
    methods:{
    }
  }
  $(document).ready(function()
  {
    // 浏览器的高度和div的高度
    var height = $(window).height();
    var divHeight = $(".coachAut").height();

    //获取div对象
    var divh = $("#coachAut").get(0);

    //div高度大于屏幕高度把屏幕高度赋给div，并出现滚动条
    if (divHeight > height-20)
    {
      divh.style.height = height-20;
      divh.style.overflow = "auto";
    }
  });
</script>


<style scoped>
  .coachTitle{
    margin-top: 10px;
    margin-left: 10px;
    font-size: 20px;
  }
  .coachBar{
    width: 98%;
    margin-top: 10px;
    margin-left: 10px;
  }
  /*.selection{*/
    /*float: right;*/
    /*margin-right: 10px;*/
  /*}*/
  .el-icon-search{
    line-height: 36px;
    margin-left: -50px;
    margin-right: 10px;
    z-index: 10;
    position: relative;
    float: right;
    color: #bfcbd9;
  }
  .search{
    float: right;
  }

  .coachFoot{
    width: 98%;
    margin-top: 10px;
    margin-left: 10px;
  }
  .pagination{
    float: right;
  }
</style>
