<template>
  <div>
    <van-cell-group>
      <van-cell title="格式化" :value="dayjs(1528361259484).format()" />
      <van-cell title="年月日时分秒" :value="dayjs(1528361259484).format('YYYY-MM-DD HH:mm:ss')" />
      <van-cell title="年月日" :value="dayjs(1528361259484).format('YYYY-MM-DD')" />
      <van-cell title="增加两天" :value="dayjs(1528361259484).add(2, 'day').format('YYYY-MM-DD')" />
      <van-cell title="减小一月" :value="dayjs(1528361259484).subtract(1, 'month').format('YYYY-MM-DD')" />
      <van-cell title="当月第一天" :value="dayjs().startOf('month').format('YYYY-MM-DD')" />
      <van-cell title="当月最后一天" :value="dayjs().endOf('month').format('YYYY-MM-DD')" />
      <van-cell title="获取时间戳" :value="dayjs().valueOf()" />
    </van-cell-group>
  </div>
</template>

<script>
import dayjs from 'dayjs'

import Vue from 'vue'
import { Cell, CellGroup } from 'vant'

Vue.use(Cell)
Vue.use(CellGroup)
export default {
  data () {
    return {
      dayjs: dayjs
    }
  }
}
</script>

<style lang="less" scoped>
.van-cell__value {
  flex: 2 !important;
}
</style>
