<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let task;
    
    const addTodo = ()=> {
        if(!!task) dispatch("newTodo", {task})
        task = ''
    }

    const isKeyPressed = e => {
        if(e.code == "Enter") addTodo()
    }
</script>

<input id="input-field" type="text" placeholder="What do you want to achieve today?" bind:value={task}>
<button on:click={addTodo}>Done</button>

<svelte:window on:keyup={isKeyPressed}/>

<style>
    #input-field {
        width: 30%;
    }
</style>