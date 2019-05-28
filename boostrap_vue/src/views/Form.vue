<template>
  <div class="mt-3">
    <h1>Form</h1>
    <form>
      <b-row>
        <b-col md="3">
          <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
          <small>minimo 3 caractes</small>
          <p>texto: {{ texto }}</p>
        </b-col>
        <b-col md="3">
          <b-form-select v-model="select" :options="options"></b-form-select>
          <p>Seleccionado: {{select}}</p>
        </b-col>
        <b-col md="3">
          <b-form-radio-group v-model="radio" :options="options2"></b-form-radio-group>
          <p>Radio:{{radio}}</p>
        </b-col>
        <b-col>
          <b-form-checkbox-group v-model="check" :options="options3"></b-form-checkbox-group>
         <p>Nultiple select: {{check}}</p>
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      texto: "",
      select: null,
      radio: null,
      check: null,
      options: [
        { value: null, text: "seleccione un animal" },
        { value: "perro", text: "guau guau" },
        { value: "gato", text: "miau" },
        { value: "pato", text: "Cuack" }
      ],
      options2: [
        { value: null, text: "seleccione un animal" },
        { value: "perro", text: "guau guau" },
        { value: "gato", text: "miau" },
        { value: "pato", text: "Cuack" }
      ],
      options3: [
        { value: null, text: "seleccione un animal" },
        { value: "perro", text: "guau guau" },
        { value: "gato", text: "miau" },
        { value: "pato", text: "Cuack" }
      ]
    };
  },
  computed: {
    comprobar() {
      return this.texto.length > 2 ? true : false;
    }
  }
};
</script>