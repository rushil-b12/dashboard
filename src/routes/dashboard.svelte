<script>
    import Todos from "$lib/components/todos/todos.svelte";
    import Time from "$lib/components/time/time.svelte";
    import Idea from "$lib/components/idea/idea.svelte";
    import Links from "$lib/components/links/links.svelte";
    import Login from "$lib/components/login/login.svelte";
    import { session } from "$app/stores";
import { unsetAuthCookie } from "$lib/utils/session";

    console.log($session)

    let currentTime;
    function changeBackground() {
        const night = [20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6];
        const morning = [8, 9, 10, 11, 12];
        const afternoon = [13, 14, 15, 16, 17, 18];
        const h = new Date().getHours();
        switch (true) {
            case night.includes(h):
                currentTime = "/img/night.jpg";
                break;
            case 7:
                currentTime = "/img/sunrise.jpg";
                break;
            case morning.includes(h):
                currentTime = "/img/morning.jpg";
                break;
            case afternoon.includes(h):
                currentTime = "/img/afternoon.jpg";
                break;
            case 19:
                currentTime = "/img/sunset.jpg";
                break;
            default:
                break;
        }
    }
    changeBackground();
    setInterval(changeBackground, 2000);
</script>

{#if $session.user.aud === "authenticated"}
<div id="dashboard" style="background-image: url({currentTime});">
    <div class="card" id="time">
        <Time />
    </div>

    <div class="card" id="links">
        <h1>Bookmarks</h1>
        <Links />
    </div>

    <div class="card" id="todos">
        <h1>Todos</h1>
        <Todos />
    </div>

    <div class="card" id="groundbreaking-idea">
        <h1>Groundbreaking Idea</h1>
        <Idea />
    </div>
</div>
{:else}
    <div class="card" id="login">
        <!-- <h1>Sign In</h1> -->
        <Login />
    </div>
{/if}


<style>
    #dashboard {
        display: grid;
        padding: 1rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 2rem;
        background-size: cover;
        background-position: right top;
    }
    .card {
        background-color: rgba(214, 176, 214, 0.6);
        padding-left: 1rem;
        padding-right: 1rem;
        border: 10pt outset white;
    }
    #login {
        display: grid;
        place-content: center;
        margin: 3rem;
        border-color: silver;
    }
    h1 {
        font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    }
    #links {
        grid-column-start: 2;
        grid-row-end: 2;
    }
    #todos {
        grid-column-end: 2;
        grid-row-start: 2;
    }
    #groundbreaking-idea {
        grid-column-start: 2;
        grid-row-start: 2;
    }
    #time {
        display: grid;
        place-content: center;
    }
</style>
