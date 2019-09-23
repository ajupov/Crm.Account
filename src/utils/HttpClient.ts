import 'isomorphic-fetch'
import { stringify } from 'query-string'

export class HttpClient {
    public async get(uri: string, data?: object) {
        try {
            const params = this.getParams('get')
            const response = await fetch(uri + stringify(data || {}), params)

            await HttpClient.checkError(response)
            await HttpClient.checkRedirect(response)

            return HttpClient.convertToJson(response)
        } catch (error) {
            console.log(error)
        }
    }

    public async post(uri: string, body?: object) {
        try {
            const params = this.getParams('post', body)
            const response = await fetch(uri, params)

            await HttpClient.checkError(response)
            await HttpClient.checkRedirect(response)

            return HttpClient.convertToJson(response)
        } catch (error) {
            console.log(error)
        }
    }

    private getParams(method: string, body?: object) {
        const defaultParams = {
            credentials: 'include',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
                pragma: 'no-cache'
            }
        }

        let result = Object.assign({}, defaultParams, { method: method })

        if (method === 'post') {
            return Object.assign({}, result, { body: JSON.stringify(body) })
        }

        return result
    }

    private static checkError(response: Response) {
        if (!response.ok) {
            throw Error(response.statusText)
        }
    }

    private static checkRedirect(response: Response) {
        const location = response.headers.get('location')
        if (location) {
            window.location.href = location
        }
    }

    private static convertToJson(response: Response) {
        return response.json()
    }
}
