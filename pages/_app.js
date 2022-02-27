import '../styles/globals.css'
import './signup.css'
import './login.css'
import '../Components/Feed.css'
import '../components/Profile.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import AuthWrapper from '../context/auth';

function MyApp({ Component, pageProps }) {
  return (
    <AuthWrapper>
        <Component {...pageProps} />
    </AuthWrapper>
    )
}

export default MyApp;
