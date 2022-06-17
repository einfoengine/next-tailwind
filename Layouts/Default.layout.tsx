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
            container='fixed'
          >
            {section.rows.map((row:any, index:number)=>
              <Row key={`ex-${section.name}-${index}`} id={`ex-${section.name}-${index}`} className={`grid grid-cols-${row.gridCols} gap-4`}>
                {
                  row.cols.map((col:any, index:number)=>
                    <Col 
                      key={`${section.name}-${row.id}-'col-'${index}`} 
                      className={`ex-col ex-${section.id+'-'+row.id+'-col-'+index} ${col.span&&`col-span-${col.span}`}`}
                    >
                      {col.components}
                    </Col>
                  )
                }
              </Row>
            )}
          </Section>
        )
      }
    </>
  )
}

export default Default