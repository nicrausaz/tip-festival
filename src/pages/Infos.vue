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
        <img src="statics/eatndrink.jpg">
        <q-card-title slot="overlay">
          Restauration
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
          Réglement
        </q-card-title>
      </q-card-media>
      <q-card-main>
        <!--<p v-html="$store.state.moduleLanguage.infosTexts.food"></p>-->
        <p><b>Merci de tenir compte des indications suivantes !</b></p>
        <p>Le festival Fest'HipHop se déroule aux Pyramides de Vidy à Lausanne.</p>
        <p>Ce festival est libre d'accès et se déroule dans un espace public, nous vous demandons de bien vouloir respecter
        le bien-être et la sécurité d'autrui dans l'enceinte du festival, adoptez un comportement fair-play et responsable !</p>
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
