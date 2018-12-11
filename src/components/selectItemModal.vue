<template>
  <q-modal v-model="$store.state.moduleSizeModal.modal_open" content-css="padding: 20px">
    <p>Choisir une taille</p>
    <q-select v-model="selectedSize" :options="$store.state.moduleSizeModal.available_sizes" class="q-ma-md"/>
    <q-btn color="amber float-left" size="sm" @click="exit" :label="$store.state.moduleLanguage.translations.cancel"/>
    <q-btn color="amber float-right" size="sm" @click="addToBasket" :label="$store.state.moduleLanguage.translations.confirm"/>
  </q-modal>
</template>

<script>
import { Notify } from 'quasar'
export default {
  name: 'selectItemModal',
  data () {
    return {
      selectedSize: {}
    }
  },
  methods: {
    exit () {
      this.selectedSize = {}
      this.$store.dispatch('moduleSizeModal/closeModal')
    },
    addToBasket () {
      if (this.selectedSize.value) {
        let params = {
          id: this.$store.state.moduleSizeModal.item_id,
          size_id: this.selectedSize.value,
          size_value: this.selectedSize.label
        }
        if (this.$store.state.moduleShop.shopbag_items.some(x => x.id === params.id && x.size_value === params.size_value)) {
          // item (id + size) is already in basket
          this.$store.dispatch('moduleShop/incrementItemQuantityInBasket', params)
          this.exit()
        } else {
          // Add item to basket
          this.$store.dispatch('moduleShop/addItemToBasket', params)
          this.exit()
        }
      } else {
        Notify.create({
          message: 'Merci de chosir une taille',
          color: 'warning',
          textColor: 'black',
          icon: 'warning',
          position: 'top'
        })
      }
    }
  }
}
</script>
