<script>
    import { linksStore } from "$lib/stores/links.stores.js";
    
    let newBookmark = {siteName:'', url:''};
    let bookmarks;
    let veryNewBookmark;
    const addBookmark =(e) => {
        e.preventDefault()
        bookmarks = $linksStore
        veryNewBookmark = newBookmark
        console.log(newBookmark.url)
        if (newBookmark.url != '') {
            console.log('before', $linksStore)
            console.log('bookmarks', bookmarks)
            console.log('newBookmark', newBookmark)
            console.log(veryNewBookmark)
            const test = [...bookmarks, {...newBookmark}]
            console.log('test', test)
            linksStore.set(test)
            console.log('after', $linksStore)
            console.log('---------------------------')
            newBookmark.siteName = ''
            newBookmark.url = ''
        }
    }
    const removeLink =index => ($linksStore = $linksStore.filter(link => link != $linksStore[index]))

    $:console.log('change', $linksStore)
</script>

<form>
    <input class="input-field" type="url" placeholder="Enter the URL of a website" bind:value={newBookmark.url}>
    <input class="input-field" type="text" placeholder="Enter the name of the website" bind:value={newBookmark.siteName}>
    <button class="input-button" on:click={addBookmark}>Add</button>
</form>

<ul>
    {#each $linksStore as {siteName, url}, index}
        <li>
            <a href={url} target="_blank">{siteName}</a>
            <button on:click={()=> removeLink(index)}>x</button>
        </li>    
    {:else}
        <li>Add your first bookmark!</li>
    {/each}
    
</ul>
