import React from 'react'
import reactMixin from 'react-mixin'
import { Users, Posts } from 'collections'
import Sidebar from './Sidebar'

@reactMixin.decorate(ReactMeteorData)

class Admin extends React.Component {
  getMeteorData() {
    return {
      users: Users.find().fetch()
    }
  }
  render() {
    let userCount = Users.find().fetch().length
    let postsCount = Posts.find().fetch().length
    return (
      <div>
        <Sidebar />
        <div style={{ padding: 20, float: 'right' }}>
          <h1>Hello Webpack!</h1>
          <p>There are {userCount} users in the Minimongo  (login to change)</p>
          <p>There are {postsCount} posts in the Minimongo  (autopublish removed)</p>
        </div>
      </div>
    )
  }
}

export default Admin
