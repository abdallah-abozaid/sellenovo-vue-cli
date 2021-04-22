<template>
    <div class="service">
        <service-first/>
        <service-second/>
        <myfooter/> 
    </div>
</template>
<script>
import Myfooter from '../components/footer/myfooter.vue'
import serviceFirst from '../components/service/service-first.vue'
import ServiceSecond from '../components/service/service-second.vue'
export default {
  components: { serviceFirst, ServiceSecond, Myfooter },
    name:"service",
}
</script>
<style lang="scss">

</style>