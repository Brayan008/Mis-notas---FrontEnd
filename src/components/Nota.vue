<template>
  <div v-if="nota">
    <div class="row m-3">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{{ nota.title }}</h4>
          <h6 class="card-subtitle mb-2 text-muted etiqueta-autor">
            {{ nota.autor }}
          </h6>
          <p class="etiqueta-fecha">{{ nota.date | moment("from", "now") }}</p>
          <div v-html="nota.content"></div>
          
          <router-link class="btn btn-warning m-2" :to="'/editar/'+nota._id">Editar</router-link>
          <a class="btn btn-danger" @click="deleteNota(nota._id)">Eliminar</a>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Global from "../assets/Global";
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "Nota",
  mounted() {
    var notaId = this.$route.params.id;
    this.getNota(notaId);
  },
  data() {
    return {
      url: Global.url,
      nota: null,
    };
  },
  methods: {
    getNota(notaId) {
      axios.get(this.url + "notas/" + notaId).then((res) => {
        if (res.data.status == "success") {
          this.nota = res.data.nota;
        }
      });
    },
    deleteNota(notaId) {
      swal({
        title: "Estas seguro?",
        text: "Si eliminas esta nota no se podra recuperar",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios.delete(this.url + "notas/" + notaId).then(() => {
            swal(
              "Nota borrada",
              "La nota se borro correctamente",
              "success"
            );
            this.$router.push("/todas-notas");
          });
        } else {
          swal("No se borro tu nota");
        }
      });
    },
  },
};
</script>


<style scoped>
@import "../assets/css/styles.css";
</style>