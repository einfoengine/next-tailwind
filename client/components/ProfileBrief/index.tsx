import React from 'react'
import Image from 'next/image'

const ProfileBrief = () => {
  return (
    <div className='ex-component border rounded'>
        <figure className="p-3">
          <Image src="/images/profiles/user-1.jpg" layout='responsive' width={50} height={50}/>
            <h4>Name of the user</h4>
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