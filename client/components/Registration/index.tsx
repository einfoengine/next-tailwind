import { useState } from "react";
import  axios from "axios";

// const [userName, serEmailAddress] = useState('')
const Registration = ({path}:{path:string}) => {
  const [name, setName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [seeking, setSeeking] = useState('0')
  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try{
      const data = await axios.post(path ,{name, emailAddress, phoneNumber, password, seeking});
      console.log("***", {name, phoneNumber, emailAddress, password, seeking});
    }catch(err){
      console.log("Registration failed!")
      console.log(err);
    }
  }

  return (
    <div className="">
      <div className="modal-body">
        {/* <form onSubmit={handleSubmit}> */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="reg-name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="reg-name" onChange={e=>setName(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="reg-phone-number" className="form-label">Phone number</label>
            <input type="text" className="form-control" id="reg-phone-number" onChange={e=>setPhoneNumber(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="reg-email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="reg-email" onChange={e=>setEmailAddress(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="reg-password" className="form-label">Password</label>
            <input type="password" className="form-control" id="reg-password" onChange={e=>setPassword(e.target.value)}/>
          </div>
          <div className="mb-3">
            <label htmlFor="nt-reg-seeking" className="form-label">Looking For</label>
            <select name="seeking" id="nt-reg-seeking" className="form-control" onChange={e=>setSeeking(e.target.value)}>
              <option value="0">Select One</option>
              <option value="1">Groom</option>
              <option value="2">Bride</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary d-block mb-3" onSubmit={handleSubmit}>Submit</button>
          <div className="ml-3 d-inline-block">
            if you have already an account, <u><a href="#">login</a></u> in stead.
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration