// registration file
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";

const auth = getAuth();

document.getElementById("registerBtn").onclick = async ()=>{
    const n=document.getElementById("name").value;
    const e=document.getElementById("mail").value;
    const p=document.getElementById("pass").value;
    try{
        await createUserWithEmailAndPassword(auth,e,p);
        alert("OK");
    }catch(err){ alert(err); }
};

document.getElementById("loginBtn").onclick = async ()=>{
    const e=document.getElementById("mail").value;
    const p=document.getElementById("pass").value;
    try{
        await signInWithEmailAndPassword(auth,e,p);
        alert("Login OK");
    }catch(err){ alert(err); }
};
