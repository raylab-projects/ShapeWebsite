import React from 'react'
import { Component } from 'react'
import Boxplot from 'react-boxplot'
import { computeBoxplotStats } from 'react-boxplot'

const values =
[0, 4, 5, 5, 10, 10, 16, 24, 26, 29, 36, 37, 37, 38, 38, 38, 39, 46, 46, 46, 49, 49, 49, 49, 51, 53, 56, 57, 58, 58, 59, 60, 60, 60, 61, 61, 61, 61, 61, 61, 61, 62, 62, 62, 63, 63, 63, 63, 63, 63, 64, 64, 64, 64, 64, 64, 64, 65, 65, 65, 65, 65, 65, 65, 65, 66, 66, 66, 66, 66, 66, 66, 66, 66, 66, 67, 67, 67, 67]

const BoxplotViewer = () => {
  return (
    <div 
    style={{height:"400px",width:"1280px"}}
    className='outline-[#e0e0e0] justify-items-center'>
        <Boxplot 
            width={35}
            height={150}
            orientation="vertical"
            min={0}
            max={67}
            stats={computeBoxplotStats(values)}
        />
    </div>
  )
}

export default BoxplotViewer