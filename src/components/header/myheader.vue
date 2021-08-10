<template>
    <div class="myheader ">


<nav class=" navbar navbar-expand-lg navbar-light  ">
  <div class="container">
  <a class="navbar-brand" href="#"><img src="@/assets/header/logo.png" alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
      <li class="nav-item ">
           <router-link class="nav-link" to="/" axact>Home</router-link>
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
body{
  padding-top: 40px;
}
.myheader > nav{
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 2px 2px 10px grey;
  width: 100%;
  z-index: 100;
  background-color: white;
}

.navbar-light .navbar-nav .nav-link {
    color: black!important;

}
.navbar-light .navbar-nav .nav-link {
    transition: all .2s linear;
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
.router-link-exact-active  {
border-bottom:4px solid #028291;
background-color: #1d87936c;
color: white!important;
}
.navbar-light .navbar-nav .nav-item:hover .nav-link {
border-bottom:4px solid #028291;
background-color: #1d87936c;
color: white!important;
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