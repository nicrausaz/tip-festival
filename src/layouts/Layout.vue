<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="warning">
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Festival
          <div slot="subtitle">the festival</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen" :overlay="true">
      <q-list no-border link inset-delimiter>
        <!-- <q-list-header>Essential Links</q-list-header> -->
        <q-item @click.native="$router.push('/program')">
          <q-item-side icon="list" />
          <q-item-main label="Programme" sublabel="Artistes"/>
        </q-item>
        <q-item @click.native="$router.push('/infos')">
          <q-item-side icon="info" />
          <q-item-main label="Infos pratique" sublabel="Restauration, transports ..." />
        </q-item>
        <q-item @click.native="$router.push('/shop')">
          <q-item-side icon="shopping_basket" />
          <q-item-main label="Boutique" />
        </q-item>
        <q-item @click.native="$router.push('/sponsors')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Sponsors"/>
        </q-item>
        <q-item @click.native="$router.push('/contact')">
          <q-item-side icon="contact_support" />
          <q-item-main label="Contact"/>
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
