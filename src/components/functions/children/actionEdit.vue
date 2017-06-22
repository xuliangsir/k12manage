<template>
  <div class="addActions">
    <template v-for="item,key in selectionList">
      <div class="eachSelection" :class="item.class">
        <div class="selectionTitle">{{item.title}}:</div>

        <el-select v-if="item.isSelection" v-model="item.value" placeholder="请选择" @change="handleChangeSelection(item.value,key)">
          <el-option v-for="options,key in item.options" :key="options.value" :label="options.label" :value="options.value"></el-option>
        </el-select>

        <el-input v-if="item.isInput" v-model="item.value" style="width: 194px;" placeholder="请输入"></el-input>

        <el-cascader v-if="item.isCascader" v-model="item.value" expand-trigger="hover" :options="item.cascaderOptions" @change="handleChangeCascader(item.value,key)"></el-cascader>

      </div>
    </template>
    <div class="hr"></div>
    <div v-for="item,key in urls" class="pics_and_delete">
      <span class="deletePic" @click="deletePic(key)"><i class="el-icon-close"></i></span>
      <img class="pics" :src="item" alt="pics">
    </div>
    <div class="buttonGroup">
      (支持.jpg .png，每张图片不超过4M，可多次选择上传，总数不超过30张)<br><br>
      <pic class="upload" :name="'asd1'" :imgStyle="'100px'" @imgDone="imgDone"></pic>
      <el-button type="primary" class="save" @click="save()">保存动作</el-button>
    </div>
    <br>
    <br>
  </div>
