<script>
import { goto } from "$app/navigation";
import { supabase } from "$lib/db";

    let email = 'rushil.baya@gmail.com';
    let password = 'abc123';
    let action = "signIn";
    const signInOrSignUp =async() => {
        const {error, session} =await supabase.auth[action]({email, password})
        if(error) {
            console.log(error)
        } else {
            if(session) {
                console.log(session)
                alert('Successful login!')
                goto('/dashboard')
            } else {
                alert('Registered, please confirm your email address.')
            }
        }
    }
</script>

<form on:submit|preventDefault={signInOrSignUp}>
    <h1>{action==="signIn" ? "Sign In" : "Sign Up"}</h1>
    <input type="text" placeholder="Email" bind:value={email}>
    <input type="password" placeholder="Password" bind:value={password}>
    <button type="submit">Login</button>
    <p>{action==="signIn" ? "Not a member?" : "Already a member?"} <u><span style="cursor: pointer;" on:click={()=>action==="signIn" ? action="signUp" : action="signIn"}>{action==="signIn" ? "Sign Up" : "Sign In"}</span></u></p>
</form>
