<template>
  <div>
    <template v-for="item,key in selectionList">
      <div class="eachSelection">
        <div class="selectionTitle">{{item.title}}:</div>
        <span v-if="key==='name'">{{name}}</span>
        <span v-if="key==='bodypart'">{{bodypart}}</span>
        <span v-if="key==='appliance'">{{appliance}}</span>
        <span v-if="key==='target'">{{target}}</span>
        <span v-if="key==='grade'">{{grade}}</span>
        <span v-if="key==='main_muscle'">{{main_muscle}}</span>

        <!--<el-select v-if="item.isSelection" v-model="item.value" placeholder="请选择" @change="handleChangeSelection(item.value,key)">-->
          <!--<el-option v-for="options,key in item.options" :key="options.value" :label="options.label" :value="options.value"></el-option>-->
        <!--</el-select>-->

        <!--<el-input v-if="item.isInput" style="width: 194px;" placeholder="请输入"></el-input>-->

        <!--<el-cascader v-if="item.isCascader" v-model="item.value" expand-trigger="hover" :options="item.cascaderOptions" @change="handleChangeCascader(item.value,key)"></el-cascader>-->
      </div>
    </template>
    <div class="hr"></div>
    <img class="pics" :src="item" v-for="item in urls" alt="">
    <div class="buttonGroup">
      <el-button type="primary" class="edit" @click="edit()">编辑动作</el-button>
    </div>
  </div>
</template>
<script>
  import {selectionList} from '../../../selectionList'
  export default{
    created(){
      this.action_details_id = localStorage.action_details_id;
      this.$http({
        method:'post',
        url:this.$getApi+'/action/detail',
        params:{
          id:this.action_details_id
        }
      }).then((res)=>{
        if(res.data.meta.code===0){
          console.log(this.action_details_id);
          console.log(res.data);
          console.log('请求成功');

//        console.log('name:',res.body.data[0].name);
          this.name = res.body.data[0].name;



//        console.log('bodypart:',res.body.data[0].bodypart);
          if(res.body.data[0].bodypart===101){
            this.bodypart = '胸部';
          }else if(res.body.data[0].bodypart===102){
            this.bodypart = '肩部';
          }else if(res.body.data[0].bodypart===103){
            this.bodypart = '背部';
          }else if(res.body.data[0].bodypart===104){
            this.bodypart = '手臂';
          }else if(res.body.data[0].bodypart===105){
            this.bodypart = '腹部';
          }else if(res.body.data[0].bodypart===106){
            this.bodypart = '臀部';
          }else if(res.body.data[0].bodypart===107){
            this.bodypart = '腿部';
          }else if(res.body.data[0].bodypart===108){
            this.bodypart = '全身综合';
          }



          if(res.body.data[0].free_appliance!==0){
            if(res.body.data[0].free_appliance===201){
              this.appliance = '哑铃'
            }else if(res.body.data[0].free_appliance===202){
              this.appliance = '杠铃'
            }else if(res.body.data[0].free_appliance===203){
              this.appliance = '壶铃'
            }else if(res.body.data[0].free_appliance===204){
              this.appliance = '弹力带'
            }else if(res.body.data[0].free_appliance===205){
              this.appliance = 'TRX绳'
            }else if(res.body.data[0].free_appliance===206){
              this.appliance = '战绳'
            }else if(res.body.data[0].free_appliance===207){
              this.appliance = '药球'
            }else if(res.body.data[0].free_appliance===208){
              this.appliance = '瑞士球'
            }else if(res.body.data[0].free_appliance===209){
              this.appliance = '波速球'
            }else if(res.body.data[0].free_appliance===210){
              this.appliance = '泡沫轴'
            }
          }else if(res.body.data[0].fixed_appliance!==0){
            if(res.body.data[0].fixed_appliance===301){
              this.appliance = '龙门架'
            }else if(res.body.data[0].fixed_appliance===302){
              this.appliance = '史密斯机'
            }else if(res.body.data[0].fixed_appliance===303){
              this.appliance = '推胸机'
            }else if(res.body.data[0].fixed_appliance===304){
              this.appliance = '悍马机'
            }else if(res.body.data[0].fixed_appliance===305){
              this.appliance = '夹胸器'
            }else if(res.body.data[0].fixed_appliance===306){
              this.appliance = '划船机'
            }else if(res.body.data[0].fixed_appliance===307){
              this.appliance = '下拉机'
            }else if(res.body.data[0].fixed_appliance===308){
              this.appliance = '地雷架'
            }else if(res.body.data[0].fixed_appliance===309){
              this.appliance = '推肩器'
            }else if(res.body.data[0].fixed_appliance===310){
              this.appliance = '倒蹬机'
            }else if(res.body.data[0].fixed_appliance===311){
              this.appliance = '哈克机'
            }else if(res.body.data[0].fixed_appliance===312){
              this.appliance = '腿弯举机'
            }else if(res.body.data[0].fixed_appliance===313){
              this.appliance = '腿屈伸机'
            }else if(res.body.data[0].fixed_appliance===314){
              this.appliance = '提踵机'
            }else if(res.body.data[0].fixed_appliance===315){
              this.appliance = '单杠'
            }else if(res.body.data[0].fixed_appliance===316){
              this.appliance = '双杠'
            }else if(res.body.data[0].fixed_appliance===317){
              this.appliance = '仰卧板'
            }else if(res.body.data[0].fixed_appliance===318){
              this.appliance = '罗马椅'
            }else if(res.body.data[0].fixed_appliance===319){
              this.appliance = '牧师凳'
            }else if(res.body.data[0].fixed_appliance===320){
              this.appliance = '台阶机'
            }else if(res.body.data[0].fixed_appliance===321){
              this.appliance = '动感单车'
            }else if(res.body.data[0].fixed_appliance===322){
              this.appliance = '椭圆机'
            }else if(res.body.data[0].fixed_appliance===323){
              this.appliance = '跑步机'
            }
          }else if(res.body.data[0].unarmed!==0){
            if(res.body.data[0].unarmed===400){
              this.appliance = '徒手训练'
            }
          }


//        console.log('target:',res.body.data[0].target);
          if(res.body.data[0].target===501){
            this.target = '增肌'
          }else if(res.body.data[0].target===502){
            this.target = '减脂'
          }else if(res.body.data[0].target===503){
            this.target = '塑形'
          }else if(res.body.data[0].target===504){
            this.target = '拉伸'
          }



//        console.log('grade:',res.body.data[0].grade);
          this.grade = res.body.data[0].grade;
          if(res.body.data[0].grade===601){
            this.grade = '初级'
          }else if(res.body.data[0].grade===602){
            this.grade = '中级'
          }else if(res.body.data[0].grade===603){
            this.grade = '高级'
          }



//        console.log('main_muscle:',res.body.data[0].main_muscle);
          this.main_muscle = res.body.data[0].main_muscle;



//        console.log('urls:',res.body.data[0].urls);
          this.urls = res.body.data[0].urls;

        }else {
          this.$message({
            message:'拉取详情失败！',
            type:'warning'
          })
        }
      });
    },
    data(){
      return{
        selectionList,
        action_details_id:'',
        action_details:{},
        name:'',
        bodypart:'',
        appliance:'',
        free_appliance:'',//自由器械
        fixed_appliance:'',//固定器械
        unarmed:'',//徒手训练
        target:'',//训练目标
        grade:'',//训练级别
        main_muscle:'',
        urls:[],
      }
    },
    methods:{
      edit(){
        this.$router.push({
          path:'/action/actionEdit'
        });
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
  .edit{
  }
</style>
