const router=require('express').Router();
const multer=require('multer');
const auth=require('../middleware/authMiddleware');
const c=require('../controller/superheroController');
const storage=multer.diskStorage({
 destination:(req,file,cb)=>cb(null,'uploads/'),
 filename:(req,file,cb)=>cb(null,Date.now()+'-'+file.originalname)
});
const upload=multer({storage});
router.get('/search/:name',auth,c.searchHero);
router.post('/create',auth,upload.single('image'),c.createHero);
router.get('/all',auth,c.getHeroes);
router.get('/:id',auth,c.getHero);
router.put('/update/:id',auth,c.updateHero);
router.delete('/delete/:id',auth,c.deleteHero);
module.exports=router;