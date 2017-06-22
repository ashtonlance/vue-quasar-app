// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import Vuex from 'vuex'
import router from './router'
import 'buefy/lib/buefy.css'
import 'video.js/dist/video-js.min.css'
import 'videojs-panorama/dist/videojs-panorama.css'
import 'quasar-extras/material-icons'

Vue.use(Vuex)
Vue.use(Quasar)

const store = new Vuex.Store({
  state: {
    videoSrc: '',
    videos: {
      CardMonroe: {
        source: 'statics/CardMonroe.mp4',
        label: 'Card Monroe 360',
        thumbnail: 'statics/thumbnailcardmonroenoplay.png'
      },
      VIPMontage: {
        source: 'statics/VIPMontage.mp4',
        label: 'VIP Montage',
        thumbnail: 'statics/thumbnailmontagenoplay.png'
      },
      MannHummel: {
        source: 'statics/MannHummel.mp4',
        label: 'Mann Hummel',
        thumbnail: 'statics/thumbnailmann.png'
      },
      TennBallet: {
        source: 'statics/BalletTenn.mp4',
        label: 'Ballet Tennessee',
        thumbnail: 'statics/thumbnailballet.png'
      },
      RubyFalls: {
        source: 'statics/RubyFallsTRIM720.mp4',
        label: 'Ruby Falls',
        thumbnail: 'statics/thumbnailrubyfalls.png'
      }
    },
    streamingVideos: {}
  },
  getters: {
    videoSrc: state => state.videoSrc,
    storedVideoSrc (state) {
          return state.videoSrc
      }
  }
})

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
