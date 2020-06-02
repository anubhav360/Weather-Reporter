const request=require('request')
const forecast= (lat,lon,callback) => 
{
const url='https://api.darksky.net/forecast/1f85188cea6245b14e950eb7ba57f4cd/'+lat+','+lon+'?'
request({url, json:true},(error,{body})=>{
    if (error)
    callback('The Weather service is unreachable for now!!',undefined)
    else if (body.error)
    callback('The location entered is not valid',undefined)
    else
    {
        f=parseFloat(body.currently.temperature);
        f=f-32;
        f=f*10;
        f=(f/18);
        c=f.toFixed(2);
callback(undefined,{forecast:"The current temperature is " + body.currently.temperature + " Farenheits "+ c+ " Celsius with a "+ body.currently.precipProbability + " % chance of rain" ,location:body.currently.location,cr:body.currently.precipProbability,temp:c})
    }
})
}
module.exports=forecast
