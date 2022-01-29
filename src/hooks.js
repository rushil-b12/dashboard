export async function handle({event, resolve}) {
    let response = await resolve(event)
    return response
}

export async function getSession(event) {
    const { user } = event.locals
    return {
        user,
    }
}