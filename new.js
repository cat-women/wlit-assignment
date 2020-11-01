var log = {
    data : function(size){
        var mb = size/1024;
        console.log(size+"KB = "+mb+"MB");
    }
}  
module.exports = log