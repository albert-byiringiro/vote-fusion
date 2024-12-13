import { useState } from "react"

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
      </div>
    </div>
  )
}

export default Create