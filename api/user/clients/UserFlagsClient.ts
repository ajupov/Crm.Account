import IHttpClientFactory from '../../IHttpClientFactory'
import UserFlagType from '../models/UserFlagType'

export default class UserFlagsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public IsSetAsync = (type: UserFlagType): Promise<boolean> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<boolean>('/User/Flags/v1/IsSet', { type })

    // prettier-ignore
    public GetNotSetListAsync = (): Promise<UserFlagType[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<UserFlagType[]>('/User/Flags/v1/GetNotSetList')

    // prettier-ignore
    public SetAsync = (type: UserFlagType): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put('/User/Flags/v1/Set', { type })
}
