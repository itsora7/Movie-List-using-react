const alphaList ="qwertyuiopasdfghjklzxcvbnm"

export const randomChar = () =>{
    return alphaList [Math.round(Math.random()* alphaList.length)]
}