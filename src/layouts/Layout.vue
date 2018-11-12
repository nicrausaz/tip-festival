<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="amber">
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          {{$store.state.moduleLanguage.translations.festival_name}}
          <div slot="subtitle">{{$store.state.moduleLanguage.translations.festival_description}}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen" :overlay="true">
      <q-list no-border link inset-delimiter>
        <q-item @click.native="$router.push('/')">
          <q-item-side icon="home" />
          <q-item-main :label="$store.state.moduleLanguage.translations.festival_home"/>
        </q-item>
        <q-item @click.native="$router.push('/program')">
          <q-item-side icon="list" />
          <q-item-main :label="$store.state.moduleLanguage.translations.program" :sublabel="$store.state.moduleLanguage.translations.artists"/>
        </q-item>
        <q-item @click.native="$router.push('/infos')">
          <q-item-side icon="info" />
          <q-item-main :label="$store.state.moduleLanguage.translations.infos" :sublabel="$store.state.moduleLanguage.translations.info_description" />
        </q-item>
        <q-item @click.native="$router.push('/shop')">
          <q-item-side icon="shopping_basket" />
          <q-item-main :label="$store.state.moduleLanguage.translations.shop" />
        </q-item>
        <q-item @click.native="$router.push('/sponsors')">
          <q-item-side icon="record_voice_over" />
          <q-item-main :label="$store.state.moduleLanguage.translations.sponsor"/>
        </q-item>
        <q-item @click.native="$router.push('/orders')">
          <q-item-side icon="shop_two"/>
          <q-item-main :label="$store.state.moduleLanguage.translations.myorders" />
        </q-item>
        <q-item @click.native="$router.push('/contact')">
          <q-item-side icon="contact_support" />
          <q-item-main :label="$store.state.moduleLanguage.translations.contact"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'Layout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
