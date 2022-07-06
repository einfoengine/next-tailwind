import type { layoutPayload } from "../types/global.type"
import RegistrationForm from "../components/Registration"
import Default from "../layouts/Default.layout"
import ProfileBrief from "../components/ProfileBrief"
const layoutPayload:layoutPayload = [
    {
      name: "ex-registration",
      className: "",
      type: "fixed",
      rows: [
          {
              gridCols: 12,
              gridGap: 4,
              cols: [
                  {
                    span: 4,
                    components: <ProfileBrief/>
                  },
                  {
                    span: 8,
                    components: <RegistrationForm/>
                  }
              ]
          }
      ]
    }
  ]
const Registration = () => {
  return (
    <div className="ex-page ex-page-registration">
        <Default layoutPayload = {layoutPayload}/> 
    </div>
  )
}

export default Registration