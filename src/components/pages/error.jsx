import { Link } from "react-router"; 
import '../../index.css';
const ErrorPage = () => {
    return (  
         <div className="error-page">
      <div className="emoji">💥</div>
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>
        The page you are looking for does not exist or has been moved. 
        Don't worry, you can return to the dashboard and continue exploring Crypto Dash 🚀.
      </p>
      <Link to="/" id="return-dash">Go to Dashboard 🏠</Link>
    </div>
    );
}
 
export default ErrorPage;