const router = require('express').Router();
const { addComment, deleteComment, addReply, deleteReply } = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId')
    .post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(deleteComment);

// /api/comments/<pizzaId>/<commentId>/<replyId>
router.route('/:pizzaId/:commentId/:replyId').delete(deleteReply);

module.exports = router;