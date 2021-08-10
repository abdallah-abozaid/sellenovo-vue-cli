<template>
    <div class="thesecond">
    <div class="container">
     <swiper class="swiper"
    :slides-per-view="6"
    :space-between="20"
    loop=true
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    grabCursor
    :autoplay="{delay:2000}"
    :breakpoints="{
      200:{
        slidesPerView:2
      },
      400:{
        slidesPerView:2
      },
      640:{
        slidesPerView:3
      },
      768:{
        slidesPerView:4
      },
      1024:{
        slidesPerView:6
      }
      
    }"
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
import SwiperCore, { Navigation, A11y , Autoplay} from 'swiper';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/swiper.scss';
  import 'swiper/components/navigation/navigation.scss';

  // install Swiper modules
  SwiperCore.use([Navigation,  A11y,Autoplay]);
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
.swiper-slide {
 text-align: center;
  img{
  height: 100%;
  width: 80px;
  @include maxmobile(){
    width: 70px;
  }
}
}
.swiper-button-next{
    right: -3px;
    left: auto;
}
.swiper-button-prev {
    right: auto;
    left: -3px;
}


</style>