"use client"
import React, { useRef, useState } from 'react'
import { Excalidraw } from "@excalidraw/excalidraw";
import "@excalidraw/excalidraw/index.css"
import { AnyARecord } from 'node:dns';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { toast } from '@/components/ui/toast';
function Whiteboard() {
    const [excalidrawAPI, setExcalidrawAPI] = useState(null);
    const saveTimeRef=useRef<any>(null);
    const {projectid}=useParams();

    const handleCanvasChange=(elements:readonly any[],appState:any, files:any)=>{
        //cancel prev timer
        if(saveTimeRef?.current){
            clearTimeout(saveTimeRef.current)
        }
        //start new 10 second timer
        saveTimeRef.current=setTimeout(()=>{
            //save method
            SaveCanvasChanges(elements,appState,files);
            toast.add({
                title:'Changes Saved',
                type:'success'

        })
        },10000)
        
    }
    const SaveCanvasChanges=async(elements:readonly any[],appState:any, files:any)=>{
        const result=await axios.post('/api/whiteboard',{
            elements:elements,
            appState:appState,
            files:files,
            projectId:projectid
        })

    }
  return (
    <div style={{ height: "90vh" }}>
        <Excalidraw 
        //@ts-ignore
          excalidrawAPI={(api)=> setExcalidrawAPI(api)}
        onChange={handleCanvasChange}/>
      </div>
  )
}

export default Whiteboard
