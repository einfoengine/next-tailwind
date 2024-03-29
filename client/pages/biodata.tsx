import type { layoutPayload } from "../types/global.type"
import BiodataForm from "../components/Biodata"
import Default from "../Layouts/Default.layout"
import ProfileBrief from "../components/ProfileBrief"
const layoutPayload:layoutPayload = [
    {
      id:"ex-registration",
      name: "ex-registration",
      className: "",
      type: "fixed",
      rows: [
          {
              cols: [
                  {
                    span: 4,
                    components: <ProfileBrief/>
                  },
                  {
                    span: 8,
                    components: <BiodataForm/>
                  }
              ]
          }
      ]
    }
  ]
const Biodata = () => {
  return (
    <div className="ex-page ex-page-registration">
        <Default layoutPayload = {layoutPayload}/> 
    </div>
  )
}

export default Biodata