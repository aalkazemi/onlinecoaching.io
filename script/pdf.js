window.onload = function(){
    document.getElementById("send")
        .addEventListener("click",()=>{
            const email = this.document.getElementById("send")
            console.log(email);
            console.log(window);
            html2pdf().from(email).save();
    })
}