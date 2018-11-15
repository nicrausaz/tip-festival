<template>
 <q-page class="fixed-center q-mt-xl">
   <q-card>
    <q-card-title class="bg-amber text-center">{{$store.state.moduleLanguage.translations.FindAnOrder}}</q-card-title>
      <q-card-main>
        <div class="row q-pa-md">
          <div class="col">
            <q-field icon="mail">
              <q-input type="email" :float-label="$store.state.moduleLanguage.translations.email" v-model="infos.email"/>
            </q-field>
          </div>
          <div class="col">
            <q-field icon="confirmation_number">
              <q-input type="number" :float-label="$store.state.moduleLanguage.translations.OrderNr" v-model="infos.orderId"/>
            </q-field>
          </div>
        </div>
        <q-card-separator />
        <div class="q-mt-md">
          <div v-if="loaded">
            <q-collapsible icon="home" popup :label="'Adresse'" :opened="true">
              <table>
                <tr>
                  <td>Route</td>
                  <td>Route</td>
                </tr>
              </table>
              Route
              NPA VILLE

            </q-collapsible>
            <q-collapsible icon="format_list_bulleted" popup :label="$store.state.moduleLanguage.translations.orderContent" :opened="true">
              <q-list highlight inset-separator>
                <q-item>
                  <q-item-side avatar="statics/icons/icon-256x256.png" />
                  <q-item-main label="Article Name" label-lines="1" />
                   <q-item-side stamp="2x" />
                   <q-item-side stamp="Taille L" />
                  <q-item-side right stamp="10 CHF" />
                </q-item>
              </q-list>
              <br>
              <q-card-separator />
              Total
            </q-collapsible>
          </div>
          <div v-else>
            Entrez vos informations
          </div>
        </div>
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
      },
      loaded: true
    }
  }
}
</script>

<style>

</style>
