<template>
  <div class="alreadyHave">
    <template v-for="type in buttonList">
      <div class="type_title">{{type.title}}</div>
      <template v-for="detail in type.details">
        <div class="detail_title">{{detail.title}}</div>
        <el-row>
          <el-col :span="2" v-for="button,index in detail.buttons" :key="button.id">
            <el-button class="alreadyHave_buttons" @click="getActionPics(button.id)">{{button.value}}</el-button>
          </el-col>
        </el-row>
      </template>
    </template>
    <div class="alreadyHave_pics">
      <el-row>
        <el-col :span="6" v-for="item in pics_group" :key="item.id">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.urls?item.urls:nonePic" class="image">
            <div style="padding: 14px;">
              <span>{{item.name}}</span>
              <div class="bottom clearfix">
                <!--<time class="time">{{ currentDate }}</time>-->
                <!--<router-link :to="{path:'/action/actionDetail'}">-->
                  <el-button type="text" class="button" @click="viewDetails(item.id)">查看详情</el-button>
                <!--</router-link>-->
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import {buttonList} from '../../../buttonList'
  export default{
    created(){
      this.$http({
        method:'post',
        url:this.$getApi+'/action/list',
        params:{
          action_group_id:100,
          action_group_type:100
        }
      }).then((res)=>{
        this.pics_group = res.body.data;
      })
    },
    data(){
      return{
        nonePic:'http://coach-10061631.image.myqcloud.com/b347f610-abd5-4ea6-b57b-f936f9f2b7d4',
//        currentDate: new Date(),
        buttonList,
        pics_group:[]
      }
    },
    methods:{
      getActionPics(id){
        let type = id>=100&&id<=199?100:id>=200&&id<=299?200:id>=300&&id<=399?300:id>=400&&id<=499?400:id>=500&&id<=599?500:600;
        this.$http({
          method:'post',
          url:this.$getApi+'/action/list',
          params:{
            action_group_id:id,
            action_group_type:type,

            params:[{id:'xxx',type:'xxx'},{id:'xxx',type:'xxx'}]
          }
        }).then((res)=>{
          console.log('动作组id:',id,' ;动作组type:',type);
          console.log(res.body.data);
          this.pics_group = res.body.data;
        })
      },
      viewDetails(action_details_id){
        this.$router.push({
          path:'/action/actionDetail'
//          name:'ActionDetail'
        });
        localStorage.action_details_id=action_details_id;
        console.log(localStorage.action_details_id);
      }
    }
  }
</script>
<style scoped>
  .alreadyHave{
    background-color: #EFF2F7;
    overflow: scroll;
  }
  .type_title{
    margin-top: 5px;
    font-size: 24px;
    /*color: #20A0FF;*/
  }
  .detail_title{
    margin-top: 5px;
    /*color: #58B7FF;*/
    opacity: 0.5;
    font-size: 16px;
  }
  .alreadyHave_buttons{
    margin-top: 5px;
    width: 100%;
    color: #FFFFFF;
    background-color: #99A9BF;
  }
  .alreadyHave_pics{
    margin-top: 10px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
