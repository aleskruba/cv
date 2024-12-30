"use client"
import React, { useEffect, useState } from 'react'
import {  PDFViewer} from '@react-pdf/renderer';
import { MyCV } from '../components/resume';


export default function MyResume() {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
      setIsClient(true)
    }, [])
    
    return (
        <div>
             { isClient ?
          <div className='w-full h-[750px]'>
            <PDFViewer width="100%" height="100%"> 
              <MyCV/>
            </PDFViewer> 
          </div>      : null}
        </div>
      )
}
