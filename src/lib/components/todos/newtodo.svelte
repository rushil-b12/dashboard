<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let task;
    
    const addTodo =() => {
        console.log(task)
        if(!!task) dispatch("newTodo", task)
        task = ''
    }

    const isKeyPressed = e => {
        if(e.key == "Enter") addTodo()
    }
</script>

<input class="input-field" type="text" placeholder="What do you want to achieve today?" bind:value={task}>
<button class="input-button" on:click={addTodo}>Add</button>

<svelte:window on:keyup={isKeyPressed}/>

<style>
    
</style>