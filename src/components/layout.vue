<template>
  <div id="app" style="height: 100%">
    <el-row style="height: 100%">
      <el-col :span="4" style="height: 100%">
        <!--3、引用-->
        <!--父组件v-on监听current-bread方法收到的子组件数据，并触发'接受面包屑名'的事件-->
        <MenuBarLeft id="MenuBarLeft" @current-bread="getBreadName" @isTouchLeftNav="getStatusFromLeft"></MenuBarLeft>
      </el-col>
      <el-col :span="20" style="height: 100%;">
        <MenuBarTop id="MenuBarTop" :breadcrumb="currentBreadcrumb" :TouchLeftNavStatus="Status" @isNotTouchLeft="getStatusFromTop"></MenuBarTop>
        <keep-alive>
          <router-view id="mainContent" @current-bread="getBreadName" @isTouchLeftNav="getStatusFromLeft"></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  //1、引入
  import MenuBarLeft from './MenuBarLeft.vue';
  import MenuBarTop from './MenuBarTop.vue';
  export default {
    data() {
      return {
        msg: 'Hello I am Admin',
        currentBreadcrumb: '',
        Status: '',
      }
    },

    components: { //2、暴露
      MenuBarLeft,
      MenuBarTop,
    },

    methods: {
      getBreadName(params) {
        console.log(params);
        //      将子组件传来的数据赋值给'当前breadcrumb'
        this.currentBreadcrumb = params
      },
      getStatusFromLeft(params) {
        console.log(params);
        this.Status = params
      },
      getStatusFromTop(params) {
        console.log(params);
        this.Status = params
      }
    }
  }
//  $(document).ready(function () {
//    // 浏览器的高度和div的高度
//    var windowHeight = $(window).height();
//    var leftHeight = $("#MenuBarLeft").height();
//    var contentHeight = $("#mainContent").height();
//
//    //获取div对象
//    var left = $("#MenuBarLeft").get(0);
//    var content = $("#mainContent").get(0);
//
//    //div高度大于屏幕高度把屏幕高度赋给div，并出现滚动条
//    if (leftHeight > windowHeight - 20) {
//      left.style.height = windowHeight + 'px';
//      left.style.overflow = "auto";
//    }
//    if (contentHeight > windowHeight - 80) {
//      content.style.height = windowHeight - 60 + 'px';
//      content.style.overflow = "auto";
//    }
//  })

</script>
<style>
  *{
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    font-family: "PingFang SC";
    color: #444;
  }

   /*::-webkit-scrollbar {
    display: none
  }*/

  #mainContent{
    z-index: 1;
    margin-top: 65px;
  }
</style>
