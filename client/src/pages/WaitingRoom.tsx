import { useEffect, useState } from "react"
import { actions, state } from "../state"
import { useCopyToClipboard } from "react-use"
import { useSnapshot } from "valtio"

export const WaitingRoom = () => {

    const [_copiedText, copyToClipBoard] = useCopyToClipboard()
    const [isParticipantListOpen, setIsParticipantListOpen] = useState(false)
    const [isNominationFormOpen, setIsNominationFormOpen] = useState(false)
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
    const [confirmationMessage, setIsConfirmationMessage] = useState('')
    const [participantToRemove, setParticipantToRemove] = useState<string>()
    const [showConfirmation, setShowConfirmation] = useState(false)

    const currentState = useSnapshot(state)

    const confirmRemoveParticipant = (id: string) => {
        setIsConfirmationMessage(`Remove ${currentState.poll?.participants[id]}`)
        setParticipantToRemove(id)
        setIsConfirmationOpen(true)
    }

    useEffect(()=> {
        console.log('Waiting room useEffect')
        actions.initializeSocket()
    }, [])

    return (
        <div className="flex flex-col w-full justify-between h-full">
            <h3>Waiting Room</h3>
        </div>
    )
}