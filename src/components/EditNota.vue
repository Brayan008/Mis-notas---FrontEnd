<template src="./views/Formulario.html"></template>
<script>
import Global from "../assets/Global";
import Nota from "../models/M-Nota";
import axios from "axios";
import { VueEditor } from "vue2-editor";

export default {
  name: "EditNota",
  data() {
    return {
      editorText: "",
      url: Global.url,
      nota: new Nota("", "", "", "", null),
      submitted: false,
      defaultToolbar,
      isEdit: true,
    };
  },
  components: {
    VueEditor,
  },
  mounted() {
      var articleId = this.$route.params.id;
    this.getNota(articleId);
  },
  methods: {
    getNota(notaId) {
      axios.get(this.url + "notas/" + notaId).then((res) => {
        if (res.data.status == "success") {
          this.nota = res.data.nota;
        }
      });
    },
    saveNota() {
        var articleId = this.$route.params.id;
      //console.log(this.nota);
      axios
        .put(this.url + "notas/"+articleId, this.nota)
        .then((res) => {
          if (res.data.status == "success") {
            this.$router.push("/nota/"+articleId);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

let defaultToolbar = [
  [{ header: [false, 1, 2, 3, 4, 5, 6] }],
  [{ font: [] }],

  ["bold", "italic", "underline", "strike"], // toggled buttons
  [
    { align: "" },
    { align: "center" },
    { align: "right" },
    { align: "justify" },
  ],
  ["blockquote", "code-block"],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  ["clean"], // remove formatting button
];
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>