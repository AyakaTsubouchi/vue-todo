<template>
  <div @click="finishEdit()">
    <div class="addTodo">
      <input v-model="newTodo" placeholder="Add new todo" />
      <button @click="addTodo">Add</button>
    </div>
    <button @click="showAll = !showAll">ALL</button>
    <section class="todos">
      <transition-group name="products" appear>
        <div
          v-for="todo in todos"
          :key="todo.id"
          id="item-list"
          class="row align-items-center"
        >
          <li :class="{ completed: todo.completed, show: showAll }">
            <input
              type="checkbox"
              v-model="todo.completed"
              @click="todo.completed = !todo.completed"
            />{{ todo.title
            }}<span @click="todo.isEdit = !todo.isEdit">edit</span
            ><input v-if="todo.isEdit" v-model="todo.title" /><span
              @click="deleteTodo(todo.id)"
              ><font-awesome-icon icon="trash-can"
            /></span>
          </li>
        </div>
      </transition-group>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodo: "",
      editedTodo: "",
      showAll: false,

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
    // Navbar
  },
  created() {},
  methods: {
    addTodo() {
      this.todos.push({
        id: this.todos.length + 1,
        title: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
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
    finishEdit() {
      // let editing=0;
      // this.todos.map((todo) => (todo.isEdit ? editing++ : null));
      // if(editing>0){
      //    this.todos.map((todo) => (todo.isEdit = false));
      // }
    },
  },
  computed: {},
};
</script>

<style>
li {
  list-style-type: none;
}
li.completed {
  text-decoration: line-through;
  display: none;
}

.completed.show {
  display: inline-block;
}
</style>
