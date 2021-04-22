<template>
    <div class="fivr ">
        <div class="container">
        <div class="five-text " data-aos="fade-down">
            <p class="five-tittle">
                <span>Our Fe</span>ature
            </p>
            <p class="five-desc">
                lead mysellenvo the way that meets your unique needs.<br>
its a  shortest customization & onboarding duration ever !
            </p>
        </div>
        <div class="five-content " >
            <div class="row">
                <div class="img col-md-5" >
                    <img src="@/assets/home/five/a.png" alt="">
                </div>
                <div class="content col-md-7" >
                    <div class="first-comp ">
                        <p class="tittle-comp">Bespoke Software 
                            Development</p>
                    <p class="desc-comp">
                          We provide your business with bespoke development services to help you achieve your goals and increase ROI.
                     </p>
                    </div>
                    <div class="second-comp " >
                        <img src="@/assets/home/five/aaaaaa.png" alt="">
                        <img src="@/assets/home/five/aaa.png" alt="">
                        <img src="@/assets/home/five/aaaaa.png" alt="">
                        <img src="@/assets/home/five/aaaa.png" alt="">
                        <img src="@/assets/home/five/aa.png" alt="">
                        <img src="@/assets/home/five/aa.png" alt="">
                        <img src="@/assets/home/five/aaaaaaa.png" alt="">
                        <img src="@/assets/home/five/aaaaaaa.png" alt="">
                        <img src="@/assets/home/five/aaaa.png" alt="">
                        <img src="@/assets/home/five/aaaaaaaa.png" alt="">
                    </div>
                </div>
            </div>


        </div>
</div>
    </div>
</template>
<script>
export default {
    name:"fivr",
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
.five-tittle{
             font-weight: 600;
         font-size: 26px;
         position: relative;
         margin: 0px auto 20px;
         width: 160px;
           
         @include maxlarge{
           font-size: 23px;
         }
         @include maxmediam{
             font-size: 22px;
         }
         @include maxsmall{
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
                 left: 63%;
          @include maxlarge{
         left: 55%;
         }
         @include maxmediam{
           left:53%;
         }
         @include maxsmall{
          left: 65%
         }
         @include maxmobile{
           left: 57%
         }
         @include maxtiny{
           left: 36%
         }
             }
             &::after{
                 left:53%;
                 @include maxlarge{
                   left: 46%;
         }
         @include maxmediam{
           left: 44%;
         }
         @include maxsmall{
           left: 57%
         }
         @include maxmobile{
           left: 65%
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

.fivr{
    background-color: #F7F8FA;
    overflow: hidden;
}
.five-desc{
    width:50%;
    text-align: center;
    margin: 20px auto;
    color: #32353C;
    font-weight: 600;
    @include maxlarge{
    width:70%;
    font-size: 15px;
    }
    @include maxmediam{
    font-size: 13px;
    }
    @include maxsmall{
            width:80%;
    margin-top: 20px;
    }
    @include maxmobile{
    width:90%;
    margin-top: 20px;
    font-size: 11px;
    }
    @include maxtiny{
    }
}



.five-content .img{
    transform: scale(1.1);
    padding: 0px;
    z-index: 1;
    img{
        width: 100%;
        height: 100%;
        @include maxlarge{
         }
         @include maxmediam{
         }
         @include maxsmall{
        width: 60%;
        height: 100%;
        margin: auto;
        display: block;
         }
         @include maxmobile{
         }
         @include maxtiny{
         }
    }
}


.content {
    padding: 0px;
    z-index: 11;
    transform: translateY(40px);
    @include maxlarge{
          
         }
         @include maxmediam{
         }
         @include maxsmall{
           transform: translateY(-100px);
         }
         @include maxmobile{
         }
         @include maxtiny{
           transform: translateY(-60px);
         }
    .first-comp{
        width: 120%;
        transform: translateX(-120px);
        height: 42%;
        color: white;
        background-color: #1D8793;
        padding: 40px;
         @include maxlarge{
          padding: 30px;
         }
         @include maxmediam{
           padding: 20px;
         }
         @include maxsmall{
           width: 80%;
        transform: translateX(50px);
         }
         @include maxmobile{
         }
         @include maxtiny{
           transform: translateX(20px);
           padding: 5px;
           width: 90%;
         }
        p{
            &:first-of-type{
                font-size:25px;
                font-weight: bold;
         @include maxlarge{
           font-size:22px;
         }
         @include maxmediam{
           font-size:20px;
           margin-bottom: 5px;
         }
         @include maxsmall{
           font-size:19px;
           text-align: center;
         }
         @include maxmobile{
           font-size:17px;
         }
         @include maxtiny{
           font-size:14px;
         }
            }
            &:last-of-type{
                font-size: 19px;
                @include maxlarge{
           font-size:16px;
         }
         @include maxmediam{
            font-size:14px;
         }
         @include maxsmall{
           font-size:13px;
           text-align: center;
         }
         @include maxmobile{
           font-size:11px;
         }
         @include maxtiny{
         }
            }
        }
    }
    .second-comp{
        width: 120%;
        transform: translateX(-120px) translateY(-14px);
        background-color: white;
        height: 39%;
        display: flex;
        flex-wrap: wrap;
         @include maxlarge{
         }
         @include maxmediam{
         }
         @include maxsmall{
           width: 80%;
        transform: translateX(50px);
         }
         @include maxmobile{
         }
         @include maxtiny{
            transform: translateX(20px);
            width: 90%;
         }
        img{
            width: 20%;
            height: 50%;
        }
    }
}

</style>