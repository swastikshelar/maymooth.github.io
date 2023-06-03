// SIDEBAR SCRIPT

console.log("Script running...")
document.querySelector('.cros').style.display ='none';
document.querySelector('.coll-tab').addEventListener ( "click", () => {
    console.log("yes")
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.ham').style.display ='inline';
        document.querySelector('.cros').style.display ='none';

    }
    else{
        document.querySelector('.ham').style.display ='none';
        setTimeout(() => {
        document.querySelector('.cros').style.display ='inline';
    },300);
    }
})

// LOGIN SCRIPT

document.querySelector("#show-login").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
    
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});


