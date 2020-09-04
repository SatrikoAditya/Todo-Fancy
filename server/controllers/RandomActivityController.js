const axios = require('axios')

class RandomActivityController {
    static activityGenerator(req, res, next) {
        const endpoint = "https://www.boredapi.com/api/activity/"
        axios.get(endpoint)
        .then(response => {
            const activity = response.data.activity 
            res.status(200).json({ activity })
            console.log(activity)
        })
        .catch(err => {
            console.log(err)
            next()
        })
    }
}

module.exports = RandomActivityController