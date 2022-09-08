import { data } from './data'

let is_ok = true

export const promesa = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            if (is_ok) {
                resolve(data)
            } else {
                reject ('Error in the customFetch')
            }
        }, 2000)
    })
}