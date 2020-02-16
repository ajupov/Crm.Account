import 'semantic-ui-css/semantic.min.css'

import Application from './components/application/Application'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(<Application />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept('./components/application/Application', () => {
        ReactDOM.render(<Application />, document.getElementById('root'))
    })
}
