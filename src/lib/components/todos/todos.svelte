<script>
    import * as api from "$lib/api/todo";
    import { onMount } from "svelte";
    import Newtodo from "./newtodo.svelte";
    import Todolist from "./todolist.svelte";
    // import { todoStore } from "$lib/stores/todo.stores.js";
    // const addTodo = (e)=> {
    //     console.log(e.detail)
    //     let task = e.detail
    //     todoStore.set([...$todoStore, {task, completed:false}])
    // }
    // console.log($todoStore)

    let todos;
    onMount(async () => (todos = await api.todos.get()));

    $: console.log("todos", todos);
</script>

<!-- <Newtodo
    on:newTodo={addTodo}
/>

<Todolist
    bind:todos={$todoStore}
/> -->
<!-- <style>
    todoStore {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    } -->
<!-- </style> -->
