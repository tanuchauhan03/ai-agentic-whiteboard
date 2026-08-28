"use client"
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { Sparkle } from 'lucide-react'
import React from 'react'

function WelcomeBanner() {
  const { user } = useUser()

  return (
    <div>
      <div className="p-6 border rounded-2xl bg-gradient-to-r from-blue-200 via-indigo-100 to-purple-200">
        <h2 className="text-2xl font-bold">Welcome Back, {user?.fullName}</h2>
        <p className="text-muted-foreground">Bring Your Idea to Life on infinite canvas</p>
        <div className="flex items-center gap-3 mt-5">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5">
            + Create New Board
          </Button>
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-50 rounded-lg px-5 flex items-center gap-1.5"
          >
            <Sparkle className="h-4 w-4" />
            AI Helper
          </Button>
        </div>
      </div>
    </div>
  )
}

export default WelcomeBanner
