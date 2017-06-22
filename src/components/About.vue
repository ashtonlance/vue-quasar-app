<template>
  <q-layout ref="layout" view="hHr LpR Fff">
    <q-toolbar slot="header" class="toolbar">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu"></q-icon>
      </q-btn>
      <div class="q-toolbar-title">
        About
      </div>
    </q-toolbar>

    <div slot="left">
      <q-item-main id="menu-header" label="Menu"></q-item-main>
      <q-side-link item to="/" exact>
        <q-icon name="home"></q-icon>
        <q-item-main label="Home"></q-item-main>
      </q-side-link>
      <q-side-link item to="/streaming" exact>
        <q-icon name="cloud_circle"></q-icon>
        <q-item-main label="Streaming Videos"></q-item-main>
      </q-side-link>
      <q-side-link item to="/360RobotDemo" exact>
        <q-icon name="ondemand_video"></q-icon>
        <q-item-main label="Behind the Scenes"></q-item-main>
      </q-side-link>
      <q-side-link item to="/about" exact>
        <q-icon name="info"></q-icon>
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
        <p>Located in Chattanooga, TN, Video Ideas Productions delivers integrated marketing solutions under one roof, saving you time, money and energy.</p>
        <div class="list item-inset-delimiter">
          <div class="item">            
            <div class="item-content">
              <q-icon class="item-primary" name="phone"></q-icon>
              <a href="tel:423-867-2677">423-867-2677</a>
            </div>
            
          </div>
          <div class="item">
            <div class="item-content">
              <q-icon class="item-primary" name="email"></q-icon>
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
.item-primary {
  display: inline-block;
  font-size: 25px;
}
.item-content {
  margin-bottom: 15px;
}
.q-card {
  width: 90%;
  max-width: 500px;
  margin: 10px auto;
}
</style>
