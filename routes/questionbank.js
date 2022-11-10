var express = require('express');
const { questionbankGetView, editQuestionGetView, editQuestionPutView, deleteQuestionGetView, deleteQuestionDeleteView, questionGetView } = require('../controllers/questionbankController');
var router = express.Router();
// var db=require('../controllers/config');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/questionbank', questionbankGetView);
router.get('/questionbank/edit',editQuestionGetView);
router.get('/questionbank/delete',deleteQuestionGetView);
router.get('/submitted',questionGetView);

router.post('/questionbank/edit',editQuestionPutView );
router.post('/questionbank/delete',deleteQuestionDeleteView);

module.exports = router;