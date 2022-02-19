<template>
<loading v-model:active="isLoading"
                 :can-cancel="true"
                 :is-full-page="fullPage"
                   />
<div class="ml-3" id="edituser">
    <div v-if="success" class="alert alert-light alert-dismissible fade show" role="alert">
         El usuario fue editado exitosamente
<button @click="issucess" style="background-color:white" type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    <div class="card">
        <div class="card-header border">
             Editar usuario
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-xl-6">
                <input v-model="dataform.id" type="hidden" class="form-control mb-4"  placeholder="Ingrese el nombre" > 
                   <p>Nombre</p>
                    <input v-model="dataform.nombre" type="text" class="form-control mb-4"  placeholder="Ingrese el nombre" >
                     <p>Email</p>
                    <input type="email" v-model="dataform.email" class="form-control mb-4" placeholder="Ingrese el email">
                    <p>Direccion</p>
                    <input type="text" v-model="dataform.direccion"  class="form-control mb-4" placeholder="Ingrese la direccion">
                </div>
                  <div class="col-xl-6">
                   <p>Apellido</p>
                    <input type="text" v-model="dataform.apellidos" class="form-control mb-4" placeholder="Ingrese el apellido" >
                    <p>Contacto</p>
                    <input type="text"  v-model="dataform.contacto" class="form-control mb-4" placeholder="Ingrese el contacto">
                    <p>Cedula</p>
                    <input type="text" v-model="dataform.cedula"  class="form-control mb-4" placeholder="Ingrese la cedula">
                  </div>
               
            </div>

        </div>
          <div class="card-footer">
               <button type="button" class="btn btn-primary" @click="editarUsuario()">Editar usuario</button>      
         </div>
    </div>
</div>
</template>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
     components: {
     Loading
     },
    data() {
        return {
            dataform:{
            id:this.$route.params.id,
            nombre:"",
            apellidos:"",
            email:"",
            contacto:"",
            direccion:"",
            cedula:"",

            },
            success:false,
            UserData:[]
        }         
    },
    mounted(){

       console.log(this.$route.params.id)
        this.$store.state.ruta= "usuarios";

       this.userdata();
    },
    created(){
             this.isLoading = true;
        setTimeout(() => {
         this.isLoading = false;

        }, 10);
    },
    methods: {
        editarUsuario(){
            this.axios.post('http://127.0.0.1:8000/api/usuario/update',this.dataform).then((response)=>{
                 console.log(response);
                 this.success=true;

                }).catch((err)=>{
                       console.log(err);

                })
          
        },
        issucess(){
            this.success=false;
        },
        userdata(){
            this.axios.post('http://127.0.0.1:8000/api/usuario/edit',{
                id:this.$route.params.id
                }).then((response)=>{
                       console.log(response.data);
                      this.dataform.nombre= response.data.name;
                      this.dataform.apellidos= response.data.apellidos;
                      this.dataform.contacto= response.data.contacto;
                      this.dataform.email= response.data.email;
                      this.dataform.direccion= response.data.direccion;
                      this.dataform.cedula= response.data.cedula;
                }).catch((err)=>{
                       console.log(err);

                })
        }
    },
}
</script>