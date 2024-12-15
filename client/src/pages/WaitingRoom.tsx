import { useEffect } from "react"
import { actions } from "../state"

export const WaitingRoom = () => {

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