type SnackBarProps = {
    type?: 'standard' | 'error';
    title?: string;
    message: string;
    show: boolean;
    autoCloseDuration?: number;
    onClose: () => void;
}