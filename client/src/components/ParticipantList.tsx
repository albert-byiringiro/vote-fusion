import { Participants } from "../../../shared/poll-types"
import BottomSheet, { BottomSheetProps } from "./ui/BottomSheet";

type ParticipantListProps = {
    participants?: Participants;
    userID: string;
    isAdmin: boolean;
    onRemoveParticipant: (id: string) => void
} & BottomSheetProps

const ParticipantList =  ({
    isOpen,
    onClose,
    participants = {},
    onRemoveParticipant,
    userID,
    isAdmin,
}: ParticipantListProps) => {}