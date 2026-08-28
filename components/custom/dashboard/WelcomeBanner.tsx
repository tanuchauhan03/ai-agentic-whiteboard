"use client"
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { Sparkle } from 'lucide-react'
import React from 'react'
import CreateNewBoardDialog from './CreateNewBoardDialog'

function WelcomeBanner() {
  const { user } = useUser()

  return (
    <div>
      <div className="p-6 border rounded-2xl bg-gradient-to-r from-blue-200 via-indigo-100 to-purple-200">
        <h2 className="text-2xl font-bold">Welcome Back, {user?.fullName}</h2>

        <p className="mt-1.5 text-sm text-muted-foreground">Turn Your ideas into diagrams, notes and visuals on infinite canvas.

        </p>

        <div className="mt-4 flex items-center gap-2">
          
          <CreateNewBoardDialog/>
          
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-50 rounded-lg px-5 flex items-center gap-1.5"
          >
            <Sparkle className="h-4 w-4 text-violet-600" />
            Ask AI
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBanner
