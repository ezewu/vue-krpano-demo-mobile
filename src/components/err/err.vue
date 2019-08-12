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
    left 0
    bottom 0
    right 0
    top 0
    display flex
    flex-direction column
    justify-content center
    align-items center
    width 100%
    height 100%
    background rgb(245, 248, 251)
    z-index 300
    .tip
        font-size 30px
        color #666
    .desc
        font-size 16px
        color #999
</style>
