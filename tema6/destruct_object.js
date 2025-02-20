const user = {
    name: undefined,
    age: 58,
    city: "Cahul",
    skils: ["HTML", "CSS", "JS", "React", "MongoDB"]
}

const {skils} = user;

skils.forEach(skill => console.log(skill))