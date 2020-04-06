const express = require('express')
const PORT = 4000
const stickyCtrl = require('./controllers/stickyController')

const app = express()
app.use(express.json())

app.get('/api/stickies', stickyCtrl.getStickies)
app.post('/api/stickies/sticky', stickyCtrl.makeSticky)
app.put('/api/stickies/sticky/:id', stickyCtrl.editSticky)
app.delete('/api/stickies/sticky/:id', stickyCtrl.deleteSticky)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))