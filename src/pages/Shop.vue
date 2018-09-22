<template>
  <q-page>
    filters
    <div class="row">
      <shopitem v-for="i in 10" :key="i"></shopitem>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round size="lg" color="primary" @click="goToBasket" icon="shopping_cart"/>
    </q-page-sticky>
    <selectItemModal></selectItemModal>
  </q-page>
</template>

<script>
import shopitem from '../components/shopitem'
import selectItemModal from '../components/selectItemModal'
export default {
  name: 'PageShop',
  methods: {
    goToBasket () {
      this.$router.push('/basket')
    }
  },
  components: {
    shopitem,
    selectItemModal
  }
}
</script>
