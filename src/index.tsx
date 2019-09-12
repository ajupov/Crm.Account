import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { Application } from './application/Application'

declare let module: { hot: any }

ReactDOM.render(<Application />, document.getElementById('root'))

if (module.hot) {
    module.hot.accept('./application/Application', () => {
        ReactDOM.render(<Application />, document.getElementById('root'))
    })
}
