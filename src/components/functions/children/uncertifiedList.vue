<template>
  <div>
    <div class="coachContent">
      <el-table v-loading="loading" element-loading-text="拼命加载中" :data="uncertifiedList" border style="width: 100%;border-radius: 5px;">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="头像" width="90">
          <template scope="scope">
            <div class="avatar">
              <img :src="scope.row.avatar" width="50">
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="real_name" label="姓名" width="90"></el-table-column>
        <el-table-column label="电话" width="130">
          <template scope="scope">
            <div>
              <span>{{scope.row.tel?scope.row.tel:'无'}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="性别" width="80">
          <template scope="scope">
            <div>
              <!--<span>{{ ['女','男','未知'][+scope.row.gender] }}</span>-->
              <span>{{scope.row.gender==1?'男':scope.row.gender==0?'女':'未知'}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="生日" width="120">
          <template scope="scope">
            <div>
              <span>{{scope.row.bday?scope.row.bday:'无'}}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="证书">
          <template scope="scope">
            <div class="certificate_content" style="display: flex">
              <div style="display: block;">
                <ul class="certificate">
                  <li @click="dialogVisible=true;choosePic(scope.row.id,0)">
                    <img :src="scope.row.certificate_1_1" alt="" style="width: 30%;height: 30%">
                  </li>
                  <li @click="dialogVisible=true;choosePic(scope.row.id,1)">
                    <img :src="scope.row.certificate_1_2" alt="" style="width: 30%;height: 30%">
                  </li>
                </ul>
              </div>
              <div>
                <ul class="certificate">
                  <li @click="dialogVisible=true;choosePic(scope.row.id,2)">
                    <img :src="scope.row.certificate_2_1" alt="" style="width: 30%;height: 30%">
                  </li>
                  <li @click="dialogVisible=true;choosePic(scope.row.id,3)">
                    <img :src="scope.row.certificate_2_2" alt="" style="width: 30%;height: 30%">
                  </li>
                </ul>
              </div>
              <div>
                <ul class="certificate">
                  <li @click="dialogVisible=true;choosePic(scope.row.id,4)">
                    <img :src="scope.row.certificate_3_1" alt="" style="width: 30%;height: 30%">
                  </li>
                  <li @click="dialogVisible=true;choosePic(scope.row.id,5)">
                    <img :src="scope.row.certificate_3_2" alt="" style="width: 30%;height: 30%">
                  </li>
                </ul>
              </div>
              <div>
                <ul class="certificate">
                  <li @click="dialogVisible=true;choosePic(scope.row.id,6)">
                    <img :src="scope.row.certificate_4_1" alt="" style="width: 30%;height: 30%">
                  </li>
                  <li @click="dialogVisible=true;choosePic(scope.row.id,7)">
                    <img :src="scope.row.certificate_4_2" alt="" style="width: 30%;height: 30%">
                  </li>
                </ul>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="create_time" label="证书申请时间" width="150"></el-table-column>
        <el-table-column label="审核" width="120">
          <template scope="scope">
            <el-button @click.native.prevent="removeRows_and_certConfirm(scope.$index,uncertifiedList,scope.row.user_id,scope.row.id);" type="text" size="small">认证通过</el-button>
            <br>
            <el-button @click.native.prevent="removeRows_and_certReject(scope.$index,uncertifiedList,scope.row.user_id,scope.row.id);" type="text" size="small" style="color: #FF4949;">拒绝认证</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="提示" :visible.sync="dialogVisible" size="tiny">
      <img :src="imgDialog" alt="证书" width="100%">
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  export default{
    created(){
//      let API_header;
//      if (window.location.host === 'a.socap1.com')
//      {
////        API_header = 'http://10.163.36.39:60405'
//        API_header = 'http://10.16.40.94:60405'
//      }
//      else
//      {
//        API_header = 'http://10.16.40.94:60405'
//      }
      this.$http({
        method:'post',
        url:this.$getApi + '/cert/gettrainerlist',
        params:{
          certstatus:1
        },
        before(){
          this.loading = true;
        }
      }).then((res)=>{
        this.loading = false;
        this.uncertifiedList = JSON.parse(res.bodyText).data;
        this.uncertifiedList.map(function (v, k) {
          if(v.url){
            v.url = JSON.parse(v.url);
            if (v.url[0]){
              v.certificate_1_1 = v.url[0].first_image;
            }
            if (v.url[0]){
              v.certificate_1_2 = v.url[0].second_image;
            }
            if (v.url[1]){
              v.certificate_2_1 = v.url[1].first_image;
            }
            if (v.url[1]){
              v.certificate_2_2 = v.url[1].second_image;
            }
            if (v.url[2]){
              v.certificate_3_1 = v.url[2].first_image;
            }
            if (v.url[2]){
              v.certificate_3_2 = v.url[2].second_image;
            }
            if (v.url[3]){
              v.certificate_4_1 = v.url[3].first_image;
            }
            if (v.url[3]){
              v.certificate_4_2 = v.url[3].second_image;
            }
          }
          if(v.bday){
            v.bday = v.bday.split("T")[0];
          }
          if(v.createtime){
            v.createtime = v.createtime.split("T")[0]
          }
//          console.log(v.real_name,'user_id:',v.user_id)
        });
        console.log(this.uncertifiedList)
      });
    },
    data() {
      return {
        uncertifiedList:[],

        loading:false,

        dialogVisible: false,

        popoverVisible:false,

        imgDialog:'',
      }
    },
    methods: {
//      移除整行申请信息&确认通过认证
      removeRows_and_certConfirm(index, rows,user_id, id) {
//        let API_header;
//        if (window.location.host === 'a.socap1.com')
//        {
////          API_header = 'http://10.163.36.39:60405'
//          API_header = 'http://10.16.40.94:60405'
//        }
//        else
//        {
//          API_header = 'http://10.16.40.94:60405'
//        }
        this.$confirm('是否确定 认证通过 该用户?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post(this.$getApi+'/cert/modCertStatus',{//确认认证通过
            trainer_id:user_id,
            cert_id:id,
            status:2
          }).then((res)=>{
            console.log(JSON.parse(res.bodyText));
            rows.splice(index, 1);//确认后移除整行申请信息
          });
          this.$message({
            type: 'success',
            message: '已认证通过该用户!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      },


//      移除整行申请信息&确认拒绝认证
      removeRows_and_certReject(index, rows,user_id, id) {
//        let API_header;
//        if (window.location.host === 'a.socap1.com')
//        {
////          API_header = 'http://10.163.36.39:60405'
//          API_header = 'http://10.16.40.94:60405'
//        }
//        else
//        {
//          API_header = 'http://10.16.40.94:60405'
//        }
        this.$confirm('是否确定 拒绝认证 该用户?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post(this.$getApi+'/cert/modCertStatus',{//确认拒绝认证
            trainer_id:user_id,
            cert_id:id,
            status:3
          }).then((res)=>{
            console.log(JSON.parse(res.bodyText));
            rows.splice(index, 1);//确认后移除整行申请信息
          });
          this.$message({
            type: 'error',
            message: '已拒绝认证该用户!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });
        });
      },


      choosePic(certChose,photoChose){
        this.uncertifiedList.map((v)=>{
          if(v.id===certChose){
            if(photoChose===0){
              console.log(v.certificate_1_1);
              this.imgDialog=v.certificate_1_1
            }
            if(photoChose===1){
              console.log(v.certificate_1_2);
              this.imgDialog=v.certificate_1_2
            }
            if(photoChose===2){
              console.log(v.certificate_2_1);
              this.imgDialog=v.certificate_2_1
            }
            if(photoChose===3){
              console.log(v.certificate_2_2);
              this.imgDialog=v.certificate_2_2
            }
            if(photoChose===4){
              console.log(v.certificate_3_1);
              this.imgDialog=v.certificate_3_1
            }
            if(photoChose===5){
              console.log(v.certificate_3_2);
              this.imgDialog=v.certificate_3_2
            }
            if(photoChose===6){
              console.log(v.certificate_4_1);
              this.imgDialog=v.certificate_4_1
            }
            if(photoChose===7){
              console.log(v.certificate_4_2);
              this.imgDialog=v.certificate_4_2
            }
          }
        })
      },


    }
  }
</script>

<style scoped>
  .coachContent{
    width: 98%;
    margin-top: 10px;
    margin-left: 10px;
    /*border: 1px solid #bfcbd9;*/
  }
  .avatar{
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .certificate_content h4{
    display: inline-block;
  }
  .certificate{
    display: inline-block;
  }
  .certificate li{
    display: inline-block;
    cursor: pointer;
  }
</style>
