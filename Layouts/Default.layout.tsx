import React from 'react'
import Section from '../Elements/Section'
import Row from '../Elements/Row'
import Col from '../Elements/Column'


import type { layoutPayload } from '../types/global.type'


const Default = ({layoutPayload}:{layoutPayload: layoutPayload}) => {
  return (
    <>
      {
        layoutPayload.map((section:any, index: number)=>
          <Section
            key={section.id}
            id={section.id != undefined ? 'ex-section-'+section.id : 'ex-section-'+section.name}
            className={'ex-section '+section.classes}
            container={section.type}
          >
            {section.rows.map((row:any, index:number)=>{
              let rowNumber = `ex-${section.name}-${index}`
              return(<Row 
              key={`ex-${section.name}-${index}`} 
              id={rowNumber}
              className={`ex-row-${index}`}>
                {
                  row.cols.map((col:any, index:number)=>
                    <Col 
                      key={`${section.name}-${row.id}-'col-'${index}`} 
                      className={`ex-col ${rowNumber+'-col-'+index} col-${col.span}`}
                    >
                      {col.components}
                    </Col>
                  )
                }
              </Row>)
            }
            )}
          </Section>
        )
      }
      <div className='grid grid-cols-12'>
        <h1 >Logo</h1>
        <div>
          <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
          </ul>
        </div>
        <button>I am button</button>
      </div>
    </>
  )
}

export default Default