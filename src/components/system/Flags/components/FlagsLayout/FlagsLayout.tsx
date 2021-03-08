import { Modal, Segment, Step } from 'semantic-ui-react'
import React, { FC } from 'react'

import FlagSteps from '../FlagSteps/FlagSteps'
import useFlagsLayout from './hooks/useFlagsLayout'

const FlagsLayout: FC = () => {
    const { isShowModal, isSetFlag, activeIndex } = useFlagsLayout()

    return (
        <Modal open={isShowModal}>
            <Modal.Content>
                <Step.Group ordered fluid stackable="tablet">
                    {FlagSteps.filter(x => !isSetFlag(x)).map((x, i) => (
                        <Step
                            key={`${x.type}_${x.flag.toString()}`}
                            active={i === activeIndex}
                            completed={i < activeIndex}
                            disabled={i > activeIndex}
                            title={x.title}
                            description={x.description}
                        />
                    ))}
                </Step.Group>
                <Segment>{FlagSteps.filter(x => !isSetFlag(x))[activeIndex]?.component}</Segment>
            </Modal.Content>
        </Modal>
    )
}

export default FlagsLayout
