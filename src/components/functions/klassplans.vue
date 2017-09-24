<template>
    <div class="picture">

        
        <div class="line"> 
               
                    <el-select v-model="value" placeholder="请选择班级">
                      <el-option
                        v-for="item in klassesOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                  </el-select> 
                  
                  <el-select v-model="plantypevalue" placeholder="请选择类型">
                      <el-option
                        v-for="item in planTypeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                  </el-select> 
                  
                  <el-button type="primary" @click="getData">查 询</el-button>
                  <el-button type="primary" @click="showDialog">新增班级计划</el-button>
                                
        </div>

        <div class="line">
            <el-table :data="tableData" stripe style="width: 100%" ref="multipleTable">
                <el-table-column prop="id" label="ID" width="100">
                </el-table-column>
                <el-table-column prop="title" label="标题">
                </el-table-column>
                <el-table-column prop="content" label="内容">
                </el-table-column>
                 <el-table-column prop="planType" label="类型">
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
            <el-button type="primary" @click="showDialog"></el-button>
            <el-pagination layout="prev, pager, next" :total="count" @current-change="handleCurrentChange">
            </el-pagination>
        </div>



        <el-dialog title="新增班级计划" :visible.sync="dialogVisible" :before-close="handleClose(dialogVisible)" class="dialogSzie">

            <el-form ref="form" :model="form" label-width="80px">

             <el-form-item label="选择班级">
                  <el-select v-model="value" placeholder="请选择班级">
                      <el-option
                        v-for="item in klassesOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                  </el-select> 
                </el-form-item>

                <el-form-item label="选择类型">
                  <el-select v-model="plantypevalue" placeholder="请选择类型">
                      <el-option
                        v-for="item in planTypeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                  </el-select> 
             </el-form-item>       

                <el-form-item label="标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>

                <el-form-item label="内容">
                    <el-input v-model="form.content"></el-input>
                    </el-input>
                </el-form-item>

            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="isAdd(1)" >关 闭</el-button>
                <el-button @click="isAdd(0)" type="primary">确 定</el-button>
            </span>

        </el-dialog>


       <el-dialog title="编辑班级计划" :visible.sync="editDialogVisible" :before-close="handleClose(dialogVisible)" class="dialogSzie">

            <el-form ref="form" :model="form" label-width="80px">

             <el-form-item label="选择班级">
                  <el-select v-model="value" placeholder="请选择班级">
                      <el-option
                        v-for="item in klassesOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                  </el-select> 
                </el-form-item>

                <el-form-item label="选择类型">
                  <el-select v-model="plantypevalue" placeholder="请选择类型">
                      <el-option
                        v-for="item in planTypeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                  </el-select> 
             </el-form-item>       

                <el-form-item label="标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>

                <el-form-item label="内容">
                    <el-input v-model="form.content"></el-input>
                    </el-input>
                </el-form-item>

            </el-form>

            <span slot="footer" class="dialog-footer">
                <el-button @click="isAdd(1)" >关 闭</el-button>
                <el-button @click="isAdd(2)" type="primary">确 定</el-button>
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
                planId:"",
                kgName: "",

                dialogVisible: false, // 学校
                dialogUsage: 0, // 0 新增 1编辑
                dialogIndex: '',

                editDialogVisible: false,


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
                 value: 1,


                 planTypeOptions:[
                 {
                    label: 'WEEK',
                    value: 'WEEK',
                 },
                 {
                    label: 'MONTH',
                    value: 'MONTH',
                 },
                 {
                    label: 'NOTICE',
                    value: 'NOTICE',
                 },
                 {
                    label: 'HOMEWORK',
                    value: 'HOMEWORK',
                 }
                 ],
                 plantypevalue: 'MONTH'

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
                    url: 'http://k12soft.vwico.com:8080/management/klass-plans?klassId='+ this.value + '&planType=' + this.plantypevalue,
                    headers: {
                        'Authorization': 'Bearer '+localStorage.token
                    }
                }).then((res) => { // promise对象
                    const {
                        body
                    } = res

                    console.log("====get klass-plans body ======",res.body);

                     this.$http({
                                method: 'get',
                                url: 'http://k12soft.vwico.com:8080/management/klasses',

                                headers: {
                                    'Authorization': 'Bearer ' + localStorage.token

                                }
                            }).then((res) => { // promise对象
                                const {
                                    body
                                } = res

                                console.log("===res getKlassData===",res.body);

                                if (!!body.length) {
                                    
                                      var klassesArray=[];
                                      res.body.forEach(function(item, index, array){
                                           klassesArray.push({value:item.id,label:item.name})    
                                      })
                                         //this.value = klassesArray[0].value
                                         this.klassesOptions = klassesArray;
                                            
                                        } else {
                                              this.klassesOptions=[];
                                        }
                                    })
                     

                    if (!!body.length) {
                        this.tableData = res.body;
                        this.count = res.body.length;

                    } else {
                        this.klassesOptions=[];
                    }

                })
            },
            handleClose(dialogName) {
                this[dialogName] = false
            },
            showDialog(path) {
                // this.path = path

                this.form.title = ''
                this.form.content = ''
                this.dialogVisible = true
                this.dialogUsage = 0

            },
             query() {
                

                

            },
            handleCurrentChange(val) {
                this.current_page = val
            },
            handleEdit(index, row) {

                console.log('===edit=====index====',index)
                this.editDialogVisible = true;

                this.dialogVisible = false;
                this.dialogUsage = 1;
                this.dialogIndex = index;
                this.planId = row.id;
                this.kgName = row.name;

                this.form = Object.assign({}, row)
            },
            handleDelete(index, row) {
                this.tableData.splice(index, 1)
            },
            isAdd(tag) { // 0 添加    1 取消
                this.dialogVisible = false;
                this.editDialogVisible = false;

                if (tag === 0 && this.dialogUsage == 0) {
                   this.$http.post(
                    //'http://k12soft.vwico.com:8080/management/kindergartens/',
                    'http://k12soft.vwico.com:8080/management/klass-plans',
                    {
                        "title": this.form.title,
                        "content": this.form.content,
                        "klassId": this.value,
                        "type": this.plantypevalue
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
                    console.log("===body=add==klassPlans====",res.body);
                    this.getData();
                })

                }

                if (tag === 2) {
                    console.log("====this.value===this.plantypevalue====",this.value,this.plantypevalue);
                    this.$http.put(
                     'http://k12soft.vwico.com:8080/management/klass-plans/' + this.planId,
                     {
                        "title": this.form.title,
                        "content": this.form.content,
                        "klassId": this.value,
                        "type": this.plantypevalue

                    },
                    {
                    headers: {
                        // 'content-type': "multipart/form-data",
                        'Authorization': 'Bearer ' + localStorage.token

                    }
                }
                      
                ).then((res) =>{
                    // const {body} = res;
                    console.log("===put klassPlans====",res.body);
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