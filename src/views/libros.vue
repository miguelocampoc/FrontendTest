<template>
    <div id="libros">
              <input type="hidden"  id="page" value="libro">

        <button type="button" id="modalform" @click="AbrirModalForm()" class="btn btn-primary">Agregar un libro</button>
         <h1>Listado de libros</h1>
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
export default {
      data(){
        return{
            thead: "<tr><th>id</th><th>titulo</th><th>autor</th><th>edicion</th><th>editorial</th><th>isbn</th> <th>fecha_publicacion</th> <th>Opciones</th></tr>",
            getUrlData:"http://127.0.0.1:8000/api/libros",
            columns:
                    [
                    { "data": "id" , /*"className":"hidden"*/},
                    { "data": "titulo" },
                    { "data": "autor" },
                    { "data": "edicion" },
                    { "data": "editorial" },
                    { "data": "isbn" },
                    { "data": "fe_pu" },
                    { "defaultContent": "<button type='button' class='btn btn-success' onclick='actualizar(this)' >Editar</button><button onclick='drop(this)' class='btn btn-primary'>Eliminar</button>"},

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
     this.$store.state.ruta= this.$router.currentRoute._rawValue.name;
     console.log(this.thead);
     this.$store.state.rutas.dashboard=false;
     this.$store.state.rutas.prestamos=false;
     this.$store.state.rutas.libros=true;
     this.$store.state.rutas.usuarios=false; 
    },

    methods: {
     
    AbrirModalForm(){
      this.$router.push('/panel/libros/crear')
    }
    }
    
}
</script>