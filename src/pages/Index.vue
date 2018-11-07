<template>
  <q-page>
    <q-parallax src="statics/concert3.jpg" :height="screenHeigth">
      <q-jumbotron id="indexPic" class="bg-amber">
        <div class="q-display-3">{{$store.state.moduleLanguage.translations.festival_name}}</div>
        <div class="q-subheading">
          {{$store.state.moduleLanguage.translations.festival_description}}
        </div>
        <hr class="q-hr q-my-lg">
        <div class="q-title q-mb-md">{{$store.state.moduleLanguage.translations.festival_duration}}</div>
      </q-jumbotron>
    </q-parallax>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  computed: {
    screenHeigth () {
      return window.innerHeight - 50
    }
  }
}
</script>
