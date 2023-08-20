import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,  } from 'react-router-dom'
import Loader from '../components/Loader';
import { ToastContainer, toast } from 'react-toastify'

function ThriftDetails({ oke }) {
  const [loader, setloader] = useState(true)

    const route = useParams();
    const id = route.id 
    console.log(id)
  const [thrift, setThrift] = useState(null);

  useEffect(() => {

    axios.get(`http://localhost:6650/thrifts/thrift/${id}`)
    .then((res)=> {
      setloader(false)
    setThrift(res.data.thrift)
  
    }).catch((err)=>{
        setloader(false)
        toast.error(err.response.data.message)
    })
   
   
  }, []);
  // function oke(params) {
    
  // }
  console.log(thrift)

  // if (!thrift) {
  //   return <div className="text-center">Loading thrift...</div>;
  // }

  return (
    <div className="container mx-auto mt-8">
      {loader? <Loader /> :
      <>
      <h2 className="text-2xl font-bold mb-4">{thrift.thriftName}</h2>
      <p className="mb-2">Thrift Admin: {thrift.thriftAdmin}</p>
      {/* Display other thrift details as needed */}
      </> 
      }
      <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
    </div>
  );
}

export default ThriftDetails;
