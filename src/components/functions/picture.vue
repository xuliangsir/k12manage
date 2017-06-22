<template>
  <div class="picture">

    <div class="line">
      <el-button type="primary" @click="addChecked">添加图片</el-button>
    </div>

    <div class="line">
      <el-table :data="tableData" stripe style="width: 100%" @selection-change="handleSelectionChange" ref="multipleTable">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="date" label="预览图" width="180">
          <template scope="scope">
            <img :src="scope.row.url" @click="showImg(scope.row.url)" class="preImg">
          </template>
        </el-table-column>
        <el-table-column prop="url" label="地址">
        </el-table-column>
      </el-table>
    </div>


    <div class="line pr">
      <el-button type="primary" @click="addChecked">添加图片</el-button>
      <el-pagination layout="prev, pager, next" :total="count" @current-change="handleCurrentChange">
      </el-pagination>
    </div>

    <el-dialog title="查看大图" :visible.sync="dialogVisible" :before-close="handleClose" class="dialogSzie">
      <img :src="path" alt="" class="imgStyle">
      <el-input v-model="path" placeholder="请输入内容"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关 闭</el-button>
      </span>
    </el-dialog>

  </div>

</template>

<script>
  export default {
    name: 'picture',
    data() {
      return {
        tableData: [],
        dialogVisible: false,
        path: null,


        showSize: 10,
        current_page: 0,
        count: 100,

        checkList: [],
      }
    },
    watch: {
      current_page(now, old) {
        this.getData()
      },
      checkList(now, old) {
        console.dir(now)
      }
    },
    methods: {
      message() {
        this.$message('这是一条消息提示');
      },
      getData() {
        this.$http({
          method: 'post',
          url: this.$getApi + '/image/get_image',
          params: {
            showSize: this.showSize,
            current_page: this.current_page
          },
        }).then((res) => { // promise对象
          const {
            body
          } = res

          if (body.meta.code === 0) {
            this.tableData = body.data.urls
            this.count = body.data.count
          } else {
            alert('err:' + body.meta.message)
          }

        })
      },
      handleClose() {
        this.dialogVisible = false
        this.path = null
      },
      showImg(path) {
        this.path = path
        this.dialogVisible = true
      },
      handleCurrentChange(val) {
        this.current_page = val
      },
      handleSelectionChange(val) {

        if (val.length > 5) {
          this.$message({
            message: '最多5条！',
            type: 'error'
          });
        } else {
          this.checkList = val.map(item => item.url)
        }

      },
      addChecked() {

        if (!this.checkList.length) {
          this.$message({
            message: '请先选择图片！',
            type: 'warning'
          });

          return
        }

        this.$http({
          method: 'post',
          url: this.$getApi + '/image/add_extend',
          params: {
            urls: this.checkList
          },
        }).then((res) => { // promise对象
          const {
            body
          } = res

          if (body.meta.code === 0) {
            this.$message({
              message: '添加成功！',
              type: 'success'
            });

            this.checkList = []
            this.$refs.multipleTable.clearSelection();
          } else {
            alert('err:' + body.meta.message)
            this.$message({
              message: '添加失败：' + body.meta.message,
              type: 'error'
            });
          }

        })
      }
    },
    beforeMount() {

    },
    mounted() {
      this.getData()
    }
  }

</script>
<style scoped>
  /*#mainContent {*/
  /*width: 1000px;*/
  /*margin: 10px;*/
  /*}*/

  .picture {
    margin-left: 10px;
    width: 98%;
    height: 100%;
  }

  .line {
    padding: 10px;
  }

  .pr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .line .el-pagination {
    padding: 0;
    display: inline-block;
  }

  .imgStyle {
    display: block;
    width: 500px;
    height: auto;
    margin: 10px auto;
  }

  .preImg {
    display: block;
    width: 100px;
    height: auto;
    margin: 0 auto;
  }

</style>
