<template>
     <section class="todos">
      <transition-group name="todo-list" appear>
 
        <div
          v-for="todo in todos"
          :key="todo.id"
          id="item-list"
          class="row align-items-center"
        >
          <li
            class="input"
            :class="{ completed: todo.completed, show: showAll }"
          >
            <span
              ><input
                type="checkbox"
                v-model="todo.completed"
                @click="todo.completed = !todo.completed" /></span
            ><input
              :class="{ completed: todo.completed, show: showAll }"
              v-model="todo.title"
            /><span @click="this.$emit('delete-todo',todo.id)"
              ><font-awesome-icon icon="trash-can"
            /></span>
          </li>
        </div>
      </transition-group>
    </section>
</template>
<script>
export default {
    name:"TodoList",
    props:["todos","show-all"]
}
</script>
<style>

</style>