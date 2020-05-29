const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        author: 'Milton'
    })
})

app.get('/help', (req, res) => {
    res.send([{
        name: 'milton',
        age: 59
    }, {
        name: 'nathalie',
        age: 50
    }])
})

// app.get('/about', (req, res) => {
//     res.send('About Page')
// })

app.get('/weather', (req, res) => {
    res.send({
        location: 'Shelton, CT',
        weather: 'Cloudy'
    })
})

app.get('*', (req, res) => {
    res.send('<h1>404</h1>')
})

app.listen(3000, () => {
    console.log('Server is up at port 3000')
})
