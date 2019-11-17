<template>
  <div id='app'>
    <h1>Rants & Raves</h1>
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
            <router-link exact :to='{ name: link }'>
                {{ link }}
            </router-link>
        </li>
      </ul>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      links: ['people', 'raves', 'rants'],
    }
  },
  mounted() {
  }
};
</script>

<style lang='scss'>
@import './assets/css/rantsraves.scss';
</style>
