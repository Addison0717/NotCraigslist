import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../../actions/products'
import {Link} from 'react-router-dom'

import './main.css'


class Main extends PureComponent {

  componentDidMount() {
    this.props.getAllProducts()
  }

  render() {

    // this.props.getAllProducts()  

    const arrayOfItems = this.props.products.ads
    
    console.log("ALL THE ADVERTISEMENTS ON RENDER", arrayOfItems)
    
      if(arrayOfItems === undefined){

      return (
      <div>
        <h1 className="heading">Ebay Clone</h1>  
        <h1>Loading...</h1>
      </div>
      ) 

      } else {

        return (
        <div>
          <h1 className="heading">Ebay Clone</h1>
          <div id="sellSomething">
            <Link to="/addlisting">Sell Something!</Link>
          </div>
          <ul>
          {arrayOfItems.map(x => {
            return (
            <div className="listing">  
              <Link to={ `/ads/${x.id}` }>
                <div key={x.id}>
                  <h1>{x.title}</h1>
                  <h2>€{x.price}</h2>
                  <p>{x.description}</p>
                </div>
              </Link>
            </div>
            )
          })
          }
          </ul>
        </div>
        )

      }
    
  }

}

const mapStateToProps = function (state) {
  return state
}

export default connect(mapStateToProps, { getAllProducts })(Main)
