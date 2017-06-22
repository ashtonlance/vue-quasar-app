<template>
  <q-layout ref="layout" view="hHr LpR Fff">
    <q-toolbar slot="header" class="toolbar">
      <q-btn flat class="hide-on-drawer-visible" @click="$refs.layout.toggleLeft()">
        <q-icon name="menu"></q-icon>
      </q-btn>
      <div class="q-toolbar-title">
        About
      </div>
    </q-toolbar>

    <div slot="left">
      <q-side-link item icon="cloud" to="/">
        <q-item-main label="Home"></q-item-main>
      </q-side-link>
      <q-side-link item icon="content_paste" to="/streaming" exact>
        <q-item-main label="Streaming Videos"></q-item-main>
      </q-side-link>
      <q-side-link item icon="content_paste" to="/360RobotDemo">
        <q-item-main label="Behind the Scenes"></q-item-main>
      </q-side-link>
      <q-side-link item icon="content_paste" to="/about">
        <q-item-main label="About"></q-item-main>
      </q-side-link>
    </div>

    <router-view class="layout-view"></router-view>
    <q-card>
      <img src="~assets/banner.png" :height="150">
      <q-card-title>
        Video Ideas Productions
      </q-card-title>
      <q-card-main>
        <p>Located in Chattanooga, TN, delivers integrated marketing solutions under one roof, saving you time, money and energy.</p>
        <div class="list item-inset-delimiter">
          <div class="item">
            <q-icon class="item-primary" name="phone"></q-icon>
            <div class="item-content">
              <a href="tel:423-867-2677">423-867-2677</a>
            </div>
            
          </div>
          <div class="item">
            <q-icon class="item-primary" name="email"></q-icon>
            <div class="item-content">
              <a href="mailto:contact@videoideas.com">contact@videoideas.com</a>
            </div>
          </div>
        </div>
      </q-card-main>
    </q-card>
  </q-layout>
</template>

<script>
import { QLayout, QToolbar, QSideLink, QIcon, QItemMain, QBtn, QCard, QCardTitle, QCardMain } from 'quasar'
export default {
  data () {
    return {}
  },
  components: {
    QLayout,
    QToolbar,
    QSideLink,
    QIcon,
    QItemMain,
    QBtn,
    QCard,
    QCardTitle,
    QCardMain
  }
}
</script>

<style scoped lang="scss">
.card {
  padding: 0;
  p {
  color: #333;
  }
}
</style>
