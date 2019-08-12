<template>
  <div class="shangjie" ref="shangWrapper">
    <div>
      
      <div class="title-wrapper">
        <video ref="video" class="video" src="http://krpano.deyou360.com/ydkrpano/1534840407832.mp4" controls="controls" x5-playsinline="" playsinline="" webkit-playsinline="" preload="auto"></video>

        <bordertip></bordertip>
        <div class="image-wrapper shangjie-b">
          <img class="image" @load="refScroll" src="http://krpano.deyou360.com/ydkrpano/shangjie-b.png">
        </div>
        <h1 class="title-min">名校旁/14万方双江景涵养生活城</h1>
        <bordertip></bordertip>
        <h1 class="title">潜心规划 对话自然</h1>
        <p class="desc">清江之星项目占地约4.6万平方，住宅总建筑面积约14万平方，以8栋瞰江高层住宅及沿街商铺组成，社区配套商业约1万平方，地下车库建筑面积约3.5万平方，项目规划住宅总套数达1090户，配备停车位1200个，绿地率超过30%。建筑采用围合式布局，充分展现清江之星低密度、宽间距的规划特征。设计最大限度地还原建筑之美，在充分平衡建筑与环境的关系的同时，合理地将每栋楼安置于自然之中，使之成为自然景观中和谐的一部分。</p>
        <h1 class="title">优质教育 福慧双修</h1>
        <p class="desc">纯正社区的人文风气，尊贵邻居的谈吐举止，足以熏陶一个孩子的心灵。让孩子涉世之初就懂得尊敬师长、 关爱邻里、珍惜自然。在学风纯正的名校上学，成长的道路上随时都有关心、呵护、引导，让您的孩子从小就明 白生活的道理，成功的意义。</p>
        <p class="desc"> 清江之星，与省级名校清江小学门当户对，众多优质教育紧靠于此。汇聚丰厚人文底蕴，传承优质育人理念， 为下一代的开疆扩土奠定良好基础。以城市文脉的风骨，书写静而悠远的志趣生活。</p>
        <div class="image-wrapper shangjie-c">
          <img class="image" @load="refScroll" src="http://krpano.deyou360.com/ydkrpano/shangjie-c.png">
        </div>
        <bordertip></bordertip>
        <h1 class="title">传世建筑 苛求品质</h1>
        <p class="desc">提到建筑两个字，清江之星首先考虑的是为时代、城市留下点可以纪念的东西。房子是给人居住的，在遮风避雨的 功能实现以后，人们更期望拥有一种崭新的生活方式，一种适合自己个性，标榜自己人生态度的生活。以人为本， 不光是要满足人们在生理上的需要，更多的是精神上的富足。项目更渴望在建筑里，融入家的感觉，营造和谐的社 区氛围，营造建筑和环境的共生关系，让尊贵、从容的生存理想得以实现。</p>
        <tiptext text="环保建筑材料"></tiptext>
        <p class="desc">采用环保墙体及外墙装饰材料，屋面采用保温防水材料，匠心建筑，环保健康。</p>
        <tiptext text="整体地下车库"></tiptext>
        <p class="desc">超大整体地下车库，配合地面多重停车保障，车位充足，安心无忧。</p>
        <tiptext text="精装入户大堂"></tiptext>
        <p class="desc">精致典雅的电梯大厅，严苛的细节雕琢，享受阅尽奢华后的淡泊与闲情。</p>
        <tiptext text="三菱住宅电梯"></tiptext>
        <p class="desc">住宅全部使用三菱电梯覆盖，更安全，更放心。</p>
        <tiptext text="双层中空玻璃"></tiptext>
        <p class="desc">双层中空隔热玻璃，冬暖夏凉;有效隔音降噪，留存宁静与私密。</p>
        <div class="image-wrapper shangjie-d">
          <img class="image" @load="refScroll" src="http://krpano.deyou360.com/ydkrpano/shangjie-d.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import tiptext from '@/tiptext/tiptext'
import bordertip from '@/bordertip/bordertip'
import { wxConfig } from '#/js/wxconfig'
export default {
  mixins: [wxConfig],
  data() {
    return {}
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
        this.shangScroll = new BScroll(this.$refs.shangWrapper, {
          click: true,
          tap: true
        })
      } else {
        this.shangScroll.refresh()
      }
    }
  },
  computed: {
    player() {
      return this.$refs.video
    }
  },
  components: {
    tiptext,
    bordertip
  }
}
</script>

<style lang="stylus" scoped>
.shangjie
  position absolute
  top 0
  bottom 50px
  left 0
  right 0
  width 100%
  background #fff
  overflow hidden
  .title-wrapper
    padding 10px
    .video
      width 100%
    .title
      margin 20px 0
      font-size 20px
      color #353432
      font-weight 500
    .desc
      font-size 15px
      letter-spacing 3px
      font-weight 300
      line-height 24px
      text-indent 30px
      color #5a5657
    .title-min
      text-align center
      margin 10px auto 40px
      font-size 18px
      color #13484e
      font-weight 400
    .image-wrapper
      position relative
      height 0
      width 100%
      // &.shangjie-a
      // padding-top 56.2%
      &.shangjie-b
        padding-top 17.1%
      &.shangjie-c
        padding-top 36.2%
      &.shangjie-d
        padding-top 63.9%
      .image
        position absolute
        top 0
        left 0
        height 100%
        width 100%
</style>
