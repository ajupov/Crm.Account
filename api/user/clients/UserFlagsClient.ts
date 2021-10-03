import IHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import UserFlagType from '../models/UserFlagType'

export default class UserFlagsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    public IsSetAsync = (type: UserFlagType): Promise<boolean> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).get<boolean>('/User/Flags/v1/IsSet', { type })

    public GetNotSetListAsync = (): Promise<UserFlagType[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<UserFlagType[]>('/User/Flags/v1/GetNotSetList')

    public SetAsync = (type: UserFlagType): Promise<void> =>
        this.httpClientFactory.createClient(this.httpClientFactory.host).put('/User/Flags/v1/Set', { type })
}
