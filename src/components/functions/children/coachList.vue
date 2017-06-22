<template>
  <div class="redCoach_content">
    <el-table :data="coachList" border style="width: 100%;border-radius: 5px;">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column label="头像">
        <template scope="scope">
          <div class="avatar">
            <img src="http://coach-10061631.image.myqcloud.com/07b5bea5-44cc-42c8-9b8f-1e7d0cf8702b" width="50">
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column label="会员">
        <el-table-column prop="allMembers" label="总人数"></el-table-column>
        <el-table-column prop="followers" label="已关注公众号人数"></el-table-column>
      </el-table-column>
      <el-table-column label="体测报告">
        <el-table-column prop="testReports" label="总数"></el-table-column>
        <el-table-column prop="shareNumbers" label="体测页分享数"></el-table-column>
      </el-table-column>
      <el-table-column label="课程状态">
        <el-table-column prop="statusDone" label="已完成"></el-table-column>
        <el-table-column prop="statusDoing" label="未完成"></el-table-column>
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <div class="operating">
            <router-link :to="{path:'/certifiedCoach/coachDetail'}">
              <el-button type="text">教练详情</el-button>
            </router-link>
            <br>
            <router-link :to="{path:'/certifiedCoach/courseDetail'}">
              <el-button type="text">课程详情</el-button>
            </router-link>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="pagination" layout="prev, pager, next" :total="pageTotal" @current-change="currentChange"></el-pagination>
  </div>
</template>
<script>
  export default{
    data(){
      return{

        pageIndex:0,
        pageSize:10,
        pageTotal:null,

        coachList: [{
          id:'12345678',
          name: '你饿了',
          allMembers:999,
          followers:111,
          testReports:999,
          shareNumbers:111,
          statusDone:999,
          statusDoing:111,
        },{
          id:'12345678',
          name: '点外卖',
          allMembers:999,
          followers:111,
          testReports:999,
          shareNumbers:111,
          statusDone:999,
          statusDoing:111,
        },{
          id:'12345678',
          name: '吃汉堡',
          allMembers:999,
          followers:111,
          testReports:999,
          shareNumbers:111,
          statusDone:999,
          statusDoing:111,
        },{
          id:'12345678',
          name: '别忍着',
          allMembers:999,
          followers:111,
          testReports:999,
          shareNumbers:111,
          statusDone:999,
          statusDoing:111,
        },{
          id:'12345678',
          name: '听话',
          allMembers:999,
          followers:111,
          testReports:999,
          shareNumbers:111,
          statusDone:999,
          statusDoing:111,
        },{
          id:'12345678',
          name: '张盈盈',
          allMembers:999,
          followers:111,
          testReports:999,
          shareNumbers:111,
          statusDone:999,
          statusDoing:111,
        },{
          id:'12345678',
          name: '刘芸芸',
          allMembers:999,
          followers:111,
          testReports:999,
          shareNumbers:111,
          statusDone:999,
          statusDoing:111,
        },{
          id:'12345678',
          name: '王小虎',
          allMembers:999,
          followers:111,
          testReports:999,
          shareNumbers:111,
          statusDone:999,
          statusDoing:111,
        },{
          id:'12345678',
          name: '邹欣欣',
          allMembers:999,
          followers:111,
          testReports:999,
          shareNumbers:111,
          statusDone:999,
          statusDoing:111,
        },
        ]
      }
    },
    computed: {

    },
    watch: {
      pageIndex(now,old){
        this.getData()
      }
    },
    methods: {
      currentChange(val){
        this.pageIndex = val
      },
      getData(){
        // ajax
      }
    },
  }
</script>
<style scoped>
  .redCoach_content{
    width: 98%;
    margin-top: 10px;
    margin-left: 10px;
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
