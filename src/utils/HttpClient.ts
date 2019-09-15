import 'isomorphic-fetch';
import { stringify } from 'query-string';

export default class HttpClient {
    public static async get(url: string, data?: object) {
        try {
            const params = this.getParams('get');
            const response = await fetch(url + stringify(data || {}), params);

            await this.checkError(response);
            await this.checkRedirect(response);

            return this.convertToJson(response);
        } catch (error) {
            console.log(error);
        }
    }

    public static async post(url: string, body?: object) {
        try {
            const params = this.getParams('post', body);
            const response = await fetch(url, params);

            await this.checkError(response);
            await this.checkRedirect(response);

            return this.convertToJson(response);
        } catch (error) {
            console.log(error);
        }
    }

    private static getParams(method: string, body?: object): object {
        const defaultParams = {
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
                'pragma': 'no-cache',
            }
        };

        let result = Object.assign({}, defaultParams, { 'method': method });

        if (method === 'post') {
            return Object.assign({}, result, { 'body': JSON.stringify(body) });
        }

        return result;
    }

    private static checkError(response: Response): void {
        if (!response.ok) {
            throw Error(response.statusText);
        }
    }

    private static checkRedirect(response: Response): void {
        const location = response.headers.get('location');
        if (location) {
            window.location.href = location;
        }
    }

    private static convertToJson(response: Response): Promise<any> {
        return response.json();
    }
}