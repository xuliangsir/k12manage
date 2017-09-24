<template>
    <div class="picture">

        
        

        <div class="line">
            <el-table :data="tableData" stripe style="width: 100%" ref="multipleTable">
                <el-table-column prop="id" label="ID" width="100">
                </el-table-column>
                <el-table-column prop="title" label="菜单">
                </el-table-column>
                <el-table-column prop="content" label="内容">
                </el-table-column>
              
                <el-table-column label="操作" width="">
                    <template scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>


        <div class="line pr">
            <el-button type="primary" @click="showDialog">添加食谱</el-button>
            <el-pagination layout="prev, pager, next" :total="count" @current-change="handleCurrentChange">
            </el-pagination>
        </div>



        <el-dialog title="添加食谱" :visible.sync="addDialog" :before-close="handleClose(addDialog)" class="dialogSzie">

            <el-form ref="form" :model="form" label-width="80px">
 

                <el-form-item label="菜名">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>

                <el-form-item label="内容">
                    <el-input v-model="form.content"></el-input>
                    </el-input>
                </el-form-item>

            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="GisAdd(0)" >关 闭</el-button>
                <el-button @click="isAdd(2)" type="primary">确 定</el-button>
            </span>

        </el-dialog>


        <el-dialog title="编辑食谱" :visible.sync="editDialog" :before-close="handleClose(editDialog)" class="dialogSzie">

            <el-form ref="form" :model="form" label-width="80px">

                
                 <el-form-item label="菜名">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>

                <el-form-item label="内容">
                    <el-input v-model="form.content"></el-input>
                    </el-input>
                </el-form-item>

            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="GisAdd(1)" >关 闭</el-button>
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
                tableData: [],
                kgId:"",
                kgName: "",

                addDialog: false, // 学校
                editDialog:false,

                dialogUsage: 0, // 0 新增 1编辑
                dialogIndex: '',


                GradeDialog: false, // 年级 
                GradeUsage: 0, // 0 新增 1编辑
                GradeIndex: '',

                isResetG: false, // dialog内修改年级


                showSize: 10,
                current_page: 0,
                count: 100,

                form: {
                    username: '',
                    mobile: '',
                },

                gradeList: [],

                newGrade: '',
                newDescription: '',

                mobile:'',
                username:'',

                 klassesOptions: [],
                 value:''
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
                    url: 'http://k12soft.vwico.com:8080/management/cookbooks?schoolId=' + JSON.parse(localStorage.actor).school.id,
                    headers: {
                        'Authorization': 'Bearer '+localStorage.token

                    }
                }).then((res) => { // promise对象
                    const {
                        body
                    } = res

                    console.log("====get cookbooks body ======",res.body);

                    if(res.body.length){
                         this.tableData = res.body;
                         this.count = res.body.length;
                    }else {
                        alert('err:' + body)
                    }

                })
            },
            handleClose(dialogName) {
                this[dialogName] = false;
            },
            showDialog(path) {
                // this.path = path

                this.form.name = ''
                this.form.description = ''

                this.addDialog = true;
                this.editDialog = false;
                this.dialogUsage = 0

            },
            handleCurrentChange(val) {
                this.current_page = val
            },
            handleEdit(index, row) {

                console.log('===edit=====index====',index)

                this.editDialog = true;
                this.dialogUsage = 1
                this.dialogIndex = index
                this.kgId = row.id;
                this.kgName = row.name;

                this.form = Object.assign({}, row)
            },
            handleDelete(index, row) {
                this.tableData.splice(index, 1)
            },
            isAdd(tag) { // 0 编辑    2 加新的
               

                if (tag === 0 ) {
                     this.editDialog = false
                   this.$http.put(
                    //'http://k12soft.vwico.com:8080/management/kindergartens/',
                    'http://k12soft.vwico.com:8080/management/cookbooks/'+ this.kgId,
                    {
                       "content": this.form.content,
                        "title": this.form.title,
                        "schoolId": JSON.parse(localStorage.actor).school.id
                    },
                    {
                      headers:{
                        // 'content-type': "multipart/form-data",
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.token

                      }
                    }
                ).then((res) =>{
                    // const {body} = res;
                    console.log("===body=add==guardians====",res);
                    this.getData();
                })

                }

                if (tag === 2) {
                    this.addDialog = false;
                    this.$http.post(
                     'http://k12soft.vwico.com:8080/management/cookbooks/',
                     {
                        "content": this.form.content,
                        "title": this.form.title,
                        "schoolId": JSON.parse(localStorage.actor).school.id
                    },
                    {
                    headers: {
                        // 'content-type': "multipart/form-data",
                        'Authorization': 'Bearer ' + localStorage.token

                    }
                }
                      
                ).then((res) =>{
                    // const {body} = res;
                    console.log("===body=add cookbooks====",res);
                    this.getData();
                })
                }

                this.form = {}

            },
            GisAdd(tag) { // 0 添加    1 取消
                if(tag == 0){
                    this.addDialog = false;
                }else{
                    this.editDialog = false
                }
                
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
            },
            editGrade(index, row) {
                this.GradeDialog = true
                this.kgName = row.name
                this.newKgId = row.id
                this.gradeId = 1


                this.$http({
                    method: 'get',
                    url:'http://k12soft.vwico.com:8080/management/grades?kgId='+this.gradeId,                  
                    headers: {
                        // 'content-type': "multipart/form-data",
                        'Authorization': 'Bearer ' + + localStorage.token

                    }
                }).then((res) => { // promise对象
                   
                    const {
                        body
                    } = res

                    console.log("===get grades====",body);

                    if(!res.ok){
                        alert('err res:' + res)
                    }

                    if (!!body.length) {
                        this.gradeList = body

                    } else {
                        this.gradeList = []
                    }

                })


            },
            resetGrade(index) {
                this.isResetG = true

                this.gradeList.splice(index, 1)

            },
            addGrade() {

                let _this = this
                this.$http.post(
                    'http://k12soft.vwico.com:8080/management/grades/',
                    //this.$getApi+'management/grades',
                    {
                        "description": this.newDescription,
                        "name": this.newGrade,
                        "kindergartenId": _this.newKgId
                    },
                    {
                      headers:{
                        // 'content-type': "multipart/form-data",
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.token

                      }
                    }
                ).then((res) =>{
                    // const {body} = res;
                    console.log("===add grades=res====",res);
                })

                // this.gradeList.push({
                //     grade: this.newGrade,
                //     description: this.newDescription

                // })
                this.newGrade = ''
                this.newDescription = ''
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

    .del {
        padding: 5px;
        color: red;
        cursor: pointer;
        transition: all .3s;
    }

    .del:hover {
        background: #333;
    }

    .grade {
        padding: 4px;
        /*border: 1px solid #33cccc;*/
    }
</style>