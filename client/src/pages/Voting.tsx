import { useState } from "react"
import { useSnapshot } from "valtio"
import { state } from "../state"

export const Voting = () => {
    const currentState = useSnapshot(state)
    const [rankings, setRankings] = useState<string[]>()
    const [confirmCancel, setConfirmCancel] = useState(false)
    const [confirmVotes, setConfirmVotes] = useState(false)
    
  return (
    <div>Voting</div>
  )
}
