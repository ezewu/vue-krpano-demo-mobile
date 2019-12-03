<template>
    <div class="tip">
        <div class="line"></div>
        <div class="text">{{text}}</div>
        <div class="line"></div>
    </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '这是标题'
    }
  }
}
</script>

<style lang="stylus" scoped>
.tip
    display flex
    width 80%
    margin 28px auto 24px auto
    .line
        flex 1
        position relative
        top -6px
        border-bottom 1px solid rgba(0, 0, 0, 0.2)
    .text
        padding 0 12px
        font-size 14px
        font-weight 700
        color #999
</style>
