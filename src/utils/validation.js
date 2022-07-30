export const validateInputs = (inputs) => {
    console.log(inputs);
    return new Promise((resolve, reject) => {
        if(typeof inputs === 'object'){
            if(inputs.username.length > 2 && inputs.password> 2){
             resolve(true);
            }else{
              reject(false)
            }
         }
    })
}