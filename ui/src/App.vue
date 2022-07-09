<template>
  <div id="app">
    23322
    <Row :gutter="20" style="margin-bottom: 20px">
      <Col :span="18" :offset="2">
        <!-- <el-menu
          :default-active="activeIndex"
          mode="horizontal"
          @select="handleSelect"
          router="true"
        >
          <el-menu-item index="tpl">模板管理22</el-menu-item>
          <el-menu-item index="column">代码生成</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
        </el-menu> -->
        <Menu mode="horizontal" :theme="theme" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper" />
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template #title>
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="ios-construct" />
            综合设置
        </MenuItem>
    </Menu>
      </Col>
    </Row>

    <!-- <el-row :gutter="20" style="margin-bottom: 20px">
      <el-col :span="18" :offset="2">
        <router-view></router-view>
      </el-col>
    </el-row> -->
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
import Home from "./views/Home.vue";
export default {
  components: {
    Home,
  },
  data() {
    return {
      activeIndex: "tpl",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
