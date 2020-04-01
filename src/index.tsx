import 'semantic-ui-css/semantic.min.css'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import Application from './components/Application/Application'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<Application />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept('./components/Application/Application', () => {
        ReactDOM.render(<Application />, document.getElementById('root'))
    })
}
