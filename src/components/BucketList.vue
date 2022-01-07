<template>
<div>
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
</div>
</template>

<script>
import {reactive, computed} from "vue";

export default{
  setup(){
      const data = reactive({
        goals: [
            {title: "Get comfortable with React JS", completedDate: "Completed: 30/06/2020"},
            {title: "Advance to more difficult React Topics", completedDate: "Completed: 30/06/2020"},
            {title: "Learn backend development with Django", completedDate: "Completed: 15/09/2020"},
            {title: "Use Typescript with React", completedDate: "Completed: 3/2/2021"},
            {title: "Use Django Rest Framework with React", completedDate: "Completed: 10/01/2021"},
            {title: "Learn Vue3", completedDate: "Completed: 17/03/2021"},
            {title: "Use VueRouter", completedDate: "Completed: 31/07/2021"},
            {title: "Try VueX and Maybe look into ReduxToolkit", completedDate: "Completed: 8/08/2021"},
            {title: "Learn Astro (Astro.build) - redo this site", completedDate: "Completed 26/08/2021"},
            {title: "Be Comfortable with the basics of Express JS for APIs", completedDate: "Completed: 07/01/2022"},
            {title: "Learn GraphQL / Try GraphQl with express"},
            {title: "Try Graphene - Django GraphQl"},
            {title: "Play with Websockets - Socket.io"},
            {title: "Try FeathersJS for Realtime Express"},
            {title: "Play with NestJS for backend JS?"},
        ], 
        todos: [
            {title: "Continue learning German", completedDate: "Completed 26/8/2021"},
            {title: "Get into The University of Lincoln", completedDate: "Completed: 16/12/2022"},
            {title: "Do exercise more often"},
            {title: "Get through A-Level exams with minimal stress"},
        ]
      })

      // const SortedGoals = computed(() => {
      //     data.goals.forEach((goal)=> {
      //       console.log(goal.completedDate)
      //       let sliced = goal.completedDate?.split(":")[1].trim();
      //       let SplitDate = sliced?.split("/");
      //       [SplitDate[0], SplitDate[1]] = [SplitDate[1], SplitDate[0]];
            // goal.completedDate = new Date(SplitDate.join("/"));
      //     })
      //     return data.goals.sort((a,b) => {
      //       return a.completedDate - b.completedDate;
      //     }) 
      // });
    
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
      toggleTodoStatus,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>