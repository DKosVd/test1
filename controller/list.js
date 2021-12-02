import pool from "../db.js";
import path from 'path';
import fs from 'fs';
import PDFDocument from 'pdfkit-table';

const __dirname = path.resolve()

class List {
  
    async get(_, res) {
        try {
            const doc = new PDFDocument({margin: 30, size: 'A4'});
            const fullPath = __dirname + "/static/output.pdf";
            pool.query("SELECT name, surname, timestamp FROM queue ORDER BY timestamp ASC", (err, {rows}) => {
                if(err) {
                    throw err;
                }
                doc.pipe(fs.createWriteStream(fullPath))
                const table = {
                    title: 'Queue',
                    headers: Object.keys(rows[0]),
                    rows: rows.map(el => {
                        el.timestamp = new Date(el.timestamp).toISOString().slice(0, 10)
                        return Object.values(el)
                    })
                }
                doc.table( table, {
                    width: 300
                })
                doc.end()
            })
            fs.readFile(fullPath, (err, data) => {
                if(err) {
                    throw err
                }
                res.contentType("application/pdf");
                res.send(data)
            })
      
        } catch(err) {
            console.log(err)
        }
    }
}

const listCntrl = new List();
export default listCntrl;