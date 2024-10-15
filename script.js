// console.log(axios)

axios.get('https://sdaapi.glabazna.eu/employees/182')
  .then((response) => {
    console.log(response.data.data)
  })