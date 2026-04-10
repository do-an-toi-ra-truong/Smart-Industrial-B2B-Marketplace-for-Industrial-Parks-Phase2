const HeroSlider = () => {
    return (
        <section id="hero" className="hero section p-0">
                    <div className="swiper hero-swiper">
                    <div className="swiper-wrapper bg-black">
                        <div className="swiper-slide">
                        <div
                            className="hero-bg"
                            style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920")'
                            }}
                        />
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                            <div className="col-lg-7 col-md-9 hero-content">
                                <span className="badge bg-primary rounded-pill mb-3 px-3 py-2">
                                Vietnam's #1 B2B Platform
                                </span>
                                <h1 className="display-3 fw-bold text-white mb-4">
                                Connect with Verified Industrial Suppliers
                                </h1>
                                <p className="lead text-white-50 mb-5 w-75">
                                Access a network of 5,000+ audited factories in VSIP, Amata,
                                and My Phuoc industrial zones.
                                </p>
                                <div className="d-flex gap-3">
                                <a
                                    href="#company-results"
                                    className="btn btn-primary rounded-pill px-5 py-3 fw-bold"
                                >
                                    Find Suppliers
                                </a>
                                <a
                                    href="#"
                                    className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold"
                                >
                                    Join as Supplier
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="swiper-slide">
                        <div
                            className="hero-bg"
                            style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920")'
                            }}
                        />
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                            <div className="col-lg-7 col-md-9 hero-content">
                                <span className="badge bg-warning text-dark rounded-pill mb-3 px-3 py-2">
                                Global Logistics
                                </span>
                                <h1 className="display-3 fw-bold text-white mb-4">
                                Seamless Export from Vietnam to the World
                                </h1>
                                <p className="lead text-white-50 mb-5 w-75">
                                Integrated logistics solutions, customs clearance, and
                                freight forwarding for industrial goods.
                                </p>
                                <a
                                href="#"
                                className="btn btn-warning rounded-pill px-5 py-3 fw-bold text-dark"
                                >
                                Explore Services
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="swiper-button-next text-white" />
                    <div className="swiper-button-prev text-white" />
                    <div className="swiper-pagination" />
                    </div>
                </section>    
    )
}
export default HeroSlider