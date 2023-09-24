const btn=document.getElementById("submit");
const prints=document.getElementById("session-storage");
btn.addEventListener("click", ()=>{
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password != confirmPassword) {
        alert("Passwords do not match");
		prints.style.display = "block";
        return false;
    }
	else{
		const name=document.getElementById("name").value;
		const email=document.getElementById("email").value;
		const profileInfo = `
            <h2>Profile Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>password:</strong> ${password}</p>
        `;
        prints.innerHTML = profileInfo;
		 alert("Sign up successful!");
		return true;
	}
    
})