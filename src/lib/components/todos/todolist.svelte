<script>
    export let todos=[];
    const changeCompleted = index => todos[index].completed = !todos[index].completed
    const removeTodo = index => todos = todos.filter(todo => todo != todos[index])
</script>

<ul>
    {#each (todos) as {task, completed}, index}
         <li>
             <input type="checkbox"
             checked={todos[index].completed}
             on:change={()=> changeCompleted(index)}>
             <!-- must have arrow function as otherwise, function will run on page load
             this is an event listener -->
             <input class:completed class="todo" type="text" bind:value={todos[index].task}>
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
</style>
    