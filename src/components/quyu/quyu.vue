<template>
  <div ref="quyuWrapper" class="quyu">
    <div>
      <div class="content">
        <div class="quyu-a-wrapper">
          <img
            class="image"
            src=" http://krpano.deyou360.com/ydkrpano/quyu-a.png"
            @load="refScroll"
          />
        </div>
        <tiptext text="点击图片可看大图" />
        <div class="quyu-b-wrapper">
          <img
            class="image"
            preview="0"
            src=" http://krpano.deyou360.com/ydkrpano/quyu-b.png"
            @load="refScroll"
          />
        </div>
        <bordertip />
        <h1 class="title">中轴明星 通达未来</h1>
        <p
          class="desc"
        >清江之星，扼守宜都城市中轴杨守敬大道咽喉;对 外紧邻一级公路陆渔大道、红东公路，3分钟直达宜岳高 速，S254、S325两条穿越宜都的省道在此交会;对内 连接宜都主干道长江大道、宜华大道。香樟成荫的西湖 一路，将清江公园的鸟语清风速递至家门口，又把杨守 敬大道的尾气和喧嚣抵挡在园林之外</p>
        <div class="quyu-c-wrapper">
          <img
            class="image"
            src=" http://krpano.deyou360.com/ydkrpano/quyu-c.png"
            @load="refScroll"
          />
        </div>
        <bordertip />
        <h1 class="title">三江汇聚 阔达胸襟</h1>
        <p
          class="desc"
        >胸怀广博，梦想才能持久飞翔;呼吸自然，才能开拓大江大河的生命视野。地上者妙在丘壑深邃;书上者妙 在笔墨淋漓。清江之星，以三江壮丽的广阔胸襟，领驭一个阶层的人居理想。用前所未有的极致建筑，回应千年 清江流淌不息的脚步。</p>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import bordertip from '@/bordertip/bordertip'
import tiptext from '@/tiptext/tiptext'
export default {
  components: {
    bordertip,
    tiptext,
  },
  mounted() {
    this.$nextTick(() => {
      this._initScoll()
    })
  },
  methods: {
    refScroll() {
      this.$nextTick(() => {
        this._initScoll()
      })
    },
    _initScoll() {
      if (!this.shangScroll) {
        this.shangScroll = new BScroll(this.$refs.quyuWrapper, {
          click: true,
        })
      } else {
        this.shangScroll.refresh()
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.quyu
  position absolute
  top 0
  right 0
  bottom 50px
  left 0
  overflow hidden
  width 100%
  background #fff
  .content
    padding 20px 10px 10px 10px
    .quyu-a-wrapper
      position relative
      padding-top 18%
      width 100%
      height 0
      .image
        position absolute
        top 0
        left 0
        width 100%
        height 100%
    .quyu-b-wrapper
      position relative
      margin-top 20px
      padding-top 57%
      width 100%
      height 0
      .image
        position absolute
        top 0
        left 0
        width 100%
        height 100%
        animation confirm-zoom 0.5s
    .quyu-c-wrapper
      position relative
      margin-top 20px
      padding-top 56%
      width 100%
      height 0
      .image
        position absolute
        top 0
        left 0
        width 100%
        height 100%
    .title
      margin 20px 0
      color #363533
      font-weight 500
      font-size 20px
    .desc
      margin 20px 0
      color #575755
      text-indent 30px
      letter-spacing 1px
      font-weight 400
      font-size 13px
      line-height 28px
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
