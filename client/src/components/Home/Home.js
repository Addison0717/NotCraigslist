import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import './home.css'
import {getAllProducts} from '../../actions/products'
import {Link} from 'react-router-dom'


class Home extends PureComponent {


  render() {
    return(
      <div id="home">
        <h1 className="heading">Home Page</h1>
        <div id="viewAll">
          <Link to="/ads">View All Listings</Link>
        </div>
      </div>
    )
   }



}

const mapStateToProps = function (state) {
  return state
}

export default connect(mapStateToProps, { })(Home)
