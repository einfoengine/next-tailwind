import React from 'react'
import Section from '../Elements/Section'
import Row from '../Elements/Row'
import Col from '../Elements/Column'
import {logo} from '../Elements/Logo'
import Module from '../Elements/Module'


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
        <Row>
          <Col position='a' greed={12}>
            <Module 
              moduleName='testModule' 
              moduleTitle={{
                title: "Logo", 
                visibility: 'hide', 
                titleClass: "title-class"
              }} 
              moduleBodyFunction={logo("Hi I am logo")}
            />
          </Col>
        </Row>
      </Section>
      {/* End section Hero*/}
      <Section className='ex-section-news' container='fluid'>
        <Row>
          
        </Row>
      </Section>
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