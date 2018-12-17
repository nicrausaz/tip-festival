<template>
  <q-page v-if="hasContent">
    <div>
      <q-card class="q-ma-lg">
        <q-card-title class="bg-amber">
          {{$store.state.moduleLanguage.translations.shopbag_content}}
          <q-btn round flat icon="more_vert" slot="right">
            <q-popover>
              <q-list link class="no-border">
                <q-item v-close-overlay>
                  <q-item-main label="Vider le panier" @click.native="clearBasket"/>
                </q-item>
              </q-list>
            </q-popover>
          </q-btn>
        </q-card-title>
        <q-card-main>
          <q-list separator class="q-ma-sm">
            <q-item v-for="item in $store.state.moduleShop.shopbag_items" :key="item.id + item.size_value" multiline>
              <q-item-side avatar>
                <img src="assets/sad.svg" height="30px">
              </q-item-side>
              <q-item-main>
                <q-item-tile label>{{item.name}}</q-item-tile>
                <q-item-tile sublabel>
                  {{item.price}} CHF
                  {{$store.state.moduleLanguage.translations.shop_size}}: {{item.size_value}}
                </q-item-tile>
              </q-item-main>
              <q-item-side>
                <q-btn icon="remove" @click="decrementItem(item.id, item.size_value)" :disabled="item.quantity <= 1"></q-btn>
              </q-item-side>
                <q-btn :label="item.quantity" disabled></q-btn>
              <q-item-side>
                <q-btn icon="add" @click="incrementItem(item.id, item.size_value)" :disabled="item.quantity >= 10"></q-btn>
              </q-item-side>
              <q-item-side right>
                <q-btn icon="remove_shopping_cart" @click="removeItem(item.id, item.size_value)" color="red">
                  <q-tooltip>{{$store.state.moduleLanguage.translations.shopbag_remove}}</q-tooltip>
                </q-btn>
              </q-item-side>
            </q-item>
          <q-item-separator/>
        </q-list>
        </q-card-main>
      </q-card>
    </div>
    <div>
      <q-card class="q-ma-lg">
        <q-card-title class="bg-amber">
          {{$store.state.moduleLanguage.translations.user_adress}}
        </q-card-title>
        <q-card-main>
          <q-field icon="person" label="Informations personnelles">
            <q-input type="text" float-label="Nom" :value="$store.state.moduleShop.order_address_infos.name" v-model="orderInfos.name" @input="updateAdressInfos"/>
            <q-input type="text" float-label="Prénom" :value="$store.state.moduleShop.order_address_infos.fsname" v-model="orderInfos.fsname" @input="updateAdressInfos"/>
            <q-input type="email" :float-label="$store.state.moduleLanguage.translations.user_email" :value="$store.state.moduleShop.order_address_infos.email" v-model="orderInfos.email" @input="updateAdressInfos"/>
          </q-field>
          <br>
          <q-field icon="home" :label="$store.state.moduleLanguage.translations.user_adress">
            <q-input type="text" float-label="Rue & No" :value="$store.state.moduleShop.order_address_infos.adress" v-model="orderInfos.adress" @input="updateAdressInfos"/>
            <q-input type="text" float-label="NPA" :value="$store.state.moduleShop.order_address_infos.npa" v-model="orderInfos.npa" @input="updateAdressInfos"/>
            <q-input type="text" float-label="Localité" :value="$store.state.moduleShop.order_address_infos.city" v-model="orderInfos.city" @input="updateAdressInfos"/>
          </q-field>
          <br>
          <q-field icon="paid" :label="$store.state.moduleLanguage.translations.user_adress">
            <q-radio val="0" :value="$store.state.moduleShop.order_address_infos.paid" v-model="orderInfos.paid" color="amber" label="Facture" @input="updateAdressInfos"/>
            <q-radio val="1" :value="$store.state.moduleShop.order_address_infos.paid" v-model="orderInfos.paid" color="amber" label="Nature" style="margin-left: 10px" @input="updateAdressInfos"/>
          </q-field>
        </q-card-main>
        </q-card>
    </div>
    <div>
      <q-card class="q-ma-lg">
        <q-card-title class="bg-amber">
          {{$store.state.moduleLanguage.translations.shopbag_recap}}
        </q-card-title>
        <q-card-main>
          <q-list class="q-ma-sm">
            <q-item>
              <q-item-main>
                <q-item-tile label>{{itemsPrice}} CHF</q-item-tile>
                <q-item-tile sublabel>{{$store.state.moduleLanguage.translations.shopbag_total_products}}</q-item-tile>
              </q-item-main>
              <q-item-side right icon="shopping_basket" />
            </q-item>
            <q-item>
              <q-item-main>
                <q-item-tile label>{{shippingFee.toFixed(2)}} CHF</q-item-tile>
                <q-item-tile sublabel>{{$store.state.moduleLanguage.translations.shopbag_shipping}}</q-item-tile>
              </q-item-main>
              <q-item-side right icon="local_shipping" />
            </q-item>
            <q-item-separator />
            <q-item>
              <q-item-main>
                <q-item-tile label><b>{{fullPrice}} CHF</b></q-item-tile>
                <q-item-tile sublabel>{{$store.state.moduleLanguage.translations.shopbag_total}}</q-item-tile>
              </q-item-main>
            </q-item>
          </q-list>
          <q-btn class="q-ma-sm" color="primary" :label="$store.state.moduleLanguage.translations.confirm" @click="confirmBasket"/>
        </q-card-main>
        </q-card>
    </div>
  </q-page>
  <q-page v-else>
      <div class="fixed-center text-center">
      <p>
        <img src="~assets/sad.svg" style="width:30vw;max-width:150px;">
      </p>
      <p class="text-faded"><strong>{{$store.state.moduleLanguage.translations.shopbag_empty}}</strong></p>
      <q-btn color="amber" style="width:200px;" @click="$router.push('/shop')">{{$store.state.moduleLanguage.translations.shop_backToShop}}</q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      shippingFee: 5,
      orderInfos: {
        name: '',
        fsname: '',
        adress: '',
        npa: '',
        city: '',
        email: ''
      }
    }
  },
  created () {
    this.orderInfos = this.$store.state.moduleShop.order_address_infos
  },
  methods: {
    removeItem (id, size) {
      let params = {
        id: id,
        size_value: size
      }
      this.$store.dispatch('moduleShop/removeItemFromBasket', params)
    },
    decrementItem (id, size) {
      let params = {
        id: id,
        size_value: size
      }
      this.$store.commit('moduleShop/decrementItemQuantity', params)
    },
    incrementItem (id, size) {
      let params = {
        id: id,
        size_value: size
      }
      this.$store.commit('moduleShop/incrementItemQuantity', params)
    },
    clearBasket () {
      this.$store.dispatch('moduleShop/clearBasket')
      this.$router.push('/shop')
    },
    updateAdressInfos () {
      this.$store.commit('moduleShop/setAdressInfos', this.orderInfos)
    },
    confirmBasket () {
      // POST basket content & address (store action)
      this.$store.dispatch('moduleShop/confirmOrder')
    }
  },
  computed: {
    hasContent () { return this.$store.getters['moduleShop/hasBasketProducts'] },
    itemsPrice () { return this.$store.getters['moduleShop/getTotalPrice'].toFixed(2) },
    fullPrice () { return (this.shippingFee + this.$store.getters['moduleShop/getTotalPrice']).toFixed(2) }
  }
}
</script>
