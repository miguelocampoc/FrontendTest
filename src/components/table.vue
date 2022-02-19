<template>
    <div class=" table-responsive">
        <table id="mytable" class=" display  " width="100%" >
           <thead id="thead">
               <!--
                  <tr>
                    <th >id</th>
                    <th >titulo</th>
                    <th>descripcion</th>
                     <th > Opciones</th>


                </tr>
                !-->
           </thead>
           <tbody>
               <!--
               <tr v-for="course in courses" :key="course.id">
                   <td>{{course.id}}</td>
                   <td>{{course.title}}</td>
                   <td>{{course.description}}</td>
                   <td>{{course.created_at}}</td>
                   <td>{{course.updated_at}}</td>
                   <td><button class="btn btn-primary">Editar</button><button class="btn btn-dangers">Eliminar</button></td>
               </tr>
               !-->
           </tbody>
        </table>
        </div>
        
</template>
<script>
 
import 'jquery/dist/jquery.min.js';

import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
//datable vue https://www.positronx.io/vue-js-dynamic-jquery-datatables-tutorial-example/
export default {
    data(){
        return {
           courses:[]
        }
    },
props:['getUrlData','columns','thead'],
mounted() {
/*
    this.axios.get(this.getUrlData).then((response)=>{
       this.courses=response.data;
       console.log( this.courses);


    }).catch((err)=>{
        console.log(err);
    });
    
    */
   document.getElementById("thead").innerHTML=this.thead;

      console.log(this.columnss);
          this.datatable();

},
created(){
    console.log(this.getUrlData)
},
methods:{
    datatable(){
                  $('#mytable').DataTable({
                   'processing': true,
                     "language": {
                       'loadingRecords': '&nbsp;',
                       'processing': 'Loading...',
                        "lengthMenu": "Mostrar _MENU_ registros por pagina",
                        "zeroRecords": "No hay registros",
                        "info": "Mostrando pagina _PAGE_ de _PAGES_",
                        "infoEmpty": "No registros disponibles",
                        "infoFiltered": "(filtrado de _MAX_ total de registros)",
                        "search":         "Buscar:",
                        "paginate": {
                            "first":      "First",
                            "last":       "Last",
                            "next":       "Siguiente",
                            "previous":   "Anterior"
                        },
                    },
                   "ajax": {
                   "url": this.getUrlData,
                    "dataSrc": "",
                    "type": "GET"
                     }, 
                  "columns":   this.columns
                    });

    },
      actualizar() {
         console.log("dsdsds");
    }
 
}
}
</script>
