<template>
  <div class="addActions">
    <template v-for="item,key in selectionList">
      <div class="eachSelection">
        <div class="selectionTitle">{{item.title}}:</div>

        <el-select v-if="item.isSelection" v-model="item.value" placeholder="请选择" @change="handleChangeSelection(item.value,key)">
          <el-option v-for="options,key in item.options" :key="options.value" :label="options.label" :value="options.value"></el-option>
        </el-select>

        <el-input v-if="item.isInput" v-model="item.value" style="width: 194px;" placeholder="请输入"></el-input>

        <el-cascader v-if="item.isCascader" v-model="item.value" expand-trigger="hover" :options="item.cascaderOptions" @change="handleChangeCascader(item.value,key)"></el-cascader>
      </div>
    </template>
    <div class="hr"></div>
    <img class="pics" :src="item" v-for="item in urls" alt="">
    <div class="buttonGroup">
      <pic class="upload" :name="'asd1'" :imgStyle="'100px'" @imgDone="imgDone"></pic>
      <el-button class="deletePic" @click="deletePic">删除图片</el-button>
      <el-button type="primary" class="save" @click="save()">保存动作</el-button>
    </div>
  </div>
</template>
<script>
  import pic from '../../../upload/pic.vue'
  import {selectionList} from '../../../selectionList'
  export default{
    created(){
      this.selectionList.name.value = '';
      this.selectionList.bodypart.value = '';
      this.selectionList.appliance.value = [];
      this.selectionList.target.value = '';
      this.selectionList.grade.value = '';
      this.selectionList.main_muscle.value = '';
    },
    updated(){

      this.name = this.selectionList.name.value;
      this.main_muscle = this.selectionList.main_muscle.value;
      console.log('---updated---');
      console.log(this.name);
      console.log(this.bodypart);
      console.log(this.free_appliance);
      console.log(this.fixed_appliance);
      console.log(this.unarmed);
      console.log(this.target);
      console.log(this.grade);
      console.log(this.main_muscle);
      console.log(this.urls);
    },
    data(){
      return{
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
//        console.log(value[1]);
//        console.log(key)
      },
      imgDone(res){
        console.log(res);
        console.log(res.data.data.download_url);
        this.urls.push(res.data.data.download_url);
        console.log(this.urls)
      },
      save(){
        this.$http({
          method:'post',
          url:this.$getApi+'/action/add',
          params:{
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
          console.log('回调body:',res.body,';code:',res.body.meta.code);
          if(res.body.meta.code!==0){
            this.$message({
              message: '请逐一将信息填写完整后再次保存',
              type: 'warning'
            });
          }else {
            console.log('添加成功');
            this.$message({
              message: '添加成功！',
              type: 'success'
            });
            console.log('id:',res.body.data.id);
            localStorage.action_details_id = res.body.data.id;
            setTimeout(()=>{
              this.$router.push({
                path:'/action/actionDetail'
              });
            },1500)
          }
        })
      },
      deletePic(){
        this.urls.splice(this.urls.length-1,1)
      }
    }
  }
</script>
<style scoped>
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
  .pics{
    width: 200px;
    margin-right: 20px;
  }
  .buttonGroup{
    margin-top: 10px;
  }
  .upload{
    display: inline-block;
  }
  .deletePic{
    margin-left: 10px;
  }
  .save{
  }
</style>
