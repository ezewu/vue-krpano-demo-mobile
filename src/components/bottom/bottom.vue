<template>
  <div class="bottom-wrapper">
    <router-view />

    <div class="tab">
      <div class="tab-item">
        <router-link tag="div" to="/shangjie">
          <div class="icon">
            <i class="iconfont icon-book-open" />
          </div>
          <div class="title">清江之星</div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link tag="div" to="/quyu">
          <div class="icon">
            <i class="iconfont icon-map" />
          </div>
          <div class="title">区域规划</div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link tag="div" to="/shinei">
          <div class="icon">
            <i class="iconfont icon-VRglasses" />
          </div>
          <div class="title">样板房</div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link tag="div" to="/lxwm">
          <div class="icon">
            <i class="iconfont icon-lianxi-A" />
          </div>
          <div class="title">联系我们</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.tab
  position fixed
  bottom 0
  left 0
  display flex
  justify-content space-between
  width 100%
  height 50px
  background-color #bcbcbc
  color #333
  .tab-item
    display flex
    flex 1
    flex-direction column
    justify-content center
    text-align center
    font-size 12px
    .tab-active
      display flex
      flex-direction column
      justify-content center
      height 50px
      background #e6e6e9
      color #f00
    .icon
      margin-bottom 4px
      font-size 20px
</style>
