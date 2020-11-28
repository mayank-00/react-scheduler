import { PUBLIC } from './constants'

import LandingPage from 'views/landingPage'
import SingleSlot from 'views/singleSlot'

const publiRoutes = [
    {
        path: PUBLIC.LANDING_PAGE.path,
        exact: true,
        Component: LandingPage
    },
    {
        path: PUBLIC.SINGLE_SLOT_PAGE.path,
        exact: true,
        Component: SingleSlot
    }
]

export default publiRoutes