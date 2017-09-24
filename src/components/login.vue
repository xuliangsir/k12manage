<template>
  <div class="login_container" v-loading.fullscreen.lock="fullScreenLoading">
    <el-row>
      <h3 class="title">系统登录</h3>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="8">
        <el-form labelWidth="100px">
          <el-form-item label="手机号">
            <el-input v-model="mobile" type="input" placeholder="请输入手机号">></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="password" type="password" class="password_input" @keyup.enter="login"></el-input>
          </el-form-item>
          <el-form-item class = "btnW">
            <el-button type="primary" @click="login" class="login_button">登录</el-button>
            <el-button type="primary" @click="reg" class="login_button">注册</el-button>
          </el-form-item>

        </el-form>
      </el-col>
    </el-row>

<el-dialog title="选择学校" :visible.sync="SchoolDialog" :before-close="handleClose(SchoolDialog)" class="dialogSzie">
               
                    <el-select v-model="value" placeholder="请选择学校">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                  </el-select>                
                
            <span slot="footer" class="dialog-footer">
                <el-button @click="GisAdd(1)" >关 闭</el-button>
                <el-button @click="GisAdd(0)" type="primary">确 定</el-button>
            </span>

        </el-dialog>


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
        mobile: '',
        password: '',
        fullScreenLoading: false,
        options: [],
        SchoolDialog: false,
        value : ''
       
      }
    },
    methods: {

      login() {
        this.$http.post(
          this.$getApi + '/tokens',
          {
            "mobile": this.mobile,
            "password": this.password
          }
        ).then((res) => { // promise对象

          console.log("===login res =====", res.body);
          console.log("=======login==res==body===header000====",  res.headers.get('expires'));
          localStorage.token = res.body.token;

          this.fullScreenLoading = false;
          localStorage.schools = JSON.stringify(res.body.schools);

          if (res.ok) {

              localStorage.loginStatus = 'login'; 
              if(res.body.schools.length >1){//选择学校

                this.SchoolDialog = true;
                var schoolArray=[];
                  res.body.schools.forEach(function(item, index, array){
                       schoolArray.push({value:item.id,label:item.name})    
                  })
                 this.value = schoolArray[0].value
                 this.options = schoolArray;
                 localStorage.schools = res.body.schools[0];
                
              }else{
                
                 this.SchoolDialog = false;                
                   this.$http.post(
                     this.$getApi + 'tokens/school/' + res.body.schools[0].id,
                     {
                      "schoolId": res.body.schools[0].id
                     },
                     {
                      headers:{
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.token

                      }
                    }
                    ).then((res) => {       
                        console.log("=======login==res==body0000====",res.body);
                                            
                      localStorage.token = res.body.token;
                      localStorage.actor = JSON.stringify(res.body.manager.actor);
                      localStorage.roles = JSON.stringify(res.body.manager.roles);
                     
                      console.log("=======localStorage.token====",localStorage.token);
                      console.log("=======localStorage.actor====",JSON.parse(localStorage.actor));
                      console.log("=======localStorage.roles====",JSON.parse(localStorage.roles));
                      //console.log("=======localStorage.roles====",localStorage.roles);  

                      this.$router.push({path:'dataStatistics'})
                    })
              }
               
              //this.$router.push({path:'dataStatistics'})
            //window.location.href = '/login'    

          } else {
               alert('用户名或密码有误，请重新输入!')
          }
        })
      },
       reg(){  
         this.$router.push({
              path: 'regist'
            })
      },
       handleClose(dialogName) {
                this[dialogName] = false
            },
             GisAdd(tag) { // 0 添加    1 取消
                this.SchoolDialog = false
                this.$http.post(
                     this.$getApi + 'tokens/school/' + this.value,
                     {
                      "schoolId": '1'
                     },
                     {
                      headers:{
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.token

                      }
                    }
                    ).then((res) => {
                      console.log("=======enter==res==body====",res.body);
                      localStorage.token = res.body.token;
                      localStorage.manager = res.body.manager;
                      console.log("=======enter==res======", JSON.stringify(localStorage.manager));
                      this.$router.push({path:'dataStatistics'})
                    })
            }
    },
    mounted() {
      console.log(`NODE_ENV:${process.env.NODE_ENV}`) // process.env.NODE_ENV === 'build' ?  '生产环境' : '开发环境'
      // console.log(`API:${this.API}`)
      console.log(`$getApi:${this.$getApi}`)
    }
  }

</script>
<style>
  .login_container {
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
    width: 40%;
  }

  .reg_button {
    width: 40%;
  }

  .btnW > .el-form-item__content{
    display: flex;
  }

</style>
