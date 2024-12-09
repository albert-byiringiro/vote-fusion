import RankedCheckBox from "./components/ui/RankedCheckBox";

export default function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <RankedCheckBox value={"choose the Lord to be happy."} rank={7}/>
    </>
  )
}