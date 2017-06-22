<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {}
</script>

<style>
.layout-header {
  border-bottom-color: transparent !important;
}
.q-toolbar-title, .q-toolbar-subtitle {
  margin-right: 20px;
}
.q-item > .q-icon {
  font-size: 40px;
  margin-right: 15px;
}
#menu-header {
  text-align: right;
  padding: 10px;
  font-size: 30px;
}
</style>
