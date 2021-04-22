<template>
    <div class="eigth">
        <div class="container">
          <div class="eigth-text" data-aos="fade-down">
            <p class="eigth-tittle">
                <span>contac</span>t us
            </p>
            <p class="eigth-desc">
                Interested in learning more about how we can help your company? 
Reach out to us and we’ll be in touch with you shortly.
            </p>
        </div>
        <div class="eigth-content">
            <div class="row">
                <div class="col-md-8 shadow">
                    <p class="tittle-contect">Send us a message</p>
                    <div class="inputs">
                        <div class="input-1">
                            <label>Name</label>
                            <input type="text" placeholder="Enter Your Full Name">
                        </div>
                        <div class="input-2">
                            <label>Email</label>
                            <input type="text" placeholder="Enter Your email">
                        </div>
                        <div class="textarea">
                            <label>Message</label>
                            <textarea placeholder="Enter Your message"></textarea>
                        </div>
                        <input type="submit" value="Contact Us">
                    </div>
                </div>
                <div class="col-md-4 last">
                    <div class="texts">
            <p class="tittle">
                <span>Contact</span> Information
            </p>
            <div class="row">
              <div class="col-2"><div class="icons"><fa-icon icon="map-marker-alt"/></div></div>
              <div class="col-10"> 0000 palestine, <br>
Suite 0000 Gaza Strip, <br>
 Remal.</div>
            </div>
            <div class="row">
              <div class="col-2"><div class="icons"><fa-icon icon="phone-alt"/></div></div>
              <div class="col-10">+00 000000000000</div>
            </div>
            <div class="row">
              <div class="col-2"><div class="icons"><fa-icon icon="envelope"/></div></div>
              <div class="col-10">my sellenvo@gmail.com</div>
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
    name:"eigth",
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
.eigth-tittle{
             font-weight: 600;
         font-size: 26px;
         position: relative;
         margin: 0px auto 20px;
         padding-top: 80px;
         width: 200px;
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
                    bottom: -8px;
                    width: 10px;
                    height: 2px;
                 background-color: #1D8793;
         @include maxmobile{
             bottom: -9px;
         }
             }
             &::before{
                 left: 43%;
          @include maxlarge{
         left: 45%;
         }
         @include maxmediam{
                      left: 36%;
         }
         @include maxsmall{
          left: 59%
         }
         @include maxmobile{
           left: 65%
         }
         @include maxtiny{
           left: 59%
         }
             }
             &::after{
                 left: 50%;
                 @include maxlarge{
                  left: 38%;
         }
         @include maxmediam{
             left: 43%
         }
         @include maxsmall{
           left: 65%
         }
         @include maxmobile{
           left: 58%
         }
         @include maxtiny{
           left: 65%
         }
             }
         span{
             border-bottom: 2px solid #1D8793;
             padding-bottom: 9px;
             
         }
}

.eigth{
    background-color: #F7F8FA;
    padding-bottom: 70px;
      overflow: hidden;
}
.eigth-desc{
    width:50%;
    text-align: center;
    margin: 20px auto 60px;
    color: #32353C;
    font-weight: 600;
    @include maxlarge{
    width:50%;
    font-size: 15px;
    margin: 20px auto 30px;
    }
    @include maxmediam{
      width:60%;
    font-size: 13px;
    margin: 20px auto 30px;
    }
    @include maxsmall{
            width:80%;
    margin-top: 20px;
    margin: 20px auto 20px;
    }
    @include maxmobile{
    width:90%;
    margin-top: 20px;
    font-size: 11px;
    }
    @include maxtiny{
    }
}
.eigth-content{
  @include maxmobile{
    width: 90%;
    margin: auto;
         }
         @include maxtiny{
         }
}
.eigth-content > .row > div:first-of-type{
    background-color: #FFFFFF;
        padding: 30px;
        .tittle-contect{
            font-size: 28px;
            color: #1baebe;
           @include maxtiny{
             font-size: 23px;
         }
            
        }
        .inputs .input-1,.inputs .input-2{
          width: 49%;
          display: inline-block;
           @include maxsmall{
              width: 98%;
         }
          label{
            display: block;
            color: #9a9a9a;
            @include maxsmall{
              font-size: 13px;
              margin-bottom: 0px;
              margin-top: 20px;
         }
          }
          input{
            width:90%;
            padding: 15px;
            border: none;
            background-color: #F7F8FA;
            display: block;
                   @include maxlarge{
                  padding: 10px;
         }
         @include maxmediam{
         }
         @include maxsmall{
         }
         @include maxmobile{
         }
         @include maxtiny{

         }
          }
        }
        .inputs .textarea{
          margin-top: 25px;
          margin-bottom: 40px;
          label{
            display: block;
            color: #9a9a9a;
          }
          textarea{
            width:93%;
            display: block;
            border: none;
            background-color: #F7F8FA;
            height: 150px;
            padding: 15px;
          }
        }
        input[type="submit"]{
          font-size: 15px;
          color: #1D8793;
          border: 1px solid #1D8793;
          padding: 10px 40px;
          margin-bottom: 70px;
          background-color: #FFFFFF;
                    @include maxlarge{
                      padding: 10px 30px;
         }
         @include maxmediam{
         }
         @include maxsmall{
         }
         @include maxmobile{
         }
         @include maxtiny{
         }
        }
}
.eigth-content .row .shadow:first-of-type{
  box-shadow: 1px 1px 1px 10px #b3b3b3;
}

