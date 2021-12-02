import pool from "../db.js";

class Person {
    async add(req, res) {
        try {
            const {name, surname} = req.body;
            console.log(req)
            pool.query("INSERT INTO queue (name, surname) VALUES ($1, $2)", [name, surname], (err, result) => {
                if(err) {
                    throw err;
                }
                res.status(201).send(`User added to queue`)
            })
        } catch(err) {
            console.log(err)
        }
    }    
}

const personCntrl = new Person();
export default personCntrl;