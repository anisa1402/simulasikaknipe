const express = require('express')
const app = express()
const port = 3000



const jalankanServer = async() => {
  try {
    app.get('/user', (req, res) => {
  // res.send('Hello World!')

  let user = [];
  res.json(user);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  } catch (error) {
    
  }
};

jalankanServer();

