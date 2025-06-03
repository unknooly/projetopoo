import StartUp from "./startUp";
let port="5000" // ideal seria usar const?

StartUp.app.listen(port,function(){
    console.log(`Servidor rodando na porta: ${port}\nLink: http://localhost:${port}`)
})

