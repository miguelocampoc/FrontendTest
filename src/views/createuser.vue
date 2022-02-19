<template>
<div class="ml-3" id="createuser">
    <div v-if="success" class="alert alert-light alert-dismissible fade show" role="alert">
         El usuario fue creado exitosamente
<button @click="issucess" style="background-color:white" type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    <div class="card">
        <div class="card-header border">
             Crear usuario
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-xl-6">
                   <p>Nombre</p>
                    <input v-model="dataform.nombre" type="text" class="form-control mb-4"  placeholder="Ingrese el nombre">
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
               <button type="button" class="btn btn-primary" @click="registrarUsuario()">Registrar usuario</button>      
         </div>
    </div>
</div>
</template>
<script>
export default {
     data(){
        
       return{
           dataform:{
               "nombre":"",
               "apellidos":"",
               "email":"",
               "direccion":"",
               "contacto":"",
               "cedula":"",           
               },
               success:false
       }
    },
    mounted(){
                this.$store.state.ruta= "usuarios";
    this.$store.state.rutas.dashboard=false;
     this.$store.state.rutas.prestamos=false;
     this.$store.state.rutas.libros=false;
     this.$store.state.rutas.usuarios=true; 
    },
    methods: {
        registrarUsuario(){
      
               this.axios.post('http://127.0.0.1:8000/api/usuario/store',this.dataform).then((response)=>{
                console.log(response.data);
                 this.success=true;
                 this.dataform={
                        "nombre":"",
                        "apellidos":"",
                        "email":"",
                        "direccion":"",
                        "contacto":"",
                        "cedula":"",           
                 }
               }).catch((err)=>{
                   console.log(err)
               })
        },
        issucess(){
       this.success=false;
        }
    },
}
</script>