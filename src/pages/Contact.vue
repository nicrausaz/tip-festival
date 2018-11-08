<template>
  <div class="fixed-center text-center">
    <p class="text-faded"><strong>Une question ?</strong></p>
    <p class="text-faded"><strong>Une demande particulière ?</strong></p>
    <q-btn color="amber" style="width:200px;" @click="mailto">Contactez-nous</q-btn>
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
