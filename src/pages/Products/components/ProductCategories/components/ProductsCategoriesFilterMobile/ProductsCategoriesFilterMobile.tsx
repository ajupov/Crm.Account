import { Button, Card, Icon, Modal } from 'semantic-ui-react'
import React, { FC, useContext } from 'react'

import ProductCategoriesFilter from '../ProductCategoriesFilter/ProductCategoriesFilter'
import ProductCategoriesFiltersContext from '../../contexts/ProductCategoriesFiltersContext/ProductCategoriesFiltersContext'

const ProductsCategoriesFilterMobile: FC = () => {
    const state = useContext(ProductCategoriesFiltersContext)

    return (
        <>
            <Button basic icon size="mini" floated="right" onClick={state.onShowMobile}>
                <Icon name="filter" />
                Фильтры
            </Button>
            <Modal size="mini" open={state.isShowMobile} onClose={state.onHideMobile}>
                <Card fluid>
                    <Card.Content>
                        <ProductCategoriesFilter />
                    </Card.Content>
                </Card>
            </Modal>
        </>
    )
}

export default ProductsCategoriesFilterMobile
