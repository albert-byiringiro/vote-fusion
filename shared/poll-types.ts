export type Participants = {
    [participantID: string]: string
}

export type Nomination = {
    userID: string;
    text: string
}

type NominationID = string

export type Nominations = {
    [nominationID: NominationID]: Nomination
}

export type Poll = {
    id: string;
    topic: string;
    votesPerVoter: number;
    participants: Participants;
    nominations: Nominations;
    adminID: string;
    hasStarted: boolean;
}