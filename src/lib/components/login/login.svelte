<script>
import supabase from "$lib/db";

    let email;
    let password;
    const signInOrSignUp =async() => {
        const {error, session} =await supabase.auth.signUp({email, password})
        if(error) {
            console.log(error)
        } else {
            if(session) {
                alert('Successful login!')
            } else {
                alert('Registered, please confirm your email address.')
            }
        }
    }
</script>

<form on:submit|preventDefault={signInOrSignUp}>
    <input type="text" placeholder="Email" bind:value={email}>
    <input type="text" placeholder="Password" bind:value={password}>
    <button type="submit">Login</button>
</form>
