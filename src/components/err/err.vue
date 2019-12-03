<template>
  <div class="err">
    <h1 class="tip">404</h1>
    <h5 class="desc">请在手机端浏览</h5>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.err
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  z-index 300
  display flex
  flex-direction column
  justify-content center
  align-items center
  width 100%
  height 100%
  background rgb(245, 248, 251)
  .tip
    color #666
    font-size 30px
  .desc
    color #999
    font-size 16px
</style>
