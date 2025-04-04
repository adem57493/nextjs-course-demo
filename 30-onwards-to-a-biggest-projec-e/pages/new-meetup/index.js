//our-domain.com/new-meetup
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import  { Fragment} from 'react';
import Head from "next/head";

function NewMeetupPage(){

    const router=useRouter();

  async  function addMeetupHandler(enteredMeetupData){
    
    const response=await fetch('/api/new-meetup',{
        method:'POST',
        body:JSON.stringify(enteredMeetupData),
        headers:{
            'Content-Type':'application/json'
        }
    });//handler fonks tetikleyecek

    const data=await response.json();
    console.log(data);
    router.replace();//form gönderimi başarılı olduğunda kullanıcıyı bu rotaya yönlendirir

    }
 return (<Fragment>
    <Head>
     <title>Add a new meetup</title>
     <meta name="description" content="Add your own meetups and creat amazing networking opportunities."/>
    </Head>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
 </Fragment>
 )
}

export default NewMeetupPage;