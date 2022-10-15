const trim=require('trim')
const lower=require('lower-case')
const upper=require('upper-case')


let trimmm=function(){
    let str="           FunctionUp      "
    let result=trim(str) 
    return result
}


let low=function(){
   
    let result=lower.lowerCase("I Am THe STUDEnt OF LIThium BAtCH")
    return result;
}



let up=function(){
    let str="i am The Student OF LIthium batch"
    let result=upper.upperCase(str)
    return result;
}

module.exports.trimm=trimmm;
module.exports.chnagetoUpperCase=up;
module.exports.chnagetoLowerCase=low; 