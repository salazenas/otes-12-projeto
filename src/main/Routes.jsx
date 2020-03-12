import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import ItemsSelectionPage from '../components/ItemsSelectionPage'

export default () => (
    <Router>
        <Route path="/" component={ItemsSelectionPage} />
        <Redirect from="*" to="/" />
    </Router>
)