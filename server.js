import Express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import User from "./models/User.js";
const app = Express()
dotenv.config()
app.use(Express.json())

const port = process.env.PORT || 8000


// app.get('/:postition',(req, res)=>{
//       const test = []

//       test.push(
//             {
//                   'id': 122344,
//                   'name': 'testStudent',
//                   'dept':'cse',
//                   'semeter': 6
//             }
//       )

//       test.push(
//             {
//                   'id': 1223465,
//                   'name': 'testStudent1',
//                   'dept':'BBA',
//                   'semeter': 7
//             }
//       )

//       test.push(
//             {
//                   'id': 12234545,
//                   'name': 'testStudent2',
//                   'dept':'textile',
//                   'semeter': 7
//             }
//       )

//       test.push(
//             {
//                   'id': 122345,
//                   'name': 'testStudent4',
//                   'dept':'english',
//                   'semeter': 2
//             }
//       )

//       res.status(200).json(test[req.params.postition])
// })

app.post('/registration', async (req, res) =>{
      const newUser = new User(req.body)
      const saveUser = await newUser.save()
      res.status(200).json(saveUser)

})

const connect = async () =>{
      try{
            mongoose.set('strictQuery', false)
            await mongoose.connect(process.env.DB_URI, {
                  useNewUrlParser: true, useUnifiedTopology: true
            })
      }
      catch(error){
            throw error;
      }
}

mongoose.connection.on('disconnected', () =>{
      console.log('MongoDB disconnected')
})

mongoose.connection.on('connected', () =>{
      console.log('MongoDB connected')
})

app.listen(port, ()=>{
      connect()
      console.log(`my application is listing on ${port}`)
})
