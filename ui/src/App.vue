<template>
  <div id="app">
    <el-row :gutter="20" style="margin-bottom:20px;">
      <el-col :span="12" :offset="6">
        <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          router="true"
        >
          <el-menu-item index="home">处理中心</el-menu-item>
          <el-menu-item index="column">代码生成</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <router-view></router-view>
  </div>
</template>

<style lang="less">
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
}
.el-menu-demo {
  padding-left: 55px !important;
}
</style>
<script>
import Home from './views/Home.vue'
export default {
  components: {
    Home,
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
