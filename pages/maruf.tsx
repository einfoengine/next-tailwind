import type { NextPage } from 'next'
import Head from 'next/head'
import Default from '../layouts/Default.layout'
import ImageBox from '../Elements/ImageBox'
import BrandDetails from '../modules/BrandDetails'
import Login from '../modules/Login'
import MainNav from '../modules/MainNav'

import type { layoutPayload } from '../types/global.type'
import Slider from '../Elements/Slider'
import React from 'react'
import Logo from '../modules/Logo'

const layoutPayload:layoutPayload = [
  {
    id:'top',
    name: "top",
    classes: "test",
    type: 'fixed',
    rows: [
      {
        gridCols: 12,
        gridGap: 8,
        cols:[
          {
            classes: '',
            span: 2,
            components: [
              {
                component: Logo,
                props: {
                  className: "my-class"
                }
              }
            ]
          },
          // {
          //   classes: '',
          //   span: 8,
          //   components: [
          //     {
          //       component: Logo
          //     }
          //   ]
            // <>
            //   {/* <BrandDetails brandName='The scholers school' brandAddress='The district, The zone, The street, The House 17/5' brandContact='+88 0171402822' brandEmail='user@domain.com' /> */}
            //   {/* {React.createElement("h1",{},"I am new")} */}
            // </>
          // },
          // {
          //   classes: '',
          //   span: 2,
          //   components: 
          //   <>
          //     <Login />
          //   </>
          // },
          // {
          //   classes: '',
          //   span: 12,
          //   components: 
          //   <>
          //    <MainNav/>
          //   </>
          // }
        ]
      },
    ],
  },
  // {
  //   id:'hero',
  //   name: "hero",
  //   classes: "mt-4",
  //   type: 'fixed',
  //   rows: [
  //     {
  //       gridCols: 1,
  //       gridGap: 8,
  //       cols:[
  //         {
  //           classes: '',
  //           components: 
  //           <>
  //           hero
  //           <Slider/>
  //           </>
  //         },
  //       ]
  //     },
  //   ],
  // },
  // {
  //   id:'notice',
  //   name: "notice",
  //   classes: "mt-4",
  //   type: 'fixed',
  //   rows: [
  //     {
  //       gridCols: 1,
  //       gridGap: 8,
  //       cols:[
  //         {
  //           classes: '',
  //           components: 
  //           <>
  //           notice
  //           </>
  //         },
  //       ]
  //     },
  //   ],
  // },
  // {
  //   id:'history',
  //   name: "history",
  //   classes: "mt-4",
  //   type: 'fixed',
  //   rows: [
  //     {
  //       gridCols: 1,
  //       gridGap: 8,
  //       cols:[
  //         {
  //           classes: '',
  //           components: 
  //           <>
  //           history
  //           </>
  //         },
  //       ]
  //     },
  //   ],
  // },
  // {
  //   id:'spotlight',
  //   name: "spotlight",
  //   classes: "mt-4",
  //   type: 'fixed',
  //   rows: [
  //     {
  //       gridCols: 2,
  //       gridGap: 8,
  //       cols:[
  //         {
  //           components: 
  //           <>
  //           spotlight
  //           </>
  //         },
  //         {
  //           components: 
  //           <>
  //           notice board
  //           </>
  //         },
  //       ]
  //     },
  //   ],
  // },
  // {
  //   id:'statistics',
  //   name: "statistics",
  //   classes: "mt-4",
  //   type: 'fixed',
  //   rows: [
  //     {
  //       gridCols: 1,
  //       gridGap: 8,
  //       cols:[
  //         {
  //           components: 
  //           <>
  //           statistics
  //           </>
  //         },
  //       ]
  //     },
  //   ],
  // },
  // {
  //   id:'speech',
  //   name: "speech",
  //   classes: "mt-4",
  //   type: 'fixed',
  //   rows: [
  //     {
  //       gridCols: 1,
  //       gridGap: 8,
  //       cols:[
  //         {
  //           components: 
  //           <>
  //           speech
  //           </>
  //         },
  //       ]
  //     },
  //   ],
  // },
  // {
  //   id:'gallery',
  //   name: "gallery",
  //   classes: "mt-4",
  //   type: 'fixed',
  //   rows: [
  //     {
  //       gridCols: 1,
  //       gridGap: 8,
  //       cols:[
  //         {
  //           components: 
  //           <>
  //           gallery carousel
  //           </>
  //         },
  //       ]
  //     },
  //   ],
  // },
  // {
  //   id:'footer',
  //   name: "footer",
  //   classes: "mt-4",
  //   type: 'fixed',
  //   rows: [
  //     {
  //       gridCols: 1,
  //       gridGap: 8,
  //       cols:[
  //         {
  //           components: 
  //           <>
  //           footer
  //           </>
  //         },
  //       ]
  //     },
  //   ],
  // },
]
const layout = 'layoutName'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Default layoutPayload = {layoutPayload}/> 
    </>
  )
}

export default Home
