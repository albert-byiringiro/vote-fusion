import { useState } from "react"

const Create: React.FC = () => {
  const [pollTopic, setPollTopic] = useState('')
  const [maxVotes, setMaxVotes] = useState(3)
  const [name, setName] = useState('')

  return (
    <div className="flex flex-col w-full justify-around items-stretch h-full mx-auto max-w-sm">
      <div className="mb-12">
        <h3 className="text-center">Enter Poll Topic</h3>
        <div className="">
          <input type="text" className="" maxLength={100} />
        </div>
      </div>
    </div>
  )
}

export default Create