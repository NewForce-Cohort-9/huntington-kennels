export const getAllPuppies = () => {
    return fetch("http://localhost:8088/animals?_expand=location")
    .then(res => res.json())
}

export const getAllTreatments = () => {
    return fetch("http://localhost:8088/treatments")
    .then(res => res.json())
}

export const getAllPuppyCaretakers = () => {
    return fetch ("http://localhost:8088/animalCaretakers?_expand=animal&_expand=user")
    .then(res => res.json())
}