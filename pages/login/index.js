import React , { useState , useContext, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Image  from 'next/image';
import insta from '../../assets/instalogo.png';
import {Button} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg2.jpg'
import bg3 from '../../assets/bg3.jpg'
import { AuthContext } from '../../context/auth';
import { async } from '@firebase/util';
import { Router, useRouter } from 'next/router';
import Link from 'next/link';


function Index() {

  const router = useRouter();

  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const {login , user} = useContext(AuthContext);
  
  const handleClick = async() => {

    try{
      setLoading(true);
      setErr('');
      await login(email, password);
      console.log("Logged In");
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
        <div className="login-container">
            <div className='carbg'>
                <div className='car'>
                  <Carousel
                  showIndicators={false}
                  showArrows={false}
                  showStatus={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={2000}
                  showThumbs={false}
                   >
                    <Image src={bg1}></Image>
                    <Image src={bg2}></Image>
                    <Image src={bg3}></Image>
                  </Carousel>
                </div>
            </div>
                <div>
                <div className="login-card">
                    <Image src={insta} />
                    <TextField id="outlined-basic" margin='dense' size='small' fullWidth label="Email" variant="outlined" value = {email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField id="outlined-basic" margin='dense' size='small' fullWidth type="password" label="Password" variant="outlined" value = {password} onChange={(e) => setPassword(e.target.value)} />

                    {
                      err != '' && 
                      <div style={{color:'red'}} >{err}</div>
                    }

                    <Button variant="outlined" fullWidth style={{marginTop: "1rem"}} component="label" onClick={handleClick} disabled={loading} >log in</Button>
                    <div style={{color: "blue", marginTop:"0.5rem"}}>Forgot Password?</div>
                </div>
                <div className='bottom-card'>
                Don&apos;t have an account? <Link href={"/signup"}><span style={{color: "blue"}}>Sign Up</span></Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Index;