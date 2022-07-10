const Registration = () => {
  return (
    <div className="ex-component ex-registration d-block">  
        <form>
            {/* Address */}
            <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
                <h4>Address</h4>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
            </div>
            <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
                <h4>Educational qualification</h4>
                <div className="col-4">
                    <label className="form-label">O level / SSC</label>
                    <input className="form-control" type="text" placeholder="Grade pinnt out of 5"/>
                </div>
                <div className="col-4">
                    <label className="form-label">A level / HSC</label>
                    <input className="form-control" type="text" placeholder="Grade point out of 5"/>
                </div>
                <div className="col-4">
                    <label className="form-label">Honors</label>
                    <input className="form-control" type="text" placeholder="Grade point out of 4"/>
                </div>
                <div className="col-4">
                    <label className="form-label">Masters</label>
                    <input className="form-control" type="text" placeholder="Grade point out of 4"/>
                </div>
                <div className="col-8">
                    <label className="form-label">Any professional course</label>
                    <input className="form-control" type="text" placeholder="Name of the course seperated by coma"/>
                </div>
            </div>
            <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
                <h4>Professional Information</h4>    
                <div className="col-6">
                    <label className="form-label">Main Profession</label>
                    <select name="" id="" className="form-select" placeholder="Select profession">
                        <option value="">Privet service</option>
                        <option value="">Bank high official</option>
                        <option value="">GVT Job</option>
                        <option value="">GVT high official</option>
                        <option value="">Job in miltinational company</option>
                        <option value="">Multinational company high official</option>
                        <option value="">Small business</option>
                        <option value="">Medium business</option>
                        <option value="">Large business</option>
                        <option value="">Home maker</option>
                    </select>
                </div>
                <div className="col-6">
                    <label className="form-label">Economic stare</label>
                    <select name="" id="" className="form-select" placeholder="Select profession">
                        <option value="">Bellow avarage</option>
                        <option value="">Avarage</option>
                        <option value="">Above avarage</option>
                        <option value="">High</option>
                    </select>
                </div>
            </div>
            <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
                <h4>Family information</h4>
                <div className="col-7">
                    <label className="form-label">Father's Name</label>
                    <input type="text" className="form-control" placeholder="Name"/>
                </div>
                <div className="col-5">
                    <label className="form-label">Profession</label>
                    <select name="" id="" className="form-select" placeholder="Select profession">
                        <option value="">Privet service</option>
                        <option value="">Bank high official</option>
                        <option value="">GVT Job</option>
                        <option value="">GVT high official</option>
                        <option value="">Job in miltinational company</option>
                        <option value="">Multinational company high official</option>
                        <option value="">Small business</option>
                        <option value="">Medium business</option>
                        <option value="">Large business</option>
                        <option value="">Home maker</option>
                    </select>
                </div>
                <div className="col-7">
                    <label className="form-label">Mothers's Name</label>
                    <input type="text" className="form-control" placeholder="Name"/>
                </div>
                <div className="col-5">
                    <label className="form-label">Profession</label>
                    <select name="" id="" className="form-select">
                        <option value="">Home maker</option>
                        <option value="">Privet service</option>
                        <option value="">Bank high official</option>
                        <option value="">GVT Job</option>
                        <option value="">GVT high official</option>
                        <option value="">Job in miltinational company</option>
                        <option value="">Multinational company high official</option>
                        <option value="">Small business</option>
                        <option value="">Medium business</option>
                        <option value="">Large business</option>
                    </select>
                </div>
                <div className="col-6">
                    <label className="form-label">Family culture</label>
                    <select name="" id="" className="form-select">
                        <option value="">Open minded</option>
                        <option value="">Conservative</option>
                        <option value="">Religios</option>
                        <option value="">Political</option>
                        <option value="">Deciplined</option>
                    </select>
                </div>
                <div className="col-6">
                    <label className="form-label">Syblings</label>
                    <input type="text" className="form-control" placeholder="How many brother/sister" />
                </div>
                <div className="col-6">
                    <label className="form-label">Parential relation</label>
                    <select name="" id="" className="form-select">
                        <option value="">Loving couple</option>
                        <option value="">Normal</option>
                        <option value="">Divorced</option>
                        <option value="">Mother is dominating</option>
                        <option value="">Mother is dominating</option>
                    </select>
                </div>
            </div>
            <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
                <h4>What type of partner are you looking for?</h4>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
            </div>
            <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
                <h4>Write about yourself</h4>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Registration