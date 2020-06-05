const sqlite = require('sqlite3').verbose()

const db = new sqlite.Database("./src/database/database.db")
module.exports = db

// db.serialize(()=>{

//     // criando uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places(
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //Inserir dados na tabela
//     const query = `

//     INSERT INTO places (
//         name,
//         image,
//         address,
//         address2,
//         state,
//         city,
//         items) VALUES (?,?,?,?,?,?,?);

//     `

//     const values = [
//         "Colectoria",
//         "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1474&q=80",
//         "MAtheys de Paula, PPH",
//         "número 200",
//         "SP",
//         "RJ",
//         "Resíduos Eletrônicos, Lâmpadas"

//     ]

//     function afterAll(err){
//         if(err){

//             return console.log(err)

//         }else{
//             console.log("Cadastrado com sucesso")
//             console.log(this)
//         }
//     }
//     db.run(query,values,afterAll)


//     // consultar os dados na tabela
//     const selectAll = `SELECT * FROM places`
//     function selectError(err,rows){
//         if(err){
//             return console.log(err)
//         }else{
//             console.log("Aqui está seu registro")
//             console.log(rows)

//         }

//     }
//     db.all(selectAll, selectError)

//     //deletar um dado da tabela
//     // const del = `DELETE FROM places WHERE id = ?`
//     // function erroDel(err){
//     //     if(err){
//     //         return console.log(err)
//     //     }else{
//     //         console.log("Registro deletado com sucesso")
//     //     }

//     // }
//     // db.run(del,[1],erroDel)

// })