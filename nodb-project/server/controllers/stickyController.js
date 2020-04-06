let stickies = []
let id = 1

module.exports = {
    getStickies: (req, res) => {
        res.status(200).send(stickies)
    },
    makeSticky: (req, res) => {
        const {contents} = req.body
        const newSticky = {
            contents,
            id,
        }
        stickies.push(newSticky)
        id++
        res.status(200).send(stickies)
    },
    editSticky: (req, res) => {
        const {id} = req.params
        const {newContents} = req.body
        const index = stickies.findIndex(stickies => {
            return stickies.id === +id
        })

        if (index === -1){
            return res.status(404).send('Sticky not found')
        }
        stickies[index].contents = newContents
        res.status(200).send(stickies)
    },
    deleteSticky: (req, res) => {
        const {id} = req.params
        const index = stickies.findIndex(stickies => {
            return stickies.id === +id
        })
        if (index === -1){
            return res.status(404).send('Sticky not found')
        }
        stickies.splice(index, 1)
        res.status(200).send(stickies)
    }
}