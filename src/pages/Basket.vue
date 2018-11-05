<template>
  <q-page v-if="hasContent">
    <div class="row">
      <div class="col-8">
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
              <q-item v-for="item in $store.state.moduleShop.shopbag_items" :key="item.id" multiline>
                <q-item-side avatar>
                  <img src="assets/sad.svg" height="30px">
                </q-item-side>
                <q-item-main>
                  <q-item-tile label>{{item.name}}</q-item-tile>
                  <q-item-tile sublabel>
                    {{item.price}} CHF
                    Taille: {{item.size}}
                    Quantité: {{item.quantity}}
                  </q-item-tile>
                </q-item-main>
                <q-item-side right>
                  <q-btn icon="remove_shopping_cart" @click="removeItem(item.id, item.size)">
                    <q-tooltip>{{$store.state.moduleLanguage.translations.shopbag_remove}}</q-tooltip>
                  </q-btn>
                    <!-- <q-select v-model="selectedQuantity" :options="optionsQuantity" />
                v-model="model"
                placeholder="Quantité" -->
                </q-item-side>
            </q-item>
          <q-item-separator/>
        </q-list>
          </q-card-main>
        </q-card>
      </div>
      <div class="col-4">
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
            <q-btn class="q-ma-sm" color="primary" :label="$store.state.moduleLanguage.translations.confirm" @click="confirmBasket" />
          </q-card-main>
         </q-card>
      </div>
    </div>
  </q-page>
  <q-page v-else>
      <div class="fixed-center text-center">
      <p>
        <img src="~assets/sad.svg" style="width:30vw;max-width:150px;">
      </p>
      <p class="text-faded"><strong>Panier vide</strong></p>
      <q-btn color="amber" style="width:200px;" @click="$router.push('/shop')">Retour à la boutique</q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      selectedQuantity: 1,
      shippingFee: 5.90
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
    removeItem (id, size) {
      let params = {
        id: id,
        size: size
      }
      this.$store.dispatch('moduleShop/removeItemFromBasket', params)
    },
    clearBasket () {
      this.$store.dispatch('moduleShop/clearBasket')
      this.$router.push('/shop')
    },
    confirmBasket () {
      // POST basket content (store action)
    }
  },
  computed: {
    hasContent () { return this.$store.getters['moduleShop/hasBasketProducts'] },
    itemsPrice () { return this.$store.getters['moduleShop/getTotalPrice'].toFixed(2) },
    fullPrice () { return this.shippingFee + this.$store.getters['moduleShop/getTotalPrice'] }
  }
}
</script>
