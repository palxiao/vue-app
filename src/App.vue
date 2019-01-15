<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
      <button @click="test">test jump click of tapmode</button>
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
    console.log("初始化成功");
    setTimeout(() => {
      api.notification();
      api.notification({
        notify: {
          title: "原生的转太懒通知",
          content: "通知内容"
        }
      });
    }, 2000);
    setTimeout(() => {
      // api.getPicture(
      //   {
      //     sourceType: "camera",
      //     encodingType: "jpg",
      //     mediaValue: "pic",
      //     destinationType: "url",
      //     allowEdit: true,
      //     quality: 50,
      //     targetWidth: 100,
      //     targetHeight: 100,
      //     saveToPhotoAlbum: false
      //   },
      //   function(ret, err) {
      //     if (ret) {
      //       alert(JSON.stringify(ret));
      //     } else {
      //       alert(JSON.stringify(err));
      //     }
      //   }
      // );
    }, 3000);
    this.$router.push({ path: "/" });
  },
  activated() {},
  mounted() {
    this.$nextTick(() => {});
  },
  computed: {},
  watch: {},
  methods: {
    test() {
      this.$router.push({path:'/about'})
    }
  }
};
</script>

<style>
body {
  background-color: white;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
