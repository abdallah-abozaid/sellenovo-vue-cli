<template>
    <div class="first">
        



<div id="carouselExampleCaptions" class="carousel slide container" data-ride="carousel" >
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active" @click="clicking($event)">01</li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1" @click="clicking($event)">02</li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"  @click="clicking($event)">03</li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="d-block " >
<div class="first-com">
    <p class="tittle">
    Scale Your Operations More Intelligently
</p>
<p class="desc">
    We’ve helped  online retailers  and companies to grow their
business successfully.
</p>
<input type="submit" value="lets talk" class="talk-input" data-aos="zoom-in"> <fa-icon icon="play-circle"/>
</div>
<div class="second-com">
    <img src="@/assets/home/first.png" alt="">
</div>

      </div>
    </div>
    <div class="carousel-item second">
      <div class="d-block" >
        <div class="row">
<div class="sec col-lg-5 col-sm-12">
    <p class="tittle">
    Scale Your Operations More Intelligently
</p>
<p class="desc">
    We’ve helped  online retailers  and companies to grow their
business successfully.
</p>
<input type="submit" value="lets talk" class="talk-input" data-aos="zoom-in"> <fa-icon icon="play-circle" />
</div>
<div class="sec col-lg-7 col-sm-12">
    <img src="@/assets/home/sec1.png" alt="">
    <img src="@/assets/home/sec2.png" alt="">
</div>
</div>
      </div>
    </div>
    <div class="carousel-item thred">
      <div class="d-block " >
        <div class="row">
<div class="one thred col-lg-5">
    <p class="p1">
    Scale Your Operations More Intelligently
</p>
<p class="p2">
    multichannel order management software that is built to help online retailers in managing orders, inventory, and other e-commerce solutions.
</p>
<input type="submit" value="lets talk" class="talk-input" data-aos="zoom-in"> <fa-icon icon="play-circle"/>
</div>
<div class="two col-lg-7">
    <img src="@/assets/home/a.png" alt="">
    <img src="@/assets/home/aa.png" alt="">
    <img src="@/assets/home/aaa.png" alt="">
</div>
</div>
      </div>
    </div>
  </div>
  
</div>









    </div>
