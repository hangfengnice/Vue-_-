;(function(){
  const template=`
  <header class="header">
				<h1>todos</h1>
        <input class="new-todo"
        @keydown.enter='handleKeyDown'
         placeholder="What needs to be done?" autofocus>
			</header>
  `
  window.todoHeader ={
    props:["todos"],
    template,
    methods:{
      handleKeyDown(e){
        console.log(1)
        const target = e.target
        const value = target.value.trim()
        if(!value.length){
          return
        }
        this.$emit("abc",value)
        // todos[0].title='oo'
        // todos.push({
        //   id: todos.length ? todos[todos.length-1].id + 1 : 1,
        //   title: value,
        //   completed: false
        // })
        // e.target.value =''
        
      }

    }
  }


})()



