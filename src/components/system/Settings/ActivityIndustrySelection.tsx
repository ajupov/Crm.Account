// import React, { FC, useCallback, useEffect, useState } from 'react'

// import AccountFlagsContextProvider from './contexts/AccountFlagsContext/AccountFlagsContextProvider'
// import AccountSettingActivityIndustry from '../../../../api/settings/models/AccountSettingActivityIndustry'
// import AccountSettingsClient from '../../../../api/settings/clients/AccountSettingsClient'
// import FlagsLayout from './components/FlagsLayout/FlagsLayout'
// import HttpClientFactoryInstance from '../../../utils/httpClientFactory/HttpClientFactoryInstance'
// import UserFlagsContextProvider from './contexts/UserFlagsContext/UserFlagsContextProvider'

// interface UseActivityIndustrySelectionReturn {}

// const accountSettingsClient = new AccountSettingsClient(HttpClientFactoryInstance.Api)

// const useActivityIndustrySelection = (): UseActivityIndustrySelectionReturn => {
//     const [activityIndustry, setActivityIndustry] = useState<AccountSettingActivityIndustry | undefined>()

//     const get = useCallback(async () => {
//         const { activityIndustry } = await accountSettingsClient.GetAsync()

//         setActivityIndustry(activityIndustry)
//     }, [])

//     const set = useCallback(async (industry: AccountSettingActivityIndustry) => {
//         await accountSettingsClient.SetActivityIndustryAsync(industry)

//         setActivityIndustry(activityIndustry)
//     }, [])

//     useEffect(() => {
//         void get()
//     }, [get])

//     return {}
// }

// const ActivityIndustrySelection: FC = () => (
//     <AccountFlagsContextProvider>
//         <UserFlagsContextProvider>
//             <FlagsLayout />
//         </UserFlagsContextProvider>
//     </AccountFlagsContextProvider>
// )

// export default Flags

