<template>

  <transition name="cover">
    <div v-if="cover" class="cover-wrapper" @click="handleHideCover">
      <div class="img-top-wrapper">
        <span class="image" />
      </div>
      <div class="img-bottom-wrapper">
        <div class="img-wrapper">
          <span class="image" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      cover: true,
    }
  },
  mounted() {
    this.time = setTimeout(() => {
      this.cover = false
    }, 3000)
  },
  beforeDestroy() {
    clearTimeout(this.time)
  },
  methods: {
    handleHideCover() {
      this.cover = false
    },
  },
}
</script>

<style lang="stylus" scoped>
.cover-wrapper
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    width 100%
    height 100%
    z-index 300
    padding 0 20px
    box-sizing border-box
    background #0e343e
    overflow hidden
    &.cover-enter-active, &.cover-leave-active
        transition all 0.5s linear
    &.cover-enter, &.cover-leave-to
        opacity 0
        animation confirm-zoom 0.5s
    .img-top-wrapper
        position relative
        height 0
        padding-bottom 84.5%
        .image
            position absolute
            top 0
            left 0
            height 100%
            width 100%
            background-image url('http://krpano.deyou360.com/ydkrpano/cover-top.bf9bbe3.png')
            background-size cover
            background-repeat no-repeat
            animation confirm-zoom 0.5s
    .img-bottom-wrapper
        position absolute
        bottom 0
        left 0
        width 100%
        padding 20px
        box-sizing border-box
        .img-wrapper
            position relative
            height 0
            padding-bottom 38.8%
            .image
                position absolute
                left 0
                bottom 0
                height 100%
                width 100%
                background-image url('http://krpano.deyou360.com/ydkrpano/cover-bottom.5e180f8.png')
                background-size cover
                background-repeat no-repeat
                animation confirm-zoom 0.5s
@keyframes confirm-zoom
    0%
        transform scale(0)
    30%
        transform scale(1.2)
    60%
        transform scale(1)
    80%
        transform scale(1.1)
    100%
        transform scale(1)
</style>
