<template>
    <div id="crear" class="ml-3">
          <div v-if="success" class="alert alert-light alert-dismissible fade show" role="alert">
             El prestamo del libro fue registrado
             <button @click="issucess" style="background-color:white" type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
          </div> 
        <div class="card">
                    <div class="card-header footer border">
                    Prestar Libro
                    </div>
                    <div class="card-body ">
                    <div class="row">
                        <div class="col-xl-6">
                        <p >Usuario</p>
                            
                        <select v-model="dataform.user_id" class="form-select mb-4" aria-label="Default select example">
                        <option value="" selected>Seleccione una opcion</option>
                        <option  v-for="usuario in usuarios" :key="usuario.id"  :value= "usuario.id">{{usuario.name}} {{usuario.apellidos}}</option>
                        </select>                            
                        
                        <p >Tiempo de finalizacion del prestamo</p>
                        <input  v-model="dataform.expiracion" class="form-control mb-4" type="date" name="" id="">  
                        </div> 
                        <div class="col-xl-6">
                            <p >Libro</p>
                                <select v-model="dataform.libro_id" class="form-select mb-4" aria-label="Default select example">
                                <option value="" selected>Seleccione una opcion</option>
                                <option v-for="libro in libros" :key="libro.id"  :value="libro.id"  >{{libro.titulo}} </option>
                                </select> 
                        </div>
                    </div>
                    </div>
                    <div class="card-footer">
                      <button @click="RegistrarPrestamo()" class="btn btn-primary">Registrar Prestamo</button>
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
                 "user_id":"",
                 "libro_id":"",
                 "expiracion":""
             },
             success:false
        }
    },
    mounted(){
       this.$store.state.rutas.dashboard=false;
       this.$store.state.rutas.prestamos=true;
       this.$store.state.rutas.libros=false;
       this.$store.state.rutas.usuarios=false; 
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