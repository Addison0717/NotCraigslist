import React, {PureComponent} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createAd} from '../../actions/products'
import './adForm.css'

class AdForm extends PureComponent {
  state = {
    title: '',
    description: '',
    picture: '',
    price: 0,
    email: '',
    phoneNumber: 0,
    switched: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.addListing(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addListing = (ad) => {
    this.props.createAd(ad)
    this.setState({switched: true})
  }

  render() {

    if(this.state.switched){
      return( 
        <div id="posted">
          <h1 className="heading">Listing posted!</h1>
          <Link to='/ads'>View all listings</Link> 
        </div>  
    )
    } else {
      return ( 
      
        <div id="adForm">
  
          <h1 className="heading">Add a new Listing</h1>
  
          <form onSubmit={this.handleSubmit}>
  
            <div className="formInput">
              <label>Advertisement Title: </label>
              <input type="text" name="title" onChange={this.handleChange}/>    
              <br/>
            </div>

            <div className="formInput">
              <label>Description: </label>
              <input type="text" name="description" onChange={this.handleChange}/>
              <br/>
            </div>      
  
            <div className="formInput">
              <label>Image (url): </label>
              <input type="text" name="picture" onChange={this.handleChange}/>
              <br/>
            </div>      
  
            <div className="formInput">
              <label>Price: </label>
              <input type="number" name="price" onChange={this.handleChange}/>
              <br/>
            </div>      
  
            <div className="formInput">
              <label>Email Address: </label>
              <input type="email" name="email" onChange={this.handleChange}/>
              <br/>
            </div>      
  
            <div className="formInput">
              <label>Phone Number: </label>
              <input type="tel" name="phoneNumber" onChange={this.handleChange}/>
              <br/>
            </div>      
  
            <button type="submit" id="submitButton">Add listing</button>
  
          </form>
  
        </div>
    
      )
    }
  }
}

const mapStateToProps = function (state) {
  return state
}

export default connect(mapStateToProps, { createAd })(AdForm)
