import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {store} from './Store'
import CatFacts from './CatFacts'

ReactDOM.render(
    <Provider store={store}>
        <CatFacts />
    </Provider>, 
    document.getElementById("root"));