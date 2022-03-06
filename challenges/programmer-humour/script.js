    fetch('https://xkcd.vercel.app/?comic=latest')
        .then(function(response) {
            return response.json();
        })
    .then(function(data){
        let image = document.createElement('img');
        const rootEl = document.getElementById("root");
      image.setAttribute("src", data.img);
      rootEl.appendChild(image);
      console.log(data)
  })
  .catch(err => alert('Error'));

  
