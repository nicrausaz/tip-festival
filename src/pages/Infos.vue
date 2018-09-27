<template>
  <q-page class="flex flex-center">
    <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/metro.jpeg">
        <q-card-title slot="overlay">
          Transports
        </q-card-title>
      </q-card-media>
      <q-card-main>
        Nous vous recommendons les transports en commun
      </q-card-main>
    </q-card>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round size="lg" color="primary" icon="contact_support"/>
    </q-page-sticky>
    <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/metro.jpeg">
        <q-card-title slot="overlay">
          Restauration
        </q-card-title>
      </q-card-media>
      <q-card-main>
        Nous vous recommendons les transports en commun
      </q-card-main>
    </q-card>
    <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/metro.jpeg">
        <q-card-title slot="overlay">
          Tarifs
        </q-card-title>
      </q-card-media>
      <q-card-main>
        L'entrée au festival est libre !
      </q-card-main>
    </q-card>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round size="lg" color="primary" icon="contact_support"/>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: 'PageInfos'
}
</script>

<style scoped>

</style>
