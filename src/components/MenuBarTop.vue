<template>
    <el-menu :default-active="activeIndex" mode="horizontal" class="MenuBarTop">
        <el-row type="flex" align="middle">
            <el-col :span="4">
                <el-breadcrumb separator="->" style="padding-left: 10px">
                    <el-breadcrumb-item :to="{path:'/dataStatistics'}">
                        <span @click="toHome">首页</span>
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>{{breadcrumb}}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
            <el-col :span="4" :offset="16">
                <el-submenu index="1">
                    <template slot="title">张盈盈</template>
                    <el-menu-item index="2-1" @click="toHomeReload">首页</el-menu-item>
                    <el-menu-item index="2-2" @click="setting">设置</el-menu-item>
                    <el-menu-item index="2-3" @click="logout">退出登录</el-menu-item>
                </el-submenu>
            </el-col>
        </el-row>
    </el-menu>
</template>
<script>
export default {
    computed: {},
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            isShowBread: true,
            breadcrumb: null
        };
    },
    watch: {
        $route(now, old) {
            this.breadcrumb = localStorage.unitName

        }
    },
    methods: {
        toHome: function() {
            this.isShowBread = false;
            this.$emit('isNotTouchLeft', 0);
        },

        toHomeReload(){
          this.$router.push({
            path:'/dataStatistics'
          })

        },
        setting() {
            alert('该功能尚未上线，敬请期待！')
        },

        logout(){
          localStorage.loginStatus = 'logout';
          this.$router.push({
            path:'/login'
          })

        }
    },
    mounted() {
        if (localStorage.unitName) {
            this.breadcrumb = localStorage.unitName
        }
    }
}
</script>
<style scoped>
  .MenuBarTop{
    position: fixed;
    width: 83.3%;
    z-index: 20;
  }
</style>
