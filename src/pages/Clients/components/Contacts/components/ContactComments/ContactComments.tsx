import React, { FC, useContext } from 'react'

import Comments from '../../../../../../components/common/collections/Comments/Comments'
import UserInfoContext from '../../../../../../components/system/UserInfo/contexts/UserInfoContext/UserInfoContext'

const ContactComments: FC = () => {
    const { name } = useContext(UserInfoContext)

    return (
        <Comments
            comments={[
                {
                    author: name,
                    dateTime: new Date(),
                    text: 'Это восхитительно!'
                },
                {
                    author: name,
                    dateTime: new Date('2020-08-08 13:12'),
                    text: 'Соглашусь!'
                }
            ]}
        />
    )
}

export default ContactComments
