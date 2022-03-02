<template>
  <div>
    <add-todo
      @addTodo="addTodo"
      @toggleShowAll="toggleShowAll"
      :showAll="showAll"
    />
    <todo-list :todos="todos" @deleteTodo="deleteTodo" :showAll="showAll" />
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default {
  data: function () {
    return {
      showAll: false,
      editedTodo: "",
      todos: [
        {
          id: 1,
          title: "buy milk",
          completed: false,
          isEdit: false,
        },
        {
          id: 2,
          title: "sell milk",
          completed: false,
          isEdit: false,
        },
      ],
    };
  },
  components: {
    AddTodo,
    TodoList,
  },
  created() {},
  methods: {
    addTodo(todo) {
      this.todos.push({
        id: this.todos.length + 1,
        title: todo,
        completed: false,
      });
    },
    deleteTodo(id) {
      for (let i = 0; i < this.todos.length; i++) {
        if (id === this.todos[i].id) {
          this.todos.splice(i, 1);
        }
      }
    },
    editTodo(id) {
      for (let i = 0; i < this.todos.length; i++) {
        if (id === this.todos[i].id) {
          this.title = this.editedTodo;
        }
      }
    },
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
  },
  computed: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comforter&display=swap");
body {
  font-family: "Comforter", cursive;
}
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  list-style-type: none;
}
input {
  border: none;
}
.completed {
  text-decoration: line-through;
  display: none;
}
.completed.show {
  display: inline-block;
}
</style>
