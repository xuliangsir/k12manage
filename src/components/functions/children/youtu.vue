<template>
  <div>

    <img :src="item" v-for="item in imglist" alt="" class="img">
    <pic :name="'asd1'" :imgStyle="'100px'" @imgDone="imgDone"></pic>
    <pic :name="'asd2'" :imgStyle="'150px'" @imgDone="imgDone"></pic>
    <pic :name="'asd3'" :path="'asd.pic'" :imgStyle="'200px'" @imgDone="imgDone"></pic>
    <!--
      :name => 区分哪张图片  上传多张时必填
      :path => 原图路径 
      :imgStyle => 图片宽度  高度auto
    -->
    <!--
      @imgDone => 上传成功回调 返回所有数据
    -->
  </div>
</template>

<script>
  import pic from '../../../upload/pic.vue'
  export default {
    data() {
      return {
        imglist: []
      }
    },
    components: {
      pic
    },
    methods: {
      imgDone(obj) {
        this.imglist.push(obj.data.data.download_url)
      }
    },
    mounted() {}
  }

</script>
<style scoped>
  .img {
    width: 200px;
    display: block;
    margin: 10px;
  }

</style>
