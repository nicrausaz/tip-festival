<template>
 <q-page class="flex flex-center">
   <q-card>
    <q-card-title class="amber">{{$store.state.moduleLanguage.translations.FindAnOrder}}</q-card-title>
    <q-card-separator />
      <q-card-main>
        <q-field icon="mail" :label="$store.state.moduleLanguage.translations.email">
          <q-input type="email" v-model="infos.email"/>
        </q-field>
        <q-field icon="confirmation_number" :label="$store.state.moduleLanguage.translations.OrderNr">
          <q-input type="number" v-model="infos.orderId"/>
        </q-field>
      <q-card-separator />
      Entrez vos infos...
      </q-card-main>
    </q-card>
 </q-page>
</template>

<script>
export default {
  name: 'PageOrderInfos',
  data () {
    return {
      infos: {
        email: '',
        orderId: null
      }
    }
  }
}
</script>

<style>

</style>
