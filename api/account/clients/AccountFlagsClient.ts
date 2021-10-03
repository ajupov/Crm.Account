import AccountFlagType from '../models/AccountFlagType'
import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'

export default class AccountFlagsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public IsSetAsync = (type: AccountFlagType): Promise<boolean> =>
        this._factory.getAsync<boolean>(this._host + '/Account/Flags/v1/IsSet', { type })

    public GetNotSetListAsync = (): Promise<AccountFlagType[]> =>
        this._factory.getAsync<AccountFlagType[]>(this._host + '/Account/Flags/v1/GetNotSetList')

    public SetAsync = (type: AccountFlagType): Promise<void> =>
        this._factory.putAsync(this._host + '/Account/Flags/v1/Set', void 0, { type })
}
