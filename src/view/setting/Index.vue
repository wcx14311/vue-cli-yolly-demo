<template>
  <section class="center-content pa20">
    <transition name="slide-fade">
        <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>