import wx from 'weixin-js-sdk'

export const wxConfig = {
  created() {
    this.wxGet()
  },
  
  methods: {
    wxGet() {
      let url = location.href.split('#')[0] //ruoter是hash模式的时候 获取锚点之前的链接
      this.$axios.get('http://www.deyou360.com/wx/signature', { //服务端获取配置jssdk 签名等 文件
        params: {
          url: url
        }
      }).then(response => {
        let res = response.data
        this.wxInit(res)
      })
    },
    // 微信分享
    wxInit(res) {
      let url = location.href.split('#')[0] //获取锚点之前的链接  
      //let links = url+'#/Food/' + this.$route.params.id;
      //用于签名的url 和 用于微信分享的url可以不同z
      let link = url
      let title = '清江之星线上展示'
      let desc = ''
      let imgUrl = ' http://krpano.deyou360.com/ydkrpano/share.jpg'
      wx.config({
        debug: false,
        appId: res.params.appId,
        timestamp: res.params.timestamp,
        nonceStr: res.params.nonceStr,
        signature: res.params.signature,
        jsApiList: [
          'checkJsApi',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'onMenuShareQQ',
          'onMenuShareQZone'
        ]
      })

      //分享到朋友圈
      wx.ready(function () {
        wx.onMenuShareTimeline({
          title: title,
          link: link,
          imgUrl: imgUrl,
          success: function (res) {
            alert('亲!谢谢分享')
          }
        })
        //分享给朋友
        wx.onMenuShareAppMessage({
          title: title,
          desc: desc,
          link: link,
          imgUrl: imgUrl,
          success: function () {
            alert('亲!谢谢分享')
          }
        })
        //分享给QQ好友 
        wx.onMenuShareQQ({
          title: title,
          desc: desc,
          link: link,
          imgUrl: imgUrl,
          success: function () {
            alert('亲!谢谢分享')
          },
          cancel: function () {
            alert('已取消')
          }
        });
        // 分享到QQ空间
        wx.onMenuShareQQ({
          title: title,
          desc: desc,
          link: link,
          imgUrl: imgUrl,
          success: function () {
            alert('亲!谢谢分享')
          }
        })
        //分享到QQ空间
        wx.onMenuShareQZone({
          title: title,
          desc: desc,
          link: link,
          imgUrl: imgUrl,
          success: function () {
            alert('亲!谢谢分享')
          }
        })
      })
      wx.error(function (err) {
        console.log(JSON.stringify(err))
      })
    }
  }
}
