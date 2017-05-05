<template>
  <!-- root node required -->  
  <div>
    <!-- your content -->
    <router-view></router-view>
    <div class=''>
      <!-- if you want automatic padding -->
      <div id='videojs-panorama-player'>
        <div class='player-wrapper'>
          <div class='player-container'>
            <video class='video-js vjs-default-skin' crossOrigin='anonymous' controls ref='video'>
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
  </router-view>
</template>

<script>
import videojs from 'video.js'
import panorama from 'videojs-panorama'

export default {
  data () {
    return {
      videoInfo: {
        videoURL: './statics/RubyFallsTRIM720.mp4'
      }
    }
  },
  methods: {
    initializePlayer () {
      var router = this.$router
      var videoElement = this.$refs.video
      screen.orientation.lock('landscape')

      this.player = videojs(videoElement, {}, () => {
        window.addEventListener('resize', () => {
          var widthResize = window.innerWidth
          var heightResize = window.innerHeight
          this.player.width(heightResize)
          this.player.height(widthResize)
        })
      })
      var width = window.innerWidth
      var height = window.innerHeight
      this.player.width(height)
      this.player.height(width)
      this.player.src({ src: this.videoInfo.videoURL, type: 'video/mp4' })

      var Button = videojs.getComponent('Button')
      var backButton = videojs.extend(Button, {
        constructor: function () {
          Button.apply(this, arguments)
        },
        handleClick: function () {
          router.go(-1)
        },
        buildCSSClass: function () {
          return 'vjs-control vjs-back-button'
        },
        createControlTextEl: function (backButton) {
          return (backButton.innerHTML = '<i id="back-button">first_page</i>')
        }
      })
      videojs.registerComponent('backButton', backButton)
      this.player.getChild('controlBar').addChild('backButton', {})

      panorama(this.player, {
        autoMobileOrientation: true,
        initFov: 100,
        initLat: -5,
        initLon: -180,
        showNotice: false
      })

      this.player.on('VRModeOn', function () {
        this.player.controlBar.fullscreenToggle.trigger('tap')
      })
    }
  },
  mounted () {
    this.initializePlayer()
  }

}

</script>

<style lang='scss'>
body.vjs-full-window .player-wrapper {
  position: static;
}

#back-button {
  padding-bottom: 6px;
}

.vjs_video_3-dimensions {
  width: 100%;
}

.video-js .vjs-big-play-button {
    font-size: 3em;
    line-height: 1.5em;
    height: 1.5em;
    width: 2.55em;
    display: block;
    position: absolute;
    top: 42%;
    left: 44%;
    padding: 0;
    cursor: pointer;
    opacity: 1;
    border: none;
    background-color: #2B333F;
    -webkit-border-radius: 0.3em;
    -moz-border-radius: 0.3em;
    border-radius: 0.3em;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
}

</style>