</template>
<script>
export default {
    name:"first",
    
    methods:{
      clicking(event) {
    var myli=document.querySelectorAll(".carousel-indicators li");
    for(let i=0;i<myli.length;i++){
      myli[i].classList.remove("click")
    }
    event.target.classList.add("click")
}

    }
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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=New+Tegomin&display=swap');
.first{
    background-image: url(~@/assets/home/back1.png);
    background-size: cover;
    text-align: center;
    margin-bottom:60px;
    position: relative;
    overflow: hidden;
    
}
.first p.tittle {
    width: 40%;
    margin: 50px auto 10px;
    font-size: 40px;
    text-align: center;
    line-height: 1.2;
    font-family: 'Oswald', sans-serif;
    @include maxlarge{
        width: 55%;
    margin: 60px auto 10px;
    font-size: 37px;
    }
    @include maxmediam{
         width: 75%;
    }
    @include maxsmall{
        width: 80%;
    }
    @include maxmobile{
          width: 90%;
    margin:50px auto 10px;
    font-size: 30px;
    }
}
.first p.desc{
    width: 34%;
    margin: 0px auto 2px;
    font-size: 13px;
    text-align: center;
    @include maxmediam{
    width: 50%;
    margin: 0px auto 10px;
    font-size: 14px;
    }
    @include maxsmall{
        width: 60%;
    }
    @include maxmobile{
   width: 80%;
    font-size: 11px;
    }
}
.first .talk-input{
    font-size: 11px;
    padding: 8px 55px!important;
    margin-right: 20px;
    color: white;
    background-color: #25aebd;
    border: none;
    margin-bottom:-10px ;
    &:hover{
       background-color: #17646d; 
       transition: all .5s linear;
    }
    @include maxmediam{
    padding: 5px 45px!important;
    margin-right: 15px;
    }
    @include maxsmall{
        padding: 5px 35px!important;
    margin-right: 10px;
    }
   
}
.first .first-com svg {
    font-size: 30px;
    margin-bottom: -5px;
     @include maxmediam{
    font-size: 24px;
    }
}
.first .first-com path{
    fill: #F59700!important;
}
.first .first-com svg{
    border-radius: 50%;
    box-shadow: 0px 0px 10px #F59700!important;
}
.first .second-com {
    width: 80%;
    margin: auto;
    @include maxmediam{
    width: 90%;
    }
    @include maxsmall{
    width: 95%;
    }
}
.first .second-com img{
    width: 99%;
    height: 90%;
    margin-top: 10px;
    @include minlarge{
      width: 88%;
    }
}

.carousel-indicators {
    display: block!important; 
    left: 102% !important;
    top: 40%;
    width: 20px;
    margin: 0px!important;
    @include maxlarge{
     left: 98.5% !important;
    }
    @include maxmediam{
     left: 97% !important;
    }
    @include maxsmall{
      left: 96% !important;
    }
    @include maxmobile{
      left: 90% !important;
      padding: 5px;
    line-height: 18px;
    }
    @include maxtiny{
      left: 87% !important;
      padding: 5px;
    line-height: 18px;
    }
}
 .carousel-indicators li {
    text-indent: 0px!important;
    display: block;
    border-radius: 50%;
    margin: 0px!important;
    width: 20px;
     opacity: 1!important;
     color: #25aebd !important;
     font-weight: bold;
     margin-bottom: 0px!important;
     height: 20px!important;
     font-family: 'New Tegomin', serif;
     position: relative;
    background-color: transparent!important;
}
.click::after,.carousel-indicators li.active::after {
    content: "";
    width: 40px;
    height:5px;
    background: #25aebd;
    position: absolute;
    top: 12px;
    right: -38px;
    @include maxmobile{
    top: 8px;
    }
}
.click::before,.carousel-indicators li.active::before {
    content: "";
    width: 0px;
    height: 0px;
    border-width: 10px;
    border-style: solid;
    border-color:  transparent #25aebd transparent transparent;
    position: absolute;
    top: 5px;
    right: -6px;
    @include maxmobile{
    top: .5px;
    }
}


.first .sec p{
  width: 80%;
  text-align: left;
  margin-left: 0px;
}
.first .sec p.tittle{
  margin-top: 120px;
  @include maxlarge{
    font-size: 30px;
    margin-top: 80px;
  }
  @include maxmediam{
    margin-top: 0px;
    width: 70%;
    margin: 0px auto 10px;
    text-align: center;
    font-size: 36px;
    }
    @include maxsmall{
      width: 80%;
    }
    @include maxmobile{
      width: 90%;
   font-size: 30px;
    }
}
.first .sec p.desc{
  @include maxlarge{
    font-size: 12px;
  }
  @include maxmediam{
    margin-top: 0px;
    width: 50%;
    margin: 0px auto 10px;
    text-align: center;
    font-size: 14px;
    }
    @include maxsmall{
      width: 60%;
    }
    @include maxmobile{
      width: 80%;
   font-size: 11px;
   margin-bottom:7px;
    }
}
.first .sec input{
  text-align: left;
  margin-top: 20px;
  display: block;
  @include maxlarge{
    padding: 5px 40px!important;
  }
  @include maxmediam{
    margin-top: 0px;
    display: inline-block;
    margin: 0px auto 10px;
    text-align: center;
    font-size: 14px;
    }
    @include maxmobile{
   font-size: 11px;
    }
}

.first .sec svg{
  transform: translateY(-20px) translateX(-30px);
  font-size: 30px;
  @include maxlarge{
    transform: translateY(-16px) translateX(-30px);
    font-size: 25px;
  }
  @include maxmediam{
    transform: translateY(5px) translateX(20px);
    }
}
.first .sec{
  position: relative;
  height: 450px;
 
  @include maxlarge{
      height: 430px;
  }
  @include maxmediam{
   height: 250px;
    }
    @include maxsmall{
     height: 180px;
    }
    @include maxtiny{
      height: 100px;
    }
     &:first-of-type{
     height: 190px;
     @include maxmobile{
     height: 170px;
    }

  }
 img{
  width: 100%!important;
  height: 100%!important;
  z-index: 2!important;
  position: absolute;
    top: 0;
    left: 0;
    @include maxlarge{
      width: 90%!important;
      height: 80%!important;
  }
  @include maxmediam{
   width: 70%!important;
      height: 100%!important;
      left: 50%;
      transform: translateX(-50%);
    }
  @include maxtiny{
      height: 100%!important;
    }
  &:last-of-type{
    position: absolute;
    top:  30%!important;
    left: -100px;
    width: 50%!important;
    height: 70%!important;
    z-index:1!important;
    @include maxlarge{
      left: -60px;
      top:  22%!important;
      width: 40%!important;
    height: 60%!important;
  }
  @include maxmediam{
      width: 30%!important;
      height: 70%!important;
      left: 150px;
      top:  32%!important;
      
    }
    @include maxsmall{
     left: 120px;
    }
     @include maxtiny{
      left: 70px;
      top:  15%!important;
    }
  }
}
}
.first .second,.thred{
  padding-top: 95px;
  @include maxmediam{
    padding-top: 50px;
  }
}

.first p.p1 {
    width: 80%;
    font-size: 36px;
    font-family: 'Oswald', sans-serif;
    text-align: left;
    color: #25aebd;
    @include maxlarge{
    margin: 60px auto 10px;
    margin-left: 0px;
    font-size: 30px;
    }
    @include maxmediam{
      line-height: 1.2;
          margin-top: 0px;
    width: 70%;
    margin: 0px auto 0px;
    text-align: center;
    font-size: 35px;
    }
    @include maxsmall{
      width: 80%;
      font-size: 33px;
    }
    @include maxmobile{
      margin: 0px auto 5px;
    width: 90%;
    font-size: 30px;
    }
}
.first p.p2 {
    width: 80%;
    font-size: 13px;
    text-align: left;
    @include maxlarge{
    margin-left: 0px;
    font-size: 12px;
    }
    @include maxmediam{
      width: 60%;
    margin: 10px auto 7px;
    text-align: center;
    font-size: 12px;
    }
    @include maxsmall{
      width: 80%;
    }
    @include maxmobile{
      margin: 0px auto 5px;
       line-height: 1.2;
    width: 85%;
    font-size: 10px;
    }
}
.first .thred input{
  text-align: left;
  margin-top: 20px;
  display: block;
  @include maxlarge{
    padding: 5px 40px!important;
  }
  @include maxmediam{
    margin-top: 0px;
    display: inline-block;
    margin: 0px auto 10px;
    text-align: center;
    font-size: 14px;
    }
    @include maxmobile{
   font-size: 11px;
    }
}

.first .thred svg{
  transform: translateY(-20px) translateX(-30px);
  font-size: 30px;
  @include maxlarge{
    transform: translateY(-16px) translateX(-30px);
    font-size: 25px;
  }
  @include maxmediam{
    transform: translateY(5px) translateX(20px);
    }
}
.first .thred .two{
  position: relative;
  width: 100%;
  height: 450px;
    @include maxlarge{
      width: 90%;
  height: 400px;
    }
    @include maxmediam{
      width: 70% ;
    height: 270px;
    margin: auto;
    }
    @include maxsmall{
       width: 70% ;
    height: 200px;
    }
    @include maxmobile{
      height: 180px;
    }
    @include maxtiny{
      height: 110px;
    }
  img{
    &:nth-of-type(2){
    position: absolute;
    top: -32px;
    left: -20px;
    width: 60%;
    @include maxlarge{
    }
    @include maxmediam{
      top: -12px;
    left: -5px;
    width: 50%;
    }
    @include maxsmall{
    top: -9px;
    left: 3px;
    }
    
    }
    &:nth-of-type(1){
    position: absolute;
    bottom: -12px;
    right: -10px;
    width: 40%;
    z-index: 100;
    @include maxlarge{
    }
    @include maxmediam{
      bottom: -5px;
    right: -3px;
    }
    @include maxsmall{
      bottom: -5px;
    right: 2px;
    }
    
    }
    &:last-of-type{
      width: 100%;
      height: 100%;
    
    }
  }
}
.first .one{
  @include maxlarge{
padding: 0px;
    }
}

.first .carousel-inner {
     overflow: hidden;
    }
</style>