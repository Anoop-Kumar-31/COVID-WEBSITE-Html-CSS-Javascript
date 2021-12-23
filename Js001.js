function time(){
    var currentdate = new Date(); 
    var datetime="Last Sync: Date: "+currentdate.getDate()+"/"+(currentdate.getMonth()+1)+"/"+currentdate.getFullYear()+">>:  Time: "+currentdate.getHours()+":"+currentdate.getMinutes() + ":" + currentdate.getSeconds();
    alert(datetime);
}