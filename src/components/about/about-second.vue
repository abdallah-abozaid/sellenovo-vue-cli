<template>
    <div class="about-second container">
        <div class="row">
            <div class="about-second-1 col-md-7">
        <p class="about-p1">Who We Are</p>
        <p class="about-p2">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
        <div class="items">
            <div class="row">
            <div class="col-sm-6">
                 <div class="row item">
                <div class="col-3">
                        <img src="@/assets/home/thred/aaa.png" alt="">
                </div>
                <div class="col-9">
                    <p>Future scaling</p>
        <p>Customise the software exactly
 how you need it with </p>
                </div>
                </div>
                <div class="row item">
                <div class="col-3">
                        <img src="@/assets/home/thred/a.png" alt="">
                </div>
                <div class="col-9">
                    <p>Clean UI</p>
        <p> more modern experience and 
easy for customers to navigate</p>
                </div>
            </div>
            
            </div>
            <div class="col-sm-6">
                 <div class="row item">
                <div class="col-3">
                        <img src="@/assets/home/thred/aa.png" alt="">
                </div>
                <div class="col-9">
                   <p>Support</p>
        <p>Dedicated 24/7 help disk to resolve 
any problem that may arise.
</p>
                </div>
            </div>
            <div class="row item">
                <div class="col-3">
                        <img src="@/assets/home/thred/aaaa.png" alt="">
                </div>
                <div class="col-9">
                    <p>No Errors! </p>
        <p>Eliminate the risk of human error </p>
                </div>
            </div>
           
</div>
        </div>
    </div>
    </div>
    <div class="about-second-2 col-md-5">
        <img src="@/assets/about/second/second.png" alt="">
    </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"about-second "
}
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
.about-second{
    padding: 70px 0px;
     @include maxmobile{
         padding: 70px 20px;
         }
}
.about-second-2 img{
    width: 100%;
    height: 100%;
    @include maxsmall{
          width:90%;
          margin: auto;
          display: block;
    height: 75%;
         }
}
p.about-p1 {
    font-size: 34px;
    font-family: 'Lobster', cursive;
    margin-bottom: 0px;
    @include maxlarge{
           font-size: 30px;
         }
         @include maxmediam{
             font-size: 25px;
         }
         @include maxsmall{
             font-size: 22px;
         }
         @include maxmobile{
             font-size: 23px;
         }
}
p.about-p2 {
    font-size: 20px;
    margin-bottom: 35px;
    @include maxlarge{
           font-size: 18px;
         }
         @include maxmediam{
             font-size: 14px;
         }
         @include maxsmall{
             font-size: 15px;
             margin-bottom: 10px;
         }
         @include maxmobile{
             font-size: 15px;
         }
}
.about-second .item{
    margin-bottom: 25px;
     @include maxsmall{
             margin-bottom: 10px;
         }
}
.about-second .item div:last-of-type p:first-of-type{
    margin-bottom: 5px;
     font-family: 'Lobster', cursive;
     @include maxlarge{
           font-size: 16px;
         }
         @include maxmediam{
             font-size: 15px;
         }
         @include maxsmall{
             font-size: 15px;
             margin-bottom: 1px;
         }
         @include maxmobile{
             font-size: 15px;
         }
}
.about-second .item div:first-of-type img{
     @include maxlarge{
         }
         @include maxmediam{
             transform: scale(.6);
         }
         @include maxsmall{
             transform: scale(.8);
         }
         @include maxmobile{
             text-align: center;
             margin: auto;
             display: block;
                          transform: scale(.9) translateX(10px);
         }
}
.about-second .item div:last-of-type p:last-of-type{
    margin-bottom: 5px;
    font-size: 14px;
    @include maxlarge{
           font-size: 14px;
         }
         @include maxmediam{
             font-size: 12px;
         }
         @include maxsmall{
             font-size: 12px;
         }
         @include maxmobile{
             font-size: 15px;
         }
}
</style>