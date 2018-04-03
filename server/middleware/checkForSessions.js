module.exports = function (req, res, next) {
    // console.log('check for session ran!')
    // console.log(req.session.user)
    if (!req.session.user) {
        req.session.user = {
            id: 36,
            user_name: 'Chad Empey - Test',
            first_name: 'Chad - Tester',
            last_name: 'Empey',
            image: 'https://lookaside.facebook.com/platform/profilepic/?asid=10156471877221412&height=50&width=50&ext=1522605982&hash=AeREO3n_py3Telbf',
            score: null,
            facebook_id: 'facebook|10156448086284218',
            user_email: null 
        }
    }
    next()
}