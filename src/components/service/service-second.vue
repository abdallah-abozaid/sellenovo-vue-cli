<template>
    <div class="service-second">
        <div class="container">
           <p>Browse Our Services</p>
            <p>this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text</p>
            <p>this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text</p>
            <p>this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text this text can replace with any anther text </p>
            <fa-icon icon="arrow-circle-down" @click="scrolldown()"/>
            <div class="services">
                <ul>
                    <li data-filter="all">all</li>
                    <li data-filter=".service1">service1</li>
                    <li data-filter=".service2">service2</li>
                    <li data-filter=".service3">service3</li>
                    <li data-filter=".service4">service4</li>
                </ul>

<div class="row row-cols-1 row-cols-md-2 service">
  <div class="col mb-4 mix service1">
    <div class="card">
        <img src="@/assets/servise/eeee.svg" alt="">
      <div class="card-body">
          <h5 class="card-title">service1</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4 mix service2">
    <div class="card">
        <img src="@/assets/servise/qq.svg" alt="">
      <div class="card-body">
        <h5 class="card-title">service2</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4 mix service4">
    <div class="card">
        <img src="@/assets/servise/qqq.svg" alt="">
      <div class="card-body">
        <h5 class="card-title">service4</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4 mix service2">
    <div class="card">
        <img src="@/assets/servise/qqqq.svg" alt="">
      <div class="card-body">
        <h5 class="card-title">service2</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4 mix service1">
    <div class="card">
        <img src="@/assets/servise/w.svg" alt="">
      <div class="card-body">
        <h5 class="card-title">service1</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4 mix service2">
    <div class="card">
        <img src="@/assets/servise/ww.svg" alt="">
      <div class="card-body">
        <h5 class="card-title">service2</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4 mix service2">
    <div class="card">
        <img src="@/assets/servise/wwww.svg" alt="">
      <div class="card-body">
        <h5 class="card-title">service2</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4 mix service3">
    <div class="card">
        <img src="@/assets/servise/www.svg" alt="">
      <div class="card-body">
        <h5 class="card-title">service3</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4 mix service4">
    <div class="card">
        <img src="@/assets/servise/e.svg" alt="">
      <div class="card-body">
        <h5 class="card-title">service4</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4 mix service3">
    <div class="card">
        <img src="@/assets/servise/ee.svg" alt="">
      <div class="card-body">
        <h5 class="card-title">service3</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>


</div>


            </div>
        </div>
    </div>
</template>
<script>
import mixitup from "mixitup";
export default {
    name:"second-service",
    mounted(){
        mixitup(".service" , {
            
        })
    },
    methods:{
      scrolldown:function(){
        var service=document.querySelector(".service-second .services")
       service.scrollIntoView({ behavior: 'smooth'});
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
.service-second{
    padding: 55px 0px;
    overflow: hidden;
}
.service-second .container > p:first-child{
    font-size: 33px;
    color: #1d8793;
    font-weight: 700;
    @include maxlarge{
        font-size: 30px;
    }
    @include maxmediam{
        font-size: 28px;
    }
    @include maxsmall{
        font-size: 25px;
    }
}
.service-second .container > p:nth-child(2),.service-second .container > p:nth-child(3),.service-second .container > p:nth-child(4){
    font-size: 16px;
    width: 90%;
    color: #877F98;
    @include maxlarge{
        width: 98%;
        font-size: 15px;
    }
    @include maxmediam{
        width: 99%;
        font-size: 14px;
    }
    @include maxsmall{
        font-size: 13px;
    }
}
.service-second .container svg{
    margin-left: 2%;
    font-size: 35px;
    margin-bottom: 80px;
    animation: moving .7s linear infinite alternate ;
    cursor: pointer;
}
@keyframes moving{
    0%{
        transform: translateY(0px);
    }
    100%{
        transform: translateY(20px);
    }
}
.service-second .services{
    margin: 0px 0px 50px;
    ul{
        list-style: none;
        padding: 0px;
        display: flex;
        justify-content:center;
        li{
            margin: 20px;
            padding: 5px 20px;
            background-color: #1d8793;
            color: white;
            border: 1px solid #1d8793;
            border-radius: 7px;
            font-family: 'Lobster', cursive;
            cursor: pointer;
            &:hover{
                background-color: #1cc7da;
                transition: all .5s linear;
                border-radius: 0px;
            }
     @include maxmobile{
        font-size: 14px;
         padding: 2px 10px;
          margin: 2px;
    }
        }
    }
}
.mix.mb-4{
 @include maxmobile{
              margin-bottom: 0px!important;
    }
            .card{
                border: 1px solid #17a2b8;
                 @include maxmobile{
              transform: scale(.9);
    }
                    img{
                    width: 100%;
                    margin-top: 10px;
                    height: 150px;
                }
        }
}
.services .service .card-body {
    text-align: center;
    h5{
        margin-bottom: 0px;
        font-weight: 700;
        color:#1d8793;
    }
    p{
        font-size: 14px;
        color: #98959e;
        @include maxmediam{
        font-size: 12px;
    }
    }
}
</style>