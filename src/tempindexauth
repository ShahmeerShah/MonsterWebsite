import  React,{useState,useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';


const Authentication = () =>{

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(`values: ${email} and ${password}`);
    }

    const tempRef = useRef(null);

    setTimeout(() =>console.log(tempRef),1000)

    return(
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign in</h1>
                        <p className="text-xs-center">
                            <Link to='/register'>Need to Register</Link>
                        </p>
                        <form onSubmit={handleSubmit}>
                            <fieldset>
                                <fieldset ref={tempRef} className="form-group">
                                    <input 
                                    type="email" 
                                    className="form-control form-control-lg" 
                                    placeholder="Email" 
                                    value={email} 
                                    onChange={(e)=>setEmail(e.target.value)}/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <input 
                                    type="password" 
                                    className="form-control form-control-lg" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}/>
                                </fieldset>
                                <fieldset>
                                    <button className="btn btn-lg btn-primary pull-xs-right" type="submit">Login</button>
                                </fieldset>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication;