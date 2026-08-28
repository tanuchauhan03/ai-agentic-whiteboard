"use client"
import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@base-ui/react'
import { Save, Share } from 'lucide-react'
type Props={
    selectedTab:any
}

function WorkspaceHeader({selectedTab}:Props) {
  return (
    <div className='p-3 border-b flex justify-between'>
        <div className='flex gap-2 items-center'>
      <Image src={'/logo.svg'} alt='logo' width={35} height={35}/> 
      <h2>Workspace Name</h2>
      </div>
      {/* switch */}
            <div>
                <Tabs defaultValue="account" className="" onValueChange={(value)=>selectedTab(value)} >
        <TabsList>
            <TabsTrigger value="whiteboard">Whiteboard</TabsTrigger>
            <TabsTrigger value="doc">Doc</TabsTrigger>
        </TabsList>
        </Tabs>

      </div>
      {/* extra button */}
      <div className="flex gap-5">
         <Button><Save/>Save</Button>
         <Button><Share/>Share</Button>
      </div>

    </div>
  )
}

export default WorkspaceHeader
