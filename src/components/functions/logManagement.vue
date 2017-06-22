<template>
  <el-menu id="Journal">
    <el-row>
      <el-col :span="4" :offset="1">
        <el-breadcrumb style="padding-top: 20px;padding-bottom: 20px">
          日志管理
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="20" :offset="1">
        <el-menu-item v-for="x in recommend">{{x.activity.name+" 对 "+x.activity.id+" 进行了 "+x.activity.ext_params.activitygroup+" 操作 "+x.activity.id}} </el-menu-item>
        <!--<router-view></router-view>-->

      </el-col>
    </el-row>
  </el-menu>
</template>

<script>

  export default {
    data () {
      return {
        msg: '',
        items: [],
        recommend: [],
        navs: [],

      }
    },

    methods: {
      loadData() {
        this.$http.get('http://127.0.0.1:8010/index.json').then(function(res){
          this.items = res.body.data.act_info;
          this.recommend = res.body.data.act_info[3].act_rows;
          this.navs = res.body.data.act_info[4].act_rows;
          console.log(this.navs)
        })
      }
    },
    mounted() {
      this.loadData();
    },
  }

//        判断浏览器是否支持webSocket
          if(window.WebSocket){
            console.log('This browser supports WebSocket');
          }else{
            console.log('This browser does not supports WebSocket');
          }



          var wsUri ="ws://echo.websocket.org/";
          var output;

          function init() {
            output = document.getElementById("output");
            testWebSocket();
          }

          function testWebSocket() {
            websocket = new WebSocket(wsUri);
            websocket.onopen = function(evt) {
              onOpen(evt)
            };
            websocket.onclose = function(evt) {
              onClose(evt)
            };
            websocket.onmessage = function(evt) {
              onMessage(evt)
            };
            websocket.onerror = function(evt) {
              onError(evt)
            };
          }

          function onOpen(evt) {
            writeToScreen("CONNECTED");
            doSend("WebSocket rocks");
          }

          function onClose(evt) {
            writeToScreen("DISCONNECTED");
          }

          function onMessage(evt) {
            writeToScreen('<span style="color: blue;">RESPONSE: '+ evt.data+'</span>');
            websocket.close();
          }

          function onError(evt) {
            writeToScreen('<span style="color: red;">ERROR:</span> '+ evt.data);
          }

          function doSend(message) {
            writeToScreen("SENT: " + message);
            websocket.send(message);
          }

          function writeToScreen(message) {
            var pre = document.createElement("p");
            pre.style.wordWrap = "break-word";
            pre.innerHTML = message;
            output.appendChild(pre);
          }

          window.addEventListener("load", init, false);
</script>

<style>
  #Journal{
    background: #fff;
    width: 100%;
  }
</style>
