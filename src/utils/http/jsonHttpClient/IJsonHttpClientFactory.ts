export default interface IJsonHttpClientFactory {
    getAsync: <T>(uri: string, parameters?: Record<string, any>, headers?: HeadersInit) => Promise<T>
    postAsync: <T>(uri: string, parameters?: Record<string, any>, body?: any, headers?: HeadersInit) => Promise<T>
    putAsync: <T>(uri: string, parameters?: Record<string, any>, body?: any, headers?: HeadersInit) => Promise<T>
    patchAsync: <T>(uri: string, parameters?: Record<string, any>, body?: any, headers?: HeadersInit) => Promise<T>
    deleteAsync: <T>(uri: string, parameters?: Record<string, any>, headers?: HeadersInit) => Promise<T>
}
