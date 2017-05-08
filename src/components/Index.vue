<template>
  <q-layout>
    <div slot="header" class="toolbar transparent">
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
    <div id="homebackground" class="layout-view">
      <div class="columns">
        <div class="column">
          <div class="top-banner has-text-centered">
            <img src="~assets/bannerclear.png" style="max-height:none; width:auto; height:auto; max-width:75%; display:block; margin: 0 auto;">
          </div>
        </div>  
      </div>
      <div class="columns">
        <div class="column">
          <router-link to="/rubyfalls">
            <div class="card">
              <a class=""><img src="~assets/thumbnailrubyfalls.png"></a>
              <p>Ruby Falls</p>
            </div>
          </router-link>
        </div>
  
        <div class="column">
          <router-link to="/cardmonroe">
            <div class="card">
              <a class=""><img src="~assets/thumbnailcardmonroenoplay.png"></a>
              <p>Card Monroe 360</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <router-link to="/vipmontage">
            <div class="card">
              <a class=""><img src="~assets/thumbnailmontagenoplay.png"></a>
              <p>VIP VR360 Montage</p>
            </div>
          </router-link>
        </div>
  
        <div class="column">
          <router-link to="/mannhummel">
            <div class="card">
              <a class=""><img src="~assets/thumbnailmann.png"></a>
              <p>Mann+Hummel</p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <router-link to="/ballettenn">
            <div class="card">
              <a class=""><img src="~assets/thumbnailballet.png"></a>
              <p>Tennessee Ballet</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  mounted () {
    screen.orientation.lock('portrait')
  }
}
</script>

<style scoped lang="scss">
#homebackground {
  background: linear-gradient(to bottom, #43c6ac, #191654);
  padding-top: 10px;
  filter: brightness(1.25);
  overflow-x: hidden;
}

.layout-footer {
  border-top: none !important;
}

.card {
  background-color: rgba(100, 100, 100, 0.1);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  margin: auto;
  width: 80%;
  max-width: 320px;
  display: block;
  padding-top: 10px;
  padding: 12px;

  img {
    width: 100%;
    max-width: 286px;
    margin-left: 2.5%;
    margin-bottom: 10px;
    border-radius: 4px;
    display: block;
    margin: auto;
  }

  p {
    text-align: center;
    margin-bottom: 1px;
    color: white;
  }
}

.top-banner {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-bottom: 10px;
  color: white;
  p {
    margin-top: 10px;
  }
}
</style>
