<template>
    <div class="products">
       <products-first/>
       <products-second/>
       <myfooter/>
    </div>
</template>
<script>
import Myfooter from '../components/footer/myfooter.vue'
import productsFirst from '../components/products/products-first.vue'
import ProductsSecond from '../components/products/products-second.vue'
export default {
  components: { productsFirst, ProductsSecond, Myfooter },
    name:"products",
}
</script>
<style lang="scss">

</style>