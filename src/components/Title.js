import React from 'react'

function Title({name,title}) {
    return (
        <div class='row'>
            <div class="col-10 my-2 mx-auto text-title text-center">
                <h1 class='font-weight-bold'> {name} <strong class='text-danger'> {title} </strong>      </h1>
            </div>
            
        </div>
    )
}

export default Title
