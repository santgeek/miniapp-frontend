import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
	return (
		<div className="container-fluid px-sm-3">
			<div className="row justify-content-center">
				<div className="col-md-6">
					<h1 className="text-start text-warning mt-5 fs-1 mb-3">MiniApp</h1>
					<h3 className="text-white fst-italic fw-light">Marketing message Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, esse aspernatur nostrum reprehenderit incidunt fuga eum pariatur vitae placeat eaque, excepturi, optio numquam quod?</h3>
					<div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 mt-5 px-md-5">
						<Link to={'/login'} className="btn btn-lg btn-warning rounded-4 px-5 w-100 w-md-auto text-nowrap">
							Start session
						</Link>
						<Link to={'/register'} className="btn btn-lg btn-outline-warning rounded-4 px-5 w-100 w-md-auto text-nowrap">
							Join our community
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;