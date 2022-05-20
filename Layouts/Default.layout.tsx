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
          <section key={section.id} id={section.id != undefined ? 'ex-section-'+section.id : 'ex-section-'+section.name} className={'ex-section '+section.classes}>
            <div className={section.type='fixed'?'container':'container-fluid'}>
              {
                section.rows.map((row:any, index:number)=>
                  <div key={`ex-${section.name}-${index}`} id={`ex-${section.name}-${index}`} className={`grid grid-cols-${row.gridCols} gap-4`}>
                    {
                      row.cols.map((col:any, index:number)=>
                        <div key={`${section.name}-${row.id}-'col-'${index}`} className={`bg-red-400 rounded w-full p-5 ${col.span&&`col-span-${col.span}`}`}>
                          {col.components}
                        </div>
                      )
                    }
                  </div>
                )
              }
            </div>
          </section>
        )
      }
    </>
  )
}

export default Default