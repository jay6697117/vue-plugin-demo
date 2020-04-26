<template>
  <div>
    <div class="item one">
      <div class="title">文件上传</div>
      <van-uploader v-model="fileList1" multiple :after-read="afterRead" @oversize="oversize" :max-size="104857600" accept="*" max-count="5" />
    </div>
     <div class="item two">
       <div class="title">图片预览</div>
      <van-uploader v-model="fileList1" disabled :deletable="false"  />
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import { Uploader } from 'vant'

Vue.use(Uploader)
export default {
  data () {
    return {
      fileList1: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg'
        },
        {
          url: 'https://img.yzcdn.cn/vant/tree.jpg'
        }
      ]
    }
  },
  methods: {
    afterRead (file) {
      console.log(file)
      file.status = 'uploading'
      file.message = '上传中...'

      setTimeout(() => {
        file.status = 'done'
        file.message = '上传成功'
      }, 1000)
    },
    oversize () {
      this.$dialog({
        title: '提  示',
        text: '单个图片大小不应该大于10M',
        confirmText: '了解',
        showCancelBtn: false,
        cancel () { },
        confirm () { }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  padding: 10px;
  text-align: left;
  .title{
    line-height: 50px;
    color: #888;
  }
}

</style>
<style lang="less">
.two{
  .van-uploader__upload{
    display: none !important;
  }
}
</style>
