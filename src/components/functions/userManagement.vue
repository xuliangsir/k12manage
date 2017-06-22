<template>
  <div class="userManagement">
    <div class="userManagement_title">
      <span>用户管理</span>
    </div>
    <div class="userManagement_bar">
      <el-button>用户详情</el-button>
      <el-button>用户画像</el-button>
    </div>
    <div class="userManagement_content">
      <div class="man_woman">
        <span>当前用户男女比</span>
      </div>
      <div class="circles">
        <div class="man_circle">
          <span class="male_num">男性用户 78%</span>
          <div class="waveContent">
            <div class="waves">
              <div class="index_waves wave1">

              </div>
              <div class="index_waves wave2">

              </div>
              <div class="index_waves wave3">

              </div>
            </div>
          </div>
        </div>
        <div class="woman_circle">
          <span class="female_num">女性用户 22%</span>
          <div class="waveContent">
            <div class="waves">
              <div class="index_waves wave1" style="height: 240px">

              </div>
              <div class="index_waves wave2" style="height: 240px">

              </div>
              <div class="index_waves wave3" style="height: 240px">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
  .userManagement_title{
    margin-top: 10px;
    margin-left: 10px;
    font-size: 20px;
  }
  .userManagement_bar{
    width: 98%;
    margin-top: 10px;
    margin-left: 10px;
  }
  .userManagement_content{
    width: 98%;
    height: 650px;
    margin-top: 10px;
    margin-left: 10px;
    border: 1px solid #bfcbd9;
    border-radius: 5px;
  }
  .man_woman{
    margin-top: 10px;
    margin-left: 10px;
  }
  .man_circle{
    margin-left: 10px;
    margin-top: 10px;
    float: left;
  }
  .male_num{
    position: absolute;
    margin-top: 38px;
    margin-left: 5px;
    z-index: 99;
    font-weight: bold;
    color: #475669;
    font-size: 14px;
  }
  .woman_circle{
    margin-left: 10px;
    margin-top: 10px;
    float: left;
  }
  .female_num{
    position: absolute;
    margin-top: 38px;
    margin-left: 5px;
    z-index: 99;
    font-weight: bold;
    color: #475669;
    font-size: 14px;
  }
      .index_waves {
        background: url("../../assets/index_waves.png") center 0 no-repeat;
      }

      .wave3 {
        height: 290px;
        width: 1000px;
        background-position: -180px 0;
      }

      .wave2 {
        height: 290px;
        width: 1000px;
        background-position: -180px -427px;
      }

      .wave1 {
        height: 290px;
        width: 1000px;
        background-position: -180px -854px;
      }


      @keyframes wave {
        0% {
          transform: translate(0px, 0px);
        }
        50% {
          transform: translate(-80px, 30px);
        }
        100% {
          transform: translate(160px, -60px);
        }
      }

      @-webkit-keyframes wave {
        0% {
          transform: translate(0px, 0px);
        }
        50% {
          transform: translate(-80px, 30px);
        }
        100% {
          transform: translate(160px, -60px);
        }
      }

      @-moz-keyframes wave {
        0% {
          transform: translate(0px, 0px);
        }
        50% {
          transform: translate(-80px, 30px);
        }
        100% {
          transform: translate(160px, -60px);
        }
      }

      .waves {
        position: absolute;
        bottom: -135px;
        height: 527px;
        width: 100%;
        overflow: hidden;
      }

      .waves > div {
        position: absolute;
        left: -180px;
        bottom: 0;
      }

      .waves .wave1,
      .waves .wave2,
      .waves .wave3 {
        animation: wave 5s ease-in-out alternate infinite;
      }

      .waves .wave2 {
        animation-delay: 0.6s;
      }

      .waves .wave3 {
        animation-delay: 1.2s;
      }

      .waveContent {
        position: relative;
        background-color: #99A9BF;
        height: 100px;
        width: 100px;
        border-radius: 150px;
      }
</style>
