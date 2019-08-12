<template>
    <div class="border-wrapper">
        <div class="circle"></div>
        <div class="border-1px"></div>
        <div class="circle"></div>
    </div>
</template>


<script>
export default {}
</script>

<style lang="stylus" scoped>
.border-wrapper
    display flex
    margin 20px auto 20px auto
    .border-1px
        position relative
        top -5px
        flex 1
        border-bottom 1px solid #c8c9cb
    .circle
        width 10px
        height 10px
        border-radius 50%
        background #c8c9cb
</style>
