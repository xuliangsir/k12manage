<template>
    <div class="picture">

        <div class="line">
            <el-button type="primary" @click="showDialog">添加条目</el-button>
        </div>

        <div class="line">
            <el-table :data="tableData" stripe style="width: 100%" ref="multipleTable">
                <el-table-column prop="id" label="学校ID" width="100">
                </el-table-column>
                <el-table-column prop="name" label="校名">
                </el-table-column>
                <el-table-column prop="description" label="描述">
                </el-table-column>
                <el-table-column label="操作" width="150">
                    <template scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>


        <div class="line pr">
            <el-button type="primary" @click="showDialog">添加条目</el-button>
            <el-pagination layout="prev, pager, next" :total="count" @current-change="handleCurrentChange">
            </el-pagination>
        </div>



        <el-dialog title="添加条目" :visible.sync="dialogVisible" :before-close="handleClose" class="dialogSzie">

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="校名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 10}" placeholder="请输入内容" v-model="form.description">
                    </el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="isAdd(1)" >关 闭</el-button>
                <el-button @click="isAdd(0)" type="primary">确 定</el-button>
            </span>

        </el-dialog>

    </div>

</template>

<script>
    export default {
        name: 'picture',
        data() {
            return {
                tableData: [{
                        "id": 1,
                        "name": "彩虹幼儿园_1",
                        "description": "xuliang test_1"
                    },
                    {
                        "id": 2,
                        "name": "彩虹幼儿园_2",
                        "description": "xuliang test_2"
                    },
                    {
                        "id": 3,
                        "name": "彩虹幼儿园_3",
                        "description": "xuliang test_3"
                    },
                    {
                        "id": 4,
                        "name": "彩虹幼儿园_4",
                        "description": "xuliang test_4"
                    },
                    {
                        "id": 5,
                        "name": "彩虹幼儿园_5",
                        "description": "xuliang test_5"
                    },
                    {
                        "id": 6,
                        "name": "彩虹幼儿园_6",
                        "description": "xuliang test_6"
                    },
                ],
                dialogVisible: false,
                dialogUsage: 0, // 0 新增 1编辑
                dialogIndex: '',



                showSize: 10,
                current_page: 0,
                count: 100,

                form: {
                    name: '',
                    description: ''
                }

            }
        },
        watch: {
            current_page(now, old) {
                this.getData()
            },
        },
        methods: {
            message() {
                this.$message('这是一条消息提示');
            },
            getData() {
                this.$http({
                    method: 'get',
                    url: this.$getApi + '/api/kindergartens',
                    // params: {
                    //     "description": "test",
                    //     "name": "xuliang"
                    // },
                    headers: {
                        'content-type': "multipart/form-data",
                        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwidXNlcm5hbWUiOiJmZW5naHVhLndhbmciLCJ0eXBlIjoiTUFOQUdFUiIsIm1vYmlsZSI6IjEzNzE2MTQ5NDQzIiwiZXhwIjoxNDk5NjcxMTE1fQ.QpQ6mNS60DMLgfoEyq9RO4IlvRgvgi1lrZa7uNSu94_OefI6Swft9TMAKSpzQJ0nL6SNJpPmHnI8spOCQ6xosg'

                    }
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
                // this.path = null
            },
            showDialog(path) {
                // this.path = path

                this.form.name = ''
                this.form.description = ''

                this.dialogVisible = true
                this.dialogUsage = 0

            },
            handleCurrentChange(val) {
                this.current_page = val
            },
            handleEdit(index, row) {

                console.log(index)

                this.dialogVisible = true
                this.dialogUsage = 1
                this.dialogIndex = index

                this.form = Object.assign({}, row)
            },
            handleDelete(index, row) {
                this.tableData.splice(index, 1)
            },
            isAdd(tag) { // 0 添加    1 取消
                this.dialogVisible = false

                if (tag === 0 && this.dialogUsage == 0) {
                    this.form.id = 1
                    this.tableData.push(this.form)
                    // this.$set(this.tableData,)
                }

                if (tag === 0 && this.dialogUsage == 1) {
                    // this.tableData.splice(this.dialogIndex, 1, this.form)
                    this.$set(this.tableData, this.dialogIndex, this.form)
                }

                this.form = {}

            },
            addItem() {

                this.$http({
                    method: 'post',
                    url: this.$getApi + '/image/add_extend',
                    params: {
                        // urls: this.checkList
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