<template>
    <div class="seven">
        <div class="container">
          <div class="seven-text" data-aos="fade-down">
            <p class="seven-tittle">
                <span>custom</span>er stories
            </p>
            <p class="seven-desc">
                Be one of our customers and you  will save hundreds of dollars 
a month by having everything in one place.
            </p>
        </div>
<div class="seven-content">
    <div class="row">
        <div class="col-md-6">
            <img src="@/assets/home/seven/a.png" alt="">
            <div class="external">
                <p class="external-one">Our Solution</p>
                <ul>
                    <li>saves time and effort</li>
                    <li>Automatically updates stock levels</li>
                    <li>Tracks low inventory levels and shows
 alerts</li>
                    <li>customizes the software based upon
 the needs</li>
                    <li>Organizes and manages all orders</li>
                </ul>
            </div>
            <div class="external-icon">
            </div>
        </div>
    <div class="col-md-6 ps">
        <img src="@/assets/home/seven/b.png" alt="">
        <p class="big">“We had many orders from customer’s but the stores didn’t carry enough inventory to cover the orders Things got out of control because order information wasn’t accurate and more was being sold than inventory could cover.”</p>
        <div class="anther">
            <p class="first-p">"So we recommend MySellEnvo to anyone interested in e-commerce and who needs to grow their business."</p>
            <p class="bold">Health Labs Nutra</p>
            <p class="anther2">global nutraceutical company</p>
            <a href="#">Read More <fa-icon icon="arrow-right"/></a>
        </div>
    </div>

    </div>
</div>



        </div>
    </div>
</template>
<script>
export default {
    name:"seven",
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
.seven-tittle{
             font-weight: 600;
         font-size: 26px;
         position: relative;
         margin: 0px auto 20px;
         padding-top: 80px;
         width: 280px;
         
         @include maxlarge{
           font-size: 23px;
         }
         @include maxmediam{
             padding-top: 60px;
             font-size: 22px;
         }
         @include maxsmall{
             padding-top: 0px;
         text-align: center;
         }
         @include maxmobile{
            font-size: 19px;
         }
         &::before,&::after{
                 content: "";
                     position: absolute;
                    bottom: -6px;
                    width: 10px;
                    height: 2px;
                 background-color: #1D8793;
              @include maxlarge{
             bottom: -7px;
         }
         @include maxsmall{
         }
             }
             &::before{
                 left: 35%;
          @include maxlarge{
         left: 35%;
         }
         @include maxmediam{
                      left: 35%;
         }
         @include maxsmall{
          left: 48%
         }
         @include maxmobile{
           left: 49%
         }
         @include maxtiny{
           left: 48%
         }
             }
             &::after{
                 left: 40%;
                 @include maxlarge{
                  left: 30%;
         }
         @include maxmediam{
         }
         @include maxsmall{
           left: 53%
         }
         @include maxmobile{
           left: 55%
         }
         @include maxtiny{
           left: 54%
         }
             }
         span{
             border-bottom: 2px solid #1D8793;
             padding-bottom: 9px;
             
         }
}

.seven{
    background-color: #F7F8FA;
    padding-bottom: 70px;
      overflow: hidden;
}
.seven-desc{
    width:60%;
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
.seven-content{
    overflow: hidden;
}
.seven-content .row > div{
padding-right: 0px;
position: relative;

.external{
    position: absolute;
    bottom: -35px;
    right: -45px;
    width: 64%;
    height: 60%;
    background-color: #1D8793;
    color: white;
    padding: 20px;
    z-index: 11;
    @include maxlarge{
        padding: 20px 10px;
         }
         @include maxmediam{
             padding: 16px 5px;
         }
         @include maxsmall{
         }
         @include maxmobile{
              padding: 10px 0px;
         }
         @include maxtiny{
             width:84%;
         }
}
 img{
    width: 100%;
    height: 100%;
    padding: 0px;
    
    @include maxlarge{
         }
         @include maxmediam{
         }
         @include maxsmall{
             width: 80%;
    height: 90%;
    margin: auto;
    display: block;
         }
         @include maxmobile{
         }
         @include maxtiny{
         }
}
}
.seven-content .ps{
    background-color: #FFFFFF;
    box-sizing: border-box;
    padding: 60px 45px!important;
    position: relative;
    color: #5e5e5e;
    @include maxsmall{
             width: 80%;
    height: 90%;
    margin: auto;
    display: block;
         }
         @include maxmobile{
         }
         @include maxtiny{
             margin-top: 20px;
             padding: 30px 25px!important;
         }
    .big{
            letter-spacing: 1.3px;
        }
    P{
        .big{
            letter-spacing: 1px;
        }
     @include maxlarge{
         font-size: 15px;
         }
         @include maxmediam{
             font-size: 13px;
         }
         @include maxsmall{
         }
         @include maxmobile{
         }
         @include maxtiny{
             font-size: 12px;
         }
    }
    img{
        position: absolute!important;
        top: 50%!important;
        left: 50%!important;
        transform: translate(-50%,-50%)!important;
        width: 60%!important;
        height: 60%!important;
    }
    .anther{
        color: #5e5e5e;
        padding-left: 50px;
        margin-top: 40px;
        @include maxsmall{
             margin-top: 20px;
             padding-left: 30px;
         }
        .bold,a{
            font-weight:600
        }
    }
}
p.external-one {
    font-size: 30px;
    margin-left: 20px;
    margin-bottom: 2px;
     @include maxlarge{
        font-size: 26px;
         }
         @include maxmediam{
         }
         @include maxsmall{
         }
         @include maxmobile{
         }
         @include maxtiny{
             font-size: 12px;
         }
}
.external ul {
@include maxtiny{
    padding-left: 20px;
         }
li{
    margin-bottom:5px;
    font-size: 15px;
    @include maxlarge{
        font-size: 12px;
         }
         @include maxmediam{
         }
         @include maxsmall{
         }
         @include maxmobile{
             font-size: 10px;
         }
         @include maxtiny{
    margin-bottom:2px;
         }
}
}
a svg path{
    fill: #1D8793!important;
}
.external-icon{
    position: absolute;
    bottom: 0;
    left: 0;
    background: red;
    width: 30%;
}
</style>