export default function divideFunction(numerator, denominator) {
    try{
        if(denominator === 0){
            throw new Error();
        } else{
            console.log (numerator/denominator);
        }    
    } catch (error) {
        throw Error("cannot divide by 0");
    }
};
