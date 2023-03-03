const express = require('express')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const brandsRoutes = require('./routes/brands')
const PORT = process.env.PORT || 5000

const app = express()

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
  }
})



app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use('/',homeRoutes)
app.use('/model/:id?',(req,res)=>{
        const id= req.params.id
        res.json('model'+id)
})

app.use('/brand',brandsRoutes)

app.use(express.static('public'))

app.use('/*',(req,res)=>{
  res.json({'status':404})
})



app.listen(PORT, () => {
  console.log(`server is runing on port ${PORT}`);
})