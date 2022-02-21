<template>
    <div id="prestamos">
        <input type="hidden" id="page" value="reservar">
        <button type="button" id="modalform" @click=AbrirModalForm() class="btn btn-primary">Reservar un libro</button>
         <h2>Listado de mis reservas de libros</h2>
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
            thead: "<tr><th>id</th><th>Tiempo de inicio</th><th>Actualizacion</th> <th>Expiracion</th> <th> Opciones</th></tr>",
            getUrlData:"http://127.0.0.1:8000/api/reservar/"+JSON.parse(localStorage.getItem('auth')).id,
            columns:
                    [
                    { "data": "id" , /*"className":"hidden"*/},
                    { "data": "fi" },
                    { "data": "fa" },
                    { "data": "expiracion" },
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
       this.$store.state.rutas.usuarios=false;
       this.$store.state.rutas.reservar=true;
       this.$store.state.ruta= this.$router.currentRoute._rawValue.name;
     console.log(this.thead);
     
    },

    methods: {
     
    AbrirModalForm(){
      this.$router.push('/panel/reservar/crear')

    }
    }
    
}
</script>