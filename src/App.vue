<template>
  <div id="app">
    <keep-alive>
      <transition name="slide-fade">
        <router-view v-if="$route.meta.keepAlive">
          <!-- 这里是会被缓存的视图组件 -->
        </router-view>
      </transition>
    </keep-alive>
    <transition name="slide-fade">
      <router-view v-if="!$route.meta.keepAlive">
        <!-- 这里是不被缓存的视图组件 -->
      </router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  color: #2c3e50;
}
.slide-fade-enter-active {
  animation: slideInRight 0.5s;
}
.slide-fade-leave-active {
  animation: slideInLeft 0.2s;
}
.slide-fade-leave-to {
  display: none;
  // animation: fadeInRight 0.5s;
}
.slide-fade-enter
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
</style>
