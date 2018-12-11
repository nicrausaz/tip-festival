<template>
 <q-page class="fixed-center q-mt-xl">
   <q-card>
    <q-card-title class="bg-amber text-center">{{$store.state.moduleLanguage.translations.shop_FindAnOrder}}</q-card-title>
      <q-card-main>
        <div class="row q-pa-md">
          <div class="col">
            <q-field icon="mail">
              <q-input type="email" :float-label="$store.state.moduleLanguage.translations.user_email" v-model="infos.email" @keyup.enter="getOrder"/>
            </q-field>
          </div>
          <div class="col">
            <q-field icon="confirmation_number">
              <q-input type="number" :float-label="$store.state.moduleLanguage.translations.shop_OrderNr" v-model="infos.orderId" @keyup.enter="getOrder"/>
            </q-field>
          </div>
        </div>
        <q-card-separator />
        <div class="q-mt-md" v-if="$store.state.moduleOrder.order_infos_content.id">
          <q-collapsible icon="info" popup :label="'Informations'" :opened="true">
            {{$store.state.moduleOrder.order_infos_content.name}}
            {{$store.state.moduleOrder.order_infos_content.fsname}}
            {{$store.state.moduleOrder.order_infos_content.email}}
            paiement: {{$store.state.moduleOrder.order_infos_content.paid_date}}
            staut: {{$store.state.moduleOrder.order_infos_content.status}}
          </q-collapsible>
          <q-collapsible icon="home" popup :label="'Adresse'" :opened="true">
            {{$store.state.moduleOrder.order_infos_content.address}}
            {{$store.state.moduleOrder.order_infos_content.npa}}
            {{$store.state.moduleOrder.order_infos_content.city}}
          </q-collapsible>
          <q-collapsible icon="format_list_bulleted" popup :label="$store.state.moduleLanguage.translations.shop_orderContent" :opened="true">
            <q-list highlight inset-separator>
              <q-item v-for="item in $store.state.moduleOrder.order_infos_content.articles" :key="item.id">
                <q-item-side avatar="statics/icons/icon-256x256.png" />
                <q-item-main :label="item.name" label-lines="1" />
                <q-item-side :stamp="item.quantity" />
                <q-item-side :stamp="item.size" />
                <q-item-side right :stamp="item.price + ' CHF'" />
              </q-item>
            </q-list>
            <br>
            <q-card-separator />
            Total: {{itemsPrice}}
          </q-collapsible>
        </div>
        <div v-else>
          <p class="text-center q-pt-md"><b>{{$store.state.moduleLanguage.translations.shop_getInYourInfos}}</b></p>
        </div>
        <q-card-separator />
        <q-card-actions>
          <q-btn icon="search" label="Rechercher" color="amber" @click="getOrder"/>
        </q-card-actions>
        </q-card-main>
    </q-card>
 </q-page>
</template>

<script>
import { Notify } from 'quasar'
export default {
  name: 'PageOrderInfos',
  data () {
    return {
      infos: {
        email: '',
        orderId: null
      }
    }
  },
  created () {
    this.$store.dispatch('moduleOrder/clearOrder')
  },
  methods: {
    getOrder () {
      if (this.infos.email && this.infos.orderId) {
        let params = {
          id: this.infos.orderId,
          email: this.infos.email
        }
        this.$store.dispatch('moduleOrder/getOrder', params)
      } else {
        Notify.create({
          message: this.$store.state.moduleLanguage.translations.shop_getInYourInfos,
          color: 'warning',
          textColor: 'black',
          icon: 'warning',
          position: 'top'
        })
      }
    }
  },
  computed: {
    itemsPrice () { return this.$store.getters['moduleOrder/getTotalPrice'] } // .toFixed(2)
  }
}
</script>
