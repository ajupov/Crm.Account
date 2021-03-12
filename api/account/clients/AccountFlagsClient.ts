import AccountFlagType from '../models/AccountFlagType'
import IHttpClientFactory from '../../IHttpClientFactory'

export default class AccountFlagsClient {
    private readonly httpClientFactory: IHttpClientFactory

    constructor(httpClientFactory: IHttpClientFactory) {
        this.httpClientFactory = httpClientFactory
    }

    // prettier-ignore
    public IsSetAsync = (type: AccountFlagType): Promise<boolean> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<boolean>('/Account/Flags/v1/IsSet', { type })

    // prettier-ignore
    public GetNotSetListAsync = (): Promise<AccountFlagType[]> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .get<AccountFlagType[]>('/Account/Flags/v1/GetNotSetList')

    // prettier-ignore
    public SetAsync = (type: AccountFlagType): Promise<void> =>
        this.httpClientFactory
            .createClient(this.httpClientFactory.host)
            .put('/Account/Flags/v1/Set', { type })
}
