<template>
  <div :class="isActive ? 'theme-dark' : 'theme-light'">
    <MainHeader :isActive="isActive" @toggle="toggleActive" />
    <HelloWorld />
    <MainFooter />
    {{isActive}}
  </div>
</template>

<script>
import MainHeader from './components/layout/MainHeader.vue'
import MainFooter from './components/layout/MainFooter.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
    HelloWorld
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    }
  }
};

</script>
