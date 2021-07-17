console.log("yo");
/*
$.ajax({
    method: "POST",
    url: "http://localhost:3000/products",
    data: { name: "John", location: "Boston" }
  })
    .done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
    */


    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                name: "John",
                email: "john@example.com"
            }
        })
    }).then(res=>{
        return res.json();
    }).then((res1)=>{
        console.log(res1);
    });

    