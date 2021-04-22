<template>
    <div class="therd ">
        <div class="container">
        <div class="therd-p" data-aos="fade-down">
            <p class="tittle"><span>Why My</span>sellenvo ?</p>
            <p class="first-p">we are a full service bespoke software</p>
            <p class="last-p">we provides everything on E-commerce business requires – sales and ordersystems, 
stock control, warehousing, shipping, product listing, repricing and much more. 
</p>
</div>
<div class="therd-card">
    <div class="mycard">
        <img src="@/assets/home/thred/aaa.png" alt="">
        <p>Future scaling</p>
        <p>Customise the software exactly
 how you need it with </p>
    </div>
    <div class="mycard">
        <img src="@/assets/home/thred/a.png" alt="">
        <p>Clean UI</p>
        <p> more modern experience and 
easy for customers to navigate</p>
    </div>
    <div class="mycard">
        <img src="@/assets/home/thred/aa.png" alt="">
        <p>Support</p>
        <p>Dedicated 24/7 help disk to resolve 
any problem that may arise.
</p>
    </div>
     <div class="mycard">
        <img src="@/assets/home/thred/aaaa.png" alt="">
        <p>No Errors! </p>
        <p>Eliminate the risk of human error </p>
    </div>
</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"therd",
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
.therd{
    background-color: #F7F8FA;
    margin-top: 60px;
    padding-top: 60px;
      overflow: hidden;
    .therd-p{
        text-align: center;
        
     p.tittle{
         font-weight: 600;
         text-align: center!important;
         font-size: 24px;
         width:300px;
         position: relative;
         margin: 10px auto 20px;
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
             }
             &::before{
                 left: 48%;
             }
             &::after{
                 left: 54%;
             }
         span{
             border-bottom: 2px solid #1D8793;
             padding-bottom: 9px;
             
         }
     }
     .first-p{
         font-weight: 500;
         margin-bottom: 7px;
         font-weight: 600;
    color: #32353C;
         @include maxlarge{
             font-size: 15px;
         }
         @include maxsmall{
             font-size: 13px;
         }
          @include maxmobile{
             font-size: 11px;
         }
     }
     .last-p{
         font-weight: 500;
         width: 55%;
         margin: auto;
         font-weight: 600;
    color: #32353C;
          @include maxlarge{
               width: 65%;
             font-size: 15px;
         }
         @include maxmediam{
              width:80%;
              font-size: 14px;
         }
         @include maxsmall{
             font-size: 13px;
         }
         @include maxmobile{
              width:95%;
             font-size: 11px;
         }
     }
    }
}
.therd-card{
    margin-top: 50px;
    .mycard{
        padding: 3%;
        text-align: center;
        display: inline-block;
        vertical-align: top;
        width: 24%;
        height: 220px;
        margin-left: 1.3%!important;
        background-color: #fdfdfd;
        position: relative;
        border-radius: 10px;
        &:hover{
            animation: scaling .5s linear alternate forwards;
        }
        &:nth-of-type(1){
         margin-left:0!important;   
         background-color: #e7e7e7;
        }
        p{
            &:first-of-type{
                margin: 20px;
                font-weight: bold;
                 @include maxlarge{
               margin: 14px;
                }
                @include maxmediam{
              margin: 10px;
         }
         @include maxtiny{
             margin: 7px 0px 5px;
         }
            }
            &:last-of-type{
                font-size: 12px;
                     @include maxlarge{
                font-size: 11px;
         }
         @include maxmediam{
              font-size: 10px;
         }
         
            }
        }
        &:nth-of-type(2)::after,&:nth-of-type(3)::after,&:nth-of-type(4)::after{
            content: "";
            position:absolute;
            top: 35% ;
            left: -1px;
            width: 2px;
            height: 70px;
            background-color: #35daec7e;
        }
        &:nth-of-type(1){
           @include maxsmall{
             margin-right: 4%;
         } 
        }
        &:nth-of-type(2){
           @include maxsmall{
             margin-left: 0%;
         } 
        }
        &:nth-of-type(3){
           @include maxsmall{
             margin-right: 4%;
         } 
        }
        &:nth-of-type(3)::after{
           @include maxsmall{
           background-color: transparent;
         } 
        }
        &:nth-of-type(4){
           @include maxsmall{
             margin-left: 0%;
         } 
        }
        
          @include maxlarge{
              height: 210px;
         }
         @include maxmediam{
              padding: 3% 2%;
             height: 200px;
         }
         @include maxsmall{
             width: 46%;
             height: 180px;
             margin-bottom: 20px;
         }
        
    }
}
@keyframes scaling{
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.05);
    }
}

</style>