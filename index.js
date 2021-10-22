const express = require('express');
/* for require cors */
const cors = require('cors');
const app = express();
/* for use cors */
app.use(cors());
app.use(express.json());

const port = process.env.prot || 5000;

app.get('/', (req, res) => {
  res.send('Wow.. I am excited to learn node. Hello from my second node server');
});

const users = [
  { id: 1, name: 'Shabana', email: 'shabana@gmail.com', phone: '017888888888' },
  { id: 2, name: 'Shaabnoor', email: 'Shaabnoor@gmail.com', phone: '017888888888' },
  { id: 3, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '017888888888' },
  { id: 4, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '017888888888' },
  { id: 5, name: 'Soniya', email: 'Soniya@gmail.com', phone: '017888888888' },
  { id: 6, name: 'Suamita', email: 'Suamita@gmail.com', phone: '017888888888' },
]

/* to show site http://localhost:5000/users */
app.get('/users', (req, res) => {
  const search = req.query.search;
  /* apply condition for query searching like http://localhost:5000/users?search=noor */
  /* use query parameter */
  if (search) {
    const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
    res.send(searchResult);
  }
  else {
    res.send(users)
  }
});


// app.METHOD
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('hitting the post', req.body);
  // res.send('inside post')
  // res.send(JSON.stringify(newUser))
  // or the below line 
  res.json(newUser)
})

/* dynamic api */
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id]
  res.send(user);
  // console.log(req.params.id);
})

/* to show fruits live site http://localhost:5000/fruits */
app.get('/fruits', (req, res) => {
  res.send(['mango', 'oranges', 'banana', 'apple'])
})

/* to show live site http://localhost:5000/fruits/mangoes/fazli */
app.get('/fruits/mangoes/fazli', (req, res) => {
  res.send('Yummy Yummy tok marka fazli');
})

app.listen(port, () => {
  console.log('Listening to port', port);
})
