<script>
    import "../app.css";
    import { supabase } from "$lib/db.js";
    import { session } from '$app/stores'
    import { goto } from '$app/navigation'
    import { setAuthCookie, unsetAuthCookie } from "$lib/utils/session";

    supabase.auth.onAuthStateChange(async (event, _session) => {
        if (event !== "SIGNED_OUT") {
            $session = { user: _session.user };
            await setAuthCookie(_session);
        } else {
            $session = { user: {} };
            await unsetAuthCookie();
            goto("/auth");
        }
    });
</script>

<slot />
