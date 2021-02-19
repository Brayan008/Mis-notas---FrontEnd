<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"> Mis Notas</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" active-class="active" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/todas-notas" active-class="active" class="nav-link">Notas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/crear-nota" active-class="active" class="nav-link">Agregar Notas</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">Proximamente...</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
};
</script>