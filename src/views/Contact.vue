<template>
    <div class="contact">
       <contact-first/>
       <contact-second/>
       <myfooter/>
    </div>
</template>
<script>
import contactFirst from '../components/contact/contact-first.vue'
import ContactSecond from '../components/contact/contact-second.vue'
import Myfooter from '../components/footer/myfooter.vue'
export default {
  components: { contactFirst, ContactSecond, Myfooter },
    name:"contact",
}
</script>