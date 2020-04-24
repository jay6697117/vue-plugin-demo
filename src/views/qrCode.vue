<template>
  <div class="mainPage">
    <!-- <div class="tip">不带logo的二维码</div> -->
    <div id="qrcode"></div>
    <div class="bot">扫码以上二维码前往我的掘金</div>
    <canvas id="canvas"></canvas>
    <div>
      <van-button type="info" round size="small" @click="downLoad">下载二维码</van-button>
    </div>
    <img src="" alt="" id="image" style="display:none" />
    <!-- <img id="image" alt=""> -->
  </div>
</template>

<script>
import QRCode from 'qrcodejs2'
import QrCodeWithLogo from 'qrcode-with-logos'
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button)
export default {
  data () {
    return {
      qrLogoCode: null
    }
  },
  methods: {
    qrCode (url) {
      const qrcode = new QRCode('qrcode', {
        text: 'https://juejin.im/user/5b52fd38f265da0f4c6fbd72/posts',
        width: 200, // 图像宽度
        height: 200, // 图像高度
        colorDark: '#000000', // 前景色
        colorLight: '#ffffff', // 背景色
        typeNumber: 4,
        correctLevel: QRCode.CorrectLevel.H
      })
      console.log(qrcode)
    },
    getLogoCode () {
      this.qrLogoCode = new QrCodeWithLogo({
        canvas: document.getElementById('canvas'),
        content: 'https://juejin.im/user/5b52fd38f265da0f4c6fbd72/posts',
        width: 250,
        logo: {
          src: require('../assets/images/lzg.jpg')
        }
      })
      this.qrLogoCode.toCanvas()
    },
    downLoad () {
      const qrLogoCode = new QrCodeWithLogo({
        canvas: document.getElementById('canvas'),
        content: 'https://juejin.im/user/5b52fd38f265da0f4c6fbd72/posts',
        image: document.getElementById('image'),
        width: 250,
        logo: {
          src: require('../assets/images/lzg.jpg')
        }
      })
      qrLogoCode.toImage().then(() => {
        setTimeout(() => {
          qrLogoCode.downloadImage('我的二维码')
        }, 1000)
      })
    }
  },
  mounted () {
    this.qrCode()
    this.getLogoCode()
  }
}
</script>

<style lang="less" scoped>
.bot {
  text-align: center;
  font-size: 12px;
  color: #ccc;
  margin-top: 10px;
}
#qrcode {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
