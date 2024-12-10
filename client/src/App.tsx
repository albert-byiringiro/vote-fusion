import React, { useState } from 'react';
import ParticipantList from "./components/ParticipantList";
import { Participants } from '../../shared/poll-types';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  const participants: Participants = {
    "1": "Alice",
    "2": "Bob",
    "3": "Charlie"
  };

  const handleRemoveParticipant = (id: string) => {
    console.log(`Removing participant with ID: ${id}`);
    // Add logic to remove participant
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={() => setIsOpen(true)} className="mb-4">
        Show Participants
      </button>
      <ParticipantList 
        userID={""}
        isAdmin={true}
        onRemoveParticipant={handleRemoveParticipant}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        participants={participants} children={undefined}      />
    </>
  );
}