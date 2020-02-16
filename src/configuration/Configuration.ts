import { IConfiguration } from './IConfiguration'
import { combineUrl } from '../utils/url/urlUtils'

export default class Configuration implements IConfiguration {
    get LoginUrl(): string {
        const authHost = process.env.AUTH_HOST
        const loginPath = process.env.LOGIN_PATH

        return combineUrl(authHost, loginPath)
    }

    get LogoutUrl(): string {
        const authHost = process.env.AUTH_HOST
        const logoutPath = process.env.LOGOUT_PATH

        return combineUrl(authHost, logoutPath)
    }

    get ApiUrl(): string {
        const apiHost = process.env.API_HOST

        return combineUrl(apiHost)
    }
}
