<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <button class="hide-on-drawer-visible" @click="$refs.drawer.open()">
        <i>menu</i>
      </button>
      <q-toolbar-title :padding="0">
        VIP VR 360
      </q-toolbar-title>
    </div>
    <q-drawer ref="drawer">
      <div class="list platform-delimiter">
        <div class="list-header">
          Menu
        </div>
        <q-drawer-link icon="live_tv" to="/">Videos</q-drawer-link>
        <q-drawer-link icon="visibility" to="/360robotdemo">Behind the Scenes</q-drawer-link>
        <q-drawer-link icon="live_help" to="/about">About</q-drawer-link>
      </div>
    </q-drawer>
  
    <router-view class="layout-view"></router-view>
    <div class="card">
      <img src="~assets/banner.png" :height="150">
      <div class="card-title">
        Video Ideas Productions
      </div>
      <div class="card-content">
        <p>Located in Chattanooga, TN, delivers integrated marketing solutions under one roof, saving you time, money and energy.</p>
        <div class="list item-inset-delimiter">
          <div class="item">
            <i class="item-primary">phone</i>
            <div class="item-content">
              <a href="tel:423-867-2677">423-867-2677</a>
            </div>
            
          </div>
          <div class="item">
            <i class="item-primary">email</i>
            <div class="item-content">
              <a href="mailto:contact@videoideas.com">contact@videoideas.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
      <!-- Footer
          <div slot="footer" class="toolbar"></div>
          -->
  </q-layout>
</template>

<script>
export default {
  data () {
    return {}
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
