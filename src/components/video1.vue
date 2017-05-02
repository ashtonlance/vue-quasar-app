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
        videoURL: 'https://pointsmap.com/videos/RubyFallsTRIM720.mp4'
      }
    }
  },
  methods: {

    initializePlayer () {
      var videoElement = this.$refs.video

      this.player = videojs(videoElement, {}, () => {
        window.addEventListener('resize', () => {
          var canvas = this.player.getChild('Canvas')
          if (canvas) canvas.handleResize()
        })
      })

      this.player.src({ src: this.videoInfo.videoURL, type: 'video/mp4' })
      panorama(this.player, {
        autoMobileOrientation: true,
        initFov: 100,
        initLat: -5,
        initLon: -180,
        showNotice: false
      })
      console.log(this.player)

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

<style lang='styl'>
body.vjs-full-window .player-wrapper
  position static

.player-wrapper
  /*position relative
  max-width 960px
  width: 100%*/

.vjs_video_3-dimensions
  width 100%

</style>
