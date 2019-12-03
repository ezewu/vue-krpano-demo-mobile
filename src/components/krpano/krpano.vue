<template>
  <div class="krpano-wrapper">
    <div class="topbar">

      <div class="close-wrapper">
        <span @click.stop="handletoggleRemove" class="icon close"></span>
        <span @click.stop="toggleGyro" class="icon" :class="gyroStyle"></span>
      </div>
    </div>
    <div class="bottombar">
      <span @click.stop="handlePrev" class="bottombar prev" :class="prevStyle"></span>
      <span v-if="sceneValue.length" class="title">{{sceneValue[sceneIndex].title}}</span>
      <span @click.stop="handleNext" class="bottombar next" :class="nextStyle"></span>
    </div>
    <krpano :consolelog="true" :mwheel="true" :hooks="hooks" :xml="xml" @panoCreated="initq"></krpano>
  </div>
</template>

<script>
export default {
  props: {
    xml: {
      type: String
    }
  },
  data () {
    const self = this
    return {
      krpanoObj: '',
      sceneValue: [],
      sceneIndex: 0,
      gyroEnabled: false,
      isClick: true,
      hooks: {
        sceneChanged (scene) {
          self.sceneChanged(scene)
        },
        viewerResized () {
          self.viewerResized()
        },
        toggleFullscreen () {
          self.toggleFullscreen()
        },
        onxmlcomplete () {
          self.onxmlcomplete()
        },
        clickHotspot (name) {
          self.clickHotspot(name)
        }
      }
    }
  },
  methods: {
    initq (krpano) {
      this.krpanoObj = krpano
    },
    sceneChanged (scene) {},
    viewerResized () {},
    toggleFullscreen () {
      this.toggleFull = true
    },
    onxmlcomplete () {
      this.initKrpano()
    },
    handletoggleRemove () {
      const { removepano } = window
      if (this.krpanoObj) {
        removepano(this.krpanoObj.id)
        delete this.krpanoObj
      }
      this.$emit('remove')
    },
    initKrpano () {
      if (this.sceneValue.length) {
        return
      }
      let count = this.krpanoObj.get('scene.count')
      for (let i = 0; i < count; i++) {
        let name = this.krpanoObj.get(`scene[${i}].name`)
        let title = this.krpanoObj.get(`scene[${i}].title`)
        let thumburl = this.krpanoObj.get(`scene[${i}].thumburl`)
        this.sceneValue.push({ name, title, thumburl })
      }
    },
    clickHotspot (name) {
      this.sceneIndex = this.sceneValue.findIndex(item => {
        return item.name === name
      })
      this.upScene()
    },
    // 上一场景
    handlePrev () {
      if (this.sceneIndex !== 0 && this.sceneIndex >= 0 && this.isClick) {
        this.sceneIndex--
        this.isClick = false
        this.upScene()
      }
    },
    handleNext () {
      if (this.sceneIndex < this.sceneValue.length - 1 && this.isClick) {
        this.sceneIndex++
        this.isClick = false
        this.upScene()
      }
    },
    toggleGyro () {
      this.gyroEnabled = !this.gyroEnabled
      this.krpanoObj.set(`plugin[gyro].enabled`, this.gyroEnabled)
    },
    upScene () {
      this.krpanoObj.call(
        `loadscene(${
          this.sceneValue[this.sceneIndex].name
        },null,MERGE,BLEND(0.5))`
      )
      this.isClick = true
    }
  },
  computed: {
    nextStyle () {
      if (this.sceneIndex === this.sceneValue.length - 1) {
        return 'novalue'
      }
      return ''
    },
    prevStyle () {
      if (this.sceneIndex === 0) {
        return 'novalue'
      }
      return ''
    },
    gyroStyle () {
      if (!this.gyroEnabled) {
        return 'gyro'
      } else {
        return 'gyro-active'
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~#/stylus/icon'
.krpano-wrapper
  position fixed
  top 0
  left 0
  bottom 0
  width 100%
  z-index 50
  .topbar
    position absolute
    width 100%
    top 0
    left 0
    z-index 50
    .close-wrapper
      float right
      margin-right 10px
      .icon
        display block
        margin-top 10px
        width 30px
        height 30px
        background-image url($lefttop_menu)
        background-repeat no-repeat
        background-size cover
        &.close
          background-position -150px 0
        &.gyro
          background-position -210px 0
        &.gyro-active
          background-position -180px 0
  .bottombar
    display flex
    position absolute
    bottom 0
    width 100%
    height 50px
    line-height 50px
    z-index 50
    .bottombar
      display inline-block
      width 30px
      height 30px
      padding 10px
      background-size 30px 30px
      background-size 80%
      background-position 50%
      background-origin content-box
      background-repeat no-repeat
      &.prev
        background-image url($prev)
        left 0
      &.novalue
        opacity 0.5
      &.next
        background-image url($next)
        right 0
    .title
      flex 1
      color #fff
      text-align center
      font-size 18px
  .vue-krpano
    width 100%
    height 100%
</style>
