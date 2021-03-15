const express = require('express')
const app = express()

app.set('view engine', 'pug')
app.use('/static', express.static('public'))

const notes = require('./db')

// localhost:8000
app.get('/', (req, res) => {
	res.render('home')
})

// localhost:8000/create
app.get('/create', (req, res) => {
	res.render('create')
})

//localhost:8000/notes/
app.get('/notes', (req,res) => {
	res.render('notes', { notes: notes})
})

//localhost:8000/notes/id
app.get('/notes/id', (req,res) => {
	res.render('detail')
})

app.listen(8000, err => {
	if (err) console.log(err)

	console.log('App is running...')
})
