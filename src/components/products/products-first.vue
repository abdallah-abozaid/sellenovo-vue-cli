<template>
    <div class="products-first">
        <p class="product-tittle">OUR PRODUCTS</p>
        <img src="@/assets/home/four/back.png" alt="">
    </div>
</template>
<script>
export default {
    name:"products-first"
}
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
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
.products-first{
    background-color: #F7F8FA;
    padding: 40px 0px;
    position: relative;
}
.products-first .product-tittle{
font-size: 35px;
text-align: center;
font-family: 'Lobster', cursive;
letter-spacing: 2px;
color: #0c4568ba;
width: 310px!important;
margin: auto;
position: relative;
          @include maxlarge{
           font-size: 32px;
         }
         @include maxmediam{
             font-size: 28px;
         }
         @include maxsmall{
             font-size: 25px;
         }
         @include maxmobile{
             font-size: 22px;
         }
}
.product-tittle::after,.product-tittle::before{
content: "";
width: 50px;
height: 2px;
background-color: #1d8793;
position: absolute;
bottom: 0;
 @include maxsmall{
             width: 35px;
         }
}
.product-tittle::after{
left: 0%;
@include maxlarge{
    left: 3%;
         }
         @include maxmediam{
               left: 7%;
         }
         @include maxsmall{
              left: 15%;
         }
         @include maxmobile{
             left: 18%;
         }
}
.product-tittle::before{
left: 80%;
@include maxlarge{
    left: 75%;
         }
         @include maxmediam{
             left: 71%;
         }
         @include maxsmall{
              left:67%;
         }
         @include maxmobile{
             left: 65%;
         }
}
.products-first > img{
    position: absolute;
    top: 0px;
    right: 0px;
    width: 54%;
    height: 100%;
  @include maxsmall{
           width: 60%;
         }
}
</style>