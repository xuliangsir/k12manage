<template>
  <div class="login_container" v-loading.fullscreen.lock="fullScreenLoading">
    <el-row>
      <h3 class="title">系统登录</h3>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="8">
        <el-form labelWidth="100px">
          <el-form-item label="邮箱">
            <el-input v-model="email" class="email_input"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password" type="password" class="password_input" @keyup.enter="login"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login" class="login_button">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    //    computed: {
    //        API() {
    //            return this.$store.state.tigerApi
    //        }
    //    },
    data() {
      return {
        email: '',
        password: '',
        fullScreenLoading: false
      }
    },
    methods: {
      login() {
        this.$http({
          method: 'post',
          url: this.$getApi + '/login/login',
          params: {
            userName: this.email,
            userPwd: this.password
          },
          before() {
            this.fullScreenLoading = true;
          },
        }).then((res) => { // promise对象
          this.fullScreenLoading = false;
          if (JSON.parse(res.bodyText).data.login === 0) {
            localStorage.loginStatus = 'login';
            window.location.href = '/login'
            // this.$router.push({
            //   name:'name'
            // })
          } else {
            alert('用户名或密码有误，请重新输入！')
          }
        })
      }
    },
    mounted() {
      console.log(`NODE_ENV:${process.env.NODE_ENV}`) // process.env.NODE_ENV === 'build' ?  '生产环境' : '开发环境'
      //        console.log(`API:${this.API}`)
      console.log(`$getApi:${this.$getApi}`)
    }
  }

</script>
<style>
  .login_container {
    width: 100%;
    height: 75%;
    padding-top: 220px;
    background-color: #C0CCDA;
  }

  .title {
    margin-left: -38px;
    text-align: center;
    color: #475669;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 40px;
  }

  .email_input {}

  .password_input {}

  .login_button {
    width: 100%;
  }

</style>
