<template>
  <q-page>
    filters
    <div class="row">
      <shopitem v-for="i in 10" :key="i"></shopitem>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round color="primary" @click="goToBasket" icon="shopping_cart"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
import shopitem from '../components/shopitem'
export default {
  name: 'PageShop',
  methods: {
    goToBasket () {
      this.$router.push('/basket')
    }
  },
  components: {
    shopitem
  }
}
</script>
