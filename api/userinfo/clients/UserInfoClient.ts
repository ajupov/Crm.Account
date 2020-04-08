/* eslint-disable */
import IHttpClientFactory from '../../IHttpClientFactory'
import UserInfo from '../models/UserInfo'

export default class UserInfoClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public GetAsync = (): Promise<UserInfo> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<UserInfo>('/UserInfo/Get')
}
