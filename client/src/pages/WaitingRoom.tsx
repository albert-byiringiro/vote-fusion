import { useEffect, useState } from "react"
import { actions, state } from "../state"
import { useCopyToClipboard } from "react-use"
import { useSnapshot } from "valtio"
import { colorizeText } from "../utils"
import { MdContentCopy } from "react-icons/md"

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

    const submitRemoveParticipant = () => {
        participantToRemove && actions.removeParticipant(participantToRemove)
        setIsConfirmationOpen(false)
    }

    useEffect(()=> {
        console.log('Waiting room useEffect')
        actions.initializeSocket()
    }, [])

    return (
        <>
            <div className="flex flex-col w-full justify-between h-full">
                <div>
                    <h2 className="text-center">Poll Topic</h2>
                    <p className="italic text-center mb-4">{currentState.poll?.topic}</p>
                    <h2 className="text-center">Poll ID</h2>
                    <h3 className="text-center">Click to copy!</h3>
                    <div className="mb-4 flex justify-center align-middle cursor-pointer" onClick={() => copyToClipBoard(currentState.poll?.id || '')}>
                        <div className="font-extrabold text-center mr-2">
                            {currentState.poll && colorizeText(currentState.poll?.id)}
                        </div>
                        <MdContentCopy size={24}/>
                    </div>
                </div>
            </div>
        </>
    )
}