const axios = require("axios")

const options = {
  method: 'POST',
  url: 'http://localhost:3000/api/auth/login',
  data: {password: 'q', email: 'jose@gmail.com'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});