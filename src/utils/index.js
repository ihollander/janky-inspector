export const printElementName = element => {
  let name = ""
  const classes = element.className
    .split(" ")
    .filter(c => c !== "selected" && c !== "highlight")

  if (element.id.length) {
    name += "#" + element.id
  } else if (classes.length) {
    name += "." + classes.join(".")
  }
  return name
}