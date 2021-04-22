<template>
    <div class="myheader ">


<nav class="container navbar navbar-expand-lg navbar-light  ">
  <a class="navbar-brand" href="#"><img src="@/assets/header/logo.png" alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item ">
           <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Service">Service</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/Products">Products</router-link>
      </li>
      <li class="nav-item">
       <router-link class="nav-link" to="/Contact">Contact US</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#"  > <fa-icon icon="phone-alt"/> 85224778554</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <p class="form-control mr-sm-2" >schedule a demo</p>
    </form>
  </div>
</nav>

<router-view />
    </div>
</template>
<script>
export default {
    name:"myheader",
    created(){

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
@mixin minmediam {
  @media (min-width: 992px) {
    @content;
  }
}


//----------------------------------------------------------------------------------
.nav-item{
  border-bottom: 1px solid transparent ;
  border-radius: 10px;
  @include minmediam{
       &:hover{
    border-bottom: 1px solid #1D8793;
    transition: all .5s linear;
   
  }
      }

}

.navbar-light .navbar-nav .nav-link {
    color: #32353C;
    margin: 0px 10px;
    font-weight: bold!important;
    font-size: 16px;
    @include maxlarge{
      margin: 0px 5px;
      font-size: 15px;
    }
    @include maxmediam{
      text-align: center;
      width: 28%;
      margin: auto;
      border-bottom:1px solid #10e3fa27;
      padding-bottom: 0px;
      padding-top: 20px;
      border-radius: 10px;
      &:hover{
        width: 70%;
        transition: all 1s linear;
        border-color: #1D8793;
        border-radius: 10px;
      }
    }
}
.navbar-light .navbar-nav :last-child .nav-link {
@include maxmediam{
      width: 45%;
      &:hover{
        width: 70%;
        transition: all 1s linear;
        border-color: #1D8793;
        border-radius: 10px;
      }
    }
}
.form-inline .form-control {
    margin: 0px;
    font-size: 13px;
    padding: 5px 30px;
    color: #1D8793;
    text-align: center;
    border-color: #1D8793;
    @include maxlarge{
      font-size: 12px;
    padding: 5px 20px;
    margin: auto!important;
    display: block!important;
    }
}
.form-inline .form-control:hover{
    animation: fade .4s linear infinite alternate;
cursor:alias;
}
@keyframes fade{
    0%{
        border: 1px solid transparent;
    }
    100%{
        border: 1px solid #1D8793;
    }
}
.form-inline{
    margin-left: 10px;
}
path {
    fill: #1D8793!important;
}
</style>