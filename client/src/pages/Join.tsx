import { useState } from "react"

const Join: React.FC = () => {
    const [pollID, setPollID] = useState('')
    const [name, setName] = useState('')
    const [apiError, setApiError] = useState('')
    
    return (
        <div className="flex flex-col w-full justify-around items-stretch h-full mx-auto max-w-sm">
            <h3 className="text-center">Enter Code Provided by &quot;Friend&quot;</h3>
        </div>
    )
}

export default Join