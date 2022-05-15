import React from 'react'
import Section from '../Elements/Section'


const Default = (props:{
  slider?: [{
    imgSrc: string,
    text: string,
    link?: string
  }]
}) => {
  return (
    <>
      <Section className='top' container='fluid'>
        <h1>Hello tailwind</h1>
      </Section>
      {/* End section Hero*/}
      <section className='ex-section ex-section-news'>
        <div className="conteiner">
          <div className="row">
            <div className="col-md-12 ex-news-1">
              Tickr
            </div>
          </div>
        </div>
      </section>
      {/* End section news*/}
      <section className='ex-section ex-section-hostory'>
        <div className="conteiner">
          <div className="row">
            <div className="col-md-12 ex-hostory-1">
              Tickr
            </div>
          </div>
        </div>
      </section>
      {/* End section hostory*/}
      <section className='ex-section ex-section-notice'>
        <div className="conteiner">
          <div className="row">
            <div className="col-md-12 ex-notice-1">
              Notice 1
            </div>
            {/* End col ex-notice-1 */}
            <div className="col-md-12 ex-notice-2">
              Notice 2
            </div>
            {/* End col ex-notice-2 */}
          </div>
        </div>
      </section>
      {/* End section Notice*/}
    </>
  )
}

export default Default