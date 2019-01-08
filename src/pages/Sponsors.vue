<template>
  <q-page class="flex flex-center">
    <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/sponsors/sponsor1.gif" height="300">
        <q-card-title slot="overlay">
          L'Equinoxe
        </q-card-title>
      </q-card-media>
      <q-card-main>
        <p><b>Restaurant - Traiteur - Pizzeria</b></p>
        <p>Route du Gros Buisson 12, 1585 Salavaux</p>
        <p>+41 26 677 17 71</p>
        <a href="http://www.equinoxe-restaurant.ch/" target="_blank">Site</a>
      </q-card-main>
    </q-card>
    <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/sponsors/sponsor2.png" height="300">
        <q-card-title slot="overlay">
          Le Forgeron
        </q-card-title>
      </q-card-media>
      <q-card-main>
        <p><b>Café-Bar & Hotel</b></p>
        <p>Route du Faubourg 29, 1580 Avenches</p>
        <p>+41 26 675 11 57</p>
        <a href="https://fr.tripadvisor.ch/Restaurant_Review-g652171-d1951379-Reviews-Le_Forgeron_Cafe_Bar-Avenches_Canton_of_Vaud.html" target="_blank">Site</a>
      </q-card-main>
    </q-card>
    <q-card inline class="q-ma-sm sectionsItem">
      <q-card-media>
        <img src="statics/sponsors/sponsor3.jpg" height="300">
        <q-card-title slot="overlay">
          L'Escapade
        </q-card-title>
      </q-card-media>
      <q-card-main>
        <p><b>Restaurant</b></p>
        <p>Rue Centrale 1, 1580 Avenches</p>
        <p>+41 26 675 18 95</p>
        <a href="https://www.facebook.com/lescapadeavenches/?utm_source=tripadvisor&utm_medium=referral" target="_blank">Site</a>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageSponsors'
}
</script>

<style scoped>
.sectionsItem {
  width: 400px;
}
</style>
