import HttpClientFactoryBuilder from './HttpClientFactoryBuilder'

export default class HttpClientFactoryCreate {
    public static get HttpClientFactory(): HttpClientFactoryBuilder {
        return new HttpClientFactoryBuilder()
    }
}
