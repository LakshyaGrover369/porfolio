console.log('hello alien');
function sendmail(){
    let params = {
        from_name : document.getElementById('full_name').value,
        email_id : document.getElementById('email_id').value,
        message : document.getElementById('message').value
    }
    emailjs.send("service_5fywvkp","template_mwjotlo",params ).then(function(res){
        alert("Thank You , your mail has been sent! " + res.status);

    }
    )
}