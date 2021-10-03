export default class Configuration {
    get LoginUrl(): string {
        const authHost = process.env.AUTH_HOST
        const loginPath = process.env.LOGIN_PATH

        return this.combineUrl(authHost, loginPath)
    }

    get LogoutUrl(): string {
        const authHost = process.env.AUTH_HOST
        const logoutPath = process.env.LOGOUT_PATH

        return this.combineUrl(authHost, logoutPath)
    }

    get ApiHost(): string {
        const apiHost = process.env.API_HOST

        return this.combineUrl(apiHost)
    }

    private readonly combineUrl = (host?: string, path?: string): string => {
        if (!host) {
            throw new Error('host is not defined')
        }

        return new URL(path || '', host).href.replace(/\/$/, '')
    }
}
