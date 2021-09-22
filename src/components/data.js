
      export let url;

      fetch('https://my-json-server.typicode.com/VitorHugoG/api-dados/dados')
      .then(response => {
        return response.json()
      })
      .then(r => {
        url = r;
        console.log(url)
      })
      .catch(err => {
         console.log(err)
      })