<template>
    <div class="about-therd container">
        <p>Wellcome</p>
        <p><span>Our 10 years working experience </span>to take care of your business goal.</p>
        <img src="@/assets/about/therd/about.png" alt="">
        <p>Duis et metus et massa tempus lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ultricies, orci molestie blandit interdum. ipsum ante pellentesque nisl, eget mollis turpis quam nec eros. ultricies, orci molestie blandit interdum.</p>
        <div class="row">
        <div class="items col-4">
            <p>870</p>
            <p>Projects</p>
        </div>
        <div class="items col-4">
            <p>99%</p>
            <p>Satisfaction</p>
        </div>
        <div class="items col-4">
            <p>350</p>
            <p>Clients</p>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"about-therd"
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
.about-therd p{
    text-align: center;
}
.about-therd > p:first-of-type{
    color: #1D8793;
    font-size: 30px;
    font-family: 'Lobster', cursive;
}
.about-therd p:nth-last-of-type(2){
span{
    font-weight: bold;
    font-size: 25px;
     @include maxlarge{
           font-size: 22px;
         }
         @include maxmediam{
         }
         @include maxsmall{
         }
         @include maxmobile{
         }
}
}
.about-therd > img{
width: 80%;
margin: auto;
display: block;
@include maxsmall{
  width: 95%;
         }
}
.about-therd > p:last-of-type{
width: 80%;
margin:10px auto 30px;
font-size: 13px;
@include maxlarge{
           margin:0px auto 30px;
         }
         @include maxmediam{
         }
         @include maxsmall{
           font-size: 11px;
           width: 95%;
         }
         @include maxmobile{
         }
}
.about-therd .items p:first-of-type{
font-size: 35px;
font-weight: bold;
margin-bottom: 0px;
@include maxtiny{
    font-size: 25px;
}
}
.about-therd{
    position: relative;
    perspective: 200px;
}
.about-therd .items:last-of-type::before,.about-therd .items:last-of-type::after{
content: "";
width: 80px;
height: 20px;
position: absolute;
transform: rotateY(-181deg) rotateZ(68deg) rotateX(48deg);
@include maxlarge{
    transform:translateX(-18px) rotateY(-174deg) rotateZ(73deg) rotateX(50deg)
         }
         @include maxmediam{
             transform:translateX(-53px) rotateY(-167deg) rotateZ(69deg) rotateX(54deg);
             width: 60px;
         }
         @include maxsmall{
            transform: translateX(-80px) rotateY(-150deg) rotateZ(70deg) rotateX(58deg)
         }
         @include maxmobile{
             
         }
         @include maxtiny{
      width: 40px;
       transform:translateX(-90px) rotateY(-140deg) rotateZ(77deg) rotateX(67deg)
}
}
.about-therd .items:last-of-type::before{
background-color: #F14836;
top: 19px;
left: 89px;
}
.about-therd .items:last-of-type::after{
    background-color: rgba(255, 0, 0, 0.466);
    top: 12px;
    left: 75px;
}


.about-therd .items:nth-of-type(2)::before,.about-therd .items:nth-of-type(2)::after{
content: "";
width: 80px;
height: 20px;
position: absolute;
transform: rotateY(-181deg) rotateZ(68deg) rotateX(22deg);
@include maxlarge{
    transform:translateX(-24px) rotateY(-196deg) rotateZ(68deg) rotateX(48deg)
         }
         @include maxmediam{
             transform:translateX(-59px) rotateY(-383deg) rotateZ(108deg) rotateX(44deg);
             width: 70px;
         }
         @include maxsmall{
              transform:translateX(-92px) rotateY(-383deg) rotateZ(108deg) rotateX(44deg);
         }
         @include maxtiny{
              width: 40px;
       transform:translateX(-102px) rotateY(-113deg) rotateZ(75deg) rotateX(72deg)
         }
}
.about-therd .items:nth-of-type(2)::before{
background-color: #1B3764;
top: 19px;
left: 89px;
}
.about-therd .items:nth-of-type(2)::after{
    background-color: rgba(0, 4, 255, 0.466);
    top: 15px;
    left: 75px;
}

.about-therd .items:nth-of-type(1)::before,.about-therd .items:nth-of-type(1)::after{
content: "";
width: 80px;
height: 20px;
position: absolute;
transform: rotateY(-181deg) rotateZ(69deg) rotateX(6deg);
@include maxlarge{
    transform:translateX(-25px) rotateY(-189deg) rotateZ(68deg) rotateX(10deg)
         }
         @include maxmediam{
              transform:translateX(-63px) rotateY(-377deg) rotateZ(107deg) rotateX(32deg);
             width: 70px;
         }
         @include maxsmall{
             transform:translateX(-93px) rotateY(-377deg) rotateZ(107deg) rotateX(32deg);
         }
         @include maxtiny{
             width: 40px;
         }
}
.about-therd .items:nth-of-type(1)::before{
background-color: #08ceb7;
top: 25px;
left: 89px;
}
.about-therd .items:nth-of-type(1)::after{
    background-color: #08ceb79a;
    top: 15px;
    left: 75px;
}
</style>