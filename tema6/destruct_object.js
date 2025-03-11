const user = {
    name: undefined,
    age: 58,
    city: "Cahul",
    skils: ["HTML", "CSS", "JS", "React", "MongoDB"]
}

const {skils:data} = user;
// const {name} = user;

data.forEach(skill => console.log(skill))