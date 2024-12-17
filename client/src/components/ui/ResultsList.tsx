import { Results } from "shared/poll-types"
import HorizontalSwipeList from "./HorizontalSwipeList"
import ResultCard from "./ResultCard"

type ResultsList = {
    results: DeepReadonly<Results[]>
}

const ResultsList = ({ results }: ResultsList) => {
    return (
        <div className="mx-auto max-h-full flex flex-col">
            <HorizontalSwipeList>
                {results.map((result, i) => (
                    <ResultCard key={i} results={result} />
                ))}
            </HorizontalSwipeList>
        </div>
    )
}