


export const OwnerCard = ({owner}) => {
    return <>
    <div>
    <p>Name: {owner.user?.name}</p>
    <p>Animal Name: {owner.animal?.name}</p>
    <p></p>
    </div>
    </>
}