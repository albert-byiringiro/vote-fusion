import NominationForm from "./components/NominationForm";
import SnackBar from "./components/ui/SnackBar";

export default function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <NominationForm isAdmin={true} onSubmitNomination={function (nomination: string): void {
        throw new Error("Function not implemented.");
      } } onRemoveNomination={function (nomination: string): void {
        throw new Error("Function not implemented.");
      } } isOpen={true} children={undefined} title="Meekness"/>

    <p className="">Keep me here</p>
    </>
  )
}