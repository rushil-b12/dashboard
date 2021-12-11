<script>
    export let todos=[];
    const changeCompleted = index => todos[index].completed = !todos[index].completed
    const removeTodo = index => (todos = todos.filter(todo => todo != todos[index]))

</script>

<ul>
    {#each (todos) as {task, completed}, index}
         <li>
             <input type="checkbox"
             checked={completed}
             on:change={()=> changeCompleted(index)}>
             <!-- must have arrow function as otherwise, function will run on page load
             this is an event listener -->
             <input class:completed class="todo" type="text" bind:value={task}>
             <button on:click={()=> removeTodo(index)}>x</button>
        </li>
    {:else}
         <li><span>Start by adding a todo!</span></li>
    {/each}
</ul>

<style>
    .completed {
        text-decoration: line-through;
    }
    li {
       display: grid; 
       grid-template-columns: 10% 80% 10%;
    }
    .todo {
        grid-column: 2/3;
        margin-right: 1rem;
    }
    span {
        grid-column: 1/-1;
    }
</style>
    