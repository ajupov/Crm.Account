export default interface UserInfoState {
    isAuthenticated: boolean
    name: string
    roles: string[]
}

export const userInfoInitialState: UserInfoState = {
    isAuthenticated: false,
    name: '',
    roles: []
}
