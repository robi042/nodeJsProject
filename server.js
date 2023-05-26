import Express  from "express";
import dotenv from "dotenv"
const app = Express()
dotenv.config()
app.use(Express.json())

const port = process.env.PORT || 8000


app.get('/:postition',(req, res)=>{
      const test = []

      test.push(
            {
                  'id': 122344,
                  'name': 'testStudent',
                  'dept':'cse',
                  'semeter': 6
            }
      )

      test.push(
            {
                  'id': 1223465,
                  'name': 'testStudent1',
                  'dept':'BBA',
                  'semeter': 7
            }
      )

      test.push(
            {
                  'id': 12234545,
                  'name': 'testStudent2',
                  'dept':'textile',
                  'semeter': 7
            }
      )

      test.push(
            {
                  'id': 122345,
                  'name': 'testStudent4',
                  'dept':'english',
                  'semeter': 2
            }
      )

      res.status(200).json(test[req.params.postition])
})

app.listen(port, ()=>{
      console.log(`my application is listing on ${port}`)
})
