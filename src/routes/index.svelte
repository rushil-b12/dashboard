<script>
    import {todoStore} from "$lib/stores/todo.stores"
    console.log($todoStore)

    let task;
    const addTodo = ()=> {
        if(!!task) {
            todoStore.set([...$todoStore, {task, completed:false}])
            task = ''
        }
    }
    const changeCompleted = index => $todoStore[index].completed = !$todoStore[index].completed
    const removeTodo = index => $todoStore = $todoStore.filter(todo => todo != $todoStore[index])
    
        
    $: console.table($todoStore)
</script>
<h1>Todos</h1>

<input id="input-field" type="text" placeholder="What do you want to achieve today?" bind:value={task}>
<button on:click={addTodo}>Done</button>

<ul>
{#each ($todoStore) as {task, completed}, index}
     <li>
         <input type="checkbox"
         checked={$todoStore[index].completed}
         on:change={()=> changeCompleted(index)}>
         <!-- must have arrow function as otherwise, function will run on page load
         this is an event listener -->
         <input class:completed class="todo" type="text" bind:value={$todoStore[index].task}>
         <button on:click={()=> removeTodo(index)}>x</button>
    </li>
{:else}
     <li>Start by adding a todo!</li>
{/each}
</ul>

<style>
    .completed {
        text-decoration: line-through;
    }
    .todo {
        border: none;
    }
    #input-field {
        width: 30%;
    }
</style>