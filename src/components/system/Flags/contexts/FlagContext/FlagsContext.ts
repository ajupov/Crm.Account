import FlagsState, { flagsInitialState } from '../../states/FlagsState'

import { createContext } from 'react'

const FlagsContext = createContext<FlagsState>(flagsInitialState)

export default FlagsContext
