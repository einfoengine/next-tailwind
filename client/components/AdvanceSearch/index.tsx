import Heading from "../../Elements/Heading"
import SubHeading from "../../Elements/SubHeading"

const AdvanceSearch = ({
    className
}:{
    className?:string
}) => {
  return (
      <>
        <SubHeading 
            className="text-center" 
            text="Start your new life from here"
        />
        <Heading 
            title="Find your suitable match"
            className="text-center"
        />
        <div className={`ex-component ex-advance-search ${className}`}>
            <form className="d-flex justify-content-around">
                <div className="">
                    <label htmlFor="">Looking for</label>
                    <select id="inputState" className="form-select">
                        <option selected>Bride</option>
                        <option>Groom</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="">Age range</label>
                    <input type="range" className="form-range" id="customRange1"></input>
                </div>
                <div className="">
                    <label htmlFor="">Religion</label>
                    <select id="inputState" className="form-select">
                        <option selected>Bride</option>
                        <option>Groom</option>
                    </select>
                </div>
                <div className="">
                    <label htmlFor="">Location</label>
                    <select className="form-select" aria-label="size 3 select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="">
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                </div>
            </form>
        </div>
      </>
  )
}

export default AdvanceSearch