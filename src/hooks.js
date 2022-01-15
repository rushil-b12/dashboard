import { auth } from '$lib/db'
import {
    expressifyReq,
    expressifyResp,
    deExpressifyResp,
} from '$lib/utils/expressify'

export async function handle({
    request,
    resolve,
}) {
    request.locals.user =
        (await (await auth.api.getUserByCookie(expressifyReq(request))).user) || {}

    let response = await resolve(request)

    if (request.method === 'POST' && request.url.pathname === '/api/auth.json') {
        auth.api.setAuthCookie(request, expressifyResp(response))
        response = deExpressifyResp(response)
    }

    return {
        ...response,
        headers: {
            ...response.headers,
        },
    }
}

export async function getSession(request) {
    const { user } = request.locals
    return {
        user,
    }
}
