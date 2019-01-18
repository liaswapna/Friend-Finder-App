
var path = require('path')
var friends = require('../data/friends')

module.exports = (app) => {
    
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })
    app.post('/api/friends', (req, res) => {
        
        let userScore = req.body.scores
        let closestMatch = 0
        let match = {}
        friends.forEach(friend => {
            let i = 0
            let friendScore = friend.scores
            let matchScore = friendScore.reduce((totalScore, eachScore) => {
                return (totalScore) + Math.abs(eachScore - userScore[i++])
            }, 0)
            if (closestMatch === 0) {
                closestMatch = matchScore
                match = friend
            }
            else if (matchScore < closestMatch) {
                closestMatch = matchScore
                match = friend
            }
        })
        friends.push(req.body)
        res.json(match)
    })
}
