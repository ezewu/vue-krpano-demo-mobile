<template>
  <div id="app">
    <cover></cover>
    <bottom ref="bottom"></bottom>
  </div>
</template>


<script>
import cover from '@/cover/cover'
import bottom from '@/bottom/bottom'
export default {
  components: {
    cover,
    bottom
  }
}
</script>

<style lang="stylus" scoped>
</style>
