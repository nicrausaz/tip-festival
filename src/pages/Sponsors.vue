<template>
  <q-page class="flex flex-center">
    <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/metro.jpeg">
        <q-card-title slot="overlay">
          Sponsors 1
        </q-card-title>
      </q-card-media>
      <q-card-main>
        Description 1
      </q-card-main>
    </q-card>
        <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn round size="lg" color="primary" icon="contact_support"/>
    </q-page-sticky>
    <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/metro.jpeg">
        <q-card-title slot="overlay">
          Sponsors 2
        </q-card-title>
      </q-card-media>
      <q-card-main>
        Description 2
      </q-card-main>
    </q-card>
    <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/metro.jpeg">
        <q-card-title slot="overlay">
          Sponsors 3
        </q-card-title>
      </q-card-media>
      <q-card-main>
        Description 3
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageSponsors'
}
</script>
