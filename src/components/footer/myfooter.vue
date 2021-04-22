<template>
    <div class="myfooter">
        <div class="container">
            <div class="row">
                <div class="col-md-4 footer-first">
                    <img src="@/assets/footer/footer.png" alt="">
                    <p>manage orders, customers
and products.</p>
<input type="submit" value="Schedule A Demo">
                </div>
                <div class="col-md-3 footer-second">
                    <p>Useful link</p>
                    <ul>
                        <li>API</li>
                        <li>Blog</li>
                        <li>Faqs</li>
                        <li>Partners</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div class="col-md-5 footer-therd">
                    <p>Subscribe newsletter for keep updated</p>
                    <div class="inner-text"><input type="text"><fa-icon icon="long-arrow-alt-right"/></div>
                    <p>We respect your privacy, so we never share your info.</p>
                <div class="iconss">
                    <fa-icon :icon="['fab','facebook']"/>
                    <fa-icon :icon="['fab','instagram']"/>
                    <fa-icon :icon="['fab','twitter']"/>
                    <fa-icon :icon="['fab','yahoo']"/>
                </div>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"myfooter"
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
.myfooter{
    background-color: #32353C;
    color: white;
      overflow: hidden;
    padding-top: 60px;
    .footer-first{
        padding-right: 12%;
        margin-bottom: 40px;
        @include maxmediam{
     padding-right: 8%;
    }
    @include maxsmall{
        text-align: center;
    }
    @include maxmobile{
    }
    @include maxtiny{
    }
        img{
            width: 85%;
            margin-bottom: 20px;
             @include maxmediam{
    }
    @include maxsmall{
        margin-bottom: 4px;
    }
    @include maxmobile{
    }
    @include maxtiny{
    }
        }
        p{
            margin-bottom: 20px;
             @include maxlarge{
                 font-size: 15px;
    }
    @include maxmediam{
        font-size: 13px;
    }
    @include maxsmall{
        margin-bottom: 4px;
    }
    @include maxmobile{
    }
    @include maxtiny{
    }
        }
        input{
            font-size: 14px;
            font-weight: 600;
            border: 2px solid white;
            padding: 8px 25px;
            background-color: transparent;
            color: white;
            @include maxlarge{
     padding: 5px 15px;
    }
    @include maxmediam{
        font-size: 12px;
        padding: 5px 10px;
    }
    @include maxsmall{
    }
    @include maxmobile{
    }
    @include maxtiny{
    }
        }
    }
}

.footer-second{
 @include maxsmall{
      transform: translateX(-20px);
      margin-bottom: 40px;
    }
    
    p{
        font-weight: 600;
        font-size: 23px;
           @include maxlarge{
     font-size: 20px;
    }
    @include maxmediam{
        font-size: 18px;
    }
    @include maxsmall{
        text-align: center;
        margin-bottom: 4px;
    }
    @include maxmobile{
    }
    @include maxtiny{
    }
    }
    ul{
        list-style: none;
        padding-left: 15px;
        
        li{
            color: #858585;
            margin-bottom: 17px;
            @include maxlarge{
     font-size: 15px;
     margin-bottom: 12px;
    }
    @include maxmediam{
        font-size: 14px;
    }
    @include maxsmall{
        text-align: center;
        margin-bottom: 4px;
    }
    @include maxmobile{
    }
    @include maxtiny{
    }
        }
    }
}

.footer-therd{
    text-align: center;
    p:last-of-type{
            @include maxlarge{
     font-size: 14px;
    }
    @include maxmediam{
         font-size: 11px;
    }
    @include maxsmall{
    }
    @include maxmobile{
    }
    @include maxtiny{
    }
        }
    p:first-of-type{
        font-size: 17px;
        letter-spacing: 2px;
        font-weight: 600;
        @include maxlarge{
     font-size: 15px;
    }
    @include maxmediam{
        font-size: 13px;
        letter-spacing: 1px;
    }
    @include maxsmall{
        margin-bottom: 5px;
    }
    @include maxmobile{
    }
    @include maxtiny{
    }
    }
    .inner-text{
        position: relative;
        input{
            width: 100%;
            padding: 20px;
            background-color: transparent;
            border: 2px solid white;
            border-radius: 6px;
            margin-bottom: 6px;
             @include maxlarge{
     padding: 10px;
    }
    @include maxmediam{
         padding: 7px;
    }
    @include maxsmall{
    }
    @include maxmobile{
    }
    @include maxtiny{
    }
        }
        svg{
            position: absolute;
    top: 50%;
    right: 6%;
    font-size: 31px;
    transform: translateY(-50%);

            path{
                fill: white!important;

            }
        }
        
    }
}
.iconss{
    svg{
        margin: 40px 20px;
        font-size: 25px;
           @include maxlarge{
     font-size: 20px;
     margin: 20px 10px;
    }
    @include maxmediam{
    }
    @include maxsmall{
        margin-top: 10px;
    }
    @include maxmobile{
    }
    @include maxtiny{
    }
        path{
            fill: white!important;
        }
    }
}
</style>