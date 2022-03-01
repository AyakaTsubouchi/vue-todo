<template>
  <div>
    <div class="addTodo">
      <input v-model="newTodo" placeholder="Add new todo" />
      <button @click="addTodo">Add</button>
    </div>
    <button @click="showAll = !showAll">{{showAll? 'HIDE' : 'All'}}</button>
    <section class="todos">
      <transition-group name="products" appear>
        <div
          v-for="todo in todos"
          :key="todo.id"
          id="item-list"
          class="row align-items-center"
        >
          <li class="input" :class="{ completed: todo.completed, show: showAll }">
            <span @click="todo.isEdit = !todo.isEdit"><input
              type="checkbox"
              v-model="todo.completed"
              @click="todo.completed = !todo.completed"
            /></span
            ><input :class="{completed:todo.completed, show: showAll}" v-model="todo.title" /><span
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
       models: {
        base: false,
        conditional: false,
      },
      showAll:false,
      newTodo: "",
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
     console.log('hi')
         this.todos.map((todo) => (todo.isEdit = false));    
    },
  },
  computed: {},
};
</script>

<style>
li {
  list-style-type: none;
}
input{
  border: none;
}
.completed{
   text-decoration: line-through;
   display: none;
}
.completed.show{
    display: inline-block;
}

.ffefd5-box {
  background-color: #ffefd5;
  height: 50px;
  text-align: center;
}

.c13f10-box {
  background-color: #c13f10;
  height: 50px;
}
</style>
