<template>
  <q-page class="flex flex-center">
    <q-card class="q-ma-sm sectionsItem">
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
  @media screen {
  }
.sectionsItem {
  width: 800px;
  /* height: 800px; */
}
</style>
