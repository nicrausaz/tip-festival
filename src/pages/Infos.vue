<template>
  <q-page class="flex flex-center">
    <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/metro.jpeg">
        <q-card-title slot="overlay">
          {{$store.state.moduleLanguage.translations.festival_transport}}
        </q-card-title>
      </q-card-media>
      <q-card-main>
        <p v-html="$store.state.moduleLanguage.infosTexts.transport"></p>
      </q-card-main>
    </q-card>
    <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/parking.jpg">
        <q-card-title slot="overlay">
          {{$store.state.moduleLanguage.translations.festival_parking}}
        </q-card-title>
      </q-card-media>
      <q-card-main>
        <p><b>Un paking public est à disposition</b></p>
        <p>Cependant, le nombre de places est restreint et le parking est payant.</p>
        <p>Nous vous conseillons donc l'usage des transports en commun.</p>
        <p><a target="_blank" href="https://www.google.com/maps/place/Parking+de+Vidy/@46.5135965,6.6123016,3a,75y,225.49h,90t/data=!3m7!1e1!3m5!1s0cn-OC4OBsnA9gcK2_q-2g!2e0!6s%2F%2Fgeo1.ggpht.com%2Fcbk%3Fpanoid%3D0cn-OC4OBsnA9gcK2_q-2g%26output%3Dthumbnail%26cb_client%3Dsearch.TACTILE.gps%26thumb%3D2%26w%3D86%26h%3D86%26yaw%3D225.49373%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m8!1m2!2m1!1sParking+de+Vidy!3m4!1s0x0:0xa9a40112da4bf393!8m2!3d46.5133974!4d6.6120207">Localisation du parking</a></p>
        <p v-html="$store.state.moduleLanguage.infosTexts.parking"></p>
      </q-card-main>
    </q-card>
    <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/eatndrink.jpg">
        <q-card-title slot="overlay">
          {{$store.state.moduleLanguage.translations.festival_restoration}}
        </q-card-title>
      </q-card-media>
      <q-card-main>
        <p v-html="$store.state.moduleLanguage.infosTexts.food"></p>
      </q-card-main>
    </q-card>
     <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/guitar.jpg">
        <q-card-title slot="overlay">
          {{$store.state.moduleLanguage.translations.festival_rules}}
        </q-card-title>
      </q-card-media>
      <q-card-main>
        <p v-html="$store.state.moduleLanguage.infosTexts.rules"></p>
      </q-card-main>
    </q-card>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round size="lg" color="primary" icon="contact_support" @click="contact"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: 'PageInfos',
  created () {
    this.$store.dispatch('moduleLanguage/getInfosTexts')
  },
  methods: {
    contact () { this.$router.push('/contact') }
  }
}
</script>

<style scoped>
.sectionsItem {
  width: 800px;
}
</style>
