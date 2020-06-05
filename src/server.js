const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
//pegar banco de dados
const db = require('./database/db')

app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
//template engine
nunjucks.configure("src/views",{
    express: app,
    noCache:true

})

app.get('/',(req, res )=>{
    return res.render("index.html",{title: 'Pontos de Coleta'})
})

app.get('/create-point',(req, res )=>{

    return res.render("create-point.html")
})


app.post("/savepoint",(req, res)=>{


    const query = `

    INSERT INTO places (
        name,
        image,
        address,
        address2,
        state,
        city,
        items) VALUES (?,?,?,?,?,?,?);

    `

    const values = [req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    
    ]

    function afterAll(err){
        if(err){

            return console.log(err)
            return res.send("Erro no Cadastro")

        }else{
            console.log("Cadastrado com sucesso")
            console.log(this)
            return res.render("create-point.html",{saved:true})
        }
    }
    db.run(query,values,afterAll)

})

app.get('/results',(req, res )=>{

    const search = req.query.search
    if(search == ""){
        return res.render("results.html",{total:0})
    }



    const selectAll = `SELECT * FROM places WHERE city LIKE '%${search}%'`
        function selectError(err,rows){
            if(err){
                return console.log(err)
            }else{
                console.log("Aqui está seu registro")
                console.log(rows)

                const total = rows.length
                return res.render("results.html",{places:rows,total:total})
    
            }
    
        }
        db.all(selectAll, selectError)

    
})

app.listen(3001)