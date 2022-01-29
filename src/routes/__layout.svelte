<script>
    import "../app.css";
    import { user } from "$lib/db";
    import Login from "$lib/components/login/login.svelte";
</script>

{#if $user}
    <slot />
{:else}
    <Login />
{/if}
