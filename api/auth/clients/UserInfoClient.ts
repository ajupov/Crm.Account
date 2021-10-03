import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import UserInfo from '../models/UserInfo'

export default class UserInfoClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public GetAsync = (): Promise<UserInfo> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).get<UserInfo>('/UserInfo/Get')
}
