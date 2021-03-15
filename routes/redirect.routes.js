const {Router} = require('express')
const Links = require('../models/Links')
const  router = Router()

router.get('/:code', async ( req, res) => {

    try {
        const link = await  Links.findOne({code: req.params.code})
        if (link) {
            link.clicks++
            await link.save()
            return res.redirect(link.from)

        }

        res.status(404).json('Ccылка не найдена')
    } catch (e) {
        res.status(500).json({message: 'Что то пошло не так попробуйте снова'})
    }



})

module.exports = router