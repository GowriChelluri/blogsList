import {Component} from 'react'
import './index.css'
import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

class Home extends Component {
  render() {
    return (
      <ul>
        <>
          <UserInfo />
          <BlogList />
        </>
      </ul>
    )
  }
}

export default Home
