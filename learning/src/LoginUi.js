function LoginPage() {
    return(
        <div style={{ width: "300px", border: "1px solid black", display: "flex", flexDirection: "column", gap: "10px", padding: "10px", backgroundColor: "white", margin : "100px 0px 0px 450px"}}>
        <h3 style={{ fontSize: "15px",textAlign: "center" }}>Enter a Gmail</h3>
        <input style={{marginLeft: "5px"}} type="text" />

        <h3 style={{ fontSize: "15px",textAlign: "center" }}>Enter a password</h3>
        <input style={{marginLeft: "5px"}} type="password" />

        <button style={{ marginTop: "10px",cursor: "pointer",backgroundColor: "#04AA6D",
            color: "white", border: "none",padding: "14px 20px",margin: "8px 0",width: "100%",marginLeft: "3px"
         }}>Log In</button>
    </div>
    )

}

export default LoginPage;