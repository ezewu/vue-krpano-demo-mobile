<template>
  <div ref="shineiWrapper" class="shinei">
    <div class="info-wrapper">
      <h1 class="title">{{ items[activeIndex].name }}</h1>
      <p class="desc">{{ items[activeIndex].desc }}</p>
    </div>

    <div class="buttom-wrapper">
      <div class="panel">
        <span class="item" @click="handlShowMap">点击户型图</span>
        <span class="item" @click.stop="handleselectKrpano">点击精装展示</span>
      </div>

      <tiptext text="点击按钮切换户型" />

      <div class="buttom-content">
        <div
          v-for="(item,index) of items"
          :key="`items_${index}`"
          :class="{'active':index === activeIndex}"
          class="tab_item"
          @click.stop="hadnleSelect(index)"
        >
          <span>{{ item.name }}</span>
          <span v-show="index === 0" class="area">{{ items[0].area }}</span>
          <span v-show="index === 1" class="area">{{ items[1].area }}</span>
        </div>
      </div>
    </div>
    <div class="background">
      <span class="image" />
    </div>
    <transition name="map">
      <div v-show="showMap" class="map-wrapper" @click="handleHide">
        <div class="bar-top">
          <h1 class="title">双击图片放大观看</h1>
          <span class="icon" />
        </div>
        <img
          v-show="activeIndex === 0"
          class="image"
          src="http://krpano.deyou360.com/qingjiangzhixing/c.jpg"
          preview="0"
        />
        <img
          v-show="activeIndex === 1"
          class="image"
          src="http://krpano.deyou360.com/qingjiangzhixing/d.jpg"
          preview="1"
        />
      </div>
    </transition>
    <transition name="krpano">
      <krpano-view
        v-if="showKrpano"
        class="krpano"
        :xml="items[activeIndex].xml"
        @remove="remove"
      />
    </transition>
  </div>
</template>

<script>
import krpano from '@/krpano/krpano'
import tiptext from '@/tiptext/tiptext'
export default {
  components: {
    krpanoView: krpano,
    tiptext,
  },
  data() {
    return {
      activeIndex: 0,
      showKrpano: false,
      showMap: false,
      items: [
        {
          name: 'C户型',
          area: '134㎡',
          desc:
            '雅致三居，体会生活的妙趣；开门即见入户花园，把花朵和美景引入家中，与阳光绿意共筑生活；4.6米大面宽阳光客厅，格局方正严谨，彰显大家风范；5.9米豪华主卧，配备独立宽敞卫浴，朝南景观大飘窗，更显奢华生活；次卧别致的飘窗给予生活更多的巧思空间，阳光充分，亲和自然。',
          xml: 'static/krpano/c/c.xml',
        },
        {
          name: 'D户型',
          area: '119.3㎡',
          desc:
            '方正雅室，分区合理，减少浪费，空气婉转流畅，优越生活乐享；客厅联体观景阳台，宽敞视野，美景自然延入，通透明亮更显气势磅礴；主客卧双景观飘窗，延伸阳光四时映照，秀丽美景一览无余；依窗观景，笑傲红尘，悠然的，是一份事业与生活的从容；超大厨房连接专属生活阳台，居家从容，轻轻流露生活质感。',
          xml: 'static/krpano/d/d.xml',
        },
      ],
    }
  },
  methods: {
    handlShowMap() {
      this.showMap = true
    },
    handleHide() {
      this.showMap = false
    },
    hadnleSelect(index) {
      this.activeIndex = index
    },
    handleselectKrpano() {
      this.showKrpano = true
    },
    remove() {
      this.showKrpano = false
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~#/stylus/icon'
.shinei
  position absolute
  top 0
  right 0
  bottom 50px
  left 0
  overflow hidden
  width 100%
  background rgba(255, 255, 255, 0.5)
  text-align center
  .info-wrapper
    padding 20px
    .title
      margin-bottom 20px
      color #333
      font-size 28px
    .desc
      color #666
      text-align left
      text-indent 30px
      font-size 15px
      line-height 34px
  .panel
    bottom 100px
    padding 40px 0
    width 100vw
    .item
      display inline-block
      margin 0 15px
      width 100px
      height 44px
      background #e2bf7a
      color #0e343e
      font-weight 300
      font-size 14px
      line-height 44px
      animation confirm-zoom 0.5s
      -webkit-clip-path polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)
      clip-path polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)
  .buttom-wrapper
    position absolute
    bottom 20px
    left 0
    width 100%
    .buttom-content
      display flex
      overflow hidden
      margin 0 auto
      width 320px
      border-radius 20px
      background #e1e1e1
      font-size 0
      .tab_item
        display inline-block
        width 160px
        height 44px
        color #333
        font-size 17px
        line-height 44px
        &.active
          background #0e343e
          color #fff
        .area
          font-size 12px
  .background
    position absolute
    top 0
    left 0
    z-index -1
    width 100%
    height 100%
    filter blur(2px)
    .image
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      background-image url('http://krpano.deyou360.com/ydkrpano/37f671a0d8071b66ecfb9b7d2a17286d.e4a0865.png')
      background-size cover
      background-repeat no-repeat
.map-wrapper
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  z-index 200
  overflow hidden
  width 100%
  height 100%
  background #fff
  &.map-enter-active, &.map-leave-active
    transition all 0.3s linear
  &.map-enter, &.map-leave-to
    opacity 0
    transform translateX(100%)
  .bar-top
    height 50px
    background #dcdcdc
    line-height 50px
    .title
      color #777
      font-size 14px
    .icon
      position absolute
      top 10px
      right 10px
      width 30px
      height 30px
      background-image url($close)
      background-size 30px 30px
      background-repeat no-repeat
  .image
    width 100%
    transform translateY(20%)
.krpano
  &.krpano-enter-active, &.krpano-leave-active
    transition all 0.2s linear
  &.krpano-enter, &.krpano-leave-to
    opacity 0
    transform translateX(-100%)
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
