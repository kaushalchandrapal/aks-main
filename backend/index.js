const express = require("express");
const pool = require("./db");
const app = express();

app.use(express.json());

app.post('/addContact', async (request, response) => {
    try {

        const {
            fname,
            lname,
            phone,
            email,
            address,
            postalcode,
            city,
            statename,
            country,
            gender,
            dob,
            jobrole,
            company
        } = request.body;

        await pool.query(
            "INSERT INTO contactbook(fname, lname, phone, email, address, postalcode, city, statename, country, gender, dob, jobrole, company) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
            [fname, lname, phone, email, address, postalcode, city, statename, country, gender, dob, jobrole, company]);
        
        const success = "Contact Successfully Added!";
        response.status(200).json({success});
    } catch (error) {
        response.status(400).json(error);
    }
})

app.get("/allContact", async(req, res) => {
    try {
           const allContact = await pool.query("Select * from contactbook");
           res.status(200).json(allContact.rows);
       } catch (error) {
           res.status(500).json(error);
       }
   })

   app.post("/postcontact", async(req, res) => {
    try {
        const { id } = req.body;
           const allContact = await pool.query("Select * from contactbook where id =$1",[id]);
           if (allContact.rows.length > 0) {
            res.status(200).json(allContact.rows[0]);
         } else {
            const Message = "Contact not found!";
            res.status(404).json({ Message });
         }
     } catch (error) {
        res.status(500).json(error);
     }
   })

app.listen(8080, ()=>{
    console.log("server is running on port 8080");
});