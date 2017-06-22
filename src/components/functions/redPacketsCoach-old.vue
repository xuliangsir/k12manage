<template>
  <div class="redCoach">
    <div class="redCoach_title">
      <span>红包教练</span>
    </div>
    <div class="redCoach_bar">
      <el-button>红包教练</el-button>
      <el-button type="text" class="export"><i class="el-icon-upload2"></i> 导出CSV文件</el-button>
    </div>
    <div class="redCoach_content">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column label="头像">
          <template scope="scope">
            <div class="avatar">
              <img src="../../assets/avatar.jpg" width="50">
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="tel" label="电话"></el-table-column>
        <el-table-column prop="gender" label="性别"></el-table-column>
        <el-table-column prop="birthday" label="生日"></el-table-column>
        <el-table-column prop="WeChat" label="微信号"></el-table-column>
        <el-table-column prop="AuthStatus" label="认证状态"></el-table-column>
        <el-table-column prop="totalAchievement" label="总金额"></el-table-column>
        <el-table-column prop="courseStatus" label="课程状态"></el-table-column>
      </el-table>
      <el-pagination class="pagination" layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        tableData: [{
          id:'12345678',
          date: '2016-05-02',
          name: '王小虎',
          tel:'13333333333',
          gender:'男',
          birthday:'1999-99-99',
          WeChat:'abcde12345',
          AuthStatus:'已认证',
          totalAchievement:'99,999',
          courseStatus:'有课'
        },{
          id:'12345678',
          date: '2016-05-02',
          name: '王小虎',
          tel:'13333333333',
          gender:'男',
          birthday:'1999-99-99',
          WeChat:'abcde12345',
          AuthStatus:'已认证',
          totalAchievement:'99,999',
          courseStatus:'有课'
        },{
          id:'12345678',
          date: '2016-05-02',
          name: '王小虎',
          tel:'13333333333',
          gender:'男',
          birthday:'1999-99-99',
          WeChat:'abcde12345',
          AuthStatus:'已认证',
          totalAchievement:'99,999',
          courseStatus:'有课'
        },{
          id:'12345678',
          date: '2016-05-02',
          name: '王小虎',
          tel:'13333333333',
          gender:'男',
          birthday:'1999-99-99',
          WeChat:'abcde12345',
          AuthStatus:'已认证',
          totalAchievement:'99,999',
          courseStatus:'有课'
        },{
          id:'12345678',
          date: '2016-05-02',
          name: '王小虎',
          tel:'13333333333',
          gender:'男',
          birthday:'1999-99-99',
          WeChat:'abcde12345',
          AuthStatus:'已认证',
          totalAchievement:'99,999',
          courseStatus:'有课'
        },{
          id:'12345678',
          date: '2016-05-02',
          name: '王小虎',
          tel:'13333333333',
          gender:'男',
          birthday:'1999-99-99',
          WeChat:'abcde12345',
          AuthStatus:'已认证',
          totalAchievement:'99,999',
          courseStatus:'有课'
        },{
          id:'12345678',
          date: '2016-05-02',
          name: '王小虎',
          tel:'13333333333',
          gender:'男',
          birthday:'1999-99-99',
          WeChat:'abcde12345',
          AuthStatus:'已认证',
          totalAchievement:'99,999',
          courseStatus:'有课'
        },{
          id:'12345678',
          date: '2016-05-02',
          name: '王小虎',
          tel:'13333333333',
          gender:'男',
          birthday:'1999-99-99',
          WeChat:'abcde12345',
          AuthStatus:'已认证',
          totalAchievement:'99,999',
          courseStatus:'有课'
        },]
      }
    }
  }
</script>
<style>
 .redCoach_title{
   margin-top: 10px;
   margin-left: 10px;
   font-size: 20px;
 }
  .redCoach_bar{
    width: 98%;
    margin-top: 10px;
    margin-left: 10px;
  }
  .redCoach_content{
    width: 98%;
    height: 600px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .export{
    float: right;
  }
 .avatar{
   width: 50px;
   height: 50px;
   overflow: hidden;
   border-radius: 25px;
   margin-top: 10px;
   margin-bottom: 10px;
 }
  .pagination{
    margin-top: 10px;
    margin-left: 10px;
    float: right;
  }
</style>
