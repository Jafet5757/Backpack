const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index', {name: 'Jafet'});
});

router.get('/addbook', (req, res) => {
    return res.render('addBook');
})

router.get('/book', (req, res)=>{
    return res.render('book');
})

router.get('/book/notes', (req, res) => {
    return res.render('notes');
})

module.exports = router;