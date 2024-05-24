export const getAllOwners = () => {
    return fetch("http://localhost:8088/animalOwners?_expand=animal&_expand=user")
    .then(res => res.json())
}