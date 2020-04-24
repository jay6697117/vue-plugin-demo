<template>
  <div class="list">
    <div class="listItem" @click="call()">通用分享</div>
    <div class="listItem" @click="call('wechatFriend')">微信好友</div>
    <div class="listItem" @click="call('wechatTimeline')">朋友圈</div>
    <div class="listItem" @click="call('qqFriend')">QQ好友</div>
    <div class="listItem" @click="call('qZone')">QQ空间</div>
    <div class="listItem" @click="call('weibo')">新浪微博</div>
  </div>

</template>

<script>
import NativeShare from 'nativeshare'
export default {
  data () {
    return {
    }
  },
  methods: {
    call (command) {
      var nativeShare = new NativeShare()
      var shareData = {
        title: 'lzg的掘金',
        desc: 'lzg的掘金分享了多篇前端技术性文章，欢迎点赞和交流。',
        // 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
        link: 'https://juejin.im/user/5b52fd38f265da0f4c6fbd72/posts',
        icon: require('../assets/images/lzg.jpg'),
        // 不要过于依赖以下两个回调，很多浏览器是不支持的
        success: function () {
          console.log('success')
        },
        fail: function () {
          alert('fail')
        }
      }
      nativeShare.setShareData(shareData)
      try {
        nativeShare.call(command)
      } catch (err) {
        // 如果不支持，你可以在这里做降级处理
        alert(err.message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.list{
  padding-top: 20px;
}
.listItem{
  text-align: center;
  height: 45px;
  line-height: 45px;
  border: 1px solid #3575F0;
  margin-bottom: 20px;
  background-color: #3575F0;
  color: white;
  border-radius: 4px;
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
