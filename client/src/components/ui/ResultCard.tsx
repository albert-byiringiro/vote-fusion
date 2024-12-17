import { Results } from "../../../../shared/poll-types"

type ResultCard = {
    results: DeepReadonly<Results>;
}

const ResultCard: React.FC<ResultCard> = ({ results }) => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 pb-2 my-2 border-b-2 border-solid border-purple-70 pr-4">
                <div className="col-span-2 font-semibold">Candidate</div>
                <div className="font-semibold">Score</div>
            </div>
        </>
    )
}