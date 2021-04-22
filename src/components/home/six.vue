<template>
    <div class="six">
      <div class="container">
          <div class="six-text" data-aos="fade-down">
            <p class="six-tittle">
                <span>Mysell</span>envo Services
            </p>
            <p class="six-desc">
                Bespoke multichannel inventory management system to increase staff efficiency and automate
 manual task to increase scales and profits
            </p>
        </div>
        <div class="six-card">
            <div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card">
      <img src="@/assets/home/six/aaaa.png" class="card-img-top extrem" >
      <div class="card-body">
        <h5 class="card-title">Integration</h5>
        <p class="card-text">Integrate disparate business systems and 
processes</p>
<div class="list">
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Conquer administration.</p></div>
    </div>
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Listings.</p></div>
    </div>
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Order and inventory management. </p></div>
    </div>
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Invoicing.</p></div>
    </div>
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Shipping.</p></div>
    </div>
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Custom reporting.</p></div>
    </div>
</div>
<input type="submit" value="Request Access">
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src="@/assets/home/six/aa.png" class="card-img-top" >
      <div class="card-body">
        <h5 class="card-title">Accuracy</h5>
        <p class="card-text">Accurate profit analytics for online sellers</p>
        <div class="list">
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Live dashboard.</p></div>
    </div>
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >PPC optimization.</p></div>
    </div>
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Restock alerts.</p></div>
    </div>
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Exact view of your key
performance indicators.</p></div>
    </div>
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Product stock analysis.</p></div>
    </div>
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Profit analysis.</p></div>
    </div>
</div>
<input type="submit" value="Request Access">
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src="@/assets/home/six/aaa.png" class="card-img-top" >
      <div class="card-body">
        <h5 class="card-title">Full control</h5>
        <p class="card-text">Combine all of your selling processes in 
one place</p>
<div class="list">
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Custom api integration.</p></div>
    </div>
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >add web service functionality to 
existing applications.</p></div>
    </div>
    <div class="row">
        <div class="col-2"><img src="@/assets/home/six/a.png" alt=""></div>
        <div class="col-10"><p >Synchronize data across applications.</p></div>
    </div>
</div>
<input type="submit" value="Request Access">
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
    name:"six",
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
.six-tittle{
             font-weight: 600;
         font-size: 26px;
         position: relative;
         margin: 0px auto 20px;
         padding-top: 80px;
         width: 280px;
           overflow: hidden;
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
              @include maxlarge{
             bottom: -8px;
         }
         @include maxmobile{
           bottom: -7px;
         }
             }
             &::before{
                 left: 27%;
          @include maxlarge{
         left: 24%;
         }
         @include maxmediam{
                      left: 24%;
         }
         @include maxsmall{
          left: 38%
         }
         @include maxmobile{
           left: 40%
         }
         @include maxtiny{
           left: 40%
         }
             }
             &::after{
                 left: 32%;
                 @include maxlarge{
                  left: 30%;
         }
         @include maxmediam{
         }
         @include maxsmall{
           left: 43%
         }
         @include maxmobile{
           left: 45%
         }
         @include maxtiny{
           left: 46%
         }
             }
         span{
             border-bottom: 2px solid #1D8793;
             padding-bottom: 9px;
             
         }
}

.six{
    background-color: #F7F8FA;
}
.six-desc{
    width:70%;
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


.six .card-img-top {
    width: 150px!important;
    height: 120px!important;
    margin: 60px auto 30px;
    @include maxlarge{
    width: 130px!important;
    height: 110px!important;
    margin: 40px auto 20px;
    }
    @include maxmediam{
        width: 100px!important;
    height: 90px!important;
    margin: 30px auto 10px;
    }
    @include maxsmall{
    }
    @include maxmobile{
    }
    @include maxtiny{
        width: 70px!important;
    }
}
.extrem{
    width: 200px!important;
    @include maxmediam{
        width: 140px!important;
    height: 90px!important;
    }
    @include maxtiny{
        width: 100px!important;
    }
}
.six .card-body{
    @include maxlarge{
    padding: 10px!important;
    }
    @include maxmediam{
        padding: 7px!important;
    }
    @include maxsmall{
        padding: 20px!important;
    }
    @include maxmobile{
    }
    @include maxtiny{
         padding: 10px!important;
    }
}

.six .card{
    padding: 10px;
    position: relative;
    border-radius: 10px!important;
    background-color: #ffffff;
    height: 770px;
    overflow: hidden;
    @include maxlarge{
    height: 700px;
    }
    @include maxmediam{
        padding: 0px;
        height: 630px;
    }
    @include maxsmall{
        width: 63%;
        margin: auto;
        height: 600px;
    }
    @include maxmobile{
    }
    @include maxtiny{
        width: 73%;
    }
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: #1D8793;
    }
    .card-title{
        color: #1D8793;
        text-align: center;
        font-size: 24px;
        font-weight: 600;
    }
    .card-text{
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
    input{
        text-align: center;
        width: 50%;
        font-size: 13px;
        padding: 10px 20px;
        border-radius: 10px;
        border: 2px solid #1D8793;
        background: transparent;
        display: block;
        margin: 10px auto;
        position: absolute;
        bottom: 15px;
        left: 50%;
        transform: translateX(-50%);
        color: #1D8793;
         @include maxlarge{
    }
    @include maxmediam{
        width: 60%;
        font-size: 12px;
        padding: 5px 15px;
    }
    @include maxsmall{
        width: 50%;
        font-size: 13px;
        padding: 10px 20px;
    }
    @include maxmobile{
    }
    @include maxtiny{
        font-size: 11px;
        padding: 7px 15px;
    } 
        &:hover{
            background-color: #1D8793;
            color: white;
            font-weight: 600;
            transition: all .5s ease-in-out;
        }
    }
}

.list .row > div > p{
    transform: translateY(7px);
}
.list{ 
    margin-bottom: 30px;
        .row{
    margin-bottom: 10px;
    @include maxsmall{
      margin-bottom: 5px;  
    }
    div p{
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
    div img{
             @include maxlarge{
    transform: scale(.9) translateY(-2px);
    }
    @include maxmediam{
    }
    @include maxsmall{
        transform: scale(.9) translateY(-6px);
    }
    @include maxmobile{
        transform: scale(.9) translateY(-4px);
    }
    @include maxtiny{
        transform: scale(.7) translateY(-4px);
    } 
    }
    }
}
</style>