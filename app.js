import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
         import {
                getAuth,
                createUserWithEmailAndPassword,
                signInWithEmailAndPassword,
                onAuthStateChanged,
                signOut
                //Update the below URL with the appropriate version if necessary.
            } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";


        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyB7XQ3q-hNOogBDgSWMyybBvL-xAe658UE",
            authDomain: "authapp-1acb6.firebaseapp.com",
            projectId: "authapp-1acb6",
            storageBucket: "authapp-1acb6.appspot.com",
            messagingSenderId: "246219133389",
            appId: "1:246219133389:web:6b61ff6afcda6828613484"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

       //cach the dom
        const email=document.getElementById('email');
        const password=document.getElementById('password');
        const signUpBtn=document.getElementById('signUpBtn');
        const signInBtn=document.getElementById('signInBtn');
        const signOutBtn=document.getElementById('signOutBtn');
        const login=document.getElementById('login');
        const authPart=document.getElementById('authPart');
        authPart.style.display='none';

        //signup
        const signUp= async ()=>{
            const signUpEmail=email.value;
            const signUpPassword=password.value;
            createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
            .then((userCreditional) => {
                // Signed in 
                const user = userCreditional.user;
                console.log(user);
                alert('user created successfully');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
                alert(errorMessage);
            });
        }
   
        //signin
        const signIn= async ()=>{
            const signInEmail=email.value;
            const signInPassword=password.value;
            signInWithEmailAndPassword(auth, signInEmail, signInPassword)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                alert('user signed in successfully');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
                alert(errorMessage);
            });
        }
       //check auth state
       const checkAuthState=()=>{
           onAuthStateChanged(auth,(user)=>{
               if(user){
                   login.style.display='none';
                   authPart.style.display='flex';
                   console.log('user is signed in');
               }else{
                login.style.display='block';
                authPart.style.display='none';
                console.log('user is signed out');
               }
           })
         }
        checkAuthState();
        //signout
        const userSignOut=()=>{
            signOut(auth).then(() => {
            
                console.log('user signed out');
                alert('user signed out successfully');
              }).catch((error) => {
                // An error happened.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
                alert(errorMessage);
              });
        }

        signUpBtn.addEventListener('click',signUp);
        signInBtn.addEventListener('click',signIn);
        signOutBtn.addEventListener('click',userSignOut);