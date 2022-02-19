<template>
    <div id="usuarios">
        <input type="hidden" id="page" value="usuario">
        <button type="button" id="modalform" @click="AbrirModalForm()" class="btn btn-primary">Agregar un usuario</button>
         <h1>Listado de usuarios</h1>
         <tableData :getUrlData="getUrlData" :columns="columnas" :thead="thead"></tableData>
    </div>
 <!-- <button type="button" @click="actualizar()"></button>!-->
 <formcursos> </formcursos>
 
</template>

<script>

    import table from '@/components/table'
    import formcursos from '@/components/modals/formcursos'
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
//import $ from 'jquery'; 
export default {
      data(){
        return{
            thead: "<tr><th>id</th><th>Nombre</th> <th>apellidos</th><th>contacto</th><th>direccion</th><th>Opciones</th></tr>",
            getUrlData:"http://127.0.0.1:8000/api/usuarios",
            columns:
                    [
                    { "data": "id" , /*"className":"hidden"*/},
                    { "data": "name" },
                    { "data": "apellidos" },
                    { "data": "contacto" },
                    { "data": "direccion" },
                    { "defaultContent": "<button type='button' class='btn btn-success' onclick='actualizar(this)' >Editar</button><button onclick='drop(this)' class='btn btn-light'>Eliminar</button>"},

                    ]
            
        }
      },
    components:{
            'tableData': table,
            'formcursos':formcursos

    },
     computed:{
       rutas(){
        return this.getUrlData;
        },
        columnas(){
        return this.columns;

        }
        
     },
     mounted(){
     this.$store.state.rutas.dashboard=false;
     this.$store.state.rutas.prestamos=false;
     this.$store.state.rutas.libros=false;
     this.$store.state.rutas.usuarios=true;

     console.log(this.thead);
     
    },

    methods: {
     
    AbrirModalForm(){
      this.$router.push('/panel/usuarios/crear')

    }
    }
    
}
</script>