<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="0">
        VIP Video Player
      </q-toolbar-title>
    </div>

    <!--
      Replace following "div" with
      "<router-view class="layout-view">" component
      if using subRoutes
    -->
    <div id="homebackground" class="layout-view">
      <div class="columns">
        <div class="column">
            <div class="top-banner has-text-centered">
                <img src="~assets/bannerclear.png" style="max-height:none; width:auto; height:auto; max-width:75%; display:block; margin: 0 auto;">
                <p>To see how we make our 360 videos and how to use this app, check out our "Behind the Scenes & Demo" video</p>
            </div>
        </div>

    </div>
    <div class="columns">
        <div class="column">
            
            <div class="card">
                <a class=""><img src="~assets/thumbnaildemo.png"></a>
                <p>Behind the Scenes & Demo (non-VR)</p>
            </div>
            
        </div>

    </div>
    <div class="columns no-margintop">
        <div class="column">
            <router-link to="/video1">
            <div class="card">
                <a class=""><img src="~assets/thumbnailmontagenoplay.png"></a>
                <p>VIP VR360 Montage</p>
            </div>
            </router-link>
        </div>

        <div class="column">
            <div class="card">
                <a class=""><img src="~assets/thumbnailcardmonroenoplay.png"></a>
                <p>Card Monroe 360</p>
            </div>
        </div>
    </div>
    <div class="columns no-margintop">
        <div class="column">
            <div class="card">
                <a class=""><img src="~assets/thumbnailrubyfalls.png"></a>
                <p>Ruby Falls</p>
            </div>
        </div>

        <div class="column">
            <div class="card">
                <a class=""><img src="~assets/thumbnailmann.png"></a>
                <p>Mann+Hummel</p>
            </div>
        </div>
    </div>
    <div class="columns no-margintop">
        <div class="column">
            <div class="card">
                <a class=""><img src="~assets/thumbnailballet.png"></a>
                <p>Tennessee Ballet</p>
            </div>
        </div>
    </div>
    </div>
  </q-layout>
</template>

<script>

// import { Utils } from 'quasar'

export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#homebackground {
    padding-top: 5%;
    background-size: cover;
    filter: brightness(1.25);
}

.card {
    background-color: rgba(100, 100, 100, 0.1);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    margin: auto;
    width: 80%;
    display: block;
    padding-top: 10px;
    padding: 12px;

    img {
      width: 100% ;
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
    }
}

.top-banner {
    background-color: rgba(0, 0, 0, 0.2);    
    padding: 10px;
    margin-bottom: 10px;
    color: white;
}

</style>
