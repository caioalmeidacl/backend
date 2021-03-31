const express = require('express');
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
    name: "Caio",
    avatar: "https://github.com/caioalmeidacl.png",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 3
}

const jobs = []

// request, response
routes.get('/', (req, res) =>  res.render(views + "index"))
routes.get('/job', (req, res) =>  res.render(views + "job"))
routes.post('/job', (req, res) => {
  // req.body = {name: 'caio', 'daily-hours': '12 , 'total-hours': '10'}

    const job = req.body
    job.createdAt = new Date.now() // Atribuindo uma nova data

  jobs.push(req.body)
  return res.redirect('/')
})
routes.get('/job/edit', (req, res) =>  res.render(views + "job-edit"))
routes.get('/profile', (req, res) =>  res.render(views + "profile", {profile}))


module.exports = routes;