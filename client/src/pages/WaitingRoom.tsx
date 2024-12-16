import { useEffect, useState } from "react"
import { actions } from "../state"
import { useCopyToClipboard } from "react-use"

export const WaitingRoom = () => {

    const [_copiedText, copyToClipBoard] = useCopyToClipboard()
    const [isParticipantListOpen, setIsParticipantListOpen] = useState(false)
    const [isNominationFormOpen, setIsNominationFormOpen] = useState(false)
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
    const [confirmationMessage, setIsConfirmationMessage] = useState('')
    const [participantToRemove, setParticipantToRemove] = useState<string>()
    const [showConfirmation, setShowConfirmation] = useState(false)

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