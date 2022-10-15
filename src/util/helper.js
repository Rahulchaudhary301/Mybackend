const date=function(){
    let Ct= new Date()
    let result = Ct.getDate()
    let x= `Current Date is: ${result}`
    return x;
}

const month=function(){
    let Ct= new Date()
    let result = Ct.getMonth()
    let x= `Current Month is: ${result}`
    return x;
}

const bath=function(){
    let x="Lithium, W3D3, the topic being tought today is Node-jS"
    return x;
}

module.exports.printDate=date;
module.exports.printMonth=month;
module.exports.getBathInfo=bath;

