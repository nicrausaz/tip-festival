<template>
  <q-card style="width: 250px;" class="q-pa-sm q-ma-lg">
  <q-card-media>
    <img src="~assets/sad.svg">
  </q-card-media>
  <q-card-title>
    Nom
  </q-card-title>
  <q-card-main>
    <p>Catégorie</p>
    <p class="text-faded">Description</p>
  </q-card-main>
  <q-btn color="amber" class="float-right" @click="openModalSelector" label="Acheter" icon="add_shopping_cart" size="sm" />
</q-card>
</template>

<script>
export default {
  name: 'shopcard',
  methods: {
    openModalSelector () {
      console.log('clicked id:')
    }
  }
}
</script>

<style>
</style>