.last{
  background-color: #1D8793;
  color: white;
  padding-left: 30px!important;
  padding-top: 20px;
  transform: scale(1.17);
   @include maxlarge{
         transform: scale(1.1);
         }
         @include maxmediam{
           padding-left: 20px!important;
  padding-top: 20px;
         }
         @include maxsmall{
           padding-left: 40px!important;
           transform: scale(1) translateY(-40px);
         }
         @include maxmobile{
           width: 85%!important;
           margin: auto;
         }
         @include maxtiny{
           padding-left: 10px!important;
         }
  .tittle{
             font-weight: 600;
         font-size: 22px;
         position: relative;
         margin: 0px 0 45px;
         padding-top:30px;
         width: 300px;

         @include maxlarge{
           font-size: 20px;
         }
         @include maxmediam{
             padding-top: 60px;
             font-size:18px;
         }
         @include maxsmall{
             padding-top: 0px;
             font-size: 19px;
         }
         @include maxmobile{
            font-size: 17px;
         }
         &::before,&::after{
                 content: "";
                     position: absolute;
                    bottom: -8px;
                    width: 10px;
                    height: 2px;
                 background-color: #FFFFFF;
         @include maxmobile{
             bottom: -9px;
         }
             }
             &::before{
                 left:29%;
          @include maxlarge{
         left: 25%;
         }
         @include maxmediam{
                      left: 24%;
         }
         @include maxsmall{
          left: 24%
         }
         @include maxmobile{
         }
         @include maxtiny{
         }
             }
             &::after{
                 left: 35%;
                 @include maxlarge{
                  left: 30%;
         }
         @include maxmediam{
             left: 29%
         }
         @include maxsmall{
           left: 28%
         }
         @include maxmobile{
         }
         @include maxtiny{
         }
             }
         span{
             border-bottom: 2px solid #FFFFFF;
             padding-bottom: 9px;
             
         }
}
}
.texts .row div:first-of-type{
  padding-right: 2px!important;
}
.texts .row div:last-of-type{
  padding-left: 2px!important;
   @include maxlarge{
            font-size: 16px;
         }
         @include maxmediam{
           font-size: 14px;
         }
         @include maxsmall{
           font-size:17px
         }
         @include maxmobile{
         }
         @include maxtiny{
           font-size:15px
         }
}
.texts .row{
  margin-bottom: 30px;
  @include maxsmall{
            margin-bottom: 20px;
         }
}
.icons{
  background-color: white;
  width:75%;
    text-align: center;
    border-radius: 50%;
    height: 35px;
    line-height: 2;
    margin-bottom: 40px;
          @include maxlarge{
            height: 32px;  
            width:85%;
         }
         @include maxmediam{
         }
         @include maxsmall{
            height: 32px;  
            width:65%;
            margin-bottom: 20px;
         }
         @include maxmobile{
         }
         @include maxtiny{
           width:85%;
         }
    svg{
      transform: scale(1.2);
               @include maxlarge{
              transform: scale(1);
         }
         @include maxmediam{
         }
         @include maxsmall{
         }
         @include maxmobile{
         }
         @include maxtiny{
         }
    }
}


</style>