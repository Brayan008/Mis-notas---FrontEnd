<template>
  <div>
      <h2>Todas las notas</h2>
      <div v-if="notas">
          <Notas :notas="notas"></Notas>
      </div>
      

  </div>
</template>


<script>
import Global from '../assets/Global';
import Notas from './Notas';
import axios from "axios";
export default {
    name: 'AllNotas',
    components: {
        Notas
    },
    mounted(){
        this.getAllNotas();
    },
    data(){
        return{
            url: Global.url,
            notas: []
        }
    },
    methods: {
        getAllNotas(){
            axios.get(this.url + "notas").then((res)=>{
                if(res.data.status=="success"){
                    this.notas = res.data.notas;

                }
            });
        }
    }
    


};
</script>