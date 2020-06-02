const express=require('express')
const path=require('path')
const hbs=require('hbs')
const geo=require('./utils/geo')
const forecast=require('./utils/forecast')
const app=express()
const port= process.env.PORT || 3000
directory=path.join(__dirname,'../public')
viewspath=path.join(__dirname,'/templates/views')
partialpath=path.join(__dirname,'/templates/partials')
app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialpath)
app.use(express.static(directory))
console.log(directory);
app.get('',(req,res) => {
    res.render('index',{ 
        title:"Weather"
    })
})

app.get('/help',(req,res) => {
    res.render('help',{ 
        title:"Help"
    })
})
app.get('/about',(req,res) => {
    res.render('about',{ 
        title:"About"
    })
})
app.get('/weather',(req,res) => {
    if (!req.query.address)
  { res.send({
      error:'You must give address'
    })
}
else 
{
        geo(req.query.address,(error,body) =>{
            if (error)
            return res.send ({ error:error})
            else
           {   const l=body.location
               forecast(body.latitude,body.longitude,(error,body) =>{
                   if (error )
                     res.send({error:error})
                     else{
                     res.send ({
                         forecast:body.forecast
                         ,location:l,cr:body.cr,temp:body.temp
                     })
                     }
               })
           }
        })
    }
})

app.get('*',(req,res)=>{
    res.send('YOU ARE LOST. ERROR 404\n')
})
app.listen(port, () =>{
    console.log('Server is on port '+port)
})