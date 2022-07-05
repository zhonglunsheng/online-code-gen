<template>
  <div>
    hello
    <div id="edit" style="width: 600px; height: 400px"></div>
      <button @click="getValue">提交</button>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor'
export default {
      data(){
        return {
            editor:null,//文本编辑器
            content: '23'
        }
    },
    mounted(){
      this.initEditor()  
    },
    methods:{
        initEditor(){
            // 初始化编辑器，确保dom已经渲染
            this.editor = monaco.editor.create(document.getElementById('edit'), {
                value: this.content,//编辑器初始显示文字
                language:'java',//语言支持自行查阅demo
                automaticLayout: true,//自动布局
                theme:'vs' //官方自带三种主题vs, hc-black, or vs-dark
            })

            // 即时保存
            this.editor.onDidChangeModelContent(() => {
              this.content = this.editor.getValue()
            })
        },
        getValue(){
            const value = this.editor.getValue()//获取编辑器中的文本
            console.log(value)
        }
    }
}
</script>