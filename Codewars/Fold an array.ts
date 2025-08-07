export function foldArray(array:number[], runs:number):number[]
{
    if(array.length == 1 || array.length == 0) return array;
    
    const arr = array;
    const i = 1;
    const res = array;
    while(i<=runs){
        const temp = res;
        if(res.length % 2 == 0){
            for(let x = 0; x<res.length/2;x++){
                res[i]=arr[i]+res.reverse()[i];
            }
        }else{
            for(let x = 0; x<(res.length-1)/2;x++){
                res[i] = arr[i]+res.reverse()[i];

            }
        }
    }
  return [ 0 ];
}