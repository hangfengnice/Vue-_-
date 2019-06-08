;(function(){
  const template=`
  <section class="main">
  <input id="toggle-all" class="toggle-all" type="checkbox">
  <label for="toggle-all">Mark all as complete</label>
  <ul class="todo-list">
    <!-- These are here just to show the structure of the list items -->
    <!-- List items should get the class \`editing\` when editing and \`completed\` when marked as completed -->
    <li v-for="item in filterTodo">
      <div class="view">
        <input 
        v-model='item.completed'
        class="toggle" type="checkbox" checked>
        <label>{{item.title}}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template">
    </li>
    
  </ul>
</section>
  `
  window.todoList ={
    template,
    props:["todos","filterText"],
    data(){
      return {

      }
    },
    computed:{
      filterTodo(){
        switch(this.filterText){
          case 'active':
          return this.todos.filter(t => !t.completed)
          case 'completed':
          return this.todos.filter(t => t.completed)
          default:
          return this.todos
        }
        
      }
    }
  }
})()