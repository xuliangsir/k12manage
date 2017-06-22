<template>
  <el-menu id="saas_info">
    <el-row>
      <el-col :span="4" :offset="1">
        <el-breadcrumb style="padding-top: 20px">
          账号管理
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="1" style="display: inline-block;font-size: 14px;padding: 10px 0 0 10px">
          xxx健身俱乐部
      </el-col>
      <el-col :offset="1" style="padding: 10px 50px 40px 50px">
        <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange" style="width: 100%">
          <el-table-column type="index" width="100">
          </el-table-column>
          <el-table-column property="date" label="账号类型" width="150">
          </el-table-column>
          <el-table-column property="name" label="账号名称" width="150">
          </el-table-column>
          <el-table-column property="openID" label="微信openID" width="180">
          </el-table-column>
          <el-table-column property="sex" label="性别" width="100" style="text-align: center">
          </el-table-column>
          <el-table-column label="操作"  property="operation">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '超级管理员',
          name: '王小虎',
          openID: '1234567890',
          sex:'男',
          operation:'移除'
        }, {
          date: '超级管理员',
          name: '王小虎',
          openID: '1234567890',
          sex:'男'
        }, {
          date: '超级管理员',
          name: '王小虎',
          openID: '1234567890',
          sex:'男'
        }, {
          date: '超级管理员',
          name: '王小虎',
          openID: '1234567890',
          sex:'男'
        }],
        currentRow: null
      }
    },


    methods: {


    },

  }
</script>

<style scoped>
  #saas_info{
    background: #fff;
    width: 100%;
  }
</style>
