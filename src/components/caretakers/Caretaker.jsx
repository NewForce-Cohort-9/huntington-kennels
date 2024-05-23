export const CaretakerCard = ({caretaker}) => {
    return <p>{caretaker.user ? caretaker.user?.name : "No one"} takes care of {caretaker.animal?.name} </p>
}