"use client"
import { Button } from '@/components/ui/button'
import { Folder } from 'lucide-react'
import React, { useState } from 'react'

function ProjectList() {
  const [projectList, setProjectList] = useState([])

  return (
    <div>
      {projectList.length === 0 ? (
        // Empty State
        <div className="flex flex-col items-center justify-center p-10 border rounded-xl mt-10 gap-3">
          <Folder className="h-16 w-16 text-blue-400 fill-blue-200" strokeWidth={1.5} />
          <h2 className="text-2xl font-bold">No Boards Found</h2>
          <p className="text-muted-foreground text-center">
            Create your first board to start brainstorming, Planning !
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5">
            + Create New Board
          </Button>
        </div>
      ) : (
        <div>
          {/* project list */}
        </div>
      )}
    </div>
  )
}

export default ProjectList
