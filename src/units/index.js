export function resetHeight (delimitHeight) {
  console.log(66, document.body.clientHeight, delimitHeight)
  return Number(document.body.clientHeight - delimitHeight) + 'px'
}