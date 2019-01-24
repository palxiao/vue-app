<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {};
  },
  components: {},
  created() {
    // var FNImageClip = api.require("FNImageClip");
    // FNImageClip.open(
    //   {
    //     rect: {
    //       x: 0,
    //       y: 0,
    //       w: api.winWidth,
    //       h: api.winHeight
    //     },
    //     srcPath: "widget://img/logo.png",
    //     style: {
    //       mask: "#888",
    //       clip: {
    //         w: 100,
    //         h: 100,
    //         x: 50,
    //         y: 50,
    //         borderColor: "#0f0",
    //         borderWidth: 1,
    //         appearance: "rectangle"
    //       }
    //     },
    //     fixedOn: api.frameName
    //   },
    //   function(ret, err) {
    //     if (ret) {
    //       console.log(JSON.stringify(ret));
    //     } else {
    //       console.log(JSON.stringify(err));
    //     }
    //   }
    // );
    // try {
    //   var wx = api.require("wx");
    //   wx.auth({}, function(ret, err) {
    //     if (ret.status) {
    //       alert(JSON.stringify(ret));
    //     } else {
    //       alert(err.code);
    //     }
    //   });
    // } catch (error) {}
    
  },
  activated() {},
  mounted() {
    this.$nextTick(() => {});
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding-top: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
