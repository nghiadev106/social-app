const router = require('express').Router()
const auth = require("../middleware/auth")
const userCtrl = require("../controllers/userController")


router.get('/search', auth, userCtrl.searchUser)

router.get('/user/:id', auth, userCtrl.getUser)

router.patch('/user', auth, userCtrl.updateUser)

router.patch('/user/:id/follow', auth, userCtrl.follow)
router.patch('/user/:id/unfollow', auth, userCtrl.unfollow)

router.get('/suggestionsUser', auth, userCtrl.suggestionsUser)
router.get('/followingsUser', auth, userCtrl.followingsUser)
router.get('/users', auth, userCtrl.getAllUsers)

module.exports = router