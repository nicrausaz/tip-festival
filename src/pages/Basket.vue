<template>
  <q-page>
    <q-list separator>
      <q-list-header>Panier</q-list-header>
      <q-item v-for="item in $store.state.moduleShop.shopbag_items" :key="item.id" multiline>
        <q-item-side image="assets/sad.svg" />
        <q-item-main>
          <q-item-tile label>{{item.name}}</q-item-tile>
          <q-item-tile sublabel>
            {{item.description}}
          </q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-btn icon="remove_shopping_cart" label="Retirer" @click="removeItem(item.id)" />
            <!-- <q-select v-model="selectedQuantity" :options="optionsQuantity" /> -->
          <!-- v-model="model" -->
          <!-- placeholder="Quantité" -->
        </q-item-side>
      </q-item>
      <q-item-separator/>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      selectedQuantity: 1
      // optionsQuantity: Array.from(Array(10).keys())
    }
  },
  watch: {
    selectedQuantity () {
      console.log('quantity has changed')
      // TODO: commit change to store
    }
  },
  methods: {
    removeItem (id) {
      console.log('remove ' + id)
      // remove from basket id
    }
  }
}
</script>
