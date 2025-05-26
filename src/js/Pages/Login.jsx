export const Login = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <h1 className="text-center text-white mt-5 mb-5">Wellcome back!</h1>
                    <form>                        
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-white">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" required />
                            <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label text-white">Password</label>
                            <input type="password" className="form-control" id="pass" required />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning w-50 mt-3 rounded-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}