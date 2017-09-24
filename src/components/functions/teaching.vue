<template>
    <div class="picture">

         

        <div class="line">
            <el-table :data="tableData" stripe style="width: 100%" ref="multipleTable">
                <el-table-column prop="id" label="教师ID" width="100">
                </el-table-column>
                <el-table-column prop="name" label="姓名">
                </el-table-column>
                <el-table-column prop="mobile" label="联系方式">
                </el-table-column>

                 </el-table-column>
                <el-table-column prop="klassName" label="班级">
                </el-table-column>

                </el-table-column>
                <el-table-column prop="courseName" label="课程">
                </el-table-column>

                 </el-table-column>
                <el-table-column prop="schoolName" label="学校">
                </el-table-column>


                <el-table-column label="操作" width="">
                    <template scope="scope">
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>

<!--
        <div class="line pr">
            <el-button type="primary" @click="showDialog">邀请老师</el-button>
            <el-pagination layout="prev, pager, next" :total="count" @current-change="handleCurrentChange">
            </el-pagination>
        </div> 
-->


        <el-dialog title="邀请老师" :visible.sync="dialogVisible" :before-close="handleClose(dialogVisible)" class="dialogSzie">

            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="手机号">
                    <el-input v-model="form.mobile"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.username"></el-input>
                    </el-input>
                </el-form-item>
            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="isAdd(1)" >关 闭</el-button>
                <el-button @click="isAdd(0)" type="primary">确 定</el-button>
            </span>

        </el-dialog>


        <el-dialog title="年级操作" :visible.sync="GradeDialog" :before-close="handleClose(GradeDialog)" class="dialogSzie">

            <el-form ref="form" :model="form" label-width="80px">

                <el-form-item label="学校">
                     {{this.kgName}}
                  </el-form-item>

                <el-form-item label="">
                    <div v-for="(item,index) in gradeList">
                        <div class="grade">年级：{{item.name}}，描述： {{item.description}} <span class="del" @click="resetGrade(index)">X</span></div>
                    </div>
                </el-form-item>

                <el-form-item label="新增">
                    <div class="line">
                        <el-input v-model="newGrade" placeholder="请输入年级"></el-input>
                    </div>
                    <div class="line">
                        <el-input v-model="newDescription" placeholder="请输入描述"></el-input>
                    </div>
                    <div class="line">
                        <el-button type="primary" @click="addGrade">确定</el-button>
                    </div>
                </el-form-item>
            </el-form>



            <span slot="footer" class="dialog-footer">
                <el-button @click="GisAdd(1)" >关 闭</el-button>
                <el-button @click="GisAdd(0)" type="primary">确 定</el-button>
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

                dialogVisible: false, // 学校
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
                    name: '',
                    description: '',
                },

                gradeList: [],

                newGrade: '',
                newDescription: '',

                mobile:'',
                username:''
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
                    url: 'http://k12soft.vwico.com:8080/management/teachers?schoolId='+JSON.parse(localStorage.actor).school.id,
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.token
                    }
                }).then((res) => { // promise对象
                    const {
                        body
                    } = res

                    console.log("====get teachingbody1111 ======",res.body);

                    var teacherArray=[];
                    res.body.forEach(function(item, index, array){
                        teacherArray.push({id: item.actor.user.id, name:item.actor.user.username, mobile: item.actor.user.mobile})
                    })


                   this.$http({
                    method: 'get',
                    url: 'http://k12soft.vwico.com:8080/management/teachings',
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.token
                    }
                }).then((response) => { // promise对象
                     
                    console.log("====get teachingbody2222 ======",response.body);

                    var teachingArray=[];
                    response.body.forEach(function(item, index, array){
                        teachingArray.push({teacherId: item.id, klassName: item.klass.name, courseName:item.course.name, schoolName: item.course.school.name})
                    })

                    var newArray=[]

                   teachingArray.forEach(function(item, index, array){

                    teacherArray.forEach(function(item1, index1, array1){
                        if(item1.id == item.teacherId ){

                            newArray.push({id: item1.id, name: item1.name, mobile: item1.mobile, klassName: item.klassName, courseName:item.courseName, schoolName: item.schoolName})

                        }
                    })
                })

                    if (!!body.length) {
                        this.tableData = newArray;
                        this.count = newArray.length
                    } else {
                        alert('err:' + body)
                    }
 
                   
                })

                
                })
            },
            handleClose(dialogName) {
                this[dialogName] = false
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

                console.log('===edit=====index====',index)

                this.dialogVisible = true
                this.dialogUsage = 1
                this.dialogIndex = index
                this.kgId = row.id;
                this.kgName = row.name;

                this.form = Object.assign({}, row)
            },
            handleDelete(index, row) {
                this.tableData.splice(index, 1)
            },
            isAdd(tag) { // 0 添加    1 取消
                this.dialogVisible = false

                if (tag === 0 && this.dialogUsage == 0) {
                   this.$http.post(
                    //'http://k12soft.vwico.com:8080/management/kindergartens/',
                    'http://k12soft.vwico.com:8080/management/invitations/teacher',
                    {
                        "mobile": this.form.mobile,
                        "username": this.form.username,
                        "joinTime":'0'
                    },
                    {
                      headers:{
                        // 'content-type': "multipart/form-data",
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer '+ localStorage.token

                      }
                    }
                ).then((res) =>{
                    // const {body} = res;
                    console.log("===body=add==teacher====",res);
                    this.getData();
                })

                }

                if (tag === 0 && this.dialogUsage == 1) {
                    this.$http.put(
                     'http://k12soft.vwico.com:8080/management/kindergartens/' + this.kgId,
                     {
                        "description": this.form.description,
                        "name": this.form.name
                    },
                    {
                    headers: {
                        // 'content-type': "multipart/form-data",
                        'Authorization': 'Bearer ' + localStorage.token

                    }
                }
                      
                ).then((res) =>{
                    // const {body} = res;
                    console.log("===body=teaching====",res);
                     this.getData();
                })
                }

                this.form = {}

            },
            GisAdd(tag) { // 0 添加    1 取消
                this.GradeDialog = false
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
                        'Authorization': 'Bearer ' + localStorage.token

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