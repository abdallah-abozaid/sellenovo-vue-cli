<template>
  <div class="app">
    <myheader />
    <div class="loader">
      <img src="@/assets/q.gif" alt="">
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@300&display=swap");

* {
  font-family: "Lexend", sans-serif;
}

//- ------------------------------------------------- start media query ----------------------------------
@mixin maxmobile {
  @media (max-width: 576px) {
    @content;
  }
}

@mixin minsmall {
  @media (min-width: 768px) {
    @content;
  }
}

@mixin maxsmall {
  @media (max-width: 768px) {
    @content;
  }
}

@mixin minmediam {
  @media (min-width: 992px) {
    @content;
  }
}

@mixin maxmediam {
  @media (max-width: 992px) {
    @content;
  }
}

@mixin minlarge {
  @media (min-width: 1200px) {
    @content;
  }
}

@mixin maxlarge {
  @media (max-width: 1200px) {
    @content;
  }
}

@mixin between {
  @media (min-width: 800px) and (max-width: 1200px) {
    @content;
  }
}
.loader{
  width: 100%;
  height: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;z-index: 100;
  img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 2000;
  }
}
.hide{
  display: none;
}
//- ------------------------------------------------- end media query ----------------------------------
</style>
<script>
import myheader from "./components/header/myheader.vue";
export default {
  components: { myheader },
  name: "app",
  created(){
    window.onload=function(){
      document.querySelector(".loader").classList.toggle("hide")
    };
    
  }
};
</script>
