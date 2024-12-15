import { useState } from "react"
import { actions } from "../state"

const Join: React.FC = () => {
    const [pollID, setPollID] = useState('')
    const [name, setName] = useState('')
    const [apiError, setApiError] = useState('')

    const areFieldsValid = (): boolean => {
        if (pollID.length < 6 || pollID.length > 6) {
          return false
        }
    
        if (name.length < 1 || name.length > 25) {
          return false
        }
    
        return true
    }

    const handleJoinPoll = () => console.log('Joined the poll')

    return (
        <div className="flex flex-col w-full justify-around items-stretch h-full mx-auto max-w-sm">
            <div className="mb-12">
                <div className="my-4">
                <h3 className="text-center">Enter Code Provided by &quot;Friend&quot;</h3>
                <div className="text-center w-full">
                    <input 
                        type="text" 
                        className="box info w-full"
                        maxLength={6}
                        onChange={(e) => setPollID(e.target.value.toUpperCase())}
                        autoCapitalize="characters"
                        style={{ textTransform: 'uppercase'}}
                    />
                </div>
                </div>
                <div className="my-4">
                    <h3 className="text-center">Your name</h3>
                    <div className="text-center w-full">
                        <input 
                            type="text" 
                            className="box info w-full" 
                            maxLength={25}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>

                {apiError && (
                    <p className="text-center text-red-600 font-light mt-8">{apiError}</p>
                )}
            </div>
            <div className="my-12 flex flex-col justify-center items-center">
                <button 
                    disabled={!areFieldsValid()}
                    className="box btn-orange w-32 my-2"
                    onClick={() => console.log('Joined the poll')}
                >Join</button>
                <button 
                    className="box btn-purple w-32 my-2"
                    onClick={() => actions.startOver()}
                >Start Over</button>
            </div>
        </div>
    )
}

export default Join