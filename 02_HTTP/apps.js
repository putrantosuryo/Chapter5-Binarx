const http = require ('http');

const handleRequest = (req,res) => {
//     console.log(req.method);
//     console.log(req.url);
//     console.log('===================')
//     // res.end ('lalalala');

//     if(req.method === "POST"){
//         return res.end("dari post");
//     }
//     if(req.method === "GET"){
//         return res.end("dari get");
//     }

//     res.end("dari yang lain lain yaa")
// ================================================================

const dataSiswa = {
    "nama" : "suryo",
    "umur" : "22"
}
res.writeHead(300,{"Contet-Type" : "application/json"});
res.end(JSON.stringify(dataSiswa));
}

http.createServer(handleRequest).listen(8000);