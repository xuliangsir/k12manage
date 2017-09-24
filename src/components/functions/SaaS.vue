<template>
  <el-menu id="saas">
    <el-row>
      <!--<el-col :span="4" :offset="1">-->
        <!--<el-menu-item style="background: #fff">账号管理</el-menu-item>-->
      <!--</el-col>-->
      <el-col :span="4" :offset="1">
        <el-breadcrumb style="padding-top: 20px">
          账号管理
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="16" style="display: inline-block">
        <el-select v-model="value" placeholder="用户名称" style="display: inline-block">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-input placeholder="请输入查询条件" icon="search" v-model="input2" :on-icon-click="handleIconClick" style="width: 200px;"></el-input>
      </el-col>
      <el-col :offset="1" style="padding: 40px 50px">
        <router-link :to="{path:'/SaaS/SaaS_info'}">
          <figure style="display: inline-block;margin-right: 25px">
            <img src="../../assets/logo.png" width="100" height="64" />
            <figcaption style="padding-top: 10px;padding-bottom: 30px">xxx健身俱乐部</figcaption>
          </figure>
        </router-link>
        <figure style="display: inline-block;margin-right: 25px">
          <img src="../../assets/logo.png" width="100" height="64" />
          <figcaption style="padding-top: 10px">yyy健身俱乐部</figcaption>
        </figure>
        <figure style="display: inline-block;margin-right: 25px">
          <img src="../../assets/logo.png" width="100" height="64" />
          <figcaption style="padding-top: 10px">zzz健身俱乐部</figcaption>
        </figure>
      </el-col>
    </el-row>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        msg: '',
        items: [],
        recommend: [],
        navs: [],

      }
    },

    methods: {
      loadData() {
        this.$http.get('http://127.0.0.1:8010/index.json').then(function(res){
          this.items = res.body.data.act_info;
          this.recommend = res.body.data.act_info[3].act_rows;
          this.navs = res.body.data.act_info[4].act_rows;
          console.log(this.navs)
        })
      }
    },
    mounted() {
      this.loadData();
    },
  }
</script>

<style scoped>
  #saas{
    background: #fff;
    width: 100%;
  }
  el-menu-item{
    margin: 0;
    padding: 0;
  }
  figure>figcaption{
    font-size: 14px;
  }
</style>
