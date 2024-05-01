const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    const locals ={
        title: 'my nodeblog',
        desciption: "simple blog created by node "

    }
    res.render('index', {locals});
})

router.get('/about', (req, res) => {
    res.render('about');
})
module.exports = router;