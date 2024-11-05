function SendMail(){
    let params= {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }

    emailjs.send("service_5mk6qsn","template_yeg0it4",params).then(Swal.fire({
        title: "Success!",
        text: "Your message is sent!",
        icon: "success"
      }));
}


