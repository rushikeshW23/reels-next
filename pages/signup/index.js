import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image  from 'next/image';
import insta from '../../assets/instalogo.png';
import {Button, Link} from '@mui/material';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase';


function Index() {

    
  const router = useRouter();

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [name, setName] = useState('');
  const [file, setFile] = useState(null);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const {signup , user} = useContext(AuthContext);

  const handleClick = async() => {

    try{
      setLoading(true);
      setErr('');
      const user = await signup(email, password);
      console.log("Signed up");
      const storage = getStorage();
      const storageRef = ref(storage, `${user.uid}/Profile`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed', 
        (snapshot) => {
         // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        }, 
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            console.log('File available at', downloadURL);
            let obj = {
              name : name,
              email : email,
              uid : user.user.uid,
              photourl : downloadURL
            }

            await setDoc(doc(db, "users" , user.user.uid) , obj);
            console.log("doc added");

          });
        }
      );
    }catch(err) {
      console.log(err);
      setErr(err.message);
      setTimeout( () => {
        setErr('')
      } , 2000)
    }
    setLoading(false);
    console.log(email, password);
  }

  useEffect(() => {
    if(user){
      router.push('/');
    }
  }, [user])


  return (
    <div>
        <div className="signup-container">
            <div className="signup-card">
                <Image src={insta} />
                <TextField id="outlined-basic" margin='dense' size='small' fullWidth label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField id="outlined-basic" margin='dense' size='small' fullWidth type="password" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                <TextField id="outlined-basic" margin='dense' size='small' fullWidth label="Full Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                <Button variant="contained" fullWidth style={{marginTop: "0.5rem"}} component="label" > <input type="file" accept='image/*' style={{display: 'none'}} onChange={(e) => setFile(e.target.files[0])} /> Upload</Button>
                <Button variant="outlined" fullWidth style={{marginTop: "1rem"}} component="label" onClick={handleClick} disabled={loading} >Sign up</Button>
            </div>
            <div className='bottom-card'>
              Already have an account? <Link href={'/login'} ><span style={{color: "blue"}}>Log In</span></Link> 
            </div>
        </div>
    </div>
  )
}

export default Index;