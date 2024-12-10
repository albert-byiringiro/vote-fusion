import React, { useState } from 'react';
import ParticipantList from "./components/ParticipantList";
import { Participants } from '../../shared/poll-types';
import Create from './pages/Create';

export default function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <Create/>
    </>
  );
}