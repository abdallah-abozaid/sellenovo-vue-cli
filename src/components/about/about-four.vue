<template>
    <div class="about-four">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <img src="@/assets/about/four/abd.jpg" alt="">
                </div>
                <div class="col-md-6">
                    <p><span>Business Consultancy</span> for Your Business Growth.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec est arcu. Maecenas semper tortor.</p>
                    <p>In elementum in risus sed commodo. Phasellus nisi ligula, luctus at tempor vitae, placerat at ante. Cras sed consequat justo. Curabitur laoreet eu est vel convallis.</p>
                    <input type="submit" value="Know More">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"about-four",
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
.about-four{
    margin: 100px 0px 50px;
     @include maxsmall{
text-align: center;
         }
}
.about-four img{
width: 100%;
@include maxsmall{
    width: 70%;
    margin: auto;
    display: block;
         }
         @include maxmobile{
         }
}
.about-four p:first-of-type{
    font-size: 35px;
    @include maxlarge{
           font-size: 30px;
         }
         @include maxmediam{
             font-size: 22px;
         }
         @include maxsmall{
             font-size: 22px;
             margin-bottom: 10px;
         }
         @include maxmobile{
             font-size: 23px;
         }
    span{
        font-weight: bold;
    }
}
.about-four p{
    margin-bottom: 30px;
    @include maxlarge{
           margin-bottom: 20px;
         }
         @include maxmediam{
         }
         @include maxsmall{
             width: 90%;
             margin: auto;
             text-align: center;
         }
         @include maxmobile{
         }
}
.about-four p:not(:first-of-type){
    @include maxlarge{
           
         }
         @include maxmediam{
             font-size: 13px;
                 margin-bottom: 10px;
         }
         @include maxsmall{
             margin-bottom: 4px;
             font-size: 12px;
           width: 95%;
         }
         @include maxmobile{
         }
}
.about-four input{
    font-size: 16px;
    padding: 5px 30px;
    margin-top: 30px;
    border: 2px solid #F14836;
    color: #F14836;
    border-radius: 5px;
    font-family: 'Lobster', cursive;
    @include maxlarge{
           padding: 2px 22px;
         }
         @include maxmediam{
                 margin-top: 10px;
         }
         @include maxsmall{
         
         }
         @include maxmobile{
         }
    &:hover{
         border: 2px solid #FFFFFF;
    background-color: #F14836;
    color: #FFFFFF;
    transition:all .5s linear;
    }
}

</style>