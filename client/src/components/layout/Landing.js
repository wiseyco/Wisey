import React, { Component } from 'react';
import NavbarLanding from './NavbarLanding';

class Landing extends Component {

    render() {
    
    return (
		<div>
		<NavbarLanding />
        <div>
        {/* // Start Banner Area */}
		<section className= "banner-area relative">
			<div className="overlay overlay-bg"></div>
			<div className="container">
				<div className="row fullscreen align-items-center">
					<div className="col-lg-8">
						<div className="banner-content text-center">
							<h1 className="text-uppercase text-white">La plateforme de la formation professionnelle</h1>
							<br />
							<p className="text-uppercase text-white">Nous vous proposons les meilleures formations numériques pour accompagner votre carrière.</p>
							<form class="form-inline md-form form-sm active-pink-2 mt-2 searchbar-landing">
							<input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search" aria-label="Search" />
							<i class="fa fa-search" aria-hidden="true"></i>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* // End Banner Area */}
	    {/* // Start Publish Area */}
		<section id="blog" className="section-full">
			<div className="container">
				<p className="text-uppercase"><strong>Dernières formations proposées</strong></p>
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="single-publish">
							<img src="https://ict.io/wp-content/uploads/2017/02/section-image-1-1024x682.jpg" className="img-fluid" alt="" />
							<div className="top">
								<div className="mb-15 d-flex">
									<a href="/">3 janvier 2018</a>
									<span className="line">|</span>
									<a href="/">Formation Paris</a>
								</div>
								<h6 className="text-uppercase"><a href="/">Chef de projet multimédia</a></h6>
							</div>
							<p className="mb-30">Le chef de projet multimédia gère et coordonne l’ensemble de la production du produit multimédia autour d’une équipe composée de développeurs, UX designers, webdesigners, webmarketers…</p>
							<a href="/module.html" className="details-btn d-flex justify-content-center align-items-center"><span className="details">Details</span><span className="lnr lnr-arrow-right"></span></a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="single-publish">
							<img src="https://ict.io/wp-content/uploads/2017/02/section-image-1-1024x682.jpg" className="img-fluid" alt="" />
							<div className="top">
								<div className="mb-15 d-flex">
									<a href="/">15 Janvier 2018</a>
									<span className="line">|</span>
									<a href="/">Forma' Top</a>
								</div>
								<h6 className="text-uppercase"><a href="/">Chef de projet marketing</a></h6>
							</div>
							<p className="mb-30">Le chef de projet multimédia gère et coordonne l’ensemble de la production du produit multimédia autour d’une équipe composée de développeurs, UX designers, webdesigners, webmarketers…</p>
							<a href="/" className="details-btn d-flex justify-content-center align-items-center"><span className="details">Details</span><span className="lnr lnr-arrow-right"></span></a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="single-publish">
							<img src="https://ict.io/wp-content/uploads/2017/02/section-image-1-1024x682.jpg" className="img-fluid" alt="" />
							<div className="top">
								<div className="mb-15 d-flex">
									<a href="/">28 Janvier 2018</a>
									<span className="line">|</span>
									<a href="/">Petite Formation</a>
								</div>
								<h6 className="text-uppercase"><a href="/">Développeur Javascript</a></h6>
							</div>
							<p class="mb-30">Le chef de projet multimédia gère et coordonne l’ensemble de la production du produit multimédia autour d’une équipe composée de développeurs, UX designers, webdesigners, webmarketers…</p>
							<a href="/" className="details-btn d-flex justify-content-center align-items-center"><span className="details">Details</span><span className="lnr lnr-arrow-right"></span></a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="single-publish">
							<img src="https://ict.io/wp-content/uploads/2017/02/section-image-1-1024x682.jpg" className="img-fluid" alt="" />
							<div className="top">
								<div className="mb-15 d-flex">
									<a href="/">25 Mars 2018</a>
									<span className="line">|</span>
									<a href="/">Educ' School</a>
								</div>
								<h6 className="text-uppercase"><a href="/">Data Scientist Chief Expert</a></h6>
							</div>
							<p className="mb-30">Le chef de projet multimédia gère et coordonne l’ensemble de la production du produit multimédia autour d’une équipe composée de développeurs, UX designers, webdesigners, webmarketers…</p>
							<a href="/" className="details-btn d-flex justify-content-center align-items-center"><span className="details">Details</span><span className="lnr lnr-arrow-right"></span></a>
						</div>
					</div>
					
			</div>
            </div>
		</section>

		{/* // End Publish Area */}
		{/* // Start shuffle Area */}
		<section id="protfolio" className="section-full">
			<div className="container">

			<p className="text-uppercase"><strong>Nos catégories</strong></p>

			<div id="filter-content" className="row no-gutters mt-70">
				<div className="mix category-1 col-lg-3 col-md-4 col-sm-6 single-filter-content content-1" data-myorder="1">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Developpement</h5>
					</div>
				</div>
				<div className="mix category-1 category-5 category-3 category-5 col-lg-3 col-md-4 col-sm-6 single-filter-content content-2" data-myorder="2">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Business</h5>
					</div>
				</div>
				<div className="mix category-1 category-5 col-lg-3 col-md-4 col-sm-6 single-filter-content content-3" data-myorder="3">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Informatique et Logiciels</h5>
					</div>
				</div>
				<div className="mix category-2 category-3 category-6 col-lg-3 col-md-4 col-sm-6 single-filter-content content-4" data-myorder="4">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Marketing</h5>
					</div>
				</div>
				<div className="mix category-1 category-4 category-5 col-lg-3 col-md-4 col-sm-6 single-filter-content content-5" data-myorder="5">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Numérique</h5>
					</div>
				</div>
				<div className="mix category-1 category-3 category-5 category-6 col-lg-3 col-md-4 col-sm-6 single-filter-content content-6" data-myorder="6">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Multimédia</h5>
					</div>
				</div>
				<div className="mix category-2 category-4 category-3 col-lg-3 col-md-4 col-sm-6 single-filter-content content-7" data-myorder="7">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Developpement Personnel</h5>
					</div>
				</div>
				<div className="mix category-2 category-6 category-5 col-lg-3 col-md-4 col-sm-6 single-filter-content content-8" data-myorder="8">
					<div className="overlay overlay-bg-content d-flex align-items-center justify-content-center flex-column">
						<h5 className="text-white text-uppercase">Formation</h5>
					</div>
				</div>
			</div>
		</div>
		</section>
		{/* // End shuffle Area */}
		{/* // Start Digital Studio */}
		<section className="section-full studio-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="studio-content">
							<p className="text-uppercase text-white">Professionnels</p>
							<h2 className="h1 text-white text-uppercase mb-20">La plateforme privilégiée <br /> des organismes de la formation</h2>
							<p className="text-white mb-30">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

								</p>
							<a href="/" className="primary-btn text-white d-inline-flex align-items-center">Proposer une formation <span class="lnr lnr-arrow-right"></span></a>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* // End Digital Studio */}
        </div>
		</div>
        
    )
    }
}

export default Landing;