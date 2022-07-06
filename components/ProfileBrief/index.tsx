import React from 'react'

const ProfileBrief = () => {
  return (
    <div className='ex-component'>
        <figure className="figure card p-3">
            <img src="/images/profiles/user-1.jpg"/>
            {/* <img src="../../public/images/profiles/user-1.jpg" className="figure-img img-fluid rounded" alt="..."/> */}
            <h4>Shanewaz Al Maruf</h4>
            <span>User ID - D220626001</span>
            <hr />
            <div className="">
                <div>Software engineer</div>
                <div>Age - 35</div>
                <div>Lives in dhaka</div>
            </div>
        </figure>
    </div>
  )
}

export default ProfileBrief