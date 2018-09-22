<template>
  <q-modal v-model="opened" content-css="padding: 20px">
    <p>Choisir une taille</p>
    <q-select v-model="selectedSize" :options="selectOptions"/>
    <q-btn color="amber" @click="opened = false" label="Annuler"/>
    <q-btn color="amber" @click="opened = false" label="Confirmer"/>
    {{selectedSize}}
  </q-modal>
</template>

<script>
export default {
  name: 'selectItemModal',
  data () {
    return {
      opened: false,
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
  }
}
</script>

<style>

</style>
