import { useSnapshot } from "valtio"
import { state } from "../state"
import { useState } from "react"

export const Results = () => {

    const { poll, isAdmin, participantCount } = useSnapshot(state)
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
    const [isLeavePollOpen, setIsLeavePollOpen] = useState(false)

    return (
        <>
            <div className="mx-auto flex flex-col w-full justify-between items-center h-full max-w-sm">
                <div className="w-full">
                    <h1 className="text-center">Results</h1>
                </div> 
            </div>
        </>
    )
}