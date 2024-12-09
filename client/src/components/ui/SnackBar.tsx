import { useEffect, useState } from "react";

type SnackBarProps = {
    type?: 'standard' | 'error';
    title?: string;
    message: string;
    show: boolean;
    autoCloseDuration?: number;
    onClose: () => void;
}

const snackBarStyles = {
    standard: 'bg-gray-100 bg-opacity-50',
    error: 'bg-red-600 text-white',
}

const SnackBar = ({
    type = 'standard',
    title,
    message,
    show,
    onClose,
    autoCloseDuration
}: SnackBarProps) => {
    const outerStyles = snackBarStyles[type]
    const [showSnackBar, setShowSnackBar] = useState(false)

    const handleCloseSnackBar = () => {
        setShowSnackBar(false)
    }

    useEffect(() => {
        if (show) {
            setShowSnackBar(true)
        }

        const autoTimer = autoCloseDuration && setTimeout(() => handleCloseSnackBar(), autoCloseDuration)

        return () => {
            autoTimer && clearTimeout(autoTimer)
        }
    }, [show, message, title])
}