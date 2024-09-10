function getMessages (req, res){
    res.send({
        id: 1, 
        text: 'Hello World!',
        author: 'John Doe'       
   })
}

export {
    getMessages
}