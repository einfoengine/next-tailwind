import Heading from "../../Elements/Heading"

const index = () => {
  return (
    <>
    {/* <button className={`
      btn
      btn-primary
        bg-orange-400 
        rounded-full
        text-slate-50
        pt-2
        pr-4
        pb-2
        pl-4
    `}>
        login
    </button> */}



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
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
        {/* <button type="button" className="btn btn-primary">Login</button> */}
        if you dont have an account pleease <a className="text-primary" href="">register</a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default index