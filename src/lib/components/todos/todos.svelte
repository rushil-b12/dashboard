<script>
    import Newtodo from './newtodo.svelte'
    import Todolist from './todolist.svelte'
    import { todoStore } from "$lib/stores/todo.stores.js";
    const addTodo = (e)=> {
        let content = e.detail
        todoStore.set([...$todoStore, {content, completed:false}])
    }
    console.log(todoStore)
    $:todos = $todoStore
</script>

<Newtodo
    on:newTodo={addTodo}
/>

<Todolist
    bind:todos
/>