import SnackBar from "./components/ui/SnackBar";

export default function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <SnackBar message={"Please don't pass me by"} show={true} onClose={function (): void {
        throw new Error("Function not implemented.");
      } }/>

    <p className="">Keep me here</p>
    </>
  )
}