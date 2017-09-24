<template>
  <div class="reg_container" v-loading.fullscreen.lock="fullScreenLoading">
    <el-row>
      <h3 class="title">用户注册</h3>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="8">
        <el-form labelWidth="100px">
          
          <el-form-item label="姓名">
            <el-input v-model="name" type="input" placeholder="请输入用户名">></el-input>
          </el-form-item>

          <el-form-item label="手机号">
           <el-input v-model="mobile" type="input" placeholder="请输入手机号">></el-input>
          </el-form-item>

           <el-form-item label="密码">
            <el-input v-model="password" type="password" class="password_input" @keyup.enter="login"></el-input>
          </el-form-item>

          <el-form-item label="邀请码">
           <el-input v-model="secretCode" type="input" placeholder="请输入手机号">></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="reg" class="login_button">注册</el-button>
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
        name: '',
        password: '',
        mobile:'',
        secretCode:'',
        fullScreenLoading: false
      }
    },
    methods: {
      reg() {
        this.$http.post(
          this.$getApi + '/users',
          {
            "avatar":'http://wwww.baidu.com',
            "gender":'1',
            "username": this.name,
            "password": this.password,
            "mobile": this.mobile,
            "secretCode": this.secretCode
          }
        ).then((res) => { // promise对象
          console.log("===regist==== res=====",res);
          if(res.ok){
            alert("点击确定去登陆!")
            this.$router.push({path:'login'})
          }else{
            this.$router.push({path:'regist'})
          }
          
          //this.fullScreenLoading = false;
          // if (res.ok) {
          //   localStorage.loginStatus = 'login';
          //   //window.location.href = '/login'
          //   // this.$router.push({
          //   //   name:'name'
          //   // })
          // } else {
          //   alert('用户名或密码有误，请重新输入！')
          // }
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
  .reg_container {
    width: 100%;
    height: 75%;
    padding-top: 220px;
    background-color: #C0CCDA
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
