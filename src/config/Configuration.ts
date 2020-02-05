import { IConfiguration } from './IConfiguration'

export default class Configuration implements IConfiguration {
    get LogoutUrl(): string {
        const url = process.env.LOGOUT_URL
        if (!url) {
            throw new Error('LOGOUT_URL is not defined')
        }

        return url
    }

    get ApiUrl(): string {
        const url = process.env.API_URL
        if (!url) {
            throw new Error('API_URL is not defined')
        }

        return url
    }
}
