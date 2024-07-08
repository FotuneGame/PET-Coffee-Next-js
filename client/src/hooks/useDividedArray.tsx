export default function useDividedArray <T> (array:Array<T>,countDevided=1) : Array<Array<T>>{
    const arrayRes:Array<Array<T>>  = [];
    for(let i =0; i < array.length;i+=countDevided){
        const arrI:Array<T> = [];
        for(let j =0; j < countDevided; j+=1){
            if((i+j)>=array.length) break;
            else arrI.push(array[i+j]);
        }
        arrayRes.push(arrI);
    }
    return arrayRes;
}