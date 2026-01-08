let userName = getFirstName("Pedro Luiz Costa")

console.log(userName)

function getFirstName(name) {
    return name.split(" ")[0]
}