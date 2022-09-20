import type { layoutPayload } from "../types/global.type"
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
                    components: 
                    <div className="d-flex">
                      <ProfileBrief/>
                      <ProfileBrief/>
                      <ProfileBrief/>
                      <ProfileBrief/>
                    </div>
                  },
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