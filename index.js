const btn_takeattendance=document.getElementById("btn-takeattendance");
const btn_viewattendance=document.getElementById("btn-viewattendence");
const qrcod_dom=document.getElementById('qrcode');
const showattendance_dom=document.getElementById("show-attendance")
const teacher_id='1001'

const generateqr= ()=>{
try{
    fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${teacher_id}!&size=100x100`).then( (res)=>{
        
    qrcod_dom.innerHTML=`<img src='${res.url}'  />`
     showattendance_dom.innerHTML=''   
    });
    
}
catch(err){
    console.log(err)
}



}


const showattendance=()=>{
    qrcod_dom.innerHTML=''
    showattendance_dom.innerHTML=`the attendace is: `;
}