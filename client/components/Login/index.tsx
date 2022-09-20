import { useState } from "react";
import Heading from "../../Elements/Heading"

// const [userName, setUserName] = useState('')
const Registration = () => {
  const [address, setUserName] = useState('address');
  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Login")
  }
  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
        Login
      </button>
      <div className="modal fade" id="loginModal" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <Heading title="Login" className="modal-title"/>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="ex-login-id" className="form-label">Phone Number</label>
                  <input type="text" className="form-control ex-regirtration-name" id="ex-login-id" aria-describedby="ex-regirtration-name" onChange={e=>setUserName(e.target.value)}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="ex-email" className="form-label">Phone Number</label>
                  <input type="text" className="form-control ex-regirtration-phone-numbr" id="ex-regirtration-phone-number" aria-describedby="ex-registration-phone-number-help" onChange={e=>setUserName(e.target.value)}/>
                  <div id="ex-registration-phone-number-help" className="form-text">We will never share this information without permission.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="ex-email" className="form-label">Email address</label>
                  <input type="email" className="form-control ex-registration-email" id="ex-registration-email" aria-describedby="ex-registration-email-help" onChange={e=>setUserName(e.target.value)}/>
                  <div id="ex-registration-email-help" className="form-text">We will never share this info without your permission.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="ex-registration-password" className="form-label">Password</label>
                  <input type="password" className="form-control ex-registration-password" id="ex-registration-password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="ex-registration-password-confirm" className="form-label ex-registration-password-confirm">Confirm Password</label>
                  <input type="password" className="form-control ex-registration-password-confirm" id="ex-registration-password-connfirm" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              {/* <button type="button" className="btn btn-primary">Login</button> */}
              if you  have an account pleease <a className="text-primary" href="">Login</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration