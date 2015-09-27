/*eslint-disable no-unused-vars */
import React from 'react'
import { createHistory, useBasename } from 'history'
import { Router } from 'react-router'
import { Users, Posts } from './shared/collections'

const history = useBasename(createHistory)({
  basename: '/meteorpress-core'
})

const rootRoute = {
  component: 'div',
  childRoutes: [
    {
      path: '/',
      component: require('./components/Admin'),
      childRoutes: [
        require('./screens/Posts')
      ]
    },
    {
      path: '/access',
      component: require('./components/Access')
    }
  ]
}

React.render(
  <Router history={history} routes={rootRoute} />,
  document.getElementById('root')
)
