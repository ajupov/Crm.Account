import React, { FC } from 'react'

import { Grid } from 'semantic-ui-react'
import RightBlock from './ProductsMenuBlock'

const ProductsMenuLayout: FC = ({ children }) => (
    <Grid columns={2}>
        <Grid.Row>
            <Grid.Column width={11}>{children}</Grid.Column>
            <Grid.Column width={3}>
                <RightBlock />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)

export default ProductsMenuLayout
