import { Helmet } from "react-helmet";


import Sliders from "../../components/Sliders";




export default function Home() {

 
 
  return (
    <div className="flex w-full flex-col">
      <Helmet className='h-0 invisible w-0'>
        <title>Home</title>
        <meta name="description" content="blog description" />
      </Helmet>
    <div className="flex gap-2 w-full">
   
     
     
     
    </div>
      <Sliders/>
      
    
    </div>
  );
}
