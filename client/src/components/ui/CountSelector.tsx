import { useEffect, useState } from "react";

type CountSelectorProps = {
    min: number;
    max: number;
    step: number;
    initial: number;
    onChange: (val: number) => void
}

const CountSelector: React.FC<CountSelectorProps> = ({
    min,
    max,
    step,
    initial,
    onChange
}) => {
    if (initial < min || initial > max) {
        console.warn(`'initial' = ${initial} must be in the range of ${min} and ${max}. Setting a default inital value`)

        const steps = (max - min) / step

        initial = min + Math.floor(steps)
    }

    const [current, setCurrent] = useState(initial)

    useEffect(() => {
        onChange(current);
    }, [current]);

    return (
        <div className="flex justify-between items-center">
            <button 
            type="button" 
            className="btn-round btn-round-orange"
            disabled={current - step < min}
            onClick={() => setCurrent(current - step)}
            >
                -
            </button>
        </div>
    )
}

export default CountSelector