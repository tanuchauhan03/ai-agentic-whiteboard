"use client"
import SmartDoc from '@/components/custom/dashboard/workspace/SmartDoc'
import Whiteboard from '@/components/custom/dashboard/workspace/Whiteboard'
import WorkspaceHeader from '@/components/custom/dashboard/workspace/WorkspaceHeader'
import React, { useState } from 'react'

function Workspace () {
    const [activeTab,setActiveTab]=useState('whiteboard')
  return (
    <div>
     <WorkspaceHeader selectedTab={(value:string)=>setActiveTab(value)}/>
        {
           activeTab=='whiteboard'?<Whiteboard/>:<SmartDoc/>
        }

    </div>
  )
}

export default Workspace 
