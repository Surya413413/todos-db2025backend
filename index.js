

const express = require("express")
const path = require("path")
const {open} = require("sqlite")
const sqlite3 = require("sqlite3")
const cors = require("cors")
const dbpath = path.join(__dirname,"todo.db")
const app = express()
app.use(express.json())
app.use(cors())

let db = null;

const initalization = async () => {
    try{
        db = await open({
            filename:dbpath,
            driver:sqlite3.Database
        })
        app.listen(3000, () => {
            console.log("server ruuning on 3000")
        })

    }catch(e){
        console.log(`error in db: ${e.massage}`)
        process.exit(1)
    }
}


initalization()


// get todos
app.get("/todos/", async (request,response) => {
 const getQuery = `
 SELECT * FROM todos;`
 const getDetails = await db.all(getQuery)
 response.send(getDetails)
})

// post(create) in todo 
app.post("/todos/", async (request,response) => {
    const {title} = request.body;
    const getQuery = `
    INSERT INTO todos(title) VALUES ('${title}');`;
    const getDetails = await db.run(getQuery)
    response.send("add success")
   })

// put in todo 

app.put("/todos/:id", async (request,response) => {
    const {id} = request.params;
    const {title} = request.body;
    const getQuery = `
    UPDATE todos SET title = '${title}' WHERE id = ${id};`;
    const getDetails = await db.run(getQuery)
    response.send("updated success")
   })

   // delete in todos
   app.delete("/todos/", async (request,response) => {
    const {id} = request.params;
    const getQuery = `
    DELETE FROM todos;`;
    const getDetails = await db.run(getQuery)
    response.send("deleted success")
   })

   module.exports = app