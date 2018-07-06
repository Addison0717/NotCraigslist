// src/components/AdContainer/AdContainer.js
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { getAd } from '../../actions/products'
import {Link} from 'react-router-dom'

import './adContainer.css'

class AdContainer extends PureComponent {

  componentWillMount() {  
    this.props.getAd(this.props.match.params.id)
  }

  render() {

    const specificAd = this.props.products.product
    console.log("Specific Ad",specificAd)
    
      if(specificAd === undefined){

      return (

      <div>

        <h1 className="heading">Ebay Clone</h1>  

        <h1>Loading...</h1>
      
      </div>
    
      ) 

      } else {

        return (

          <div>
  
            
            {
              specificAd.map(x => {
              return (
              
                <div key={x.id} className="detailedListing">

                  <h1>{x.title}</h1>
                  <h2>€{x.price}</h2>
                  <p>{x.description}</p>
                  <p>{x.email}</p>
                  <p>{x.phoneNumber}</p>
                  <img src={x.picture} alt="product image"/>

                  <br/>
                  <div id="backLink">
                    <Link to="/ads">Back</Link>
                  </div>
  
  
                </div>

                
              )
            })
            }
            
  
          </div>
  
        )

      }
    
  }

}

const mapStateToProps = function (state) {
  return state
}

export default connect(mapStateToProps, { getAd })(AdContainer)
