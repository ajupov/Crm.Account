import Configuration from '../../configuration/Configuration'
import HttpClientFactory from './HttpClientFactory'

export class HttpClientFactoryBuilder {
    private readonly configuration = new Configuration()
    private _host = ''

    public WithHost(host: string): HttpClientFactoryBuilder {
        this._host = host

        return this
    }

    public WithApiUrl(): HttpClientFactoryBuilder {
        this._host = this.configuration.ApiUrl

        return this
    }

    public Build(): HttpClientFactory {
        return new HttpClientFactory(this._host)
    }
}
