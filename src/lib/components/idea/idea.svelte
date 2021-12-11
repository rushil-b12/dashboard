<script>
    let idea;
    let displayingIdea;
    let randomResponse;
    let ideaIsShowing = false;
    const ideaResponses = ["You're a genius!", "I'm not sure that will work...", "That's amazing!", "Worth a shot!", "That isn't really groundbreaking."]
    const displayIdea =() => {
        randomResponse = ideaResponses[Math.floor(Math.random() * 5)]
        displayingIdea = idea
        idea = ''
        ideaIsShowing = true
    }
    const isKeyPressed = e => {
        if(e.key == "Enter") displayIdea()
    }
    
</script>

<input on:input={()=> ideaIsShowing = false} class="input-field" type="text" placeholder="What is your groundbreaking idea?" bind:value={idea}>
<button class="input-button" on:click={displayIdea}>Done</button>

{#if ideaIsShowing && !!displayingIdea}
    <h2>{displayingIdea}</h2>
    <h4>{randomResponse}</h4>
    
{/if}

<svelte:window on:keyup={isKeyPressed}/>

<style>
    h2, h4 {
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
</style>