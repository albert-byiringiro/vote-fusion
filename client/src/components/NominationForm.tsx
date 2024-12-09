import { useState } from "react";
import { Nominations } from "../../../shared/poll-types"
import BottomSheet, { BottomSheetProps } from "./ui/BottomSheet";

type NominationFormProps = {
    title?: string;
    nominations?: Nominations;
    userID?: string;
    isAdmin: boolean;
    onSubmitNomination: (nomination: string) => void;
    onRemoveNomination: (nomination: string) => void;
} & BottomSheetProps

const NominationForm = ({
    isOpen,
    onClose,
    title,
    nominations = {},
    onSubmitNomination,
    onRemoveNomination,
    userID,
    isAdmin,
}: NominationFormProps) => {
    const [nominationText, setNominationText] = useState<string>('')

    const handleSubmitNomination = (nominationText: string) => {
        onSubmitNomination(nominationText);
        setNominationText('')
    }

    const getBoxStyle = (id: string): string => {
        return id === userID ? 'bg-orange-100 flex-row' : 'bg-gray-100 flex-row-reverse'
    }

    return true
}

export default NominationForm