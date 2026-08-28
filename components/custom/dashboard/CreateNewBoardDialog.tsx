import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@base-ui/react'
import { Loader2, Plus } from 'lucide-react'
import { toast } from '@/components/ui/toast';
import { CardDescription } from '@/components/ui/card';
import { title } from 'process';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function CreateNewBoardDialog() {
    const [workspaceName,setWorkspaceName]=useState("");
    const[loading,setloading]=useState(false);
    const[dialog,setDialog]=useState(false);
    const route=useRouter();

    const handleCreateBoard=async()=>{
        if(workspaceName.trim()===""||workspaceName?.length>30){
            toast.add({
                type:"error",
                title:"Invalid Workspace Name",
                description:"Please enter a valid workspace name(1-30 character)"
            })
            return;
    }
    setloading(true);
    const projectId=crypto.randomUUID();
    const result=await axios.post('/api/projects',{
        projectName:workspaceName,
        projectId:projectId
    });
   
    console.log(result?.data);
    toast.add({
        type:'success',
        title:'New Workspace Created'
    });
     setloading(false);
     setDialog(false);
     route.push('/workspace/'+projectId)
    }
    
  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
  <DialogTrigger>
    <Button className="w-full" >
        <Plus/>Create New Board
    </Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className="text-lg font-bold">Whiteboard Workspace Name </DialogTitle>
      
    </DialogHeader>
    <div>
       <label className="text-gray-500">Enter Whiteboard Workspace Name</label>
       <input placeholder="Workspace Name" className="mt-1" onChange={(e)=>setWorkspaceName(e.target.value)}
       />
    </div>

    <DialogFooter>
    <DialogClose>
        <Button>Cancel</Button>
    </DialogClose>

    <Button
            disabled={workspaceName.trim().length === 0 || loading}
            onClick={handleCreateBoard}
          >
            {loading && <Loader2 className="animate-spin" />}
            Create
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )}

export default CreateNewBoardDialog
