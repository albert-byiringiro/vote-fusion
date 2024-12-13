import { useState } from "react"
import CountSelector from "../components/ui/CountSelector"
import { actions } from "../state"

const Create: React.FC = () => {
  const [pollTopic, setPollTopic] = useState('')
  const [maxVotes, setMaxVotes] = useState(3)
  const [name, setName] = useState('')

  const areFieldsValid = (): boolean => {
    if (pollTopic.length < 1 || pollTopic.length > 100) {
      return false
    }

    if (maxVotes < 1 || maxVotes > 5) {
      return false
    }

    if (name.length < 1 || name.length > 25) {
      return false
    }

    return true;
  }

  const handleCreatePoll = async () => {
    actions.startLoading()
  }

  return (
    <div className="flex flex-col w-full justify-around items-stretch h-full mx-auto max-w-sm">
      <div className="mb-12">
        <h3 className="text-center">Enter Poll Topic</h3>
        <div className="text-center w-full">
          <input type="text" className="box info w-full" maxLength={100} onChange={(e) => setPollTopic(e.target.value)} />
        </div>
        <h3 className="text-center mt-4 mb-2">Votes Per Participant</h3>
        <div className="w-48 mx-auto my-4">
          <CountSelector min={1} max={5} initial={3} step={1} onChange={(val) => setMaxVotes(val)}/>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button className="box btn-orange w-32 my-2" onClick={() => console.log('createPoll')} disabled={!areFieldsValid()}>Create</button>
        <button className="box btn-purple w-32 my-2" onClick={() => actions.startOver()}>Start Over</button>
      </div>
    </div>
  )
}

export default Create