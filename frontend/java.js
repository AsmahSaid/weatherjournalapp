///app.use(express.static(path.join(__dirname, 'frontend')));   
   
   const baseurl='http://api.openweathermap.org/data/2.5/weather?zip=';
    ///to make the tempreture in celize use units=metric
    const api='&appid=f34cd18c24b55dee441c1e9390058cb0&units=metric';
    
    const useriterfaceData=()=>{
    const zipcode=document.getElementById('zip').value
    const feeling=document.getElementById('yourfeeling').value
    const dateInstance=new Date();
    const date=`${dateInstance.getMonth()+1}/${dateInstance.getDate()}/${dateInstance.getFullYear()}`;
    return{zipcode,feeling,date}
    }

   const getTemprature=async (zipcode)=>{
   const  response =await fetch(baseurl+zipcode +api)
   const data=await response.json()
   const temp=data.main.temp////console.log(data.main.temp)
   return temp
    }

    const sendToserver=async (temp,feeling,date)=>{
        await fetch('/saveData',{ ///{msg:'already done'}
        method: 'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify({temp, feeling, date})

    })
    }

    const recievefromServer=async ()=>{
    const res=await fetch('/getData')
    const data=await res.json()
    return data ///{temp, feeling, date}
    }

    const updateUserInterface=({temp, feeling, date})=>{
        document.getElementById('temprature').innerHTML=temp
    document.getElementById('date').innerHTML=date
    document.getElementById('feeling').innerHTML=feeling
    }
    
    const performingAction=async ()=>{
        try{
///get the data from UI user iterface include feeling and zip code with date generate
    const {zipcode,feeling,date} =useriterfaceData()

   ////get the temp using the API
   const temp =await getTemprature(zipcode)
   
    ///send the zipcode, temp, and date to the user backend
     await sendToserver(temp,feeling,date)
    
    ///get the data from the local backed
    const data=await recievefromServer()
    
    ///update the User interface
    updateUserInterface(data)

        }catch(error){
            console.log(error)
        }
    
}
document.getElementById('generatedata').addEventListener('click', performingAction)

