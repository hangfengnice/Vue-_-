
;(function(){
  const template =`
  <div>
  <section class='todoapp'>
  <todo-header 
  @abc='addTodo'
  :todos="todos"></todo-header>
  <todo-list 
  :filterText="filterText"
  :todos='todos'></todo-list>
  <todo-footer :filterText='filterText'></todo-footer>
  </section>
  <app-footer></app-footer>
  </div>

  
  `
  const todos =[{
    id:1,
    title:'吃饭',
    completed: true


  },
  {
    id:2,
    title:'吃饭11',
    completed: false


  },
  {
    id:3,
    title:'吃饭1',
    completed: true


  }]
  window.app = {
    template,
    components: {
      todoHeader,
      todoList,
      todoFooter,
      appFooter
    },
    data(){
      return {
        todos,
        filterText:''
      }
    },
    methods:{
      addTodo(titleText){
        titleText = titleText.trim()
        if(!titleText.length){
          return
        }
        todos.push({
          id: todos.length ? todos[todos.length-1].id + 1 : 1,
          title: titleText,
          completed: false
        })
      }
    },
    created() {
      window.onhashchange = () => {
        let hash = window.location.hash.substr(2)
        if(hash === ''){
          hash = 'all'
        }
        this.filterText = hash
      }
    }

  }
  
})()