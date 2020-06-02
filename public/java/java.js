const f=document.querySelector('form')
const b=document.querySelector('body')
const l=document.querySelector('input')
const m1=document.querySelector('#m1')
const m2=document.querySelector('#m2')
document.getElementById('mig').src="../images/welcome.gif";
document.body.style.backgroundColor="#F9EFFA";
f.addEventListener('submit',(e)=>{
   e.preventDefault()
   m1.textContent='LOADING..'
   fetch("/weather?address="+l.value).then((data) =>{
    data.json().then((d) =>{
    if (d.error)
    {m2.textContent=d.error
    m1.textContent=''
    document.getElementById('mig').src="../images/welcome.gif";
document.body.style.backgroundColor="#F9EFFA";
        }    else
    {m1.textContent=d.location
      m2.textContent= d.forecast
      if (parseInt(d.temp)>=40)
      { 
        document.body.style.backgroundColor="#F7860D";
        document.getElementById('mig').src="../images/vhot.gif";
      }else if(parseInt(d.temp)>=30)
      {
        document.body.style.backgroundColor="#E5C62B";
        document.getElementById('mig').src="../images/hot.gif";
      }
      else if(parseInt(d.temp)<=5)
      {
        document.body.style.backgroundColor="#B7F4DB";
        document.getElementById('mig').src="../images/vcold.gif";
      }
      else if(parseInt(d.temp)<=13)
      {
        document.body.style.backgroundColor="#B7F4DB";
        document.getElementById('mig').src="../images/vcold.gif";
        document.body.style.backgroundColor="#71F0BC";
        document.getElementById('mig').src="../images/cold.gif"
      }
      else
      {
        document.body.style.backgroundColor="#28F113";
        document.getElementById('mig').src="../images/normal.jpg";
      }
      if (parseInt(d.cr)>70)
      {
        document.body.style.backgroundColor="#778193";
        document.getElementById('mig').src="../images/rain.gif";
      }
      else if (parseInt(d.cr)>40)
      {
        document.body.style.backgroundColor="#C7D2E4";
        document.getElementById('mig').src="../images/cloudy.gif";
      }
    }
   
    })
    })

})

