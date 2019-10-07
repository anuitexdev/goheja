export const translationReplace = (str: string, value: string) => {
return str.replace(/<.*>/, `${value}`)
}