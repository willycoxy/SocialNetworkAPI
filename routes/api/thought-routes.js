const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    removeThought,
    createReaction,
    removeReaction
}  = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)    

 // router.route('/:pizzaId').post(addComment);    
router.route('/:thoughtId').post(createReaction);

router
    .route('/:thoughId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)
    
router      
    .delete(removeReaction);


module.exports = router;