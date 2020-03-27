const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    console.log('corerct');
    res.json({status: 'correct'})
})





module.exports = router;