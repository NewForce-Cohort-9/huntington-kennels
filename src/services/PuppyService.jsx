export const getAllPuppies = () => {
    return fetch("http://localhost:8088/animals")
    .then(res => res.json())
}

export const getAllPuppyCaretakers = () => {
    return fetch ("http://localhost:8088/animalCaretakers?_expand=animal&_expand=user")
    .then(res => res.json())
}