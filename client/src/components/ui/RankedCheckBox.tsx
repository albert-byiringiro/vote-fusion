type RankedCheckBoxProps = {
    rank?: number;
    value: string;
    onSelect: () => void;
}

const RankedCheckBox = ({ value, rank, onSelect }: RankedCheckBoxProps) => (
    <div className="my-4 box btn-orange relative" onClick={() => onSelect()}>
        <div className="">{value}</div>
        {rank && (
            <div className="absolute w-6 h-6 -top-3 -right-3 rounded-full bg-purple-600">
                <div className="text-center font-medium text-white">
                    {rank}
                </div>
            </div>
        )}
    </div>
)

export default RankedCheckBox