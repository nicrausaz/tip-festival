<template>
  <div class="fixed-center text-center">
    <p class="text-faded"><strong>{{$store.state.moduleLanguage.translations.request_askSmth}}</strong></p>
    <p class="text-faded"><strong>{{$store.state.moduleLanguage.translations.resquest_askSmthParticular}}</strong></p>
    <q-btn color="amber" style="width:200px;" @click="mailto">{{$store.state.moduleLanguage.translations.festival_contactus}}</q-btn>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'PageContact',
  methods: {
    mailto () {
      window.location.href = 'mailto:nicolas@crausaz.click?subject=Contact%20Festival%20Vidy&body='
    }
  }
}
</script>
