<template>
       <h2 class="ui-title-2">Programming</h2>
        <ol class="gradient-list">
          <li v-for="(goal,index) in data.goals" :key="index">
            {{goal.title}}
            <div class="checkbox">
              <span class="checkbox-span" data-status="">
                <template v-if="goal.completedDate">{{goal.completedDate}}</template>
                <input v-else type="checkbox" id="checkbox" v-on:click="toggleGoalStatus(index)"/>
              </span
              >
            </div>
          </li>
        </ol>
        <h2 class="ui-title-2">Personal Development</h2>
        <ol class="gradient-list general-todos">
          <li v-for="(todo,index) in data.todos" :key="index">
            {{todo.title}}
            <div class="checkbox">
              <span class="checkbox-span" data-status="">
                <template v-if="todo.completedDate">{{todo.completedDate}}</template>
                <input v-else type="checkbox" id="checkbox" v-on:click="toggleTodoStatus(index)"/>
              </span>
            </div>
          </li>
        </ol>
</template>

<script>
import {reactive} from "vue";

export default{
  setup(){
      const data = reactive({
        goals: [
            {title: "Get comfortable with React JS", completedDate: "Completed: 30/6/2020"},
            {title: "Advance to more difficult React Topics", completedDate: "Completed: 30/6/2020"},
            {title: "Learn backend development with Django", completedDate: "Completed: 15/9/2020"},
            {title: "Use Typescript with React", completedDate: "Completed: 3/2/2021"},
            {title: "Use Django Rest Framework with React", completedDate: "Completed: 10/1/2021"},
            {title: "Learn Vue3", completedDate: "Completed: 17/3/2021"},
            {title: "Learn Express JS for APIs"},
            {title: "Use VueRouter", completedDate: "Completed: 31/7/2021"},
            {title: "Play with Websockets - Socket.io"},
            {title: "Try VueX and Maybe look into ReduxToolkit", completedDate: "Completed: 8/8/2021"},
            {title: "Learn Astro (Astro.build) - redo this site"},
            {title: "Learn GraphQL / Try GraphQl with express"},
            {title: "Try Graphene - Django GraphQl"},
            {title: "Try FeathersJS"},
        ], 
        todos: [
            {title: "Continue learning German"},
            {title: "Do exercise more often"},
            {title: "Get through A-Level exams with minimal stress"},
            {title: "Get into The University of Lincoln"},
        ]
      })
    
    const toggleGoalStatus = (index) => {
      let today = new Date();
      let month = today.getMonth() + 1;
      let date = `${today.getDate()}/${month}/${today.getFullYear()}`;
      let newValue = {...data.goals[index], completedDate: `Completed ${date}`}
      data.goals[index] = newValue;
    }
    const toggleTodoStatus = (index) => {
      let today = new Date();
      let month = today.getMonth() + 1;
      let date = `${today.getDate()}/${month}/${today.getFullYear()}`;
      let newValue = {...data.todos[index], completedDate: `Completed: ${date}`}
      data.todos[index] = newValue;
    }

    return {
      data,
      toggleGoalStatus,
      toggleTodoStatus
    }
  }
}
</script>

<style lang="scss" scoped>

</style>