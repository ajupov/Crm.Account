import IJsonHttpClientFactory from '../../../src/utils/http/jsonHttpClient/IJsonHttpClientFactory'
import UserFlagType from '../models/UserFlagType'

export default class UserFlagsClient {
    private readonly _host: string
    private readonly _factory: IJsonHttpClientFactory

    constructor(host: string, factory: IJsonHttpClientFactory) {
        this._host = host
        this._factory = factory
    }

    public IsSetAsync = (type: UserFlagType): Promise<boolean> =>
        this._factory.getAsync<boolean>(this._host + '/User/Flags/v1/IsSet', { type })

    public GetNotSetListAsync = (): Promise<UserFlagType[]> =>
        this._factory.getAsync<UserFlagType[]>(this._host + '/User/Flags/v1/GetNotSetList')

    public SetAsync = (type: UserFlagType): Promise<void> =>
        this._factory.putAsync(this._host + '/User/Flags/v1/Set', void 0, { type })
}
