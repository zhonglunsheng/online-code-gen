<template>
  <div>
    <!-- hello
    <div id="edit" style="width: 600px; height: 400px"></div>
      <button @click="getValue">提交</button> -->
      <editor  v-if="showFlag"></editor>
      <button @click="changeFlag">显示/隐藏</button>
  </div>
</template>

<script>
import editor from './Editor'
export default {
  components: {
    editor
  },
  name: 'Home',
      data(){
        return {
            editor:null,//文本编辑器
            showFlag: true
        }
    },
    methods: {
      changeFlag() {
        this.showFlag = !this.showFlag
      }
    }
}
</script>