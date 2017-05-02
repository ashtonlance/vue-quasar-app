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
            <div class="card">
                <a class=""><img src="~assets/thumbnailmontagenoplay.png"></a>
                <p>VIP VR360 Montage (Local)</p>
            </div>
        </div>

        <div class="column">
            <div class="card">
                <a class=""><img src="~assets/thumbnailcardmonroenoplay.png"></a>
                <p>Card Monroe 360 (Local)</p>
            </div>
        </div>
    </div>
    <div class="columns no-margintop">
        <div class="column">
            <div class="card">
                <a class=""><img src="~assets/thumbnailrubyfalls.png"></a>
                <p>Ruby Falls (Local)</p>
            </div>
        </div>

        <div class="column">
            <div class="card">
                <a class=""><img src="~assets/thumbnailmann.png"></a>
                <p>Mann+Hummel (Local)</p>
            </div>
        </div>
    </div>
    <div class="columns no-margintop">
        <div class="column">
            <div class="card">
                <a class=""><img src="~assets/thumbnailballet.png"></a>
                <p>Tennessee Ballet (Local)</p>
            </div>
        </div>
    </div>
    </div>
  </q-layout>
</template>

<script>
var moveForce = 30
var rotateForce = 40

import { Utils } from 'quasar'

export default {
  data () {
    return {
      moveX: 0,
      moveY: 0,
      rotateY: 0,
      rotateX: 0
    }
  },
  computed: {
    position () {
      let transform = `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg)`
      return {
        top: this.moveY + 'px',
        left: this.moveX + 'px',
        '-webkit-transform': transform,
        '-ms-transform': transform,
        transform
      }
    }
  },
  methods: {
    move (event) {
      const {width, height} = Utils.dom.viewport()
      const {top, left} = Utils.event.position(event)
      const halfH = height / 2
      const halfW = width / 2

      this.moveX = (left - halfW) / halfW * -moveForce
      this.moveY = (top - halfH) / halfH * -moveForce
      this.rotateY = (left / width * rotateForce * 2) - rotateForce
      this.rotateX = -((top / height * rotateForce * 2) - rotateForce)
    }
  },
  mounted () {
    this.$nextTick(() => {
      document.addEventListener('mousemove', this.move)
      document.addEventListener('touchmove', this.move)
    })
  },
  beforeDestroy () {
    document.removeEventListener('mousemove', this.move)
    document.removeEventListener('touchmove', this.move)
  }
}
</script>

<style lang="styl">
#homebackground
    padding-top 5%
    background-image url('~assets/background.png')
    background-size cover
    filter:brightness(1.25)

.card img 
    width 100% 
    max-width 286px
    margin-left 2.5%
    margin-bottom 5px
    border-radius 4px
    box-shadow 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)
    display block

    margin auto


.card 
    background-color rgba(100, 100, 100, 0.1)
    box-shadow 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)
    margin auto
    width 75%
    display block
    padding-top 10px


.card p 
    text-align center
    margin-bottom 1px
    color white

.top-banner 
    background-color rgba(0, 0, 0, 0.2)
    box-shadow 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)
    padding 10px
    margin-bottom 10px
    color white

</style>
