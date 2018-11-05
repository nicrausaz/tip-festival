<template>
  <q-modal v-model="$store.state.moduleSizeModal.modal_open" content-css="padding: 20px">
    <p>Choisir une taille</p>
    <q-select v-model="selectedSize" :options="selectOptions" class="q-ma-md"/>
    <q-btn color="amber float-left" size="sm" @click="exit" label="Annuler"/>
    <q-btn color="amber float-right" size="sm" @click="addToBasket" label="Confirmer"/>
  </q-modal>
</template>

<script>
import { Notify } from 'quasar'
export default {
  name: 'selectItemModal',
  data () {
    return {
      selectedSize: null,
      selectOptions: [
        {
          label: 'S',
          value: 'S'
        },
        {
          label: 'M',
          value: 'M'
        },
        {
          label: 'L',
          value: 'L'
        },
        {
          label: 'XL',
          value: 'XL'
        }
      ]
    }
  },
  methods: {
    exit () {
      let params = {
        open: false,
        id: null
      }
      this.$store.dispatch('moduleSizeModal/openModal', params)
    },
    addToBasket () {
      if (this.selectedSize) {
        let params = {
          id: this.$store.state.moduleSizeModal.item_id,
          selectedSize: this.selectedSize
        }
        if (this.$store.state.moduleShop.shopbag_items.some(x => x.id === params.id && x.size === params.selectedSize)) {
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
  },
  components: {
    Notify
  }
}
</script>
