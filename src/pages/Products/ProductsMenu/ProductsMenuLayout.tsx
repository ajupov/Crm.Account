import React, { FC } from 'react'

import { Grid } from 'semantic-ui-react'
import ProductsMenuBlock from './ProductsMenuBlock'

interface ProductsMenuLayoutProps {
    isShowFilters?: boolean
    filters?: JSX.Element
}

const ProductsMenuLayout: FC<ProductsMenuLayoutProps> = ({ isShowFilters, filters, children }) => (
    <Grid>
        <Grid.Column width={11}>{children}</Grid.Column>
        <Grid.Column width={3}>
            <ProductsMenuBlock />
            {isShowFilters && filters}
        </Grid.Column>
    </Grid>
)

export default ProductsMenuLayout
