
import { Router } from 'express';
import Author from './model.js'
 export const authorsRoute = Router();



authorsRoute.get('/',async (req,res, next) =>{
    try{
        let authors = await Author.find()
        res.send(authors) //lista degli autori in formato json
    }
    catch(error){
       next(error)
    }
});

//gety by id :

authorsRoute.get('/:id',async (req,res, next) => {
    try{
        const author = await Author.findById(req.params.id);
        
        //risposta con l'autore
        res.send(author);
    }
    catch(error){
        next(error)
    }
})

//POST

authorsRoute.post('/', async (req,res,next) => {

    console.log('POST /authors route hit');
if(!req.body.name){
    return res.status(400).json({ error: 'Name is required' });
}
    try {
        //salviamo il nuovo utente nel database
        const newAuthor = new Author({
            name: req.body.name,
            surname:req.body.surname,
            email:req.body.email
        });
        await newAuthor.save()
        //riceviamo la risposta positiva con i dati del autore
        res.send(newAuthor); 
    }
    catch(error){
     next(error)
    }
});

