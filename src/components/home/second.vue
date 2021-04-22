<template>
    <div class="thesecond">
    <div class="container">
     <swiper class="swiper"
    :slides-per-view="6"
    :space-between="10"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><img src="@/assets/home/second/aaaaa.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/home/second/a.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/home/second/aaaa.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/home/second/aaa.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/home/second/aa.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/home/second/aaaaaa.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/home/second/a.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/home/second/aa.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/home/second/aaa.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/home/second/aaaa.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/home/second/aaaaa.png" alt=""></swiper-slide>
    <swiper-slide><img src="@/assets/home/second/aaaaaa.png" alt=""></swiper-slide>
  </swiper>
  </div>
    </div>
</template>
<script>
import SwiperCore, { Navigation, A11y } from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper.scss';
  import 'swiper/components/navigation/navigation.scss';

  // install Swiper modules
  SwiperCore.use([Navigation,  A11y]);
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log('slide change');
      },
    },
  };
</script>
<style lang="scss">

//---------------------------------------------------------------------------
@mixin maxlarge {
  @media (max-width: 1200px) {
    @content;
  }
}
@mixin maxmediam {
  @media (max-width: 992px) {
    @content;
  }
}
@mixin maxsmall {
  @media (max-width: 768px) {
    @content;
  }
}
@mixin maxmobile {
  @media (max-width: 576px) {
    @content;
  }
}
@mixin maxtiny {
  @media (max-width: 350px) {
    @content;
  }
}
@mixin minlarge {
  @media (min-width: 1200px) {
    @content;
  }
}
//----------------------------------------------------------------------------------
.thesecond{
  margin: 100px 0px;
    overflow: hidden;
}
.swiper{
  margin: auto;
  padding: 0px 50px;
}
.swiper-slide{
  text-align: center;
  width: 160px!important;
  @include maxlarge{
    width: 131px!important;
  }
  @include maxmediam{
    width: 150px!important;
    transform: scale(.7);
  }
  @include maxsmall{
    width: 135px!important;
  }
  @include maxmobile{
    width: 100px!important;
    transform: scale(.5);
  }
}
 .swiper-button-prev ,.swiper-button-next {
   top: 0px;
    background: white;
    height: 100%;
    width: 50px;
}
.swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    right: -15px;
}
.swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    left: -15px;
}
</style>