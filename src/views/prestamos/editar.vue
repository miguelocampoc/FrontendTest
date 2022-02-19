<template>
<loading v-model:active="isLoading"
                 :can-cancel="true"
                 :is-full-page="fullPage"
                   />
    <div id="crear" class="ml-3">
          <div v-if="success" class="alert alert-light alert-dismissible fade show" role="alert">
             El prestamo del libro fue editado exitosamente
             <button @click="issucess" style="background-color:white" type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
          </div> 
        <div class="card">
                    <div class="card-header footer border">
                    Editar Prestamo Libro

                    </div>
                    <div class="card-body ">
                    <div class="row">
                        <div class="col-xl-6">
                        <p >Usuario</p>
                        <select v-model="dataform.user_id" class="form-select mb-4" aria-label="Default select example">
                        <option :value="DataPrestamo.user_id" selected>{{DataPrestamo.name}}{{DataPrestamo.apellidos}}</option>
                        <option   v-for="usuario in usuarios" :key="usuario.id"  :value= "usuario.id">{{usuario.name}} {{usuario.apellidos}}</option>
                        </select>                            
                        
                        <p >Tiempo de finalizacion del prestamo</p>
                        <input  v-model="dataform.expiracion" class="form-control mb-4" type="date" >  
                        </div> 
                        <div class="col-xl-6">
                            <p >Libro</p>
                                <select  v-model="dataform.libro_id" class="form-select mb-4" aria-label="Default select example">
                                <option v-for="libro in libros" :key="libro.id"  :value="libro.id"  >{{libro.titulo}} </option>
                                </select> 
                        </div>
                    </div>
                    </div>
                    <div class="card-footer">
                      <button @click="EditarPrestamo()" class="btn btn-primary">Editar Prestamo</button>
                    </div>
             </div>
             <br>
              <div class="card">
                    <div class="card-header footer border">
                    Informacion general
                    </div>
                    <div class="card-body ">
                    <div class="row">
                        <div class="col-xl-6">
                        <p >Nombre y apellido del Usuario</p>
                        <input type="text" class="form-control mb-4 " :value="DataPrestamo.name+' '+DataPrestamo.apellidos" disabled>
                        <p >Direccion</p>
                        <input type="text" class="form-control mb-4 " :value="DataPrestamo.direccion" disabled>
                        <p >Contacto</p>
                        <input type="text" class="form-control mb-4 " :value="DataPrestamo.contacto" disabled>
                        <p>Cedula</p>
                        <input type="text" class="form-control mb-4 " :value="DataPrestamo.cedula" disabled>
                        </div> 
                      <div class="col-xl-6">
                        <p > Titulo del Libro</p>
                        <input type="text" class="form-control mb-4" :value="DataPrestamo.titulo" disabled>
                        <p > Autor del Libro</p>
                        <textarea type="text"  v-model="autor" class="form-control mb-4"  disabled></textarea>
                         <p > ISBN</p>
                        <input type="text" class="form-control mb-4" :value="DataPrestamo.isbn" disabled>
                         <p > Edicion</p>
                        <input type="text" class="form-control mb-4" :value="DataPrestamo.edicion" disabled> 
                         <p > Editorial</p>
                        <input type="text" class="form-control mb-4" :value="DataPrestamo.editorial" disabled> 
                        </div>
                    </div>
                    </div>
                    <div class="card-footer">
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
    data(){
        return{
            "autor":"",
            "usuarios":[],
            "libros":[],
            "nusuarios":[],
             "nlibros":[],
             "DataPrestamo":"",
             "dataform":{
                 "id":this.$route.params.id,
                 "user_id":"",
                 "libro_id":"",
                 "expiracion":""
             },
             success:false,
             
        }
    },
    created(){
             this.isLoading = true;
        setTimeout(() => {
         this.isLoading = false;

        }, 50);
    },
    mounted(){
       this.ListarUsuarios();
        this.ListarLibros();
        this.GetDataById();
    },
    methods:{
        GetDataById(){
         this.axios.get("http://127.0.0.1:8000/api/prestamo/GetDataById/"+this.$route.params.id).then((response)=>{
          this.DataPrestamo=response.data;
          console.log( this.DataPrestamo);
          this.autor= this.DataPrestamo.autor;
          this.dataform.expiracion=this.DataPrestamo.expiracion;
          this.dataform.user_id=this.DataPrestamo.user_id;
          this.dataform.libro_id=this.DataPrestamo.libro_id;
         }).catch((err)=>{
             console.log(err)
         })
        },
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
        EditarPrestamo(){
            this.axios.post("http://127.0.0.1:8000/api/prestamo/update",this.dataform).then((response)=>{
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