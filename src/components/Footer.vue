<template>
<div class="row">
    <footer>
    <div class="colores text-center p-3">
      <p>Elaborado Por:</p>
      <p>Adan Lopez Cortes y Brayan Mares Bueno</p>
    </div>
    <!-- Copyright -->
  </footer>

</div>

</template>


<script>
export default {
  name: "Footer",
  color: "colores",
};
</script>

<style scoped>
p{
    color: white;
    font-family: 'Times New Roman', Times, serif;
}
.colores{
  width: 100%;
  height: 100px !important;
  background: rgb(61, 59, 59);
  border: black 5px solid;
}
</style>
