import React from 'react';
import "./app.css"
import "./components.css"
import ProductsInDB from "./components/simplePanel/productsInDB";
import UsersInDB from "./components/simplePanel/usersInDB";
import CategoriesInDB from "./components/simplePanel/categoriesInDB";
import LastProduct from "./components/dataPanel/lastProduct";
import LastUser from "./components/dataPanel/lastUser";
import CategoriesData from "./components/dataPanel/categoriesData";
import AllProducts from "./components/dataPanel/allProducts";



function App() {
    return (
    <div className="App">
        <header className="App-header">
        </header>
        <body>
		    <div id="wrapper">
				<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
					<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
					<div className="sidebar-brand-icon">
					</div>
					</a>
				<hr className="sidebar-divider my-0"/>
				<li className="nav-item active">
					<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
				</li>
				<hr className="sidebar-divider"/>
				<div className="sidebar-heading">Actions</div>
				<li className="nav-item">
					<a className="nav-link collapsed" href="/">
					<i className="fas fa-fw fa-folder"></i>
					<span>Pages</span>
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/">
					<i className="fas fa-fw fa-chart-area"></i>
					<span>Charts</span></a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="/">
					<i className="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
				</li>
				<hr className="sidebar-divider d-none d-md-block"/>
				</ul>
				<div className="logo">logo</div>
			<div id="content-wrapper" className="d-flex flex-column">
				<div id="content">
					<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
						<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
							<i class="fa fa-bars"></i>
						</button>

					</nav>
					
					<div className="container-fluid">
						<div className="d-sm-flex align-items-center justify-content-between mb-4">
							<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
						</div>
						<div className="row">
							<ProductsInDB />
							<UsersInDB />
							<CategoriesInDB />
						</div>
						<div className="row">
							<LastProduct />
							<LastUser />
							<CategoriesData />
							<AllProducts/>
						</div>
					</div>
				</div>
				<footer className="sticky-footer bg-white">
					<div className="container my-auto">
						<div className="copyright text-center my-auto">
							<span>Copyright &copy; Dashboard 2020</span>
						</div>
					</div>
				</footer>
			</div>
		</div>	
	</body>	
    </div>
    
  
  );
}

export default App;
