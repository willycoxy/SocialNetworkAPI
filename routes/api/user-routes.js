const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

router
    .route('/:userId/friends/:friendId')
    .delete(removeFriend)
    .post(addFriend)
 
router
    .route('/')
    .get(getAllUser)
    .post(createUser)

router 
    .route('/:id')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser)


module.exports = router;