<template>
    
        
        <div class="container-fluid">
             <div class="row">
                 <div class="card border">
                   <div class="card-header border-bottom">
                     Crear prestamo libro
                   </div>
                   <div class="card-body ">
                        <router-link   to="/panel/prestamos/crear">Crear prestamo libro aqui</router-link>

                   </div>
                 </div>
         
             </div>
             <br>
             <div class="row">
                  <div class="card border">
                   <div class="card-header border-bottom ">
                     Crear  usuario
                   </div>
                   <div class="card-body ">
                        <router-link   to="/panel/usuarios/crear">Crear usuario aqui</router-link>
                   </div>
                 </div>
               </div>
               <br>
                <div class="row">
                  <div class="card border">
                   <div class="card-header border-bottom ">
                     Crear  libro
                   </div>
                   <div class="card-body ">
                        <router-link   to="/panel/libros/crear">Crear libro aqui</router-link>
                   </div>
                 </div>
               </div>
        </div>
    
</template>
       <script>
    export default {
       mounted(){
     this.$store.state.rutas.dashboard=true;
     this.$store.state.rutas.prestamos=false;
     this.$store.state.rutas.libros=false;
     this.$store.state.rutas.usuarios=false;

       }
    }
    </script>