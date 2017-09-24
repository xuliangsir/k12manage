<template style="height: 100%">
  <el-menu class="MenuBarLeft" theme="dark" @open="handleOpen" @close="handleClose">
    <div class="title_box">
      <router-link :to="{path:'/dataStatistics'}">
        <span class="title"><img class="logo" src="../assets/TIGER-ICO.png" alt="logo">管理平台</span>
      </router-link>
    </div>
    <!--
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-document"></i>数据首页</template>
      <router-link :to="{path:'/dataStatistics'}">
        <el-menu-item index="1-1" @click="setUnitName('数据统计')">数据统计</el-menu-item>
      </router-link>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-edit"></i>用户管理</template>
      <router-link :to="{path:'/userManagement'}">
        <el-menu-item index="2-1" @click="setUnitName('用户管理')">用户管理</el-menu-item>
      </router-link>
    </el-submenu>-->

    <!--点击左导航触发'发送面包屑名'的事件-->
<!--
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-star-off"></i>教练系统</template>
      <router-link :to="{path:'/certifiedCoach/coachList'}">
        <el-menu-item index="3-1" @click="setUnitName('已认证教练')">已认证教练</el-menu-item>
      </router-link>
      <router-link :to="{path:'/Authentication/uncertifiedList'}">
        <el-menu-item index="3-2" @click="setUnitName('教练认证')">教练认证</el-menu-item>
        
      </router-link>
      <router-link :to="{path:'/action/storageAlreadyHave'}">
        <el-menu-item index="3-3" @click="setUnitName('动作库管理')">动作库管理</el-menu-item>
      </router-link>
      <router-link :to="{path:'/error'}">
        <el-menu-item index="3-4" @click="setUnitName('启动页通知')">启动页通知</el-menu-item>
      </router-link>
      <router-link :to="{path:'/error'}">
        <el-menu-item index="3-5" @click="setUnitName('闪屏管理')">闪屏管理</el-menu-item>
      </router-link>
      <router-link :to="{path:'/error'}">
        <el-menu-item index="3-6" @click="setUnitName('消息通知')">消息通知</el-menu-item>
      </router-link>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title"><i class="el-icon-menu"></i>SaaS系统</template>
      <router-link :to="{path:'/error'}">
        <el-menu-item index="4-1" @click="setUnitName('账号管理')">账号管理</el-menu-item>
      </router-link>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title"><i class="el-icon-picture"></i>相机系统</template>
      <el-menu-item index="5-1">照片管理</el-menu-item>
      <el-menu-item index="5-2">打卡管理</el-menu-item>
      <el-menu-item index="5-3">启动页管理</el-menu-item>
      <el-menu-item index="5-4">闪屏管理</el-menu-item>
      <el-menu-item index="5-5">消息通知</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title"><i class="el-icon-date"></i>日志管理</template>
      <router-link :to="{path:'/error'}">
        <el-menu-item index="6-1" @click="setUnitName('日志管理')">日志管理</el-menu-item>
      </router-link>
    </el-submenu>
    <el-submenu index="7">
      <template slot="title"><i class="el-icon-message"></i>公众号管理</template>
      <el-menu-item index="7-1">公众号管理</el-menu-item>
    </el-submenu>
    <el-submenu index="8">
      <template slot="title"><i class="el-icon-information"></i>版本管理</template>
      <el-menu-item index="8-1">版本管理</el-menu-item>
    </el-submenu>
    <el-submenu index="9">
      <template slot="title"><i class="el-icon-picture"></i>图片浏览</template>
      <router-link :to="{path:'/picture'}">
        <el-menu-item index="9-1" @click="setUnitName('图片浏览')">图片浏览</el-menu-item>
      </router-link>
    </el-submenu>
     -->
  

       <el-submenu index="5">
      <template slot="title"><i class="el-icon-picture"></i>教师管理</template>
       <router-link :to="{path:'/teachers'}">
        <el-menu-item index="9-1" @click="setUnitName('教师管理')">教师管理</el-menu-item>
      </router-link>

      <router-link :to="{path:'/teaching'}">
        <el-menu-item index="9-1" @click="setUnitName('教师管理')">任命教师管理</el-menu-item>
      </router-link>
    </el-submenu>

      
    <el-submenu index="5">
      <template slot="title"><i class="el-icon-picture"></i>班级管理</template>

       <router-link :to="{path:'/klasses'}">
        <el-menu-item index="9-1" @click="setUnitName('班级管理')">班级管理</el-menu-item>
      </router-link>

       <router-link :to="{path:'attendanceAdd'}">
        <el-menu-item index="9-1" @click="setUnitName('班级管理')">添加考勤</el-menu-item>
      </router-link>

       <router-link :to="{path:'attendance'}">
        <el-menu-item index="9-1" @click="setUnitName('班级管理')">查询考勤</el-menu-item>
      </router-link> 

       <router-link :to="{path:'klassplans'}">
        <el-menu-item index="9-1" @click="setUnitName('班级管理')">班级计划</el-menu-item>
      </router-link> 

    </el-submenu>




      <router-link :to="{path:'/kindergarten'}">
        <el-menu-item index="9-1" @click="setUnitName('园区管理')">园区管理</el-menu-item>
      </router-link>

      <router-link :to="{path:'/cookbook'}">
        <el-menu-item index="9-1" @click="setUnitName('园区管理')">食谱管理</el-menu-item>
      </router-link>


     <router-link :to="{path:'/kindergarten'}">
        <el-menu-item index="9-1" @click="setUnitName('年级管理')">年级管理</el-menu-item>
      </router-link>


    

<!--
      <router-link :to="{path:'/teachers'}">
        <el-menu-item index="9-1" @click="setUnitName('幼儿园管理')">教师管理</el-menu-item>
      </router-link>
      <router-link :to="{path:'/teaching'}">
        <el-menu-item index="9-1" @click="setUnitName('幼儿园管理')">任命教师管理</el-menu-item>
      </router-link>-->

      <router-link :to="{path:'/students'}">
        <el-menu-item index="9-1" @click="setUnitName('学生管理')">学生管理</el-menu-item>
      </router-link>

       <router-link :to="{path:'/guardian'}">
        <el-menu-item index="9-1" @click="setUnitName('家长管理')">家长管理</el-menu-item>
      </router-link>

      <router-link :to="{path:'/courses'}">
        <el-menu-item index="9-1" @click="setUnitName('课程管理')">课程管理</el-menu-item>
      </router-link>

       

    </el-submenu>


  </el-menu>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      setUnitName(unitName) {
        localStorage.setItem('unitName', unitName);
        console.log(localStorage.unitName)
      }

    }

  }

</script>
<style scoped>
  .MenuBarLeft {
    position: fixed;
    width: 16.6666%;
    height: 100%;
    background-color: #324157;
    overflow: scroll;
  }

  .title_box {
    text-align: center;
    height: 60px;
  }

  .title {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 1.5px;
  }

  .logo {
    width: 30px;
    margin-top: 14px;
    margin-right: 10px;
    margin-bottom: -8px;
  }

    ::-webkit-scrollbar {
    display: none
  }

</style>
