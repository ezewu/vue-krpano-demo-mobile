<template>
    <div class="lxwm-wrapper">
        <div class="logo">
            <div class="logo-wrapper">
                <span class="image"></span>
            </div>
        </div>
        
        <div @click="phoneCall" class="tel">
            <i class="iconfont icon-lianxi1 tel-icon"></i>
            <span class="text">点击致电营销中心</span>
        </div>
        <div class="logo-bottom">
            <div class="logo-bottom-wrapper">
                <span class="image"></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    phoneCall() {
      window.location.href = 'tel:07174778899'
    }
  }
}
</script>


<style lang="stylus" scoped>
.lxwm-wrapper
    position absolute
    top 0
    left 0
    right 0
    bottom 50px
    background #fff
    overflow hidden
    .logo
        margin 40px
        .logo-wrapper
            position relative
            height 0
            padding-bottom 81.5%
            .image
                position absolute
                top 0
                left 0
                height 100%
                width 100%
                background-image url('http://krpano.deyou360.com/ydkrpano/logo.1f12c25.png')
                background-size cover
                background-repeat no-repeat
    .tel
        margin-top 60px
        width 100%
        text-align center
        animation confirm-zoom 0.6s
        color #333
        .tel-icon
            font-size 24px
        .text
            font-size 15px
            color #666
    .logo-bottom
        position absolute
        bottom 20px
        left 0
        width 100%
        padding 0 10px
        box-sizing border-box
        .logo-bottom-wrapper
            position relative
            height 0
            padding-top 18.8%
            .image
                position absolute
                top 0
                left 0
                height 100%
                width 100%
                background-image url('http://krpano.deyou360.com/ydkrpano/bottom.ad602d7.png')
                background-size cover
                background-repeat no-repeat
@keyframes confirm-zoom
    0%
        transform scale(0)
    30%
        transform scale(1.5)
    60%
        transform scale(1)
    80%
        transform scale(1.3)
    100%
        transform scale(1)
</style>
