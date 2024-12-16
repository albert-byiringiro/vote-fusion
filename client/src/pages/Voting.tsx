import { useState } from "react"
import { useSnapshot } from "valtio"
import { state } from "../state"

export const Voting = () => {
    const currentState = useSnapshot(state)
    const [rankings, setRankings] = useState<string[]>()
    const [confirmCancel, setConfirmCancel] = useState(false)
    const [confirmVotes, setConfirmVotes] = useState(false)
    
  return (
    <div className="mx-auto flex flex-col w-full justify-between items-center h-full max-w-sm">
        <div className="w-full">
            <h1 className="text-center">Voting Page</h1>
        </div>
    </div>
  )
}
