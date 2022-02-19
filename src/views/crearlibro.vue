<template>

<loading v-model:active="isLoading"
                 :can-cancel="true"
                 :is-full-page="fullPage"
                   />
<div class="ml-3" id="edituser">
    <div v-if="success" class="alert alert-light alert-dismissible fade show" role="alert">
         El libro fue creado exitosamente
<button @click="issucess" style="background-color:white" type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    <div class="card">
        <div class="card-header border">
             Crear libro
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-xl-6">
                   <p>Titulo</p>
                    <input v-model="dataform.titulo" type="text" class="form-control mb-4"  placeholder="Ingrese el nombre" >
                     <p>Autor(es)</p>
                    <textarea type="email" v-model="dataform.autor" class="form-control mb-4" placeholder="Ingrese el autor"/>
                    <p>Edicion</p>
                    <input type="text" v-model="dataform.edicion"  class="form-control mb-4" placeholder="Ingrese la edicion">
                </div>
                  <div class="col-xl-6">
                   <p>Editorial</p>
                    <input type="text" v-model="dataform.editorial" class="form-control mb-4" placeholder="Ingrese la editorial" >
                    <p>ISBN</p>
                    <input type="text"  v-model="dataform.isbn" class="form-control mb-4" placeholder="Ingrese el isbn">
                    <p>Fecha de publicacion</p>
                    <input type="text" v-model="dataform.fe_pu"  class="form-control mb-4" placeholder="Ingrese la fecha de publicacion">
                  </div>
               
            </div>

        </div>
          <div class="card-footer">
               <button type="button" class="btn btn-primary" @click="CrearLibro()">Crear Libro</button>      
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
            //id:this.$route.params.id,
            titulo:"",
            autor:"",
            edicion:"",
            editorial:"",
            isbn:"",
            fe_pu:"",

            },
            success:false,
            UserData:[]
        }         
    },
    mounted(){

       //console.log(this.$route.params.id)
        this.$store.state.ruta= "libros";
    this.$store.state.rutas.dashboard=false;
     this.$store.state.rutas.prestamos=false;
     this.$store.state.rutas.libros=true;
     this.$store.state.rutas.usuarios=false; 
      // this.userdata();
    },
    created(){
             this.isLoading = false;
        setTimeout(() => {
         this.isLoading = false;

        }, 100);
    },
    methods: {
        CrearLibro(){
            this.axios.post('http://127.0.0.1:8000/api/libro/store',this.dataform).then((response)=>{
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