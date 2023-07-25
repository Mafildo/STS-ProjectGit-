import React from 'react'
import "../../Pages/nav/accounts.css"

const Accounts = ({hide}) => {
  return (
    <div className="accounts-div" style={{height: hide ? "0px" : "3.5em" }}>
        <div className="login">
            <p> &gt; Login</p>
        </div>

        <div className="register">
            <p> &gt; Register</p>
        </div>
    </div>
  )
}

export default Accounts