import Heading from "../../Elements/Heading"
import SubHeading from "../../Elements/SubHeading"

const AdvanceSearch = ({
    className
}:{
    className?:string
}) => {
  return (
    <div className={`ex-component ex-advance-search ${className}`}>
        <SubHeading 
            className="text-center" 
            text="Start your new life from here"
        />
        <Heading 
            title="Find your suitable match"
            className="text-center"
        />
        <form className="row g-3">
            <div className="col-2">
                <label htmlFor="">Looking for</label>
                <select id="inputState" className="form-select">
                    <option selected>Bride</option>
                    <option>Groom</option>
                </select>
            </div>
            <div className="col-2">
                <label htmlFor="">Age range</label>
                <input type="range" className="form-range" id="customRange1"></input>
            </div>
            <div className="col-2">
                <label htmlFor="">Religion</label>
                <select id="inputState" className="form-select">
                    <option selected>Bride</option>
                    <option>Groom</option>
                </select>
            </div>
            <div className="col-2">
                <label htmlFor="">Location</label>
                <select className="form-select" aria-label="size 3 select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div className="col-2">
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AdvanceSearch