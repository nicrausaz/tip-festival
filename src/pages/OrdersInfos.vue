<template>
 <q-page class="flex flex-center">
   <q-card>
    <q-card-title>
      Trouver votre commande
    </q-card-title>
    <q-card-separator />
      <q-card-main>
        <q-field icon="mail" label="Email" helper="Email" error-label="Veuillez entrer une adresse valide" count>
          <q-input type="email" v-model="infos.email"/>
        </q-field>
        <q-field icon="id" label="Num de commande" helper="Email" error-label="Veuillez entrer une adresse valide" count>
          <q-input type="email" v-model="infos.email"/>
        </q-field>
      </q-card-main>
    </q-card>
 </q-page>
</template>

<script>
export default {
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
