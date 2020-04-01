export default interface UserInfo {
    isAuthenticated: boolean
    name: string
    roles: string[]
}

export const userInfoInitial: UserInfo = {
    isAuthenticated: false,
    name: '',
    roles: []
}