</template>
<script>
  import pic from '../../../upload/pic.vue'
  import {selectionList} from '../../../selectionList'
  export default{
    created(){
      this.action_details_id = localStorage.action_details_id;
      this.$http({
        method:'post',
        url:this.$getApi+'/action/detail',
        params:{
          id:this.action_details_id
        },
        before(){
//          this.selectionList.name.value = '';
//          this.selectionList.bodypart.value = '';
//          this.selectionList.appliance.value[0] = '';
//          this.selectionList.appliance.value[1] = '';
//          this.selectionList.target.value = '';
//          this.selectionList.grade.value = '';
//          this.selectionList.main_muscle.value = '';
//          console.log('before')
        }
      }).then((res)=>{
        if(res.data.meta.code===0){
          this.selectionList.name.value = this.name = res.body.data[0].name;
          this.selectionList.bodypart.value = this.bodypart = res.body.data[0].bodypart;
          this.free_appliance = res.body.data[0].free_appliance;
          this.fixed_appliance = res.body.data[0].fixed_appliance;
          this.unarmed = res.body.data[0].unarmed;

          if(res.body.data[0].free_appliance!==0){
//            this.selectionList.appliance.value[0] = 200;
//            this.selectionList.appliance.value[1] = res.body.data[0].free_appliance;
            this.selectionList.appliance.value = [200,res.body.data[0].free_appliance]
          }else if(res.body.data[0].fixed_appliance!==0){
//            this.selectionList.appliance.value[0] = 300;
//            this.selectionList.appliance.value[1] = res.body.data[0].fixed_appliance;
            this.selectionList.appliance.value = [300,res.body.data[0].fixed_appliance]
          }else {
            this.selectionList.appliance.value = [400,400]
          }

          this.selectionList.target.value = this.target = res.body.data[0].target;
          this.selectionList.grade.value = this.grade = res.body.data[0].grade;
          this.selectionList.main_muscle.value = this.main_muscle = res.body.data[0].main_muscle;
          this.urls = res.body.data[0].urls?res.body.data[0].urls:[];
        }else {
          this.$message({
            message:'拉取详情失败！',
            type:'warning'
          })
        }
      });
    },
    updated(){
      this.name = this.selectionList.name.value;
      this.main_muscle = this.selectionList.main_muscle.value;
      console.log('---updated---(this.:传值)');
      console.log(this.name);
      console.log(this.bodypart);
      console.log(this.free_appliance);
      console.log(this.fixed_appliance);
      console.log(this.unarmed);
      console.log(this.target);
      console.log(this.grade);
      console.log(this.main_muscle);
      console.log(this.urls);
      console.log('this.selectionList.:展示');
      console.log(this.selectionList.name.value);
      console.log(this.selectionList.bodypart.value);
      console.log(this.selectionList.appliance.value);
      console.log(this.selectionList.target.value);
      console.log(this.selectionList.grade.value);
      console.log(this.selectionList.main_muscle.value);
      console.log(this.urls);
      console.log('---end---')
    },
    data(){
      return{
        action_details_id:'',
        selectionList,
        name:'',
        bodypart:null,
        free_appliance:null,//自由器械
        fixed_appliance:null,//固定器械
        unarmed:null,//徒手训练
        target:null,//训练目标
        grade:null,//训练级别
        main_muscle:'',
        urls:[],
      }
    },
    components:{
      pic
    },
    methods:{
      handleChangeSelection(value,key){
        if (key === 'bodypart'){
          this.bodypart = value
        }
        if (key === 'target'){
          this.target = value
        }
        if (key === 'grade'){
          this.grade = value
        }
//        console.log(value);
//        console.log(key)
      },
      handleChangeCascader(value,key){
        if (value[1]>200&&value[1]<300){
          this.free_appliance = value[1];
          this.fixed_appliance = 0;
          this.unarmed = 0;
        }
        if (value[1]>300&&value[1]<400){
          this.free_appliance = 0;
          this.fixed_appliance = value[1];
          this.unarmed = 0;
        }
        if (value[1]===400){
          this.free_appliance = 0;
          this.fixed_appliance = 0;
          this.unarmed = value[1];
        }
        console.log(value);
//        console.log(key)
      },
      imgDone(res){
        console.log(res);
        console.log(res.data.data.download_url);
        this.urls.push(res.data.data.download_url)
      },
      save(){
        this.$http({
          method:'post',
          url:this.$getApi+'/action/edit',
          params:{
            id:this.action_details_id,//id
            name:this.name,//动作名称
            bodypart:this.bodypart,//训练部位
            free_appliance:this.free_appliance,//自由器械
            fixed_appliance:this.fixed_appliance,//固定器械
            unarmed:this.unarmed,//徒手训练
            target:this.target,//训练目标
            grade:this.grade,//训练级别
            main_muscle:this.main_muscle,
            urls:this.urls,
          }
        }).then((res)=>{
          console.log('meta:',res.body.meta);
          console.log('code:',res.body.meta.code);
          if(res.body.meta.code!==0){
            this.$message({
              message: '请逐一将信息填写完整后再次保存',
              type: 'warning'
            });
          }else {
            console.log('保存成功');
            this.$message({
              message: '编辑保存成功！',
              type: 'success'
            });
            setTimeout(()=>{
              this.$router.push({
                path:'/action/actionDetail'
              });
            },1500)
          }
        })
      },
      deletePic(key){
        this.urls.splice(key,1)
      }
    }
  }
</script>
<style scoped>
  .addActions{
    overflow: scroll;
  }
  /*.atLeft{*/
  /*width: 50%;*/
  /*color: red;*/
  /*float: left;*/
  /*}*/
  /*.atRight{*/
  /*width: 50%;*/
  /*float: left;*/
  /*}*/
  .eachSelection{
    width: 50%;
    float: left;
    margin-top: 50px;
    padding-left: 50px;
  }
  .selectionTitle{
    display: inline;
  }
  .hr{
    float: left;
    width: 100%;
    height: 1px;
    background-color: #D3DCE6;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .pics_and_delete{
    float: left;
    margin-right: 20px;
  }
      .deletePic{
        position: absolute;
        border: 1px #FF4949 solid;
        border-radius: 50%;
        overflow: hidden;
        float: right;
        color: #FF4949;
        background-color: #EFF2F7;
        margin: -5px -5px 0 187px;
        cursor: pointer;
      }
      .pics{
        width: 200px;
      }
  .buttonGroup{
    float: left;
    width: 100%;
    margin-top: 10px;
    font-size: 10px;
  }
      .upload{
        display: inline-block;
      }
      .save{
      }
</style>
