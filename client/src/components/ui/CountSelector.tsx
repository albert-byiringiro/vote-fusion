type CountSelectorProps = {
    min: number;
    max: number;
    step: number;
    initial: number;
    onChange: (val: number) => void
}