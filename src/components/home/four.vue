<template>
    <div class="four">
      <img src="@/assets/home/four/back.png" alt="">
      <div class="container">
      <div class="row ">
        <div class="four-img col-md-4 " data-aos="fade-right">
          <img src="@/assets/home/four/a.png" alt="">
        </div>
        <div class="four-text col-md-8" data-aos="fade-left">
          <p class="four-text-tittle"><span>E-Com</span>merce Api Integration</p>
          <p class="four-text-desc">Our Powerful And Rich Integrations Help You To Reach More Customers In Better Ways And In New Markets. We Provide You With Bespoke Integrations Help You Expand The Functionality Of Your Back Office, Improve The Management Of Information, Deliver Better Customer Service And Increase ROI. </p>
          <input type="submit" value="Request Access">
        </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"four",
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
.four{
  background-color: #F7F8FA;
  padding: 70px 0px;
  position: relative;
  overflow: hidden;
         @include maxlarge{
           padding:60px 0px;
         }
         @include maxmediam{
         }
         @include maxsmall{
         }
         @include maxmobile{
         }
}
.four > img{
  position: absolute;
  top: 0px;
  right: 0px;
  width: 30%;
  height: 80%;
  @include maxsmall{
           width: 40%;
  height: 95%;
         }
}
.four-img{
  box-sizing: border-box;
   img{
width: 95%;
height: 95%;
         @include maxmediam{
           width: 100%;
height: 100%;
         }
         @include maxsmall{
            width: 55%;
height: 100%;
margin: auto;
display: block;
         }
         @include maxmobile{
         }
}
}
.four-text-tittle{
         font-weight: 600;
         font-size: 25px;
         position: relative;
         margin: 90px auto 20px;
         @include maxlarge{
           font-size: 23px;
         margin: 60px auto 15px;
         }
         @include maxmediam{
             font-size: 22px;
         margin: 40px auto 10px;
         }
         @include maxsmall{
         margin: 20px auto 10px;
         text-align: center;
         }
         @include maxmobile{
            font-size: 19px;
         }
         &::before,&::after{
                 content: "";
                     position: absolute;
                    bottom: -8px;
                    width: 10px;
                    height: 2px;
                 background-color: #1D8793;
              @include maxlarge{
             bottom: -8px;
         }
         @include maxmobile{
           bottom: -9px;
         }
             }
             &::before{
                 left: 14%;
                 @include maxlarge{
                   left: 15%;
         }
         @include maxmediam{
           left: 19%;
         }
         @include maxsmall{
          left: 40%
         }
         @include maxmobile{
           left: 37%
         }
         @include maxtiny{
           left: 36%
         }
             }
             &::after{
                 left: 11%;
                 @include maxlarge{
                   left: 12.5%;
         }
         @include maxmediam{
           left: 16%;
         }
         @include maxsmall{
           left: 37%
         }
         @include maxmobile{
           left: 40%
         }
         @include maxtiny{
           left: 31%
         }
             }
         span{
             border-bottom: 2px solid #1D8793;
             padding-bottom: 9px;
             
         }
}
.four-text-desc{
  margin-bottom:60px;
  letter-spacing: 1px;
  font-weight: 600;
    color: #32353C;
  @include maxlarge{
    margin-bottom:40px;
  letter-spacing: 0px;
  font-size: 15px;
         }
         @include maxmediam{
           font-size: 13px;
           margin-bottom:25px;
         }
         @include maxsmall{
           text-align: center;
           margin-top: 20px;
         }
         @include maxmobile{
           font-size: 11px;
           margin: 20px 10px;
         }
}
.four-text{
  padding-left: 0px!important;
  input{
    font-size: 13px;
    color: #1D8793;
    border: 1px solid #1D8793;
    padding: 7px 20px;
    border-radius: 5px;
    @include maxlarge{
      padding: 4px 15px;
         }
         @include maxmediam{
           padding: 5px 12px;
         }
         @include maxsmall{
           text-align: center;
           width: 40%;
           margin-left:  30%;
         }
         @include maxmobile{
         }
    &:hover{
      color: white;
      background-color: #1D8793;
      border-color: white;
      border-radius: 10px;
      transition: all .5s linear;
      padding: 9px 25px;
      @include maxlarge{
      padding: 7px 20px;
         }
      @include maxmediam{
           padding: 7px 20px;
           border-radius: 7px;
         }
         @include maxsmall{
           
         }
    }
  }
}
</style>