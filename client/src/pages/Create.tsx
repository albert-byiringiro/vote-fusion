import { useState } from "react"
import CountSelector from "../components/ui/CountSelector"

const Create: React.FC = () => {
  const [pollTopic, setPollTopic] = useState('')
  const [maxVotes, setMaxVotes] = useState(3)
  const [name, setName] = useState('')

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
    </div>
  )
}

export default Create