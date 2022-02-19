
<template>


  <div id="app">
            <vue3-progress />


    <!--
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    
    !-->
      <router-view/>

  </div>

</template>
<script>
import '@/assets/css/bootstrap.min.css';
import "@/assets/css/nucleo-icons.css";
import "@/assets/css/nucleo-svgs.css";
import "@/assets/css/soft-ui-dashboard.css";
import {mapActions} from 'vuex';
export default {
  name: "App",
  mounted() {
    //this.$progress.finish();
  },
  created() {
       this.setAuth();
      this.$progress.start();
      this.$router.beforeEach((to, from, next) => {
      this.$progress.start();
      next();
      to();
      from();
    });

    this.$router.afterEach(() => {
      this.$progress.finish();
      

    });
    
  },
  methods:{
    ...mapActions([
      'setAuth'
    ])
  }
  
};
</script>
