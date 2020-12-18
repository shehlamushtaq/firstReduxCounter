export const increament ="INCREAMENT"
export const decreament ="DECREAMENT"

export function incAction(){
    return{
    type:increament
    }
}

export function decAction(){
    return{
        type: decreament
    }
}