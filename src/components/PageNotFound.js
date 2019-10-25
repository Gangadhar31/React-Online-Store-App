import React, { Component } from 'react'

class PageNotFound extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-12 text-center text-title my-5">
                        <h1 className="display-1"> 404  <span className='display-4'> Error </span> </h1>
                          <h2>The requested url <span className='text-danger'>{this.props.location.pathname}</span> is not found</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageNotFound
