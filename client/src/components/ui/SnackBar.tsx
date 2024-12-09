type SnackBarProps = {
    type?: 'standard' | 'error';
    title?: string;
    message: string;
    show: boolean;
    autoCloseDuration?: number;
    onClose: () => void;
}

const SnackBarStyles = {
    standard: 'bg-gray-100 bg-opacity-50',
    error: 'bg-red-600 text-white',
}

