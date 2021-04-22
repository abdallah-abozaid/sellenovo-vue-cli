<template>
    <div class="products-second">
        <div class="container">
<div class="row row-cols-1 row-cols-md-2">

  <div class="col mb-4" v-for="myproduct in myproducts" v-bind:key="myproduct.id">
    <div class="card">
      <div class="card-body">
            <div class="row">
      <div class="col-3">
        <img :src="myproduct.img" alt="">
      </div>
      <div class="col-9">
        <div class="mycard">
          <span class="name-product">{{myproduct.tittle}}</span>
          <span class="price">{{myproduct.price}}</span>
          <div class="clear"></div>
          <p>{{myproduct.description}}</p>
          <input type="number" class="number-product" value="1">
          <input type="submit" value="Add To Card" class="send-product">
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</div>
<div class="mypagenation">
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</div>
</div>

    </div>
</template>
<script>
import myobject from "@/json/products.json";
export default {
    name:"products-second",
    data:function(){
      return{
        myproducts:myobject
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
//---------------------------------------------------------------------
.clear{
  clear: both;
}
.products-second{
  margin-top: 40px;
}
.products-second .card-body img{
  width: 100%;
  height: 100%;
  @include maxmediam{
    font-size:14px ;
  }
}
.card-body{
  @include maxmediam{
    padding:10px!important ;
  }
}
.card-body .row div:first-of-type{
  @include maxmediam{
    padding-right:5px ;
  }
}
.products-second .mycard {
.name-product{
  float: left;
  width: 49%;
  font-size: 20px;
  font-weight: bold;
}
.price{
  float: right;
  width: 49%;
  font-size: 16px;
  color: #1D8793;
  text-align: right;
}
.number-product{
  width: 60px;
}
p{
  @include maxlarge{
    font-size:14px ;
  }
  @include maxmediam{
   font-size: 12px;
  }
}
.send-product{
  font-size: 13px;
  padding: 5px 10px;
  background-color: #1D8793;
  color: white;
  border: none;
  border-radius: 20px;
  margin-left: 5px;
  font-family: 'Lobster', cursive;
  border: 2px solid white;
  &:hover{
    background-color: white;
    color: #1D8793;
    border: 2px solid #1D8793;
    transition: all .5s linear;
  }
}

.mypagenation {
margin-bottom: 50px;
}

}
</style>