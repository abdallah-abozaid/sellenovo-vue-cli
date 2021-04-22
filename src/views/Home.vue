<template>
  <div class="home">
    <first/>
    <second/>
    <therd/>
    <four/>
    <five/>
    <six/>
    <seven/>
    <eigth/>
    <myfooter/>
  </div>
</template>

<script>
import Myfooter from '../components/footer/myfooter.vue';
import Eigth from '../components/home/eigth.vue';
import First from '../components/home/first.vue';
import Five from '../components/home/five.vue';
import Four from '../components/home/four.vue';
import Second from '../components/home/second.vue';
import Seven from '../components/home/seven.vue';
import Six from '../components/home/six.vue';
import Therd from '../components/home/therd.vue';
import WOW from "wowjs";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    First,
    Therd,
    Second,
    Four,
    Five,
    Six,
    Seven,
    Eigth,
    Myfooter,
  },
  mounted(){
    let wow=new WOW.WOW({});
    wow.init();
  }
};
</script>
