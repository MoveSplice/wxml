Page({
    clickMea:function () {
        this.setData({ msg: "点我干嘛，Hello World" })
    },
    onShareAppMessage: function () {
        return {
            title: 'hello world',
            desc: 'first WeChat',
            path: '/page/user?id=123'
        }
    },
});