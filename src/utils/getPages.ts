
export const getPages = (totalPages: number)=>{
    let pageArray: number[] = []
    for(let i = 0; i< totalPages; i++){
        pageArray.push(i+1)
    }
    return pageArray
}



