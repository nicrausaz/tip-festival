<template>
  <q-card style="width: 250px;" class="q-pa-sm q-ma-lg">
    <q-card-media>
      <img src="~assets/sad.svg">
    </q-card-media>
    <q-card-title>
      <b>{{data.name}}</b>
    </q-card-title>
    <q-card-main>
      <p>{{data.price}} CHF</p>
      <p class="text-faded">{{data.description}}</p>
    </q-card-main>
    <q-btn color="amber" class="float-right" @click="openModalSelector" :label="$store.state.moduleLanguage.translations.buy" icon="add_shopping_cart" size="sm"/>
  </q-card>
</template>

<script>
export default {
  name: 'shopcard',
  props: ['data'],
  methods: {
    openModalSelector () {
      let params = {
        open: true,
        id: this.data.id
      }
      this.$store.dispatch('moduleSizeModal/openModal', params)
    }
  }
}
</script>

<style>
</style>
