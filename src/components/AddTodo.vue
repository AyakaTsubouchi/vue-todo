<template>
  <div class="addTodo">
    <input v-model="newTodo" placeholder="Add new todo" />
    <button class="btn btn-primary m-2" @click="childAddTodo">Add</button>
    <button class="btn btn-warning m-2" @click="this.$emit('toggle-show-all')">
      {{ showAll ? "Hide" : "Show All" }}
    </button>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  props: ["show-all"],
  data: function () {
    return {
      newTodo: "",
    };
  },
  methods: {
    childAddTodo() {
      this.$emit("add-todo", this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
