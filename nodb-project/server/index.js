const express = require('express')
const PORT = 4001
const stickyCtrl = require('./controllers/stickyController')

const app = express()
app.use(express.json())

app.get('/api/stickies', stickyCtrl.getStickies)
app.post('/api/stickies', stickyCtrl.makeSticky)
app.put('/api/stickies/:id', stickyCtrl.editSticky)
app.delete('/api/stickies/:id', stickyCtrl.deleteSticky)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))