<template>
    <div id="crear" class="ml-3">
          <div v-if="success" class="alert alert-light alert-dismissible fade show" role="alert">
             La reserva del libro fue registrada
             <button @click="issucess" style="background-color:white" type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
          </div> 
        <div class="card">
                    <div class="card-header footer border">
                    Reservar Libro
                    </div>
                    <div class="card-body ">
                    <div class="row">
                        <div class="col-xl-6">
                              <p >Libro</p>
                                <select v-model="dataform.libro_id" class="form-select mb-4" aria-label="Default select example">
                                <option value="" selected>Seleccione una opcion</option>
                                <option v-for="libro in libros" :key="libro.id"  :value="libro.id"  >{{libro.titulo}} </option>
                               </select> 
                         
                        </div> 
                        <div class="col-xl-6">
                            <input type="hidden" v-model="dataform.user_id">                        
                             <p >Tiempo de finalizacion del prestamo</p>
                             <input  v-model="dataform.expiracion" class="form-control mb-4" type="date" name="" id="">  
                        </div>
                    </div>
                    </div>
                    <div class="card-footer">
                      <button @click="RegistrarPrestamo()" class="btn btn-primary">Reservar libro</button>
                    </div>
             </div>
        </div>
</template>
<script>
export default {
    data(){
        return{
            "usuarios":[],
            "libros":[],
             "dataform":{
                 "user_id":JSON.parse(localStorage.getItem('auth')).id,
                 "libro_id":"",
                 "expiracion":""
             },
             success:false
        }
    },
    mounted(){
       this.$store.state.rutas.dashboard=false;
       this.$store.state.rutas.prestamos=false;
       this.$store.state.rutas.libros=false;
       this.$store.state.rutas.usuarios=false;
       this.$store.state.rutas.reservar=true;
       this.ListarUsuarios();
        this.ListarLibros();
                this.$store.state.ruta= "prestamos";

    },
    methods:{
        ListarUsuarios(){
          this.axios.get("http://127.0.0.1:8000/api/usuarios").then((response)=>{
                 this.usuarios=response.data;
          }).catch((err)=>{
               console.log(err);
          }); 
        },
        ListarLibros(){
            this.axios.get("http://127.0.0.1:8000/api/libros").then((response)=>{
                 this.libros=response.data;
          }).catch((err)=>{
               console.log(err);
          }); 
        },
        RegistrarPrestamo(){
            this.axios.post("http://127.0.0.1:8000/api/prestamo/store",this.dataform).then((response)=>{
                console.log(response);
                this.success=true;
            }).catch((err)=>{
                console.log(err);

            })
        },
           issucess(){
       this.success=false;
        },
        
    }
}
</script>