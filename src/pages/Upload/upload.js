import {ref,set} from 'firebase/database';
import React, { useState } from "react";
import '../Upload/upload.css'
//import { useNavigate } from 'react-router-dom';
import { firebaseDatabase} from '../../firebase-handler/firebasehandler';
function Upload() {

    const[compData,setCompData] =useState({
        name:"",
        post:"",
        ctc:"",
        loc:"",
        sslc:"",
        puc:"",
        cgpa:""
    })

    const handleChange=(event)=>{
        const {name,value}=event.target;
        setCompData({
            ...compData,
            [name]:value
        })
    }
    
    

    const handleUpload=async()=>{
        const recordref=ref(firebaseDatabase,`COMPANY_RECORDS/${compData.name}`);
        await set(recordref,compData);
        alert("Uploaded")
    };

    return(
        <div className ="container">
                <div className="input-container">
            <input className="inputs" placeholder='Company Name' name ='name' value={compData.name} onChange={handleChange}/>
            <input className="inputs" placeholder='Post' name ='post' value={compData.post} onChange={handleChange}/>
            <input className="inputs" placeholder='CTC' name ='ctc' value={compData.ctc} onChange={handleChange}/>
            <input className="inputs" placeholder='Location' name ='loc' value={compData.loc} onChange={handleChange}/>
            <input className="inputs" placeholder='SSLC Percentage' name ='sslc' value={compData.sslc} onChange={handleChange}/>
            <input className="inputs" placeholder='2nd PUC Percentage' name ='puc' value={compData.puc} onChange={handleChange}/>
            <input className="inputs" placeholder='Current CGPA' name ='cgpa' value={compData.cgpa} onChange={handleChange}/>

            <button className="button-upload" onClick={handleUpload}>Upload</button></div>
        </div>
    )
    
}
export default Upload;