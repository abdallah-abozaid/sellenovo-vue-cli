<template>
  <div class="about">
    <about-first/>
    <about-second/>
    <about-therd/>
    <about-four/>
    <myfooter/>
  </div>
</template>
<script>
import aboutFirst from '../components/about/about-first.vue'
import AboutFour from '../components/about/about-four.vue'
import AboutSecond from '../components/about/about-second.vue'
import AboutTherd from '../components/about/about-therd.vue'
import Myfooter from '../components/footer/myfooter.vue'
export default {
  components: { aboutFirst, AboutSecond, AboutTherd, AboutFour, Myfooter },
  name:"about",
}
</script>
