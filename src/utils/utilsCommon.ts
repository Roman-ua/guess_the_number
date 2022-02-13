export const reg = new RegExp('^[0-9]+$');
export const randomCharGenerator = () => {
  return `${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`
}
