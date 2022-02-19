
<template>
<div class="login">
   <loading v-model:active="isLoading"
                 :can-cancel="true"
                 :is-full-page="fullPage"
                   />
    <!--img alt="Vue logo" src="../assets/logo.png">!-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>!-->
      <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <!-- Navbar -->

        <!-- End Navbar -->
      </div>
    </div>
  </div>
 <main class="main-content  mt-0">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          
          <div class="row">
            
            <div class="col-xl-5 col-lg-6 col-md-7 d-flex flex-column mx-auto">
              <div class="card card-plain ">
                
          
                <div class="card-header pb-0 text-left bg-transparent">
                        
                  <h3 class="font-weight-bolder text-info text-gradient">Iniciar Sesion</h3>
                </div>
                <div class="card-body">
                  <form role="form">

                    <p>Email</p>
                    <div class="mb-3">
                      <input  type="email"  name="email"  v-model="dataformlogin.email" class="form-control " placeholder="Email" aria-label="Email" aria-describedby="email-addon"  > 
                    </div>
                    <p>Password</p>
                    <div class="mb-3">
                      <input  type="password" name="password" v-model="dataformlogin.password" class="form-control " placeholder="Password" aria-label="Password" aria-describedby="password-addon"  >
                    </div>

                    <!--
                    <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" id="rememberMe" checked="">
                      <label class="form-check-label" for="rememberMe">Remember me</label>
                    </div>
                    !-->
                    <div class="text-center">
                      <button type="button" v-on:click="redirect()" class="btn bg-gradient-info w-100 mt-4 mb-0">Iniciar Sesion</button>
                    </div>
                  </form>
                </div>
 
                <div class="card-footer text-center pt-0 px-lg-2 px-1">
                  <p v-if="this.error" class="mb-4 text-sm mx-auto">
                   No encontramos registros con las credenciales*
                  </p>
                </div>
                <div class="row text-center ">
                  <!-- <router-link  to="/register" >Registrate aqui</router-link> !-->
                  {{auth}}
                  </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                <div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="background-image:url('../assets/img/curved-images/curved6.jpg')"></div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  </main>
  </div>
</template>


<script >
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import {mapMutations,mapState} from 'vuex';
 //import {createNamespacedHelpers} from 'vuex';
    //const {mapState,mapGetters,mapMutations,mapActions} =createNamespacedHelpers('user');
       //const {mapMutations} =createNamespacedHelpers('user');
export default {
  
 // name: 'Home',
  components: {
  Loading
  },
  data(){
    return {
       dataformlogin:{
         "email":"",
         "password":""
       },
       datauser:"",
      fullPage: true,
      isLoading: false,
      error:false,

    }
  },
  computed:{
   ...mapState(['auth'])
  },
  methods:{
    ...mapMutations(['setAuth']),
      login(){
     
      return new Promise((resolve,reject)=>{
      this.isLoading = true;
                // simulate AJAX
      /*
       this.axios.get('/api/user.json').then((response) => {
           const state= {
             "email": ( response.data.email == this.dataformlogin.email) ?  true : false,
             "password":( response.data.password == this.dataformlogin.password) ? true : false
           }
           if(state.password && state.email){    
               resolve("OK"); 

           }
          
              reject("ddsd");
        
            }).catch((err)=>{
              reject(err);
            })
            */
           this.axios.post('/api/login',{
             gran_type:"password",
             client_id:"956804e5-0b1b-4fea-a567-49df94c6ce0a",
             client_secret:"4K56dLk41j1g1TVWfwbOuMrqTppwtQfWlBR9KKuF",
             username:this.dataformlogin.email,
             password:this.dataformlogin.password

           }).then(response=>{
             console.log(response.data);
             this.setAuth(response.data);
             localStorage.setItem('auth',JSON.stringify(response.data))
               resolve("OK"); 
           }).catch((err)=>{
              reject(err);
            })
        });
    },

    async redirect(){
       try {
        let result = await this.login()
        console.log("inside try: ", result)
        setTimeout(() => {
        this.isLoading=false;
        this.error=false;
        this.$router.push('/panel/dashboard');
        }, 200);
       }
      catch (err){
        console.log(err)
        this.error=true;
        setTimeout(() => {
          this.isLoading=false;
        }, 200);

        }
     }      

    
  }
}

</script>

