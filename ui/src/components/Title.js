export default {
    data() {
        return {
            hello: 123
        }
    },
    methods: {
        change() {
            console.log(this.$data)
            console.log('hello world')
        }
    },
    render() {
        return (
            <Button type="warning" ghost on-click={this.change}>Warning</Button>
        )
    }
}