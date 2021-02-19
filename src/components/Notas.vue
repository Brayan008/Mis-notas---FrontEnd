<template>
    <div class="row">
      <div class="col-md-3 col-sm-6 m-4" v-for="nota in notas" :key="nota._id">
        <div class="card card-block p-4">
          <h5 class="card-title mt-3 mb-3">
            <img src="../assets/images/notas.png" alt="notas" />{{
              nota.title
            }}
            • {{ nota.autor }}
          </h5>
          <p class="card-text lenguage">{{nota.lenguage}}</p>
          <p class="card-text">
            <i>Publicado {{ nota.created_at | moment("from", "now") }}</i>
          </p>
          <router-link class="btn btn-warning btn-sm" :to="{name: 'nota', params:{id: nota._id}}">Ver...</router-link>
        </div>
      </div>
    </div>
</template>



<script>
import Global from "../assets/Global";
export default {
  name: "Notas",
  props: ["notas"],
  data() {
    return {
      url: Global.url,
    };
  },
};
</script>

<style scoped>
img {
  height: auto;
  width: 5%;
}

div [class^="col-"] {
  padding-left: 5px;
  padding-right: 5px;
}
.card {
  transition: 0.5s;
  cursor: pointer;
}
.card-title {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
}
.card-title i {
  font-size: 15px;
  transition: 1s;
  cursor: pointer;
  color: #ffa710;
}
.card-title i:hover {
  transform: scale(1.25) rotate(100deg);
  color: #18d4ca;
}
.card:hover {
  background: black;
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(255, 176, 6, 0.562);
  font-size: 20px;
  color: #ffffff;
}
.card-text {
  height: 30px;
  color: rgb(134, 134, 134) !important;
}

.lenguage{
  color: #ffa710 !important;

}

.card::before,
.card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform 0.3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: "";
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before,
.card:hover::after,
.card:focus::before,
.card:focus::after {
  transform: scale3d(1, 1, 1);
}
</style>