<template>
  <q-page v-if="hasContent">
    <div class="row">
      <div class="col-8">
        <q-card class="q-ma-lg">
          <q-card-title class="bg-amber">
            Contenu de votre panier
            <q-btn round flat icon="more_vert" slot="right">
              <q-popover>
                <q-list link class="no-border">
                  <q-item v-close-overlay>
                    <q-item-main label="Vider le panier" @click="clearBasket"/>
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
                    {{item.size}}
                    {{item.quantity}}
                  </q-item-tile>
                </q-item-main>
                  <q-btn icon="remove_shopping_cart" label="Retirer" @click="removeItem(item.id)" />
                <q-item-side right>
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
            Récapitulatif
          </q-card-title>
          <q-card-main>
            <q-list class="q-ma-sm">
              <q-item>
                <q-item-main>
                  <q-item-tile label>{{itemsPrice}} CHF</q-item-tile>
                  <q-item-tile sublabel>Total des articles</q-item-tile>
                </q-item-main>
                <q-item-side right icon="shopping_basket" />
              </q-item>
              <q-item>
                <q-item-main>
                  <q-item-tile label>{{shippingFee.toFixed(2)}} CHF</q-item-tile>
                  <q-item-tile sublabel>Frais de livraison</q-item-tile>
                </q-item-main>
                <q-item-side right icon="local_shipping" />
              </q-item>
              <q-item-separator />
              <q-item>
                <q-item-main>
                  <q-item-tile label><b>{{fullPrice}} CHF</b></q-item-tile>
                  <q-item-tile sublabel>Total</q-item-tile>
                </q-item-main>
              </q-item>
            </q-list>
            <q-btn class="q-ma-sm" color="primary" label="Confirmer" @click="confirmBasket" />
          </q-card-main>
         </q-card>
      </div>
    </div>
  </q-page>
  <q-page v-else>
    Panier vide
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
    removeItem (id) {
      console.log('remove ' + id)
      // remove from basket id store
    },
    clearBasket () {
      console.log('clear')
      // replace direct by store
    },
    confirmBasket () {
      // replace direct by store
    }
  },
  computed: {
    hasContent () { return this.$store.getters['moduleShop/hasBasketProducts'] },
    itemsPrice () { return this.$store.getters['moduleShop/getTotalPrice'].toFixed(2) },
    fullPrice () { return this.shippingFee + this.$store.getters['moduleShop/getTotalPrice'] }
  }
}
</script>
