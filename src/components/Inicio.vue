<template>
  <div>
    <div class="row m-3" v-for="nota in notas" :key="nota._id">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{{ nota.title }}</h4>
          <h6 class="card-subtitle mb-2 text-muted etiqueta-autor">
            {{ nota.autor }}
          </h6><p class="etiqueta-fecha">{{ nota.created_at | moment("from", "now")}}</p>
          <div v-html="nota.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Global from "../assets/Global";
import axios from "axios";
export default {
  name: "Inicio",
  mounted() {
    this.getLastNotas();
  },
  data() {
    return {
      url: Global.url,
      notas: null,
    };
  },
  methods: {
    getLastNotas() {
      axios.get(this.url + "notasLim").then((res) => {
        if (res.data.status == "success") {
          this.notas = res.data.notas;

          console.log(this.notas);
        }
      });
    },
  },
};
</script>

<style >
@import "../assets/css/styles.css";
</style>