<template>
  <div class="main-box">
    <el-container>
      <el-header>Header头部区域</el-header>
      <el-container>
        <el-aside width="200px">
          <div class="left-menu-box" :style="'height:'+asideHeight">
            <el-row></el-row>
          </div>
        </el-aside>
        <el-container>
          <el-main></el-main>
          <el-footer></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { resetHeight } from '../units/index'
export default {

  name: 'Home',
  data () {
    return {
      asideHeight: ''
    }
  },
  beforeMount () {
    // 之前这里一直不顺利的原因是 html、body的高度需要100%
    this.asideHeight = document.body.clientHeight - 60 + 'px'
    window.onresize = () => {
      this.asideHeight = document.body.clientHeight - 60 + 'px'
    }
  },
  mounted () {
  },
  methods: {
  },
  filters: {
    // getFilterData (data) {
    //   let b = data.split('')
    //   return b
    // },
  }



}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
}
.qq {
  width: 100%;
  background: rgb(216, 181, 181);
}
.main-box {
  width: 100%;
  /* height: 100vh; */
  /* background: burlywood; */
}

.left-menu-box {
  width: 100%;
  background: burlywood;
}
</style>
