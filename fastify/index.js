let fastify = require('fastify')();
let port = process.env.PORT || 3300;

fastify.get('/',(req, res)=>{
    res.send({message : "Hello World"});
});


fastify.listen({ port }, (err, result) => {
    if(err){
        fastify.log.error(err);
        proccess.exit(1);
    }
    console.log(`Server start in port: ${port}`);        
});
