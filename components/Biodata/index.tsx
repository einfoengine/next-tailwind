import { useState } from "react";
import axios from 'axios';

const Biodata = () => {

    const [address, setAddress] = useState('address');
    const [address2, setAddress2] = useState('address2');
    const [city, setCity] = useState('city');
    const [state, setState] = useState('Dhaka');
    const [zip, setZip] = useState('zip');
    const [olavel, setOLevel] = useState('olavel');
    const [alavel, setALevel] = useState('alevel');
    const [honors, setHonors] = useState('hons');
    const [masters, setMasters] = useState('mas');
    const [proCourse, setProCourse] = useState('pro');
    const [profession, setProfssion] = useState('pro2');
    const [economicStare, setEconomicStare] = useState('stat');
    const [fathersName, setFathersName] = useState('fathers name');
    const [fathersProfession, setFathersProfsssion] = useState('mother');
    const [mothersName, setMothersName] = useState('mother');
    const [mothersProfession, setMothersProfsssion] = useState('mother');
    const [familyCulture, setFamilyCulture] = useState('family');
    const [syblings, setSyblings] = useState('syblings');
    const [parentialRelation, setParentialRelation] = useState('relation');
    const [lookingForDetails, setLookingForDetails] = useState('details');
    const [aboutSelf, setAboutSelf] = useState('about');

    const handleSubmit = async(e:any) => {
        e.preventDefault();
        // axios.post("http://localhost:8000/api/users/biodata", {name:"maruf"}).then((res)=>{console.log(res)});
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8000/api/users/biodata',
        //     data: {
        //         firstName: {address},
        //         lastName: 'Flintstone'
        //     }
        // }).then((res)=>{
        //     console.log("***");
        //     console.log(res);
        // }).catch((err)=>{console.log(err)});
        // console.log(data);
        // try {
        //     const res = await axios.post('http://localhost:3001/users', {
        //         firstName: {address},
        //         lastName: 'Flintstone'
        //     })
        //     console.log(JSON.stringify(res));
        //   } catch (e) {
        //     alert(e)
        //   }
        // axios.post('http://localhost:8000/api/users/biodata',{
        //     name: "maruf"
        // }).then(response =>{
        //     console.log("res - ",response);
        // }).catch(err =>{
        //     console.log(err);
        // })

        // axios.post('http://localhost:8000/api/users/biodata',{
        //     going: "raj"
        //   },{headers:{'Accept': 'application/json',
        //   'Content-Type': 'application/json'}}).then(response => {
        //       console.log(response);
        //     });

        const myFetch = await fetch("http://localhost:8000/api/users/biodata", {
            method: 'POST',
            headers: {'Accept': 'application/json',
            'Content-Type': 'application/json'},
            body:JSON.stringify({name:"maruf"})
        })

        console.log("Fetch", myFetch);
    }

  return (
    <div className="ex-component ex-registration d-block">  
        <form onSubmit={handleSubmit}>
            {/* Address */}
            <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
                <h4>Address</h4>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" name="inputAddress"  placeholder="1234 Main St" onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" name="inputAddress2" placeholder="Apartment, studio, or floor" onChange={e=>setAddress2(e.target.value)}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="bio-city" className="form-label">City</label>
                    <input type="text" className="form-control" id="bio-city" name="bio-city" onChange={e=>setCity(e.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State / Division</label>
                    <select id="inputState" className="form-select" name="inputState" onChange={e=>setState(e.target.value)}>
                        <option value="dhaka">Dhaka</option>
                        <option value="chittagong">Chittagram</option>
                        <option value="khulna">Khulna</option>
                        <option value="sylhet">Sylhet</option>
                        <option value="rajshahi">Rajshahi</option>
                        <option value="barishal">Barishal</option>
                        <option value="rangpur">Rangpur</option>
                        <option value="maymanshing">Maymanshing</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" name="inputZip" onChange={e=>setZip(e.target.value)}/>
                </div>
            </div>
            <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
                <h4>Educational qualification</h4>
                <div className="col-4">
                    <label className="form-label">O level / SSC</label>
                    <input id="bio-1o-level" name="bio-1o-level" className="form-control" type="text" placeholder="Grade pinnt out of 5" onChange={e=>setOLevel(e.target.value)}/>
                </div>
                <div className="col-4">
                    <label className="form-label">A level / HSC</label>
                    <input id="bio-11-level" name="bio-11-level" className="form-control" type="text" placeholder="Grade point out of 5" onChange={e=>setALevel(e.target.value)}/>
                </div>
                <div className="col-4">
                    <label className="form-label">Honors</label>
                    <input id="bio-12-level" name="bio-12-level" className="form-control" type="text" placeholder="Grade point out of 4" onChange={e=>setHonors(e.target.value)}/>
                </div>
                <div className="col-4">
                    <label className="form-label">Masters</label>
                    <input className="form-control" id="bio-13-level" name="bio-13-level" type="text" placeholder="Grade point out of 4" onChange={e=>setMasters(e.target.value)}/>
                </div>
                <div className="col-8">
                    <label className="form-label">Any professional course</label>
                    <input id="bio-pro-course" name="bio-pro-course" className="form-control" type="text" placeholder="On what you are specialised" onChange={e=>setProCourse(e.target.value)}/>
                </div>
            </div>
            <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
                <h4>Professional Information</h4>    
                <div className="col-6">
                    <label className="form-label">Main Profession</label>
                    <select name="bio-profession" id="bio-profession" className="form-select" placeholder="Select profession" onChange={e=>setProfssion(e.target.value)}>
                        <option value="privet">Privet service</option>
                        <option value="bank-a">Bank high official</option>
                        <option value="gvt">GVT Job</option>
                        <option value="gvt-a">GVT high official</option>
                        <option value="multinational">Job in miltinational company</option>
                        <option value="multinational-a">Multinational company high official</option>
                        <option value="small-business">Small business</option>
                        <option value="medium-business">Medium business</option>
                        <option value="large-business">Large business</option>
                        <option value="home-maker">Home maker</option>
                    </select>
                </div>
                <div className="col-6">
                    <label className="form-label">Economic stare</label>
                    <select name="bio-status" id="bio-status" className="form-select" placeholder="Select profession" onChange={e=>setEconomicStare(e.target.value)}>
                        <option value="bellow-avarage">Bellow avarage</option>
                        <option value="avarage">Avarage</option>
                        <option value="above-avarage">Above avarage</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
            <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
                <h4>Family information</h4>
                <div className="col-7">
                    <label className="form-label">Fathers Name</label>
                    <input id="bio-family-info" name="bio-family-info" type="text" className="form-control" placeholder="Name" onChange={e=>setFathersName(e.target.value)}/>
                </div>
                <div className="col-5">
                    <label className="form-label">Profession</label>
                    <select name="bio-father-profession" id="" className="form-select" placeholder="Select profession" onChange={e=>setFathersProfsssion(e.target.value)}>
                        <option value="privet">Privet service</option>
                        <option value="bank">Bank high official</option>
                        <option value="gvt">GVT Job</option>
                        <option value="gvt">GVT high official</option>
                        <option value="multinational-b">Job in miltinational company</option>
                        <option value="multinational-a">Multinational company high official</option>
                        <option value="small-business">Small business</option>
                        <option value="medium-business">Medium business</option>
                        <option value="large-business">Large business</option>
                        <option value="home-maker">Home maker</option>
                    </select>
                </div>
                <div className="col-7">
                    <label className="form-label">Mothers Name</label>
                    <input id="bio-mothers-name" name="bio-mothers-name" type="text" className="form-control" placeholder="Name" onChange={e=>setMothersName(e.target.value)}/>
                </div>
                <div className="col-5">
                    <label className="form-label">Profession</label>
                    <select name="bio-mother-profession" id="bio-mother-profession" className="form-select" onChange={e=>setMothersProfsssion(e.target.value)}>
                        <option value="home-maker">Home maker</option>
                        <option value="privet">Privet service</option>
                        <option value="bank-a">Bank high official</option>
                        <option value="gvt-b">GVT Job</option>
                        <option value="gvt-a">GVT high official</option>
                        <option value="multinational">Job in miltinational company</option>
                        <option value="multinational-a">Multinational company high official</option>
                        <option value="small-business">Small business</option>
                        <option value="medium-business">Medium business</option>
                        <option value="large-business">Large business</option>
                    </select>
                </div>
                <div className="col-6">
                    <label className="form-label">Family culture</label>
                    <select name="bio-family-culture" id="bio-family-culture" className="form-select" onChange={e=>setFamilyCulture(e.target.value)}>
                        <option value="open">Open minded</option>
                        <option value="conservative">Conservative</option>
                        <option value="religious">Religios</option>
                        <option value="political">Political</option>
                        <option value="formal">Formal</option>
                    </select>
                </div>
                <div className="col-6">
                    <label className="form-label">Syblings</label>
                    <input id="syblings" name="syblings" type="text" className="form-control" placeholder="How many brother/sister" onChange={e=>setSyblings(e.target.value)}/>
                </div>
                <div className="col-6">
                    <label className="form-label">Parential relation</label>
                    <select name="parential-relation" id="parential-relation" className="form-select" onChange={e=>setParentialRelation(e.target.value)}>
                        <option value="loving">Loving couple</option>
                        <option value="normal">Normal</option>
                        <option value="divorced">Divorced</option>
                        <option value="mother-dominating">Mother is dominating</option>
                        <option value="father-dominating">Father is dominating</option>
                    </select>
                </div>
            </div>
            <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
                <h4>What type of partner are you looking for?</h4>
                <div className="form-floating">
                    <textarea id="bio-looking-for-type" name="bio-looking-for-type" className="form-control" placeholder="Leave a comment here" onChange={e=>setLookingForDetails(e.target.value)}></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
            </div>
            <div className="row border rounded mb-3 pt-2 pb-2 mt-0">
                <h4>Write about yourself</h4>
                <div className="form-floating">
                    <textarea id="bio-yourself" name="bio-yourself" className="form-control" placeholder="Leave a comment here" onChange={e=>setAboutSelf(e.target.value)}></textarea>
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
            </div>
            <button key="bio-form-submission" className="row btn btn-primary" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Biodata