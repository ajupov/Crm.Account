import { Button, Card, Icon, Modal } from 'semantic-ui-react'
import Filter, { FilterProps } from './Filter'
import React, { FC } from 'react'

interface FilterMobile {
    isShow: boolean
    onShow: () => void
    onHide: () => void
}

const FilterMobile: FC<FilterMobile & FilterProps> = ({
    isShow,
    onShow,
    onHide,
    fields,
    isApplyEnabled,
    onApply,
    isResetEnabled,
    onReset
}) => (
    <>
        <Button basic icon size="mini" floated="right" onClick={onShow}>
            <Icon name="filter" />
            Фильтры
        </Button>
        <Modal size="mini" open={isShow} onClose={onHide}>
            <Card fluid>
                <Card.Content>
                    <Filter
                        fields={fields}
                        isApplyEnabled={isApplyEnabled}
                        onApply={onApply}
                        isResetEnabled={isResetEnabled}
                        onReset={onReset}
                    />
                </Card.Content>
            </Card>
        </Modal>
    </>
)

export default FilterMobile
