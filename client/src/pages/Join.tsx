import { useState } from "react"

const Join: React.FC = () => {
    const [pollID, setPollID] = useState('')
    const [name, setName] = useState('')
    const [apiError, setApiError] = useState('')

    const areFieldsValid = (): boolean => {
        if (pollID.length < 6 || pollID.length > 6) {
            return false
        }

        if (name.length < 1 || name.length < 25) {
            return false
        }

        return true
    }

    return (
        <div className="flex flex-col w-full justify-around items-stretch h-full mx-auto max-w-sm">
            <h3 className="text-center">Enter Code Provided by &quot;Friend&quot;</h3>
        </div>
    )
}

export default Join