<template>
  <div class="container">
    <custom-title></custom-title>
    <!-- <div class="inner">
      <h1 v-for="item in list" :key="item">This is an about page {{ item }}</h1>
    </div> -->
  </div>
</template>

<script>
import CustomTitle from '@/components/Title'
export default {
  components: {
    CustomTitle
  },
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.genList()
  },
  methods: {
    genList () {
      for (let i = 0; i < 100; i++) {
        this.list.push(i)
      }
    }
  }
}
</script>

<style lang="less" scoped>
html body {
  height: 100%;
}
.container {
  height: 100%;
  width: 240px;
  overflow: auto;
  &::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 6px;
  }
  &::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius   : 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
  }
  &::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  background   : #ededed;
  border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
  /*滚动条激活样式*/
  background   : red;
  }
}
</style>>