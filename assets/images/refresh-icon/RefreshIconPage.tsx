"use client";

/**
 * Reference conversion of refresh-icon.html → TSX.
 * Same markup structure; HTML class → className.
 * Not imported by the live app — existing Header/page structure is unchanged.
 *
 * Converted SCSS lives in ./styles/ (import selectively if needed).
 */

export default function RefreshIconPage() {
  return (
    <div className="english template-home stickyWidget">












<div className="page">



<header className="section page-header ">

<div className="rd-navbar-wrap rd-navbar-corporate" style={{ height: "95.5px" }}>
<nav className="rd-navbar rd-navbar-original rd-navbar-static rd-navbar--is-stuck"
                    data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed"
                    data-md-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static"
                    data-lg-device-layout="rd-navbar-fixed" data-xl-device-layout="rd-navbar-static"
                    data-md-stick-up-offset="130px" data-lg-stick-up-offset="100px" data-stick-up="true"
                    data-sm-stick-up="true" data-md-stick-up="true" data-lg-stick-up="true" data-xl-stick-up="true">
<div className="rd-navbar-collapse-toggle toggle-original"
                        data-rd-navbar-toggle=".rd-navbar-collapse">
<span></span>
</div>
<div className="rd-navbar-inner">

<div className="rd-navbar-panel">

<button className="rd-navbar-toggle toggle-original"
                                data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>

<div className="rd-navbar-brand">
<a className="brand-name" href="https://www.flynas.com/en">
<img className="logo-default" src="./refresh-icon_files/flynas-logo-green.svg"
                                        alt="" width="163" height="46" />
<img className="logo-inverse" src="./refresh-icon_files/flynas-logo.svg" alt=""
                                        width="163" height="55" loading="lazy" />
</a>
</div>
</div>
<div className="rd-navbar-aside-center">
</div>
<div className="rd-navbar-aside-right">
<div className="nav-bar-aside-top-menu align-items-center">
<div
                                    className="rd-navbar-aside-right-inner-search text-right d-flex align-items-center">

<div className="rd-navbar-search toggle-original-elements">
<a className="rd-navbar-search-toggle border-0 mt-0 toggle-original"
                                            data-rd-navbar-toggle=".rd-navbar-search" href="https://www.flynas.com/en#">
<i className="fa fa-search"></i>
</a>
<form className="rd-search" action="https://www.flynas.com/search" method="GET">
<div className="form-wrap search-form-wrap d-inline-flex">
<input className="rd-navbar-search-form-input  form-input"
                                                    id="rd-navbar-search-form-input" type="text" name="q"
                                                    autoComplete="off" placeholder="Search..." />
<button className="rd-search-form-submit mdi mdi-magnify"><i
                                                        className="fa-solid fa-magnifying-glass"></i></button>
</div>
</form>
</div>
<div className="d-none d-lg-flex align-items-center">
<div id="login-container"
                                            className="login-btn-new-section d-flex align-items-center">
<div className="logged-out-view d-flex align-items-center">
<a href="https://booking.flynas.com/#/member/login-redirect?culture=en-US"
                                                    className="login-btn-new"><span className="d-flex">Log In</span></a>
<div className="separator d-lg-block d-none"></div>
</div>
<div className="logged-in-view d-none justify-content-between">
<div className="user-details">
<div className="user-name me-2"></div>
</div>
<div className="user-actions">
<a href="https://booking.flynas.com/#/member/login-redirect?logout&amp;redirectUrl=https://booking.flynas.com"
                                                        className="logout-link">Log out</a>
</div>
</div>
<a className="help-support-section d-flex align-items-center"
                                                href="https://help.flynas.com/en">
<i className="mx-2"></i> Help &amp; Support
                                                <div className="separator d-lg-block d-none ms-3"></div>
</a>
</div>
</div>
<div className="d-lg-none d-block px-2">
<div id="login-container-responsive"
                                            className="logged-out-view d-flex align-items-center">
<div className="logged-out-view d-flex align-items-center">
<a href="https://booking.flynas.com/#/member/login-redirect?culture=en-US"
                                                    className="m-login-btn text-left text-white d-block">
<i></i> Log In
                                                </a>
<div className="separator d-lg-block d-none"></div>
</div>
<div className="logged-in-view d-none w-100 justify-content-between">


<a href="javascript:void(0)" id="userIcon"
                                                    className="d-flex text-white m-user-btn position-relative">
<i className=""></i>
<div className="user-name text-white"></div>
</a>


<div id="userMenu" className="card shadow position-absolute end-0 p-3"
                                                    style={{ display: "none" }}>

<div className="text-center">
<div className="user-name"></div>
</div>

<hr className="my-2" />

<a href="https://www.flynas.com/en#"
                                                        className="text-danger text-decoration-none d-block text-center">
                                                        Logout
                                                    </a>

</div>

</div>
</div>
<a href="https://help.flynas.com/en"
                                            className="m-help-support text-left text-white d-block">
<i></i> Help &amp; Support
                                        </a>
</div>
</div>




<div className="language-dropdown">
<button type="button" className="btn btn-top-header dropdown-toggle"
                                        data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside"
                                        data-url="/en/home" id="ddlCountryMenu">
<i className="fa-solid fa-globe me-1"></i>KSA (English)
                                    </button>
<form className="dropdown-menu dropdown-menu-end p-4">
<div className="mb-3">
<label htmlFor="" className="form-text">Selected Country (Language) </label>
<label htmlFor="" className="form-label d-block text-bold">KSA (English)</label>
<hr />
</div>
<div className="mb-3">
<label htmlFor="" className="form-text">All Countries</label>
<div className="mb-3">
<label htmlFor="" className="form-label d-block text-bold">KSA</label>

<a href="https://www.flynas.com/en/home" className="me-2">English </a>
<a href="https://www.flynas.com/ar/home" className="me-2">عربي </a>
</div>
<div className="mb-3">
<label htmlFor="" className="form-label d-block text-bold">EU</label>

<a href="https://www.flynas.com/en-eu/home" className="me-2">English
                                                </a>
</div>
<div className="mb-3">
<label htmlFor="" className="form-label d-block text-bold">RUS</label>

<a href="https://www.flynas.com/ru-ru/home" className="me-2">Russian
                                                </a>
</div>
<div className="mb-3">
<label htmlFor="" className="form-label d-block text-bold">BAH</label>

<a href="https://www.flynas.com/en-bh/home" className="me-2">English
                                                </a>
<a href="https://www.flynas.com/ar-bh/home" className="me-2">عربي </a>
</div>
<div className="mb-3">
<label htmlFor="" className="form-label d-block text-bold">UAE</label>

<a href="https://www.flynas.com/en-ae/home" className="me-2">English
                                                </a>
<a href="https://www.flynas.com/ar-ae/home" className="me-2">عربي </a>
</div>
<div className="mb-3">
<label htmlFor="" className="form-label d-block text-bold">KWT</label>

<a href="https://www.flynas.com/en-kw/home" className="me-2">English
                                                </a>
<a href="https://www.flynas.com/ar-kw/home" className="me-2">عربي </a>
</div>
<div className="mb-3">
<label htmlFor="" className="form-label d-block text-bold">SYR</label>

<a href="https://www.flynas.com/en-sy/home" className="me-2">English
                                                </a>
<a href="https://www.flynas.com/ar-sy/home" className="me-2">عربي </a>
</div>
</div>
</form>
</div>
</div>
<div className="rd-navbar-nav-wrap d-flex justify-content-end toggle-original-elements">

<div className="btn-close-menu mobile-only"><a id="btnCloseMainMenu"><i
                                            className="fa-solid fa-xmark"></i></a></div>
<ul className="rd-navbar-nav">

<li className="rd-nav-item has-megamenu rd-navbar--has-megamenu rd-navbar-submenu">
<a href="https://www.flynas.com/en#">Plan and book</a><span
                                            className="rd-navbar-submenu-toggle"></span>

<div className="rd-navbar-megamenu rd-navbar-open-right">
<div className="rd-navbar-megamenu-tabs-content">
<div className="row g-0 align-items-stretch d-none d-lg-flex">

<div className="col-md-3 mb-4 mb-lg-0 d-flex">
<div className="nav flex-column nav-pills left-tabs"
                                                            role="tablist">

<button className="nav-link  active" data-bs-toggle="pill"
                                                                data-bs-target="#tab-0-0" aria-selected="true"
                                                                role="tab">
<i style={{ backgroundPosition: "-49px -39px" }}></i>
<div>
<h6>Plan your journey</h6>
<p>Explore travel options, fares, and offers</p>
</div>
</button>
<button className="nav-link mt-3 " data-bs-toggle="pill"
                                                                data-bs-target="#tab-0-1" aria-selected="false"
                                                                tabIndex="-1" role="tab">
<i style={{ backgroundPosition: "-49px -6px" }}></i>
<div>
<h6>Book</h6>
<p>Reserve hotels, cars, and extras</p>
</div>
</button>
<button className="nav-link mt-3 " data-bs-toggle="pill"
                                                                data-bs-target="#tab-0-2" aria-selected="false"
                                                                tabIndex="-1" role="tab">
<i style={{ backgroundPosition: "-49px -101.5px" }}></i>
<div>
<h6>Before you fly</h6>
<p>Check travel rules and airport info</p>
</div>
</button>
</div>
</div>

<div className="col-md-9 p-0">
<div className="tab-content">

<div className="tab-pane fade show active" id="tab-0-0"
                                                                role="tabpanel">
<div className="row g-0">

<a href="https://www.flynas.com/en/summer-destinations-2026"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-321px -41px" }}>
</i>
<div>
<h6>Summer Destinations</h6>
<p>Top seasonal offers and places to go</p>
</div>
</a>
<a href="https://www.flynas.com/en/route-map"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-45px -159px" }}>
</i>
<div>
<h6>Our destinations</h6>
<p>Cities and countries we fly to</p>
</div>
</a>
<a href="https://www.flynas.com/en/flights"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-113px -159px" }}>
</i>
<div>
<h6>Flights</h6>
<p>Search and book available routes</p>
</div>
</a>
<a href="https://www.flynas.com/en/booking-flynas/fare-types"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-321px -163.5px" }}>
</i>
<div>
<h6>Fare types</h6>
<p>Compare bundles to suit your needs</p>
</div>
</a>
<a href="https://www.flynas.com/en/lowest-fare-finder"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-222px -100.5px" }}>
</i>
<div>
<h6>Lowest fare finder</h6>
<p>Find the cheapest flights easily</p>
</div>
</a>
<a href="https://www.flynas.com/en/booking-flynas/price-lock"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-83px -100px" }}>
</i>
<div>
<h6>Price lock</h6>
<p>Secure your fare before confirming</p>
</div>
</a>
<a href="https://www.flynas.com/en/payment-methods/"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-117px -196px" }}>
</i>
<div>
<h6>Payment methods</h6>
<p>All supported ways to pay</p>
</div>
</a>
<a href="https://www.flynas.com/en/installment"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-287px -131px" }}>
</i>
<div>
<h6>Installment option</h6>
<p>Book now, pay in parts later</p>
</div>
</a>

</div>
</div>
<div className="tab-pane fade " id="tab-0-1"
                                                                role="tabpanel">
<div className="row g-0">

<a href="https://nasholidays.com/en"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-321px -105px" }}>
</i>
<div>
<h6>nasholidays</h6>
<p>All-in-one packages and getaways</p>
</div>
</a>
<a href="https://www.flynas.com/en/travel-ideas"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-220px -165px" }}>
</i>
<div>
<h6>Travel Ideas</h6>
<p>Inspiration and themed travel tips</p>
</div>
</a>
<a href="https://www.booking.com/partnerships?aid=922212&amp;label=fn-home-banner-navdrop"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-253px -8px" }}>
</i>
<div>
<h6>Hotels</h6>
<p>Book stays with flexible options</p>
</div>
</a>
<a href="https://cars.cartrawler.com/flynas/en/?clientId=565593"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-151px -102px" }}>
</i>
<div>
<h6>Rent a car</h6>
<p>Convenient rentals for your trip</p>
</div>
</a>
<a href="https://www.flynas.com/en/cargo"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-83px -163px" }}>
</i>
<div>
<h6>Cargo</h6>
<p>Send or receive shipments easily</p>
</div>
</a>
<a href="https://www.flynas.com/en/group-flight-bookings"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-185px -133.5px" }}>
</i>
<div>
<h6>Group booking</h6>
<p>Travel packages for multiple passengers
                                                                            </p>
</div>
</a>

</div>
</div>
<div className="tab-pane fade " id="tab-0-2"
                                                                role="tabpanel">
<div className="row g-0">

<a href="https://www.flynas.com/en/help/flight-status"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-185px -39px" }}>
</i>
<div>
<h6>Flight status</h6>
<p>Track your flight in real- time</p>
</div>
</a>
<a href="https://www.flynas.com/en/help/online-checkin"
                                                                        className="col-md-4 info-item">

<i
                                                                            style={{ backgroundPosition: "-117.5px -99.5px" }}>
</i>
<div>
<h6>Check-in information</h6>
<p>Know when and how to check in</p>
</div>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/lounge"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-185px -103.5px" }}>
</i>
<div>
<h6>Our lounges</h6>
<p>Relax at the airport in comfort</p>
</div>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/airports"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-113px -159px" }}>
</i>
<div>
<h6>Airports and terminals</h6>
<p>Gate info and airport services</p>
</div>
</a>
<a href="https://www.flynas.com/en/booking-flynas/flynas-mobile-application"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-289px -7px" }}>
</i>
<div>
<h6>flynas app</h6>
<p>Manage your travel on the go</p>
</div>
</a>
<a href="https://www.flynas.com/en/visa-requirements"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-287px -162px" }}>
</i>
<div>
<h6>Visa Requirements</h6>
<p>Entry rules for your destination</p>
</div>
</a>
<a href="https://www.flynas.com/en/evisa"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-321px -101px" }}>
</i>
<div>
<h6>eVisa</h6>
<p>Apply online for travel visas</p>
</div>
</a>
<a href="https://www.flynas.com/en/stopovervisa"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-321px -70px" }}>
</i>
<div>
<h6>Stopover Visa</h6>
<p>Transit visa details for connections</p>
</div>
</a>
<a href="https://www.flynas.com/en/required-vaccines"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-151px -43px" }}>
</i>
<div>
<h6>Required vaccines</h6>
<p>Health rules for travel readiness</p>
</div>
</a>

</div>
</div>
</div>
</div>

</div>

<div className="accordion accordion-flush d-lg-none"
                                                    id="megaMenuAccordion-0">



<div id="acc-parent-0" className="accordion-collapse collapse show">
<div className="accordion-body p-0">


<div className="accordion accordion-flush ms-2">
<div className="accordion-item">
<h2 className="accordion-header">
<button type="button"
                                                                            className="accordion-button collapsed"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#acc-child-0-187d25be-6e96-4840-92a3-cf4c93a17e2f">
<h6 className="mb-0">Plan your journey</h6>
</button>
</h2>

<div id="acc-child-0-187d25be-6e96-4840-92a3-cf4c93a17e2f"
                                                                        className="accordion-collapse collapse">
<div className="accordion-body p-0">
<a href="https://www.flynas.com/en/summer-destinations-2026"
                                                                                className="info-item ps-3">
<h6>Summer Destinations</h6>
</a>
<a href="https://www.flynas.com/en/route-map"
                                                                                className="info-item ps-3">
<h6>Our destinations</h6>
</a>
<a href="https://www.flynas.com/en/flights"
                                                                                className="info-item ps-3">
<h6>Flights</h6>
</a>
<a href="https://www.flynas.com/en/booking-flynas/fare-types"
                                                                                className="info-item ps-3">
<h6>Fare types</h6>
</a>
<a href="https://www.flynas.com/en/lowest-fare-finder"
                                                                                className="info-item ps-3">
<h6>Lowest fare finder</h6>
</a>
<a href="https://www.flynas.com/en/booking-flynas/price-lock"
                                                                                className="info-item ps-3">
<h6>Price lock</h6>
</a>
<a href="https://www.flynas.com/en/payment-methods/"
                                                                                className="info-item ps-3">
<h6>Payment methods</h6>
</a>
<a href="https://www.flynas.com/en/installment"
                                                                                className="info-item ps-3">
<h6>Installment option</h6>
</a>
</div>
</div>
</div>
</div>

<div className="accordion accordion-flush ms-2">
<div className="accordion-item">
<h2 className="accordion-header">
<button type="button"
                                                                            className="accordion-button collapsed"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#acc-child-0-8eeb3eb8-a43e-498b-9942-819d1af13204">
<h6 className="mb-0">Book</h6>
</button>
</h2>

<div id="acc-child-0-8eeb3eb8-a43e-498b-9942-819d1af13204"
                                                                        className="accordion-collapse collapse">
<div className="accordion-body p-0">
<a href="https://nasholidays.com/en"
                                                                                className="info-item ps-3">
<h6>nasholidays</h6>
</a>
<a href="https://www.flynas.com/en/travel-ideas"
                                                                                className="info-item ps-3">
<h6>Travel Ideas</h6>
</a>
<a href="https://www.booking.com/partnerships?aid=922212&amp;label=fn-home-banner-navdrop"
                                                                                className="info-item ps-3">
<h6>Hotels</h6>
</a>
<a href="https://cars.cartrawler.com/flynas/en/?clientId=565593"
                                                                                className="info-item ps-3">
<h6>Rent a car</h6>
</a>
<a href="https://www.flynas.com/en/cargo"
                                                                                className="info-item ps-3">
<h6>Cargo</h6>
</a>
<a href="https://www.flynas.com/en/group-flight-bookings"
                                                                                className="info-item ps-3">
<h6>Group booking</h6>
</a>
</div>
</div>
</div>
</div>

<div className="accordion accordion-flush ms-2">
<div className="accordion-item">
<h2 className="accordion-header">
<button type="button"
                                                                            className="accordion-button collapsed"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#acc-child-0-2da9648c-bcbd-4ee6-a208-4a7497ef9d33">
<h6 className="mb-0">Before you fly</h6>
</button>
</h2>

<div id="acc-child-0-2da9648c-bcbd-4ee6-a208-4a7497ef9d33"
                                                                        className="accordion-collapse collapse">
<div className="accordion-body p-0">
<a href="https://www.flynas.com/en/help/flight-status"
                                                                                className="info-item ps-3">
<h6>Flight status</h6>
</a>
<a href="https://www.flynas.com/en/help/online-checkin"
                                                                                className="info-item ps-3">
<h6>Check-in information</h6>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/lounge"
                                                                                className="info-item ps-3">
<h6>Our lounges</h6>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/airports"
                                                                                className="info-item ps-3">
<h6>Airports and terminals</h6>
</a>
<a href="https://www.flynas.com/en/booking-flynas/flynas-mobile-application"
                                                                                className="info-item ps-3">
<h6>flynas app</h6>
</a>
<a href="https://www.flynas.com/en/visa-requirements"
                                                                                className="info-item ps-3">
<h6>Visa Requirements</h6>
</a>
<a href="https://www.flynas.com/en/evisa"
                                                                                className="info-item ps-3">
<h6>eVisa</h6>
</a>
<a href="https://www.flynas.com/en/stopovervisa"
                                                                                className="info-item ps-3">
<h6>Stopover Visa</h6>
</a>
<a href="https://www.flynas.com/en/required-vaccines"
                                                                                className="info-item ps-3">
<h6>Required vaccines</h6>
</a>
</div>
</div>
</div>
</div>

</div>
</div>

</div>

</div>
</div>
</li>
<li className="rd-nav-item has-megamenu rd-navbar--has-megamenu rd-navbar-submenu">
<a href="https://www.flynas.com/en#">Prepare your trip</a><span
                                            className="rd-navbar-submenu-toggle"></span>

<div className="rd-navbar-megamenu rd-navbar-open-right">
<div className="rd-navbar-megamenu-tabs-content">
<div className="row g-0 align-items-stretch d-none d-lg-flex">

<div className="col-md-3 mb-4 mb-lg-0 d-flex">
<div className="nav flex-column nav-pills left-tabs"
                                                            role="tablist">

<button className="nav-link  active" data-bs-toggle="pill"
                                                                data-bs-target="#tab-1-0" aria-selected="true"
                                                                role="tab">
<i style={{ backgroundPosition: "-49px -101.5px" }}></i>
<div>
<h6>Baggage</h6>
<p>Carry-on, checked, and special items</p>
</div>
</button>
<button className="nav-link mt-3 " data-bs-toggle="pill"
                                                                data-bs-target="#tab-1-1" aria-selected="false"
                                                                tabIndex="-1" role="tab">
<i style={{ backgroundPosition: "-15px -10px" }}></i>
<div>
<h6>Manage Your Booking</h6>
<p>Edit your trip, add extras, or check in</p>
</div>
</button>
<button className="nav-link mt-3 " data-bs-toggle="pill"
                                                                data-bs-target="#tab-1-2" aria-selected="false"
                                                                tabIndex="-1" role="tab">
<i style={{ backgroundPosition: "-287px -39px" }}></i>
<div>
<h6>Enhance your trip</h6>
<p>Upgrade and personalize your journey</p>
</div>
</button>
</div>
</div>

<div className="col-md-9 p-0">
<div className="tab-content">

<div className="tab-pane fade show active" id="tab-1-0"
                                                                role="tabpanel">
<div className="row g-0">

<a href="https://www.flynas.com/en/plan-my-trip/cabin-baggage"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-321px -162.5px" }}>
</i>
<div>
<h6>Cabin baggage</h6>
<p>Size and weight limits for carry-ons</p>
</div>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/baggage"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-49px -101.5px" }}>
</i>
<div>
<h6>Checked baggage</h6>
<p>Rules for your main luggage</p>
</div>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/sport-equipment"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-249px -66px" }}>
</i>
<div>
<h6>Sports equipment</h6>
<p>Bringing golf bags, skis, and more</p>
</div>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/special-baggage"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-83px -163px" }}>
</i>
<div>
<h6>Special baggage</h6>
<p>Traveling with fragile or oversized items
                                                                            </p>
</div>
</a>
<a href="https://static.flynas.com/media/7897/passenger_rights_protection_regulations_19-july-2023-3.pdf"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-222px -100.5px" }}>
</i>
<div>
<h6>Compensation Policy</h6>
<p>If your bag is lost or damaged</p>
</div>
</a>
<a href="https://www.flynas.com/en/transportation-live-animals"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-151px -133px" }}>
</i>
<div>
<h6>Transportation of Live Animals</h6>
<p>Flying with pets or service animals</p>
</div>
</a>

</div>
</div>
<div className="tab-pane fade " id="tab-1-1"
                                                                role="tabpanel">
<div className="row g-0">

<a href="https://booking.flynas.com/#/manage/search?lang=en-US"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-15px -194px" }}>
</i>
<div>
<h6>Change your booking</h6>
<p>Modify flight or passenger details</p>
</div>
</a>
<a href="https://booking.flynas.com/#/manage/search?lang=en-US"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-287px -101px" }}>
</i>
<div>
<h6>Add services</h6>
<p>Include extras like meals or seats</p>
</div>
</a>
<a href="https://booking.flynas.com/#/wci/search?lang=en-US"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-289px -7px" }}>
</i>
<div>
<h6>Online check-in</h6>
<p>Check in before arriving at the airport
                                                                            </p>
</div>
</a>
<a href="https://www.flynas.com/en/fly-ahead-feature"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-219px -10px" }}>
</i>
<div>
<h6>Fly Ahead</h6>
<p>Switch to an earlier flight if available
                                                                            </p>
</div>
</a>

</div>
</div>
<div className="tab-pane fade " id="tab-1-2"
                                                                role="tabpanel">
<div className="row g-0">

<a href="https://www.flynas.com/en/plan-my-trip/seat-selection"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-219px -193.5px" }}>
</i>
<div>
<h6>Choose your seat</h6>
<p>Select your preferred seat location</p>
</div>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/pre-order-meals"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-181px -66px" }}>
</i>
<div>
<h6>Order your meal</h6>
<p>Pre-select your in-flight food</p>
</div>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/baggage"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-185px -8px" }}>
</i>
<div>
<h6>Add Baggage</h6>
<p>Buy extra luggage allowance</p>
</div>
</a>
<a href="https://www.flynas.com/en/priority-service"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-253px -101px" }}>
</i>
<div>
<h6>Priority Service</h6>
<p>Faster check-in and early boarding</p>
</div>
</a>
<a href="https://www.flynas.com/en/upgrade"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-83px -70px" }}>
</i>
<div>
<h6>Upgrade to premium</h6>
<p>Extra comfort, flexibility &amp; perks
                                                                            </p>
</div>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/lounge"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-49px 138.5px" }}>
</i>
<div>
<h6>Buy lounge access</h6>
<p>Relax before your flight in style</p>
</div>
</a>
<a href="https://www.flynas.com/en/visa-requirements"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-151px -69px" }}>
</i>
<div>
<h6>Order your visa</h6>
<p>Visa support for your destination</p>
</div>
</a>
<a href="https://www.flynas.com/en/insurance"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-15px -162.5px" }}>
</i>
<div>
<h6>Travel insurance</h6>
<p>Protection for unexpected events</p>
</div>
</a>
<a href="https://static.flynas.com/media/dgvlbass/july_2026_sky_menu.pdf"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-117px -134.5px" }}>
</i>
<div>
<h6>Sky menu</h6>
<p>View our onboard dining options</p>
</div>
</a>
<a href="https://static.flynas.com/media/gdpfxw12/skymall.pdf"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-83px -193px" }}>
</i>
<div>
<h6>flynas mall</h6>
<p>Explore our in-flight catalog</p>
</div>
</a>

</div>
</div>
</div>
</div>

</div>

<div className="accordion accordion-flush d-lg-none"
                                                    id="megaMenuAccordion-1">



<div id="acc-parent-1" className="accordion-collapse collapse show">
<div className="accordion-body p-0">


<div className="accordion accordion-flush ms-2">
<div className="accordion-item">
<h2 className="accordion-header">
<button type="button"
                                                                            className="accordion-button collapsed"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#acc-child-1-ae14b3c3-466a-486a-b29d-7a33be398d71">
<h6 className="mb-0">Baggage</h6>
</button>
</h2>

<div id="acc-child-1-ae14b3c3-466a-486a-b29d-7a33be398d71"
                                                                        className="accordion-collapse collapse">
<div className="accordion-body p-0">
<a href="https://www.flynas.com/en/plan-my-trip/cabin-baggage"
                                                                                className="info-item ps-3">
<h6>Cabin baggage</h6>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/baggage"
                                                                                className="info-item ps-3">
<h6>Checked baggage</h6>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/sport-equipment"
                                                                                className="info-item ps-3">
<h6>Sports equipment</h6>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/special-baggage"
                                                                                className="info-item ps-3">
<h6>Special baggage</h6>
</a>
<a href="https://static.flynas.com/media/7897/passenger_rights_protection_regulations_19-july-2023-3.pdf"
                                                                                className="info-item ps-3">
<h6>Compensation Policy</h6>
</a>
<a href="https://www.flynas.com/en/transportation-live-animals"
                                                                                className="info-item ps-3">
<h6>Transportation of Live Animals</h6>
</a>
</div>
</div>
</div>
</div>

<div className="accordion accordion-flush ms-2">
<div className="accordion-item">
<h2 className="accordion-header">
<button type="button"
                                                                            className="accordion-button collapsed"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#acc-child-1-c21abfe1-0027-46cf-9446-450876eedf35">
<h6 className="mb-0">Manage Your Booking
                                                                            </h6>
</button>
</h2>

<div id="acc-child-1-c21abfe1-0027-46cf-9446-450876eedf35"
                                                                        className="accordion-collapse collapse">
<div className="accordion-body p-0">
<a href="https://booking.flynas.com/#/manage/search?lang=en-US"
                                                                                className="info-item ps-3">
<h6>Change your booking</h6>
</a>
<a href="https://booking.flynas.com/#/manage/search?lang=en-US"
                                                                                className="info-item ps-3">
<h6>Add services</h6>
</a>
<a href="https://booking.flynas.com/#/wci/search?lang=en-US"
                                                                                className="info-item ps-3">
<h6>Online check-in</h6>
</a>
<a href="https://www.flynas.com/en/fly-ahead-feature"
                                                                                className="info-item ps-3">
<h6>Fly Ahead</h6>
</a>
</div>
</div>
</div>
</div>

<div className="accordion accordion-flush ms-2">
<div className="accordion-item">
<h2 className="accordion-header">
<button type="button"
                                                                            className="accordion-button collapsed"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#acc-child-1-ed750896-4957-4b79-9d81-41ef6474078a">
<h6 className="mb-0">Enhance your trip</h6>
</button>
</h2>

<div id="acc-child-1-ed750896-4957-4b79-9d81-41ef6474078a"
                                                                        className="accordion-collapse collapse">
<div className="accordion-body p-0">
<a href="https://www.flynas.com/en/plan-my-trip/seat-selection"
                                                                                className="info-item ps-3">
<h6>Choose your seat</h6>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/pre-order-meals"
                                                                                className="info-item ps-3">
<h6>Order your meal</h6>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/baggage"
                                                                                className="info-item ps-3">
<h6>Add Baggage</h6>
</a>
<a href="https://www.flynas.com/en/priority-service"
                                                                                className="info-item ps-3">
<h6>Priority Service</h6>
</a>
<a href="https://www.flynas.com/en/upgrade"
                                                                                className="info-item ps-3">
<h6>Upgrade to premium</h6>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/lounge"
                                                                                className="info-item ps-3">
<h6>Buy lounge access</h6>
</a>
<a href="https://www.flynas.com/en/visa-requirements"
                                                                                className="info-item ps-3">
<h6>Order your visa</h6>
</a>
<a href="https://www.flynas.com/en/insurance"
                                                                                className="info-item ps-3">
<h6>Travel insurance</h6>
</a>
<a href="https://static.flynas.com/media/dgvlbass/july_2026_sky_menu.pdf"
                                                                                className="info-item ps-3">
<h6>Sky menu</h6>
</a>
<a href="https://static.flynas.com/media/gdpfxw12/skymall.pdf"
                                                                                className="info-item ps-3">
<h6>flynas mall</h6>
</a>
</div>
</div>
</div>
</div>

</div>
</div>

</div>

</div>
</div>
</li>
<li className="rd-nav-item has-megamenu rd-navbar--has-megamenu rd-navbar-submenu">
<a href="https://www.flynas.com/en#">Information</a><span
                                            className="rd-navbar-submenu-toggle"></span>

<div className="rd-navbar-megamenu rd-navbar-open-right">
<div className="rd-navbar-megamenu-tabs-content">
<div className="row g-0 align-items-stretch d-none d-lg-flex">

<div className="col-md-3 mb-4 mb-lg-0 d-flex">
<div className="nav flex-column nav-pills left-tabs"
                                                            role="tablist">

<button className="nav-link  active" data-bs-toggle="pill"
                                                                data-bs-target="#tab-2-0" aria-selected="true"
                                                                role="tab">
<i style={{ backgroundPosition: "-16px -68.5px" }}></i>
<div>
<h6>About flynas</h6>
<p>Company, careers, and contact info</p>
</div>
</button>
<button className="nav-link mt-3 " data-bs-toggle="pill"
                                                                data-bs-target="#tab-2-1" aria-selected="false"
                                                                tabIndex="-1" role="tab">
<i style={{ backgroundPosition: "-49px -71px" }}></i>
<div>
<h6>Special Care</h6>
<p>Support for families and special needs</p>
</div>
</button>
<button className="nav-link mt-3 " data-bs-toggle="pill"
                                                                data-bs-target="#tab-2-2" aria-selected="false"
                                                                tabIndex="-1" role="tab">
<i style={{ backgroundPosition: "-83px -70px" }}></i>
<div>
<h6>Why flynas</h6>
<p>Premium services and partnerships</p>
</div>
</button>
</div>
</div>

<div className="col-md-9 p-0">
<div className="tab-content">

<div className="tab-pane fade show active" id="tab-2-0"
                                                                role="tabpanel">
<div className="row g-0">

<a href="https://www.flynas.com/en/about-us"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-151px -8px" }}>
</i>
<div>
<h6>About us</h6>
<p>Get to know flynas and our values</p>
</div>
</a>
<a href="https://www.flynas.com/en/about-us/fleet"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-287px -195px" }}>
</i>
<div>
<h6>Our fleet</h6>
<p>Explore the aircraft we operate</p>
</div>
</a>
<a href="https://www.flynas.com/en/sustainability"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-321px -195px" }}>
</i>
<div>
<h6>Sustainability</h6>
<p>Our commitment to the environment</p>
</div>
</a>
<a href="https://www.flynas.com/en/contact-us/office-locations"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-45px -159px" }}>
</i>
<div>
<h6>Our offices</h6>
<p>Find our locations and contact details
                                                                            </p>
</div>
</a>
<a href="https://career.flynas.com/"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-321px -163.5px" }}>
</i>
<div>
<h6>Jobs</h6>
<p>Join the flynas team</p>
</div>
</a>
<a href="https://www.flynas.com/en/media-center/news-updates"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-49px -224.5px" }}>
</i>
<div>
<h6>Latest news</h6>
<p>Catch up on announcements and updates</p>
</div>
</a>
<a href="https://www.flynas.com/en/contact-us/faqs"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-321px -8px" }}>
</i>
<div>
<h6>FAQs</h6>
<p>Answers to your most common questions</p>
</div>
</a>
<a href="https://www.flynas.com/en/help"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-86px -223.5px" }}>
</i>
<div>
<h6>Help and support</h6>
<p>Need assistance? We're here to help</p>
</div>
</a>
<a href="https://ir.flynas.com/"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-287px -69px" }}>
</i>
<div>
<h6>Investor Relations</h6>
<p>Explore the latest reports and financial
                                                                                updates</p>
</div>
</a>
<a href="https://www.flynas.com/en/alhilal-partnership"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-15px -135px" }}>
</i>
<div>
<h6>Al Hilal Partnership</h6>
<p>Exclusive deals for fans and members</p>
</div>
</a>
<a href="https://www.flynas.com/en/dpo-request-form"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-115px -223px" }}>
</i>
<div>
<h6>Data Rights requests</h6>
<p>Allow any customer to submit Personal
                                                                                Data Rights requests</p>
</div>
</a>

</div>
</div>
<div className="tab-pane fade " id="tab-2-1"
                                                                role="tabpanel">
<div className="row g-0">

<a href="https://www.flynas.com/en/plan-my-trip/special-services"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-117px -39px" }}>
</i>
<div>
<h6>Special assistance</h6>
<p>Help for travelers with limited mobility
                                                                            </p>
</div>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/special-services/#/traveling_with_children"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-113px -66px" }}>
</i>
<div>
<h6>Traveling with children</h6>
<p>Guidance for parents flying with kids</p>
</div>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/special-services/#/expectant_mothers"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-253px -34px" }}>
</i>
<div>
<h6>Expectant mothers</h6>
<p>Travel advice and policies during
                                                                                pregnancy</p>
</div>
</a>

</div>
</div>
<div className="tab-pane fade " id="tab-2-2"
                                                                role="tabpanel">
<div className="row g-0">

<a href="https://www.flynas.com/en/premium-class"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-185px -165px" }}>
</i>
<div>
<h6>Premium Class</h6>
<p>Enjoy more space and exclusive services
                                                                            </p>
</div>
</a>
<a href="https://www.flynas.com/en/partnerships"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-15px -228px" }}>
</i>
<div>
<h6>Partnerships</h6>
<p>Explore our business and travel partners
                                                                            </p>
</div>
</a>
<a href="https://www.flynas.com/en/flight-schedule"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-219px -39px" }}>
</i>
<div>
<h6>Timetable</h6>
<p>Check flight schedules and frequencies
                                                                            </p>
</div>
</a>
<a href="https://www.flynas.com/en/Flying-with-children"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-153px -161.5px" }}>
</i>
<div>
<h6>Flying with children</h6>
<p>Comfort and support for young travelers
                                                                            </p>
</div>
</a>
<a href="https://www.flynas.com/en/blog"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-287px -39px" }}>
</i>
<div>
<h6>Blog</h6>
<p>Travel guides, tips, offers, and
                                                                                destination inspiration from flynas.</p>
</div>
</a>

</div>
</div>
</div>
</div>

</div>

<div className="accordion accordion-flush d-lg-none"
                                                    id="megaMenuAccordion-2">



<div id="acc-parent-2" className="accordion-collapse collapse show">
<div className="accordion-body p-0">


<div className="accordion accordion-flush ms-2">
<div className="accordion-item">
<h2 className="accordion-header">
<button type="button"
                                                                            className="accordion-button collapsed"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#acc-child-2-20de684c-eb79-4066-a751-b71795e6bca0">
<h6 className="mb-0">About flynas</h6>
</button>
</h2>

<div id="acc-child-2-20de684c-eb79-4066-a751-b71795e6bca0"
                                                                        className="accordion-collapse collapse">
<div className="accordion-body p-0">
<a href="https://www.flynas.com/en/about-us"
                                                                                className="info-item ps-3">
<h6>About us</h6>
</a>
<a href="https://www.flynas.com/en/about-us/fleet"
                                                                                className="info-item ps-3">
<h6>Our fleet</h6>
</a>
<a href="https://www.flynas.com/en/sustainability"
                                                                                className="info-item ps-3">
<h6>Sustainability</h6>
</a>
<a href="https://www.flynas.com/en/contact-us/office-locations"
                                                                                className="info-item ps-3">
<h6>Our offices</h6>
</a>
<a href="https://career.flynas.com/"
                                                                                className="info-item ps-3">
<h6>Jobs</h6>
</a>
<a href="https://www.flynas.com/en/media-center/news-updates"
                                                                                className="info-item ps-3">
<h6>Latest news</h6>
</a>
<a href="https://www.flynas.com/en/contact-us/faqs"
                                                                                className="info-item ps-3">
<h6>FAQs</h6>
</a>
<a href="https://www.flynas.com/en/help"
                                                                                className="info-item ps-3">
<h6>Help and support</h6>
</a>
<a href="https://ir.flynas.com/"
                                                                                className="info-item ps-3">
<h6>Investor Relations</h6>
</a>
<a href="https://www.flynas.com/en/alhilal-partnership"
                                                                                className="info-item ps-3">
<h6>Al Hilal Partnership</h6>
</a>
<a href="https://www.flynas.com/en/dpo-request-form"
                                                                                className="info-item ps-3">
<h6>Data Rights requests</h6>
</a>
</div>
</div>
</div>
</div>

<div className="accordion accordion-flush ms-2">
<div className="accordion-item">
<h2 className="accordion-header">
<button type="button"
                                                                            className="accordion-button collapsed"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#acc-child-2-19206524-76d9-4651-a3a9-4d785131bb4f">
<h6 className="mb-0">Special Care</h6>
</button>
</h2>

<div id="acc-child-2-19206524-76d9-4651-a3a9-4d785131bb4f"
                                                                        className="accordion-collapse collapse">
<div className="accordion-body p-0">
<a href="https://www.flynas.com/en/plan-my-trip/special-services"
                                                                                className="info-item ps-3">
<h6>Special assistance</h6>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/special-services/#/traveling_with_children"
                                                                                className="info-item ps-3">
<h6>Traveling with children</h6>
</a>
<a href="https://www.flynas.com/en/plan-my-trip/special-services/#/expectant_mothers"
                                                                                className="info-item ps-3">
<h6>Expectant mothers</h6>
</a>
</div>
</div>
</div>
</div>

<div className="accordion accordion-flush ms-2">
<div className="accordion-item">
<h2 className="accordion-header">
<button type="button"
                                                                            className="accordion-button collapsed"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#acc-child-2-c74a9846-e696-40a8-9c04-4bd53f102210">
<h6 className="mb-0">Why flynas</h6>
</button>
</h2>

<div id="acc-child-2-c74a9846-e696-40a8-9c04-4bd53f102210"
                                                                        className="accordion-collapse collapse">
<div className="accordion-body p-0">
<a href="https://www.flynas.com/en/premium-class"
                                                                                className="info-item ps-3">
<h6>Premium Class</h6>
</a>
<a href="https://www.flynas.com/en/partnerships"
                                                                                className="info-item ps-3">
<h6>Partnerships</h6>
</a>
<a href="https://www.flynas.com/en/flight-schedule"
                                                                                className="info-item ps-3">
<h6>Timetable</h6>
</a>
<a href="https://www.flynas.com/en/Flying-with-children"
                                                                                className="info-item ps-3">
<h6>Flying with children</h6>
</a>
<a href="https://www.flynas.com/en/blog"
                                                                                className="info-item ps-3">
<h6>Blog</h6>
</a>
</div>
</div>
</div>
</div>

</div>
</div>

</div>

</div>
</div>
</li>
<li className="rd-nav-item has-megamenu rd-navbar--has-megamenu rd-navbar-submenu">
<a href="https://www.flynas.com/en#">nasmiles</a><span
                                            className="rd-navbar-submenu-toggle"></span>

<div className="rd-navbar-megamenu rd-navbar-open-right">
<div className="rd-navbar-megamenu-tabs-content">
<div className="row g-0 align-items-stretch d-none d-lg-flex">

<div className="col-md-3 mb-4 mb-lg-0 d-flex">
<div className="nav flex-column nav-pills left-tabs"
                                                            role="tablist">

<button className="nav-link  active" data-bs-toggle="pill"
                                                                data-bs-target="#tab-3-0" aria-selected="true"
                                                                role="tab">
<i style={{ backgroundPosition: "-83px -39px" }}></i>
<div>
<h6>Earn nasmiles</h6>
<p>Earn nasmiles</p>
</div>
</button>
<button className="nav-link mt-3 " data-bs-toggle="pill"
                                                                data-bs-target="#tab-3-1" aria-selected="false"
                                                                tabIndex="-1" role="tab">
<i style={{ backgroundPosition: "-15px -102.5px" }}></i>
<div>
<h6>Spend nasmiles</h6>
<p>Use your miles for rewards and perks</p>
</div>
</button>
<button className="nav-link mt-3 " data-bs-toggle="pill"
                                                                data-bs-target="#tab-3-2" aria-selected="false"
                                                                tabIndex="-1" role="tab">
<i style={{ backgroundPosition: "-15px -38px" }}></i>
<div>
<h6>Programme</h6>
<p>Explore membership levels and benefits</p>
</div>
</button>
</div>
</div>

<div className="col-md-9 p-0">
<div className="tab-content">

<div className="tab-pane fade show active" id="tab-3-0"
                                                                role="tabpanel">
<div className="row g-0">

<a href="https://www.flynas.com/en/earn-nasmiles"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-219px -71px" }}>
</i>
<div>
<h6>All about earning</h6>
<p>Ways to earn nasmiles on flights and more
                                                                            </p>
</div>
</a>
<a href="https://www.flynas.com/en/claim-missing-miles/"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-83px -134px" }}>
</i>
<div>
<h6>Claim missing nasmiles</h6>
<p>Submit a request for uncredited miles</p>
</div>
</a>
<a href="https://www.flynas.com/en/family-miles-account/"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-289px -6px" }}>
</i>
<div>
<h6>Family Miles Account</h6>
<p>Connect your family to earn and spend
                                                                                miles as one.</p>
</div>
</a>

</div>
</div>
<div className="tab-pane fade " id="tab-3-1"
                                                                role="tabpanel">
<div className="row g-0">

<a href="https://www.flynas.com/en/redeem-smiles"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-287px -39px" }}>
</i>
<div>
<h6>Redeem</h6>
<p>Use nasmiles to book flights and extras
                                                                            </p>
</div>
</a>
<a href="https://www.flynas.com/en/lounge-access"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-49px -134.5px" }}>
</i>
<div>
<h6>Our lounges</h6>
<p>Relax in lounges using your miles</p>
</div>
</a>
<a href="https://www.flynas.com/en/nasmiles-on-app"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-289px -6px" }}>
</i>
<div>
<h6>nasmiles on mobile app</h6>
<p>Track and redeem miles from your phone
                                                                            </p>
</div>
</a>

</div>
</div>
<div className="tab-pane fade " id="tab-3-2"
                                                                role="tabpanel">
<div className="row g-0">

<a href="https://www.flynas.com/en/about-nasmiles"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-151px -8px" }}>
</i>
<div>
<h6>About nasmiles</h6>
<p>Learn how the loyalty program works</p>
</div>
</a>
<a href="https://www.flynas.com/en/tiers-and-benefits"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-321px -132px" }}>
</i>
<div>
<h6>Tiers and benefits</h6>
<p>Discover perks based on your tier</p>
</div>
</a>
<a href="https://booking.flynas.com/#/member/register"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-117px -9.5px" }}>
</i>
<div>
<h6>Join nasmiles</h6>
<p>Create an account to start earning</p>
</div>
</a>
<a href="https://www.flynas.com/en/arb-nasmiles-credit-card"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-117px -196px" }}>
</i>
<div>
<h6>flynas credit card</h6>
<p>Earn miles faster with our card</p>
</div>
</a>
<a href="https://www.flynas.com/en/nasmiles-partners"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-15px -228px" }}>
</i>
<div>
<h6>Partners</h6>
<p>Earn and spend with our partners</p>
</div>
</a>
<a href="https://www.flynas.com/en/nasmiles-faqs"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-321px -8px" }}>
</i>
<div>
<h6>FAQs</h6>
<p>Answers to your common questions</p>
</div>
</a>
<a href="https://www.flynas.com/en/nasmiles-terms-and-conditions"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-220px -130.5px" }}>
</i>
<div>
<h6>Terms and conditions</h6>
<p>Rules of the loyalty program</p>
</div>
</a>
<a href="https://www.flynas.com/en/nasmiles-contact-us"
                                                                        className="col-md-4 info-item">

<i style={{ backgroundPosition: "-83px -134px" }}>
</i>
<div>
<h6>Contact us</h6>
<p>Need help? Reach out anytime</p>
</div>
</a>

</div>
</div>
</div>
</div>

</div>

<div className="accordion accordion-flush d-lg-none"
                                                    id="megaMenuAccordion-3">



<div id="acc-parent-3" className="accordion-collapse collapse show">
<div className="accordion-body p-0">


<div className="accordion accordion-flush ms-2">
<div className="accordion-item">
<h2 className="accordion-header">
<button type="button"
                                                                            className="accordion-button collapsed"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#acc-child-3-79760ba3-1a4a-46b3-aa5c-a9d811c451e2">
<h6 className="mb-0">Earn nasmiles</h6>
</button>
</h2>

<div id="acc-child-3-79760ba3-1a4a-46b3-aa5c-a9d811c451e2"
                                                                        className="accordion-collapse collapse">
<div className="accordion-body p-0">
<a href="https://www.flynas.com/en/earn-nasmiles"
                                                                                className="info-item ps-3">
<h6>All about earning</h6>
</a>
<a href="https://www.flynas.com/en/claim-missing-miles/"
                                                                                className="info-item ps-3">
<h6>Claim missing nasmiles</h6>
</a>
<a href="https://www.flynas.com/en/family-miles-account/"
                                                                                className="info-item ps-3">
<h6>Family Miles Account</h6>
</a>
</div>
</div>
</div>
</div>

<div className="accordion accordion-flush ms-2">
<div className="accordion-item">
<h2 className="accordion-header">
<button type="button"
                                                                            className="accordion-button collapsed"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#acc-child-3-8e08ead0-ca59-4013-bbab-702d48f1e88c">
<h6 className="mb-0">Spend nasmiles</h6>
</button>
</h2>

<div id="acc-child-3-8e08ead0-ca59-4013-bbab-702d48f1e88c"
                                                                        className="accordion-collapse collapse">
<div className="accordion-body p-0">
<a href="https://www.flynas.com/en/redeem-smiles"
                                                                                className="info-item ps-3">
<h6>Redeem</h6>
</a>
<a href="https://www.flynas.com/en/lounge-access"
                                                                                className="info-item ps-3">
<h6>Our lounges</h6>
</a>
<a href="https://www.flynas.com/en/nasmiles-on-app"
                                                                                className="info-item ps-3">
<h6>nasmiles on mobile app</h6>
</a>
</div>
</div>
</div>
</div>

<div className="accordion accordion-flush ms-2">
<div className="accordion-item">
<h2 className="accordion-header">
<button type="button"
                                                                            className="accordion-button collapsed"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target="#acc-child-3-a5ce65c0-0b7c-477d-a276-ea5c13d4b321">
<h6 className="mb-0">Programme</h6>
</button>
</h2>

<div id="acc-child-3-a5ce65c0-0b7c-477d-a276-ea5c13d4b321"
                                                                        className="accordion-collapse collapse">
<div className="accordion-body p-0">
<a href="https://www.flynas.com/en/about-nasmiles"
                                                                                className="info-item ps-3">
<h6>About nasmiles</h6>
</a>
<a href="https://www.flynas.com/en/tiers-and-benefits"
                                                                                className="info-item ps-3">
<h6>Tiers and benefits</h6>
</a>
<a href="https://booking.flynas.com/#/member/register"
                                                                                className="info-item ps-3">
<h6>Join nasmiles</h6>
</a>
<a href="https://www.flynas.com/en/arb-nasmiles-credit-card"
                                                                                className="info-item ps-3">
<h6>flynas credit card</h6>
</a>
<a href="https://www.flynas.com/en/nasmiles-partners"
                                                                                className="info-item ps-3">
<h6>Partners</h6>
</a>
<a href="https://www.flynas.com/en/nasmiles-faqs"
                                                                                className="info-item ps-3">
<h6>FAQs</h6>
</a>
<a href="https://www.flynas.com/en/nasmiles-terms-and-conditions"
                                                                                className="info-item ps-3">
<h6>Terms and conditions</h6>
</a>
<a href="https://www.flynas.com/en/nasmiles-contact-us"
                                                                                className="info-item ps-3">
<h6>Contact us</h6>
</a>
</div>
</div>
</div>
</div>

</div>
</div>

</div>

</div>
</div>
</li>
<li className="rd-nav-item has-megamenu">
<a href="https://nasholidays.com/en">nasHolidays</a>

</li>

</ul>

</div>
</div>
</div>
</nav>
</div>
</header>








<main className="page-content">






<section className="section">

<div dir="ltr"
                    className="swiper swiper-form-wrap swiper-slider-height swiper-align-left swiper-align-left-custom context-dark bg-gray-darker home-wriper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden"
                    data-loop="true" data-autoplay="5500" data-simulate-touch="false" data-slide-effect="fade">
<div className="swiper-wrapper" id="swiper-wrapper-bad1bc7ea10f91b7b" aria-live="off"
                        style={{ transitionDuration: "0ms", transitionDelay: "0ms" }}>








<div className="swiper-slide swiper-slide-next"
                            data-slide-bg="/media/hmhgvktm/vienna_hero-banner-en-plain-1920x780-05.png" role="group"
                            aria-label="4 / 4" data-swiper-slide-index="3"
                            style={{ width: "1065px", opacity: 1, transform: "translate3d(0px, 0px, 0px)", transitionDuration: "0ms" }}>
<img alt="" src="./refresh-icon_files/vienna_hero-banner-en-plain-1920x780-05.png"
                                loading="lazy" />


<div className="swiper-slide-caption">
<div className="container container-bigger swiper-main-section">
<div
                                        className="row row-fix justify-content-sm-center justify-content-md-start text-center">
<div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div className="container text-left">
<h2>Book your Summer Trip to Vienna</h2>
<h4>Starting from 649 SAR</h4>
<p><a href="https://www.flynas.com/en/flights-to-vienna"
                                                        className="book-now-btn">Book Now!</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="swiper-slide"
                            data-slide-bg="/media/jsbnzrvr/owned-media_hero-banner-en-plain-1920x780.png" role="group"
                            aria-label="1 / 4" data-swiper-slide-index="0"
                            style={{ width: "1065px", opacity: 1, transform: "translate3d(-1065px, 0px, 0px)", transitionDuration: "0ms" }}>
<img alt="" src="./refresh-icon_files/owned-media_hero-banner-en-plain-1920x780.png" />

<div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
<div className="swiper-slide-caption">
<div className="container container-bigger swiper-main-section">
<div
                                        className="row row-fix justify-content-sm-center justify-content-md-start text-center">
<div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div className="container text-left">
<h2>New Direct Flights&nbsp;</h2>
<h4>Between Madina &amp; Brussels from 5 October</h4>
<p><a href="https://www.flynas.com/en/flights-from-medina-to-brussels"
                                                        className="book-now-btn">Book Now!</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="swiper-slide swiper-slide-prev"
                            data-slide-bg="/media/hpspltu2/owned-media-2_hero-banner-en-plain-1920x780.png" role="group"
                            aria-label="2 / 4" data-swiper-slide-index="1"
                            style={{ width: "1065px", opacity: 1, transform: "translate3d(-2130px, 0px, 0px)", transitionDuration: "0ms" }}>
<img alt="" src="./refresh-icon_files/owned-media-2_hero-banner-en-plain-1920x780.png"
                                loading="lazy" />


<div className="swiper-slide-caption">
<div className="container container-bigger swiper-main-section">
<div
                                        className="row row-fix justify-content-sm-center justify-content-md-start text-center">
<div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div className="container text-left">
<h2>New Direct Flights to Kochi</h2>
<h4>3 Weekly flights starting from 1 September</h4>
<p><a href="https://www.flynas.com/en/flights-to-kochi-1"
                                                        className="book-now-btn">Book Now!</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
                            data-slide-bg="/media/za4nhb4g/owned-media-2_hero-banner-en-plain-1920x780.png" role="group"
                            aria-label="3 / 4" data-swiper-slide-index="2"
                            style={{ width: "1065px", opacity: 1, transform: "translate3d(-3195px, 0px, 0px)", transitionDuration: "0ms" }}>
<img alt="" src="./refresh-icon_files/owned-media-2_hero-banner-en-plain-1920x780(1).png"
                                loading="lazy" />


<div className="swiper-slide-caption">
<div className="container container-bigger swiper-main-section">
<div
                                        className="row row-fix justify-content-sm-center justify-content-md-start text-center">
<div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12">
<div className="container text-left">
<h2>New Direct Flights to Bisha</h2>
<h4>Daily Flights starting from 6 August</h4>
<p><a href="https://www.flynas.com/en/flights-to-bisha"
                                                        className="book-now-btn">Book Now!</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide"
                        aria-controls="swiper-wrapper-bad1bc7ea10f91b7b"></div>
<div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide"
                        aria-controls="swiper-wrapper-bad1bc7ea10f91b7b"></div>

<span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
</div>







<div className="home-flight-search-wrap">
<div className="container">
<div className="tab-container shadow-lg rounded-3 search-widget">
<div className="widget-menu">
<ul className="nav nav-tabs" id="main-tab" role="tablist">
<li className="nav-item" role="presentation">
<a className="nav-link active" href="https://www.flynas.com/en#"
                                            data-bs-toggle="tab" data-bs-target="#flights" aria-selected="true"
                                            role="tab">
<i className="widget-flight-icon"></i>
<span>Flights</span>
</a>
</li>
<li className="nav-item flight-hotel-li" role="presentation">
<a className="nav-link flight-hotel-tab" href="https://www.flynas.com/en#"
                                            data-bs-toggle="tab" data-bs-target="#flightsHotel" aria-selected="false"
                                            tabIndex="-1" role="tab">
<i className="widget-flight-hotelicon"></i>
<span className="d-lg-inline-block  d-none">Flights+Hotel/Packages</span>
<span className="d-lg-none d-inline-block"><span>Flights +
                                                    Hotel</span></span>
</a>
</li>
<li className="nav-item" role="presentation">
<a className="nav-link" href="https://www.flynas.com/en#" data-bs-toggle="tab"
                                            data-bs-target="#manage" aria-selected="false" tabIndex="-1" role="tab">
<i className="widget-manage-icon"></i>
<span>Manage</span>
</a>
</li>
<li className="nav-item" role="presentation">
<a className="nav-link" href="https://www.flynas.com/en#" data-bs-toggle="tab"
                                            data-bs-target="#checkin" aria-selected="false" tabIndex="-1" role="tab">
<i className="widget-checkin-icon"></i>
<span>Check-in</span>
</a>
</li>
<li className="nav-item" role="presentation">
<a className="nav-link" href="https://www.flynas.com/en#" data-bs-toggle="tab"
                                            data-bs-target="#flightStatus" aria-selected="false" tabIndex="-1"
                                            role="tab">
<i className="widget-status-icon"></i>
<span>Flight Status</span>
</a>
</li>
<li className="nav-item" id="rentCarListItem" style={{ display: "none" }}
                                        role="presentation">
<a target="_blank" className="nav-link"
                                            href="https://cars.cartrawler.com/flynas/en/?clientId=565593"
                                            aria-selected="false" tabIndex="-1" role="tab">
<img src="./refresh-icon_files/41d876f274d39b69f491f169d71ad876_rentcar.png"
                                                alt="" />
<span>Rent a car</span>
</a>
</li>


</ul>
</div>
<div className="tab-content">
<div className="tab-pane active" id="flights" role="tabpanel" style={{ display: "none" }}>
<form id="frmFlightSearch" className="needs-validation" novalidate="">
<div className="p-3 mobile-style">
<div className="row-trip-type my-1 mx-3 pt-3">
<div className="row">
<div className="col-md-6 round-trip-panel">
<div className="form-check form-check-inline">
<input className="form-check-input radio-custom"
                                                                type="radio" name="trip-type" id="tripOneway"
                                                                defaultValue="oneway" /><span
                                                                className="radio-custom-dummy"></span>
<label className="form-check-label" htmlFor="tripOneway">One
                                                                Way</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input radio-custom"
                                                                type="radio" name="trip-type" id="tripTwoWay"
                                                                defaultValue="round" defaultChecked="checked" /><span
                                                                className="radio-custom-dummy"></span>
<label className="form-check-label" htmlFor="tripTwoWay">Round
                                                                trip</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input radio-custom"
                                                                type="radio" name="trip-type" id="tripMultiCity"
                                                                defaultValue="multi" /><span
                                                                className="radio-custom-dummy"></span>
<label className="form-check-label"
                                                                htmlFor="tripMultiCity">Multi-City</label>
</div>
</div>
<div className="col-md-2 p-2">
<div className="divstopovercheckbox" style={{ display: "none" }}>
<div
                                                                className="form-check form-check-inline cb-stop-over-booking">
<input
                                                                    className="form-check-input ms-3 me-2 checkbox-custom"
                                                                    type="checkbox" id="cbStopOver" /><span
                                                                    className="checkbox-custom-dummy"></span>
<label className="form-check-label"
                                                                    htmlFor="cbStopOver">Stop
                                                                    Over Booking</label>
</div>
</div>
</div>
</div>

</div>
<div className="row my-1 mx-3 mb-0" id="onewayContent">
<div className="col-md-12 mobile-only flight-number single-trip"
                                                    style={{ display: "none" }}>Flight 1</div>
<div className="col-md-6 pe-0 routes-section">
<div className="row position-relative station-panel">
<div className="col-md-6 col-xs-12 origin-dropdown">
<div className="input-station">
<select
                                                                    className="form-select station-dropdown select2-hidden-accessible"
                                                                    id="fromStation" aria-label="From" required=""
                                                                    data-placeholder="Origin" tabIndex="-1"
                                                                    aria-hidden="true">
<option defaultValue="AHB">Abha</option>
<option defaultValue="ABJ">Abidjan</option>
<option defaultValue="AUH">Abu Dhabi</option>
<option defaultValue="ADD">Addis Ababa</option>
<option defaultValue="ABT">Al Baha</option>
<option defaultValue="AJF">Al Jouf</option>
<option defaultValue="DBB">Al-alamien</option>
<option defaultValue="ALP">Aleppo</option>
<option defaultValue="HBE">Alexandria</option>
<option defaultValue="ALY">Alexandria</option>
<option defaultValue="ALG">Algiers</option>
<option defaultValue="ULH">AlUla</option>
<option defaultValue="ADJ">Amman</option>
<option defaultValue="AMM">Amman</option>
<option defaultValue="JO1">Amman, All Airports</option>
<option defaultValue="ESB">Ankara</option>
<option defaultValue="HTY">Antakya</option>
<option defaultValue="AYT">Antalya</option>
<option defaultValue="ASM">Asmara</option>
<option defaultValue="ATZ">Assiut</option>
<option defaultValue="ASW">Aswan</option>
<option defaultValue="ATH">Athens</option>
<option defaultValue="BGW">Baghdad</option>
<option defaultValue="BAH">Bahrain</option>
<option defaultValue="GYD">Baku</option>
<option defaultValue="BKO">Bamako</option>
<option defaultValue="CMB">Bandaranaike</option>
<option defaultValue="BCN">Barcelona</option>
<option defaultValue="BUS">Batumi</option>
<option defaultValue="BER">Berlin</option>
<option defaultValue="BHX">Birmingham</option>
<option defaultValue="BHH">Bisha</option>
<option defaultValue="BSZ">Bishkek</option>
<option defaultValue="BJV">Bodrum</option>
<option defaultValue="BRU">Brussels</option>
<option defaultValue="BUD">Budapest</option>
<option defaultValue="CAI">Cairo</option>
<option defaultValue="SPX">Cairo-Sphinx</option>
<option defaultValue="EG1">Cairo, All Airports</option>
<option defaultValue="CPT">Cape Town</option>
<option defaultValue="CMN">Casablanca</option>
<option defaultValue="DAM">Damascus</option>
<option defaultValue="DMM">Dammam</option>
<option defaultValue="DAR">Dar Es Salaam</option>
<option defaultValue="DEL">Delhi</option>
<option defaultValue="DAC">Dhaka</option>
<option defaultValue="JIB">Djibouti – Ambouli</option>
<option defaultValue="DOH">Doha</option>
<option defaultValue="DXB">Dubai</option>
<option defaultValue="AE1">Dubai, All Airports</option>
<option defaultValue="EBB">Entebbe</option>
<option defaultValue="FRA">Frankfurt</option>
<option defaultValue="GVA">Geneva</option>
<option defaultValue="GIZ">Gizan</option>
<option defaultValue="HAS">Hail</option>
<option defaultValue="HRG">Hurghada</option>
<option defaultValue="HYD">Hyderabad</option>
<option defaultValue="ISB">Islamabad</option>
<option defaultValue="IST">Istanbul</option>
<option defaultValue="SAW">Istanbul Sabiha</option>
<option defaultValue="TR1">Istanbul, All Airports</option>
<option defaultValue="ADB">Izmir</option>
<option defaultValue="CGK">Jakarta</option>
<option defaultValue="JED">Jeddah</option>
<option defaultValue="JNB">Johannesburg</option>
<option defaultValue="KHI">Karachi</option>
<option defaultValue="KGL">Kigali International Airport
                                                                    </option>
<option defaultValue="COK">Kochi</option>
<option defaultValue="CCJ">Kozhikode</option>
<option defaultValue="KRK">Krakow</option>
<option defaultValue="KUL">Kuala Lumpur</option>
<option defaultValue="KWI">Kuwait</option>
<option defaultValue="LHE">Lahore</option>
<option defaultValue="LHR">London</option>
<option defaultValue="LKO">Lucknow</option>
<option defaultValue="LUN">Lusaka Airport</option>
<option defaultValue="LXR">Luxor</option>
<option defaultValue="MED">Madinah</option>
<option defaultValue="MLE">Male</option>
<option defaultValue="MAN">Manchester</option>
<option defaultValue="MNL">Manila</option>
<option defaultValue="MRS">Marseille</option>
<option defaultValue="COV">Mersin</option>
<option defaultValue="MXP">Milan</option>
<option defaultValue="MBA">Moi</option>
<option defaultValue="VKO">Moscow</option>
<option defaultValue="MUX">Multan</option>
<option defaultValue="BOM">Mumbai</option>
<option defaultValue="MUC">Munich</option>
<option defaultValue="NBO">Nairobi</option>
<option defaultValue="NJF">Najaf</option>
<option defaultValue="EAM">Najran</option>
<option defaultValue="NMA">Namangan</option>
<option defaultValue="NDJ">North Djamena</option>
<option defaultValue="OSS">Osh</option>
<option defaultValue="CDG">Paris</option>
<option defaultValue="ORY">Paris</option>
<option defaultValue="PEW">Peshawar</option>
<option defaultValue="TGD">Podgorica</option>
<option defaultValue="PRG">Prague</option>
<option defaultValue="PRN">Pristina</option>
<option defaultValue="AQI">Qaisumah</option>
<option defaultValue="ELQ">Qassim</option>
<option defaultValue="RBA">Rabat</option>
<option defaultValue="RUH">Riyadh</option>
<option defaultValue="RZV">Rize</option>
<option defaultValue="FCO">Rome</option>
<option defaultValue="SLL">Salalah</option>
<option defaultValue="SZG">Salzburg</option>
<option defaultValue="SJJ">Sarajevo</option>
<option defaultValue="ICN">Seoul</option>
<option defaultValue="SEZ">Seychelles</option>
<option defaultValue="SHJ">Sharjah</option>
<option defaultValue="SSH">Sharm El-Sheikh</option>
<option defaultValue="SIN">Singapore</option>
<option defaultValue="HMB">Sohag</option>
<option defaultValue="STN">Stansted</option>
<option defaultValue="BKK">Suvarnabhumi</option>
<option defaultValue="TUU">Tabuk</option>
<option defaultValue="TIF">Taif</option>
<option defaultValue="TAS">Tashkent</option>
<option defaultValue="TBS">Tbilisi</option>
<option defaultValue="TIA">Tirana</option>
<option defaultValue="TZX">Trabzon</option>
<option defaultValue="TUN">Tunis</option>
<option defaultValue="TUI">Turaif</option>
<option defaultValue="VIE">Vienna</option>
<option defaultValue="YNB">Yanbu</option>
<option defaultValue="" defaultSelected=""></option>
</select><span
                                                                    className="select2 select2-container select2-container--default"
                                                                    dir="ltr" style={{ width: "253.25px" }}><span
                                                                        className="selection"><span
                                                                            className="select2-selection select2-selection--single"
                                                                            role="combobox" aria-haspopup="true"
                                                                            aria-expanded="false" tabIndex="0"
                                                                            aria-labelledby="select2-fromStation-container"><span
                                                                                className="select2-selection__rendered"
                                                                                id="select2-fromStation-container"
                                                                                title="Abha"><span
                                                                                    className="select2-selection__placeholder">Origin</span></span><span
                                                                                className="select2-selection__arrow"
                                                                                role="presentation"><b
                                                                                    role="presentation"></b></span></span></span><span
                                                                        className="dropdown-wrapper"
                                                                        aria-hidden="true"></span></span>
</div>
</div>
<div className="swap-button" id="btnSwapOrigin">
<i className="fa fa-exchange" aria-hidden="true"></i>
</div>
<div
                                                            className="col-md-6 col-xs-12 destination-dropdown position-relative">
<div className="input-station">
<select
                                                                    className="form-select station-dropdown select2-hidden-accessible"
                                                                    id="toStation" aria-label="To" required=""
                                                                    data-placeholder="Destination" tabIndex="-1"
                                                                    aria-hidden="true">
<option defaultValue="" defaultSelected=""></option>
</select><span
                                                                    className="select2 select2-container select2-container--default"
                                                                    dir="ltr" style={{ width: "242.75px" }}><span
                                                                        className="selection"><span
                                                                            className="select2-selection select2-selection--single"
                                                                            role="combobox" aria-haspopup="true"
                                                                            aria-expanded="false" tabIndex="0"
                                                                            aria-labelledby="select2-toStation-container"><span
                                                                                className="select2-selection__rendered"
                                                                                id="select2-toStation-container"><span
                                                                                    className="select2-selection__placeholder">Destination</span></span><span
                                                                                className="select2-selection__arrow"
                                                                                role="presentation"><b
                                                                                    role="presentation"></b></span></span></span><span
                                                                        className="dropdown-wrapper"
                                                                        aria-hidden="true"></span></span>
<div className="invalid-tooltip">
                                                                    Please select destination.
                                                                </div>
</div>
</div>
</div>
</div>
<div className="col-md-4 date-range-cell position-relative ps-0">
<div className="date-range-picker">
<div>
<input type="text"
                                                                className="form-control search-date-range"
                                                                id="flightSearchDateRange" name="flightSearchDateRange"
                                                                inputmode="none" required="" />
</div>
</div>
<div className="row mt-0 border-bottom mx-1 mobile-date-range-cell">
<div
                                                            className="col-md-6 depart-date-select position-relative ps-0 pe-0">
<label htmlFor="">Depart</label><br />
<span className="selected-date" id="lblDepartureDate"
                                                                name="DepartureDate">07 Aug 26</span>
<div className="invalid-tooltip">
                                                                Please select depart date.
                                                            </div>
</div>
<div className="col-md-6 return-date-select ps-0 pe-0">
<label id="lblArrivalLabel"
                                                                htmlFor="lblArrivalDate">Return</label><br />
<span className="selected-date" id="lblArrivalDate"
                                                                name="ArrivalDate"></span>
<div className="invalid-tooltip">
                                                                Please select return date.
                                                            </div>
</div>
</div>
</div>
<div className="col-md-2 btn-flight-search-pre-submit text-center">
<button className="btn btn-primary m-0 rounded-2"
                                                        id="btnFlightSearchPreSubmit" type="submit">Search</button>
</div>
</div>
<div className="row mt-0" id="pnlMultiCityContent" style={{ display: "none" }}>
<div className="col-md-12">
<div className="row">
<div className="col-md-12" id="pnlMultiCityRows">
<div className="row my-1 mx-3 multi-city-row m-t-10"
                                                                id="multiCityRow1">
<div className="col-md-12 mobile-only flight-number">
                                                                    Flight
                                                                    2</div>
<div className="col-md-6 pe-0 routes-section">
<div
                                                                        className="row position-relative station-panel">
<div
                                                                            className="col-md-6 col-xs-12 origin-dropdown position-relative">
<div className="input-station">
<select
                                                                                    className="form-select station-dropdown"
                                                                                    name="fromStation"
                                                                                    aria-label="Origin"
                                                                                    data-placeholder="Origin">
</select>
<div className="invalid-tooltip">
                                                                                    Please select origin.
                                                                                </div>
</div>
</div>
<div className="swap-button">
<i className="fa fa-exchange"
                                                                                aria-hidden="true"></i>
</div>
<div
                                                                            className="col-md-6 col-xs-12 destination-dropdown position-relative">
<div className="input-station">
<select
                                                                                    className="form-select station-dropdown"
                                                                                    name="toStation"
                                                                                    aria-label="Destination"
                                                                                    data-placeholder="Destination">
</select>
<div className="invalid-tooltip">
                                                                                    Please select destination.
                                                                                </div>
</div>
</div>
</div>
</div>
<div className="col-md-4 date-range-cell ps-0">
<div className="date-range-picker">
<div>
<input type="text"
                                                                                className="form-control search-date-range"
                                                                                name="flightSearchDateRange" />
</div>
</div>
<div className="row mt-0 border-bottom mx-1">
<div
                                                                            className="col-md-12 depart-date-select position-relative ps-0 pe-0">
<div>
<label htmlFor="">Depart</label><br />
<span className="selected-date"
                                                                                    name="DepartureDate"></span>
<div className="invalid-tooltip">

                                                                                    Please select depart date.
                                                                                </div>
</div>
</div>
</div>
</div>
</div>
<div className="row my-1 mx-3 multi-city-invisible-row m-t-10"
                                                                style={{ display: "none" }}>
<div className="col-md-12 mobile-only flight-number">
                                                                    Flight
                                                                </div>
<div className="col-md-6 pe-0 routes-section">
<div
                                                                        className="row position-relative station-panel">
<div
                                                                            className="col-md-6 col-xs-12 origin-dropdown position-relative">
<div className="input-station">
<select
                                                                                    className="form-select station-dropdown"
                                                                                    name="fromStation" aria-label="From"
                                                                                    data-placeholder="Origin">
</select>
<div className="invalid-tooltip">
                                                                                    Please select origin.
                                                                                </div>
</div>
</div>
<div className="swap-button">
<i className="fa fa-exchange"
                                                                                aria-hidden="true"></i>
</div>
<div
                                                                            className="col-md-6 col-xs-12 destination-dropdown position-relative">
<div className="input-station">
<select
                                                                                    className="form-select station-dropdown"
                                                                                    name="toStation" aria-label="To"
                                                                                    data-placeholder="Destination">
</select>
<div className="invalid-tooltip">
                                                                                    Please select destination.
                                                                                </div>
</div>
</div>
</div>
</div>
<div className="col-md-4 date-range-cell ps-0">
<div className="date-range-picker">
<div>
<input type="text"
                                                                                className="form-control search-date-range"
                                                                                name="flightSearchDateRange" />
</div>
</div>
<div className="row mt-0 border-bottom mx-1">
<div
                                                                            className="col-md-12 depart-date-select position-relative ps-0 pe-0">
<div>
<label htmlFor="">Depart</label><br />
<span className="selected-date"
                                                                                    name="DepartureDate"></span>
<div className="invalid-tooltip">

                                                                                    Please select depart date.
                                                                                </div>
</div>
</div>
</div>
</div>
<div className="col-md-2 my-auto">
<button type="button"
                                                                        className="btn btn-sm btn-primary btn-open"
                                                                        name="button-remove-city-row">Remove</button>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="row mx-3 m-t-10" style={{ display: "none" }}>
<div className="col-md-3 btn-add-multi-city-row">
<button type="button" className="btn btn-primary btn-open"
                                                        id="btnAddMultiCityRow">Add More</button>
</div>
</div>

<div className="row mx-3 mt-4 mb-4" id="pnlAdditionSearchDetails"
                                                style={{ display: "none" }}>
<div className="col-md-3 passengers-select-btn">
<label htmlFor="lblPassengerDetails">Passengers</label>
<div className="d-block passengers-dropdown">
<button
                                                            className="btn btn-sm dropdown-toggle span-passenger-details border-bottom"
                                                            type="button" data-bs-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false" id="btnPassengerDetails"><i
                                                                className="fa fa-user d-inline-block item-icon"></i>1</button>
<div className="dropdown-menu p-4">
<div className="mb-3">
<div className="row">
<div className="col-md-6 d-flex align-items-center">
<i
                                                                            className="fa-solid fa-user d-inline-block item-icon"></i>
<label htmlFor="" className="d-inline-block">
                                                                            Adult
                                                                            <span
                                                                                className="d-block dropdown-item-description">12+
                                                                                years</span>
</label>
</div>
<div className="col-md-6 text-right">
<button className="btn btn-sm btn-increment"
                                                                            data-passengertype="adult" data-operator="-"
                                                                            type="button" disabled="disabled"><i
                                                                                className="fa-solid fa-minus fa-bold"></i></button>
<span className="span-passenger-count"
                                                                            id="lblAdultCount"
                                                                            data-passengertype="adult">1</span>
<button className="btn btn-sm btn-increment"
                                                                            data-passengertype="adult" data-operator="+"
                                                                            type="button"><i
                                                                                className="fa-solid fa-plus"></i></button>
</div>
</div>
</div>
<div className="mb-3">
<div className="row">
<div className="col-md-6 d-flex align-items-center">
<i
                                                                            className="fa-solid fa-child d-inline-block item-icon"></i>
<label htmlFor="" className="d-inline-block">
                                                                            Child
                                                                            <span
                                                                                className="d-block dropdown-item-description">2-11
                                                                                years</span>
</label>
</div>
<div className="col-md-6 text-right">
<button className="btn btn-sm btn-increment"
                                                                            disabled="" data-passengertype="child"
                                                                            data-operator="-" type="button"><i
                                                                                className="fa-solid fa-minus fa-bold"></i></button>
<span className="span-passenger-count"
                                                                            id="lblChildCount"
                                                                            data-passengertype="child">0</span>
<button className="btn btn-sm btn-increment"
                                                                            data-passengertype="child" data-operator="+"
                                                                            type="button"><i
                                                                                className="fa-solid fa-plus"></i></button>
</div>
</div>
</div>
<div className="mb-3">
<div className="row">
<div className="col-md-6 d-flex align-items-center">
<i
                                                                            className="fa-solid fa-baby d-inline-block item-icon"></i>
<label htmlFor="" className="d-inline-block">
                                                                            Infant
                                                                            <span
                                                                                className="d-block dropdown-item-description">
                                                                                Under 2 years</span>
</label>
</div>
<div className="col-md-6 text-right">
<button className="btn btn-sm btn-increment"
                                                                            disabled="" data-passengertype="infant"
                                                                            data-operator="-" type="button"><i
                                                                                className="fa-solid fa-minus fa-bold"></i></button>
<span className="span-passenger-count"
                                                                            id="lblInfantCount"
                                                                            data-passengertype="infant">0</span>
<button className="btn btn-sm btn-increment"
                                                                            data-passengertype="infant"
                                                                            data-operator="+" type="button"><i
                                                                                className="fa-solid fa-plus"></i></button>
</div>
</div>
</div>
<div className="mb-3 group-booking-text"
                                                                style={{ display: "none" }}>
<div className="row">
<div className="col-md-12">
<b>Sorry</b>, you can book online for a maximum
                                                                        of 9 passengers. For group booking email us at
                                                                        <a
                                                                            href="mailto: groupsdesk@flynas.com">groupsdesk@flynas.com</a>
                                                                        for assistance.
                                                                    </div>
</div>

</div>
<div className="text-center">
<button className="btn btn-sm btn-primary rounded-2"
                                                                    type="button"
                                                                    id="btnPassengerDetailsDone">Done</button>
</div>

</div>
</div>
</div>
<div className="col currency-dropdown">
<div className="">
<label htmlFor="ddlCurrency"> Currency</label>
<div className="custom-select">
<select className="form-select border-bottom"
                                                                id="ddlCurrency">

<option defaultValue="SAR" defaultSelected="">Saudi Riyal</option>
<option defaultValue="EUR">Euro</option>
<option defaultValue="USD">US Dollars</option>
<option defaultValue="AED">UAE Dirham</option>
<option defaultValue="KWD">Kuwait Dinar</option>
<option defaultValue="BHD">Bahraini Dinar</option>
<option defaultValue="JOD">Jordanian Dinar</option>
<option defaultValue="RUB">Russian Ruble</option>
</select>
<div className="select-selected">Saudi Riyal</div>
<div className="select-items select-hide">
<div className="select-default">Saudi Riyal</div>
<div>Euro</div>
<div>US Dollars</div>
<div>UAE Dirham</div>
<div>Kuwait Dinar</div>
<div>Bahraini Dinar</div>
<div>Jordanian Dinar</div>
<div>Russian Ruble</div>
</div>
</div>
</div>
</div>
<div className="col input-promocode">
<div className="d-inline-block">
<label htmlFor="txtPromoCode">Promo Code</label>
<input type="text" className="form-control border-bottom"
                                                            defaultValue="" id="txtPromoCode" maxLength="8" />
</div>

</div>
<div className="col-auto d-flex flight-search-links">
<div className="d-inline align-self-end">
<a href="https://www.flynas.com/en/book-flight"
                                                            className="me-3"><i
                                                                className="fa-solid fa-route pe-1"></i>Where we fly?</a>
<a href="https://www.flynas.com/en/lowest-fare-finder"><i
                                                                className="fa-solid fa-calendar-days pe-1"></i>Find the
                                                            best
                                                            fares</a>
</div>
</div>

<div className="col-auto btn-flight-search-submit px-0 text-center">
<button className="btn btn-primary m-0 rounded-2 d-inline-block"
                                                        id="btnFlightSearchSubmit" type="submit">Search</button>
</div>
</div>

<div className="row mx-3 mt-1 pb-3" id="pnlStopOverBooking"
                                                style={{ display: "none" }}>
<div className="col-md-10">
<div className="row  p-3 stop-over-panel">
<div className="col-md-7">
<div>
<label htmlFor="">Where would you like to add a stop in
                                                                    Saudi during your journey?</label>
</div>
<div className="mt-1 mob-bot-pad">
<div className="form-check form-check-inline">
<input className="form-check-input radio-custom"
                                                                        type="radio" name="StopOverTripDirection"
                                                                        id="rdStopOverDeparture" defaultChecked=""
                                                                        defaultValue="departure" /><span
                                                                        className="radio-custom-dummy"></span>
<label className="form-check-label"
                                                                        htmlFor="flexRadioDeparture">
                                                                        Departure
                                                                    </label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input radio-custom"
                                                                        type="radio" name="StopOverTripDirection"
                                                                        id="rdStopOverReturn" defaultValue="return" /><span
                                                                        className="radio-custom-dummy"></span>
<label className="form-check-label"
                                                                        htmlFor="flexRadioReturn">
                                                                        Return
                                                                    </label>
</div>
<div
                                                                    className="form-check-inline ddl-select-stopover-city">
<div className="position-relative custom-select">
<select className="form-select border-bottom"
                                                                            id="ddlStopoverCity">
<option defaultValue="">Select City</option>
<option defaultValue="RUH">Riyadh (RUH)</option>
<option defaultValue="JED">Jeddah (JED)</option>
</select>
<div style={{ position: "absolute", top: "35px", whiteSpace: "nowrap" }}
                                                                            className="invalid-feedback">
                                                                            Please select stop over city
                                                                        </div>
<div className="select-selected">Select City
                                                                        </div>
<div className="select-items select-hide">
<div className="select-default">Select City
                                                                            </div>
<div>Riyadh (RUH)</div>
<div>Jeddah (JED)</div>
</div>
</div>
</div>
</div>
</div>
<div className="col-md-5">
<div>
<label htmlFor="">How many days would you like to
                                                                    stay?</label>
<br />
</div>
<div className="mt-3">
<button className="btn btn-xs btn-primary disabled"
                                                                    id="btnStopOverDecrementDays" type="button"><i
                                                                        className="fa-solid fa-minus mx-0"></i></button>
<label htmlFor="" id="lblStopOverDaysCount">1</label>
<button className="btn btn-xs btn-primary"
                                                                    id="btnStopOverIncrementDays" type="button"><i
                                                                        className="fa-solid fa-plus mx-0"></i></button>
</div>
</div>
</div>
</div>
<div
                                                    className="col-md-2 stop-over-submit-placeholder my-auto text-center">
</div>
</div>
<div id="hhrSection" className="row hhr-section mx-3 mt-4"
                                                style={{ display: "none" }}>
<div className="col-lg-6 col-12">
<div
                                                        className="checkbox checkbox2 nopad d-flex align-items-center hhr-checkbox">
<label id="hhrlabel">
<input type="checkbox"
                                                                className="select-box checkbox-custom"
                                                                id="hhrcheckbox" /><span
                                                                className="checkbox-custom-dummy"></span>
</label>
<span><i className="hhr-icon"></i></span>
<span className="hhr-label" id="spnhhrbooking"></span>
</div>
</div>
</div>
</div>
</form>
</div>
<div className="tab-pane pb-4" id="flightsHotel" role="tabpanel">
<div className="p-3 mobile-style">
<div className="col-md-6 col-12 row d-flex align-items-center flights-hotel-radios"
                                            id="hotelUmrahPackage">
<div
                                                className="col-md-6 col-12 form-check form-check-inline  align-items-center flight-hotel-radio">
<input className="form-check-input radio-custom" type="radio"
                                                    name="package-type" id="hotel" defaultValue="flightsHotel"
                                                    defaultChecked="checked" /><span className="radio-custom-dummy"></span>
<label className="form-check-label" htmlFor="hotel">
                                                    Flights + Hotel
                                                </label>
</div>
<div
                                                className="col-md-6 col-12 form-check form-check-inline d-flex align-items-lg-end align-items-center">
<input className="form-check-input radio-custom" type="radio"
                                                    name="package-type" id="package" defaultValue="umrahPackages" /><span
                                                    className="radio-custom-dummy"></span>
<label className="form-check-label" htmlFor="package">
                                                    Umrah Packages
                                                </label>
<span className="umrah-discount d-lg-none d-inline-block">
                                                    40% Discount
                                                </span>
</div>
</div>

<div className="row-trip-type my-1 mx-3">
<div className="row">
<div className="col-md-6 round-trip-panel">
<div className="form-check form-check-inline" style={{ display: "none" }}>
<input className="form-check-input radio-custom" type="radio"
                                                            name="nas-trip-type" id="nasTripOneway"
                                                            defaultValue="nasoneway" /><span
                                                            className="radio-custom-dummy"></span>
<label className="form-check-label" htmlFor="nasTripOneway">One
                                                            Way</label>
</div>
<div className="form-check form-check-inline" style={{ display: "none" }}>
<input className="form-check-input radio-custom" type="radio"
                                                            name="nas-trip-type" id="nasTripTwoWay" defaultValue="nasround"
                                                            defaultChecked="checked" /><span
                                                            className="radio-custom-dummy"></span>
<label className="form-check-label" htmlFor="nasTripTwoWay">Round
                                                            trip</label>
</div>
</div>
</div>
</div>
<div className="row my-1 mx-3 mb-0" id="nasonewayContent">
<div className="col-md-5 pe-0 stations-main">
<div className="row position-relative station-panel">
<div className="col-md-6 col-xs-12 origin-dropdown">
<div className="input-station">
<select
                                                                className="form-select station-dropdown select2-hidden-accessible"
                                                                id="nasFromStation" aria-label="From" required=""
                                                                data-placeholder="Origin" tabIndex="-1"
                                                                aria-hidden="true">
<option defaultValue="AHB">Abha</option>
<option defaultValue="ABJ">Abidjan</option>
<option defaultValue="AUH">Abu Dhabi</option>
<option defaultValue="ADD">Addis Ababa</option>
<option defaultValue="ABT">Al Baha</option>
<option defaultValue="AJF">Al Jouf</option>
<option defaultValue="DBB">Al-alamien</option>
<option defaultValue="ALP">Aleppo</option>
<option defaultValue="HBE">Alexandria</option>
<option defaultValue="ALY">Alexandria</option>
<option defaultValue="ALG">Algiers</option>
<option defaultValue="ULH">AlUla</option>
<option defaultValue="ADJ">Amman</option>
<option defaultValue="AMM">Amman</option>
<option defaultValue="ESB">Ankara</option>
<option defaultValue="HTY">Antakya</option>
<option defaultValue="AYT">Antalya</option>
<option defaultValue="ASM">Asmara</option>
<option defaultValue="ATZ">Assiut</option>
<option defaultValue="ASW">Aswan</option>
<option defaultValue="ATH">Athens</option>
<option defaultValue="BGW">Baghdad</option>
<option defaultValue="BAH">Bahrain</option>
<option defaultValue="GYD">Baku</option>
<option defaultValue="BKO">Bamako</option>
<option defaultValue="CMB">Bandaranaike</option>
<option defaultValue="BCN">Barcelona</option>
<option defaultValue="BUS">Batumi</option>
<option defaultValue="BER">Berlin</option>
<option defaultValue="BHX">Birmingham</option>
<option defaultValue="BHH">Bisha</option>
<option defaultValue="BSZ">Bishkek</option>
<option defaultValue="BJV">Bodrum</option>
<option defaultValue="BRU">Brussels</option>
<option defaultValue="BUD">Budapest</option>
<option defaultValue="CAI">Cairo</option>
<option defaultValue="SPX">Cairo-Sphinx</option>
<option defaultValue="CPT">Cape Town</option>
<option defaultValue="CMN">Casablanca</option>
<option defaultValue="DAM">Damascus</option>
<option defaultValue="DMM">Dammam</option>
<option defaultValue="DAR">Dar Es Salaam</option>
<option defaultValue="DEL">Delhi</option>
<option defaultValue="DAC">Dhaka</option>
<option defaultValue="JIB">Djibouti – Ambouli</option>
<option defaultValue="DOH">Doha</option>
<option defaultValue="DXB">Dubai</option>
<option defaultValue="EBB">Entebbe</option>
<option defaultValue="FRA">Frankfurt</option>
<option defaultValue="GVA">Geneva</option>
<option defaultValue="GIZ">Gizan</option>
<option defaultValue="HAS">Hail</option>
<option defaultValue="HRG">Hurghada</option>
<option defaultValue="HYD">Hyderabad</option>
<option defaultValue="ISB">Islamabad</option>
<option defaultValue="IST">Istanbul</option>
<option defaultValue="SAW">Istanbul Sabiha</option>
<option defaultValue="ADB">Izmir</option>
<option defaultValue="CGK">Jakarta</option>
<option defaultValue="JED">Jeddah</option>
<option defaultValue="JNB">Johannesburg</option>
<option defaultValue="KHI">Karachi</option>
<option defaultValue="KGL">Kigali International Airport
                                                                </option>
<option defaultValue="COK">Kochi</option>
<option defaultValue="CCJ">Kozhikode</option>
<option defaultValue="KRK">Krakow</option>
<option defaultValue="KUL">Kuala Lumpur</option>
<option defaultValue="KWI">Kuwait</option>
<option defaultValue="LHE">Lahore</option>
<option defaultValue="LHR">London</option>
<option defaultValue="LKO">Lucknow</option>
<option defaultValue="LUN">Lusaka Airport</option>
<option defaultValue="LXR">Luxor</option>
<option defaultValue="MED">Madinah</option>
<option defaultValue="MLE">Male</option>
<option defaultValue="MAN">Manchester</option>
<option defaultValue="MNL">Manila</option>
<option defaultValue="MRS">Marseille</option>
<option defaultValue="COV">Mersin</option>
<option defaultValue="MXP">Milan</option>
<option defaultValue="MBA">Moi</option>
<option defaultValue="VKO">Moscow</option>
<option defaultValue="MUX">Multan</option>
<option defaultValue="BOM">Mumbai</option>
<option defaultValue="MUC">Munich</option>
<option defaultValue="NBO">Nairobi</option>
<option defaultValue="NJF">Najaf</option>
<option defaultValue="EAM">Najran</option>
<option defaultValue="NMA">Namangan</option>
<option defaultValue="NDJ">North Djamena</option>
<option defaultValue="OSS">Osh</option>
<option defaultValue="CDG">Paris</option>
<option defaultValue="ORY">Paris</option>
<option defaultValue="PEW">Peshawar</option>
<option defaultValue="TGD">Podgorica</option>
<option defaultValue="PRG">Prague</option>
<option defaultValue="PRN">Pristina</option>
<option defaultValue="AQI">Qaisumah</option>
<option defaultValue="ELQ">Qassim</option>
<option defaultValue="RBA">Rabat</option>
<option defaultValue="RUH">Riyadh</option>
<option defaultValue="RZV">Rize</option>
<option defaultValue="FCO">Rome</option>
<option defaultValue="SLL">Salalah</option>
<option defaultValue="SZG">Salzburg</option>
<option defaultValue="SJJ">Sarajevo</option>
<option defaultValue="ICN">Seoul</option>
<option defaultValue="SEZ">Seychelles</option>
<option defaultValue="SHJ">Sharjah</option>
<option defaultValue="SSH">Sharm El-Sheikh</option>
<option defaultValue="SIN">Singapore</option>
<option defaultValue="HMB">Sohag</option>
<option defaultValue="STN">Stansted</option>
<option defaultValue="BKK">Suvarnabhumi</option>
<option defaultValue="TUU">Tabuk</option>
<option defaultValue="TIF">Taif</option>
<option defaultValue="TAS">Tashkent</option>
<option defaultValue="TBS">Tbilisi</option>
<option defaultValue="TIA">Tirana</option>
<option defaultValue="TZX">Trabzon</option>
<option defaultValue="TUN">Tunis</option>
<option defaultValue="TUI">Turaif</option>
<option defaultValue="VIE">Vienna</option>
<option defaultValue="YNB">Yanbu</option>
<option defaultValue="" defaultSelected=""></option>
</select><span
                                                                className="select2 select2-container select2-container--default"
                                                                dir="ltr" style={{ width: "100px" }}><span
                                                                    className="selection"><span
                                                                        className="select2-selection select2-selection--single"
                                                                        role="combobox" aria-haspopup="true"
                                                                        aria-expanded="false" tabIndex="0"
                                                                        aria-labelledby="select2-nasFromStation-container"><span
                                                                            className="select2-selection__rendered"
                                                                            id="select2-nasFromStation-container"
                                                                            title="Abha"><span
                                                                                className="select2-selection__placeholder">Origin</span></span><span
                                                                            className="select2-selection__arrow"
                                                                            role="presentation"><b
                                                                                role="presentation"></b></span></span></span><span
                                                                    className="dropdown-wrapper"
                                                                    aria-hidden="true"></span></span>
<div className="invalid-tooltip">
                                                                Please select origin.
                                                            </div>
</div>
</div>
<div className="swap-button" id="nasbtnSwapOrigin">
<i className="fa fa-exchange" aria-hidden="true"></i>
</div>
<div
                                                        className="col-md-6 col-xs-12 destination-dropdown position-relative">
<div className="input-station">
<select
                                                                className="form-select station-dropdown select2-hidden-accessible"
                                                                id="nasToStation" aria-label="To" required=""
                                                                data-placeholder="Destination" tabIndex="-1"
                                                                aria-hidden="true">
<option defaultValue="" defaultSelected=""></option>
</select><span
                                                                className="select2 select2-container select2-container--default"
                                                                dir="ltr" style={{ width: "100px" }}><span
                                                                    className="selection"><span
                                                                        className="select2-selection select2-selection--single"
                                                                        role="combobox" aria-haspopup="true"
                                                                        aria-expanded="false" tabIndex="0"
                                                                        aria-labelledby="select2-nasToStation-container"><span
                                                                            className="select2-selection__rendered"
                                                                            id="select2-nasToStation-container"><span
                                                                                className="select2-selection__placeholder">Destination</span></span><span
                                                                            className="select2-selection__arrow"
                                                                            role="presentation"><b
                                                                                role="presentation"></b></span></span></span><span
                                                                    className="dropdown-wrapper"
                                                                    aria-hidden="true"></span></span>
<div className="invalid-tooltip">
                                                                Please select destination.
                                                            </div>
</div>
</div>


</div>
</div>
<div className="col-md-4 date-range-cell position-relative ps-0">
<div className="date-range-picker">
<div>
<input type="text" className="form-control search-date-range"
                                                            id="nasflightSearchDateRange" inputmode="none" required="" />
</div>
</div>
<div className="row mt-0 border-bottom mx-1 mobile-date-range-cell">
<div
                                                        className="col-md-6 depart-date-select position-relative ps-0 pe-0">
<label htmlFor="">Depart</label><br />
<span className="selected-date" id="naslblDepartureDate"
                                                            name="nasDepartureDate">07 Aug 26</span>
<div className="invalid-tooltip">
                                                            Please select depart date.
                                                        </div>
</div>
<div className="col-md-6 return-date-select ps-0 pe-0">
<label id="naslblArrivalLabel"
                                                            htmlFor="naslblArrivalLabel">Return</label>
<label id="naslblCheckoutLabel" htmlFor="naslblCheckoutLabel"
                                                            style={{ display: "none" }}>Check-Out</label>
<br />
<span className="selected-date" id="naslblArrivalDate"
                                                            name="nasArrivalDate"></span>
<div className="invalid-tooltip returnDate">
                                                            Please select return date.
                                                        </div>
<div className="invalid-tooltip checkoutDate">
                                                            PleaseSelectCheckOutDate
                                                        </div>
</div>

</div>
</div>

<div className="col-md-2 position-relative ps-0 occupency-cell">
<div className="row mt-0 border-bottom mx-1 mobile-date-range-cell">
<label htmlFor="">Occupancy</label>
<input type="text" readOnly=""
                                                        className="no-focus rounded-0 border-0" name="Occupancy"
                                                        id="txtOccupancy" required="" />
</div>

<div id="rooms-container" style={{ display: "none" }}>
<div className="room fs-room">
<div className="row">
<div className="col-md-5 room_num" htmlFor="room">Room - 1</div>
<div className="people_div">
<div className="row mb-3">
<div className="col-7 d-flex align-items-center">
<label className="people_lbl">Adults <br /><span
                                                                                className="people_desc">12+
                                                                                years</span></label></div>
<div
                                                                        className="col-5 d-flex align-items-center justify-content-end">
<div className="addbtncon-btn my-auto top-0">
<button
                                                                                className="decrement-adults"><span>-</span></button><input
                                                                                type="text"
                                                                                className="text-center border-0 selected_val"
                                                                                readOnly="" defaultValue="1" min="1" max="9"
                                                                                id="adults-0" /><button
                                                                                className="increment-adults"><span>+</span></button>
</div>
</div>
</div>
<div className="row">
<div className="col-7 d-flex align-items-center">
<label className="people_lbl">Children<br /><span
                                                                                className="people_desc">0 - 12
                                                                                years</span></label></div>
<div
                                                                        className="col-5 d-flex align-items-center justify-content-end">
<div className="addbtncon-btn my-auto top-0">
<button
                                                                                className="decrement-children"><span>-</span></button><input
                                                                                type="text"
                                                                                className="text-center border-0 selected_val"
                                                                                readOnly="" defaultValue="0" min="0" max="6"
                                                                                id="children-0" /><button
                                                                                className="increment-children"><span>+</span></button>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-12"><a className="addRoom">+ Add
                                                                        another
                                                                        room</a></div>
</div>
</div>
</div>
</div>
</div>

<div className="col-md-1">
<button className="btn btn-primary rounded-1 m-0 btn-search"
                                                    id="btnNasSearch" type="submit">Search</button>
</div>
<input type="hidden" id="nasToHotelId" />

</div>
</div>
</div>
<div className="tab-pane" id="manage" role="tabpanel">
<div className="p-3">
<form className="row px-3 pt-4 needs-validation form-home-search-widget"
                                            novalidate="" id="formFsManageBooking">
<h3 className="mobile-only text-white mb-2">Manage My Booking</h3>
<div className="col-md-5 position-relative">
<label htmlFor="">Booking Reference</label>
<input type="text"
                                                    className="form-control no-focus rounded-0 border-bottom"
                                                    placeholder="e.g. RA567L" name="BookingReference"
                                                    id="txtBookingReference" required="" />
<div className="invalid-tooltip">
                                                    Please provide booking reference.

                                                </div>
</div>
<div className="col-md-5 position-relative">
<label htmlFor="">Last Name</label>
<input type="text"
                                                    className="form-control no-focus rounded-0 border-bottom"
                                                    placeholder="Enter Last Name" name="LastName" id="txtLastName"
                                                    required="" />
<div className="invalid-tooltip">
                                                    Please enter Last Name.

                                                </div>
</div>
<div className="col-md-2 pt-3 btn-search-section">
<button className="btn btn-primary rounded-2 btn-search"
                                                    id="btnBookingSearch" type="submit">Find Booking</button>
</div>
</form>
<div className="row m-0 pt-3">
<span className="text-dark">Manage your flight at your convenience</span>
</div>
</div>
</div>
<div className="tab-pane" id="checkin" role="tabpanel">
<div className="p-3">
<form className="row px-3 pt-4 needs-validation form-home-search-widget"
                                            novalidate="" id="formFsCheckIn">
<h3 className="mobile-only text-white mb-2">Check-in</h3>
<div className="col-md-5 position-relative">
<label htmlFor="">Booking Reference</label>
<input type="text"
                                                    className="form-control no-focus rounded-0 border-bottom"
                                                    placeholder="e.g. RA567L" name="BookingReference"
                                                    id="txtCheckInBookingReference" required="" />
<div className="invalid-tooltip">
                                                    Please provide booking reference.
                                                </div>
</div>
<div className="col-md-5 position-relative">
<label htmlFor="">Last Name</label>
<input type="text"
                                                    className="form-control no-focus rounded-0 border-bottom"
                                                    placeholder="Enter Last Name" name="LastName"
                                                    id="txtCheckInLastName" required="" />
<div className="invalid-tooltip">
                                                    Please enter Last Name.
                                                </div>
</div>
<div className="col-md-2 pt-3 btn-search-section">
<button className="btn btn-primary rounded-2 btn-search"
                                                    id="btnCheckInSearch" type="submit">Find Booking</button>
</div>
</form>
<div className="row m-0 pt-3">
<span className="text-dark">Save valuable time, check-in for your
                                                flight</span>
</div>
</div>
</div>
<div className="tab-pane" id="flightStatus" role="tabpanel">
<div className="p-3">
<div className="row p-0 m-0 px-3 pt-4 pb-3 flight-status-tabs">
<div className="col-md-2">
<label className="radio-label">
<input type="radio"
                                                        className="form-check-input radio-input me-2 radio-custom"
                                                        name="searchType" defaultValue="route" /><span
                                                        className="radio-custom-dummy"></span>Search by route
                                                </label>
</div>
<div className="col-md-3">
<label className="radio-label">
<input type="radio"
                                                        className="form-check-input radio-input me-2 radio-custom"
                                                        name="searchType" defaultValue="flightNumber"
                                                        id="roundTripCheckBox" /><span
                                                        className="radio-custom-dummy"></span>Search by flight number
                                                </label>
</div>
</div>
<form className="row p-0 m-0 px-3 needs-validation form-home-search-widget"
                                            novalidate="">
<div className="col-md-7 pt-2" id="pnlFsRoute">
<div className="row">
<div className="col-md-6 position-relative">
<div className="input-station">
<select className="form-select select2-hidden-accessible"
                                                                id="fsFromStation" aria-label="From"
                                                                data-placeholder="Origin" tabIndex="-1"
                                                                aria-hidden="true" required="required">
<option defaultValue="AHB">Abha</option>
<option defaultValue="ABJ">Abidjan</option>
<option defaultValue="AUH">Abu Dhabi</option>
<option defaultValue="ABS">Abu Simbel Airport</option>
<option defaultValue="ABV">Abuja</option>
<option defaultValue="ADA">Adana</option>
<option defaultValue="ADD">Addis Ababa</option>
<option defaultValue="AGA">Agadir Almassira Airport</option>
<option defaultValue="AJI">Agri Airport</option>
<option defaultValue="AMD">Ahmedabad</option>
<option defaultValue="ABT">Al Baha</option>
<option defaultValue="AJF">Al Jouf</option>
<option defaultValue="AAN">Al-Ain</option>
<option defaultValue="DBB">Al-alamien</option>
<option defaultValue="ALP">Aleppo</option>
<option defaultValue="HBE">Alexandria</option>
<option defaultValue="ALY">Alexandria</option>
<option defaultValue="ALG">Algiers</option>
<option defaultValue="ALA">Almaty</option>
<option defaultValue="ULH">AlUla</option>
<option defaultValue="ADJ">Amman</option>
<option defaultValue="AMM">Amman</option>
<option defaultValue="JO1">Amman, All Airports</option>
<option defaultValue="ATQ">Amritsar</option>
<option defaultValue="AMS">Amsterdam</option>
<option defaultValue="AOE">Anadolu University Airport</option>
<option defaultValue="ESB">Ankara</option>
<option defaultValue="HTY">Antakya</option>
<option defaultValue="AYT">Antalya</option>
<option defaultValue="RAE">Arar</option>
<option defaultValue="ASM">Asmara</option>
<option defaultValue="ATZ">Assiut</option>
<option defaultValue="ASW">Aswan</option>
<option defaultValue="ATH">Athens</option>
<option defaultValue="IXB">Bagdogra</option>
<option defaultValue="BGW">Baghdad</option>
<option defaultValue="BAH">Bahrain</option>
<option defaultValue="IXE">Bajpe</option>
<option defaultValue="GYD">Baku</option>
<option defaultValue="BKO">Bamako</option>
<option defaultValue="CMB">Bandaranaike</option>
<option defaultValue="BCN">Barcelona</option>
<option defaultValue="BUS">Batumi</option>
<option defaultValue="BEY">Beirut</option>
<option defaultValue="BLR">Bengaluru</option>
<option defaultValue="BER">Berlin</option>
<option defaultValue="BHO">Bhopal</option>
<option defaultValue="BBI">Bhubaneswar</option>
<option defaultValue="BHX">Birmingham</option>
<option defaultValue="BHH">Bisha</option>
<option defaultValue="BSZ">Bishkek</option>
<option defaultValue="BJV">Bodrum</option>
<option defaultValue="TNG">Boukhalef Airport</option>
<option defaultValue="BRU">Brussels</option>
<option defaultValue="BUD">Budapest</option>
<option defaultValue="CAI">Cairo</option>
<option defaultValue="SPX">Cairo-Sphinx</option>
<option defaultValue="EG1">Cairo, All Airports</option>
<option defaultValue="CPT">Cape Town</option>
<option defaultValue="CMN">Casablanca</option>
<option defaultValue="IXC">Chandigarh</option>
<option defaultValue="MAA">Chennai</option>
<option defaultValue="CGN">Cologne</option>
<option defaultValue="CZL">Constantine</option>
<option defaultValue="CPH">Copenhagen</option>
<option defaultValue="NCE">Cote D'Azur Airport</option>
<option defaultValue="DLM">Dalaman</option>
<option defaultValue="DAM">Damascus</option>
<option defaultValue="DMM">Dammam</option>
<option defaultValue="DAR">Dar Es Salaam</option>
<option defaultValue="DEL">Delhi</option>
<option defaultValue="DNZ">Denizli</option>
<option defaultValue="DAC">Dhaka</option>
<option defaultValue="DIY">Diyarbakir</option>
<option defaultValue="JIB">Djibouti – Ambouli</option>
<option defaultValue="DOH">Doha</option>
<option defaultValue="DXB">Dubai</option>
<option defaultValue="DWC">Dubai-Al Maktoum</option>
<option defaultValue="AE1">Dubai, All Airports</option>
<option defaultValue="DUS">Düsseldorf</option>
<option defaultValue="EDI">Edinburgh</option>
<option defaultValue="EDO">Edremit</option>
<option defaultValue="EBB">Entebbe</option>
<option defaultValue="EBL">Erbil</option>
<option defaultValue="ORN">Es Senia</option>
<option defaultValue="LYP">Faisalabad</option>
<option defaultValue="FEG">Fergana</option>
<option defaultValue="FRA">Frankfurt</option>
<option defaultValue="GGR">Garowe</option>
<option defaultValue="GWI">Gateway International Airport
                                                                </option>
<option defaultValue="GAY">Gaya</option>
<option defaultValue="GZT">Gaziantep</option>
<option defaultValue="GVA">Geneva</option>
<option defaultValue="GIZ">Gizan</option>
<option defaultValue="GOI">Goa</option>
<option defaultValue="CAN">Guangzhou</option>
<option defaultValue="URY">Gurayat</option>
<option defaultValue="HAS">Hail</option>
<option defaultValue="HAJ">Hannover</option>
<option defaultValue="HRE">Harare Airport</option>
<option defaultValue="SGN">Ho Chi Minh City</option>
<option defaultValue="HOF">Hofuf</option>
<option defaultValue="HKG">Hong Kong</option>
<option defaultValue="HRG">Hurghada</option>
<option defaultValue="HYD">Hyderabad</option>
<option defaultValue="IGD">Igdir</option>
<option defaultValue="LOS">Ikeja</option>
<option defaultValue="IKA">Imam Khomeini International Airp
                                                                </option>
<option defaultValue="IDR">Indore</option>
<option defaultValue="ISB">Islamabad</option>
<option defaultValue="IST">Istanbul</option>
<option defaultValue="SAW">Istanbul Sabiha</option>
<option defaultValue="TR1">Istanbul, All Airports</option>
<option defaultValue="ADB">Izmir</option>
<option defaultValue="CGK">Jakarta</option>
<option defaultValue="IXJ">Jammu</option>
<option defaultValue="JED">Jeddah</option>
<option defaultValue="JDH">Jodhpur</option>
<option defaultValue="JNB">Johannesburg</option>
<option defaultValue="KBL">Kabul</option>
<option defaultValue="KAN">Kano</option>
<option defaultValue="KHI">Karachi</option>
<option defaultValue="KFS">Kastamonu</option>
<option defaultValue="KTM">Kathmandu</option>
<option defaultValue="ASR">Kayseri</option>
<option defaultValue="KRT">Khartoum</option>
<option defaultValue="KGL">Kigali International Airport
                                                                </option>
<option defaultValue="COK">Kochi</option>
<option defaultValue="CCU">Kolkata</option>
<option defaultValue="KYA">Konya</option>
<option defaultValue="CCJ">Kozhikode</option>
<option defaultValue="KRK">Krakow</option>
<option defaultValue="KUL">Kuala Lumpur</option>
<option defaultValue="KWI">Kuwait</option>
<option defaultValue="LHE">Lahore</option>
<option defaultValue="LCA">Larnaca</option>
<option defaultValue="LHR">London</option>
<option defaultValue="DUR">Louis Botha Airport</option>
<option defaultValue="LKO">Lucknow</option>
<option defaultValue="LUN">Lusaka Airport</option>
<option defaultValue="LXR">Luxor</option>
<option defaultValue="LYS">Lyon</option>
<option defaultValue="MED">Madinah</option>
<option defaultValue="MAD">Madrid</option>
<option defaultValue="MLX">Malatya</option>
<option defaultValue="MLE">Male</option>
<option defaultValue="MAN">Manchester</option>
<option defaultValue="MNL">Manila</option>
<option defaultValue="MRS">Marseille</option>
<option defaultValue="MHD">Mashad Airport</option>
<option defaultValue="COV">Mersin</option>
<option defaultValue="MXP">Milan</option>
<option defaultValue="MBA">Moi</option>
<option defaultValue="DME">Moscow</option>
<option defaultValue="VKO">Moscow</option>
<option defaultValue="MUX">Multan</option>
<option defaultValue="BOM">Mumbai</option>
<option defaultValue="MUC">Munich</option>
<option defaultValue="MCT">Muscat</option>
<option defaultValue="JMK">Mykonos</option>
<option defaultValue="NAG">Nagpur</option>
<option defaultValue="NBO">Nairobi</option>
<option defaultValue="NJF">Najaf</option>
<option defaultValue="EAM">Najran</option>
<option defaultValue="NMA">Namangan</option>
<option defaultValue="NBA">Nambaiyufa Airport</option>
<option defaultValue="NAV">Nevsehir</option>
<option defaultValue="NDJ">North Djamena</option>
<option defaultValue="GHA">Noumerate</option>
<option defaultValue="NCU">Nukus Airport</option>
<option defaultValue="OGU">Ordu Giresun</option>
<option defaultValue="OSS">Osh</option>
<option defaultValue="CDG">Paris</option>
<option defaultValue="ORY">Paris</option>
<option defaultValue="PAT">Patna</option>
<option defaultValue="PEW">Peshawar</option>
<option defaultValue="TGD">Podgorica</option>
<option defaultValue="PRG">Prague</option>
<option defaultValue="PRN">Pristina</option>
<option defaultValue="LED">Pulkovo Airport</option>
<option defaultValue="PNQ">Pune</option>
<option defaultValue="AQI">Qaisumah</option>
<option defaultValue="ELQ">Qassim</option>
<option defaultValue="UET">Quetta </option>
<option defaultValue="RKT">Ra'sal-Khaymah</option>
<option defaultValue="RBA">Rabat</option>
<option defaultValue="RAH">RAFHA</option>
<option defaultValue="RPR">Raipur</option>
<option defaultValue="IXR">Ranchi</option>
<option defaultValue="RSI">Red Sea International Airport
                                                                </option>
<option defaultValue="RUH">Riyadh</option>
<option defaultValue="RZV">Rize</option>
<option defaultValue="FCO">Rome</option>
<option defaultValue="FEZ">Sais Airport</option>
<option defaultValue="SLL">Salalah</option>
<option defaultValue="SZG">Salzburg</option>
<option defaultValue="SZF">Samsun</option>
<option defaultValue="GNY">Sanliurfa Gap</option>
<option defaultValue="JTR">Santorini</option>
<option defaultValue="GRU">Sao Paulo</option>
<option defaultValue="SJJ">Sarajevo</option>
<option defaultValue="ICN">Seoul</option>
<option defaultValue="SEZ">Seychelles</option>
<option defaultValue="SHJ">Sharjah</option>
<option defaultValue="SSH">Sharm El-Sheikh</option>
<option defaultValue="SHW">Sharurah</option>
<option defaultValue="SVO">Sheremetyevo</option>
<option defaultValue="SKT">Sialkot</option>
<option defaultValue="SIN">Singapore</option>
<option defaultValue="HMB">Sohag</option>
<option defaultValue="SXR">Srinagar</option>
<option defaultValue="STN">Stansted</option>
<option defaultValue="SUB">Surabaya</option>
<option defaultValue="BKK">Suvarnabhumi</option>
<option defaultValue="TUU">Tabuk</option>
<option defaultValue="TIF">Taif</option>
<option defaultValue="TAS">Tashkent</option>
<option defaultValue="TBS">Tbilisi</option>
<option defaultValue="TIA">Tirana</option>
<option defaultValue="TIV">Tivat</option>
<option defaultValue="TJK">Tokat Airport</option>
<option defaultValue="TZX">Trabzon</option>
<option defaultValue="TRV">Trivandrum</option>
<option defaultValue="TUN">Tunis</option>
<option defaultValue="TUI">Turaif</option>
<option defaultValue="TZL">Tuzla International Airport</option>
<option defaultValue="UDR">Udaipur</option>
<option defaultValue="UGC">Urgench</option>
<option defaultValue="VAN">Van</option>
<option defaultValue="VNS">Varanasi</option>
<option defaultValue="VIE">Vienna</option>
<option defaultValue="WAE">Wadi Al-Dawasir</option>
<option defaultValue="YNB">Yanbu</option>
<option defaultValue="EVN">Yerevan</option>
<option defaultValue="ZRH">Zurich</option>
<option defaultValue="" defaultSelected=""></option>
</select><span
                                                                className="select2 select2-container select2-container--default"
                                                                dir="ltr" style={{ width: "100px" }}><span
                                                                    className="selection"><span
                                                                        className="select2-selection select2-selection--single"
                                                                        role="combobox" aria-haspopup="true"
                                                                        aria-expanded="false" tabIndex="0"
                                                                        aria-labelledby="select2-fsFromStation-container"><span
                                                                            className="select2-selection__rendered"
                                                                            id="select2-fsFromStation-container"
                                                                            title="Abha"><span
                                                                                className="select2-selection__placeholder">Origin</span></span><span
                                                                            className="select2-selection__arrow"
                                                                            role="presentation"><b
                                                                                role="presentation"></b></span></span></span><span
                                                                    className="dropdown-wrapper"
                                                                    aria-hidden="true"></span></span>
<div className="invalid-tooltip">
                                                                Please select origin.
                                                            </div>


</div>
</div>
<div className="col-md-6 position-relative">
<div className="input-station">
<select className="form-select select2-hidden-accessible"
                                                                id="fsToStation" aria-label="To"
                                                                data-placeholder="Destination" tabIndex="-1"
                                                                aria-hidden="true" required="required">
<option defaultValue="" defaultSelected=""></option>
</select><span
                                                                className="select2 select2-container select2-container--default"
                                                                dir="ltr" style={{ width: "100px" }}><span
                                                                    className="selection"><span
                                                                        className="select2-selection select2-selection--single"
                                                                        role="combobox" aria-haspopup="true"
                                                                        aria-expanded="false" tabIndex="0"
                                                                        aria-labelledby="select2-fsToStation-container"><span
                                                                            className="select2-selection__rendered"
                                                                            id="select2-fsToStation-container"><span
                                                                                className="select2-selection__placeholder">Destination</span></span><span
                                                                            className="select2-selection__arrow"
                                                                            role="presentation"><b
                                                                                role="presentation"></b></span></span></span><span
                                                                    className="dropdown-wrapper"
                                                                    aria-hidden="true"></span></span>
<div className="invalid-tooltip">
                                                                Please select destination.
                                                            </div>
</div>
</div>
</div>
</div>
<div className="" style={{ display: "none" }} id="pnlFsFlightNumber">
<div className="input-station position-relative">
<input type="text"
                                                        className="form-control no-focus rounded-0 border-0"
                                                        placeholder="e.g. 123" id="txtFsFlightNumber" />
<div className="invalid-tooltip">
                                                        Please provide Flight number.
                                                    </div>
</div>
</div>
<div className="col-md-3 pt-2">
<div className="custom-select">
<select id="fsDate" className="form-select border-bottom">
<option defaultValue=" 2026-08-08">
                                                            TOMORROW, 08 Aug 26
                                                        </option>
<option defaultValue=" 2026-08-07" defaultSelected="">
                                                            TODAY, 07 Aug 26
                                                        </option>
<option defaultValue=" 2026-08-06">
                                                            YESTERDAY, 06 Aug 26
                                                        </option>

</select>
<div className="select-selected">
                                                        TODAY, 07 Aug 26
                                                    </div>
<div className="select-items select-hide">
<div>
                                                            TOMORROW, 08 Aug 26
                                                        </div>
<div className="select-default">
                                                            TODAY, 07 Aug 26
                                                        </div>
<div>
                                                            YESTERDAY, 06 Aug 26
                                                        </div>
</div>
</div>
</div>
<div className="col-md-2">
<button className="btn btn-primary rounded-1 m-0 btn-search"
                                                    id="btnFsSearch" type="submit">Search</button>
</div>
</form>
<div className="row m-0 pt-3 px-3 text-fs-searchby-flightnumber"
                                            style={{ display: "none" }}>
<span className="text-dark">Enter flight number without carrier code.</span>
</div>
</div>
</div>
</div>
</div>
<div className="sticky-links-mobile mx-3 mt-4">
<div className="sticky-links-item rounded-2 umrah-item">
<a href="https://nasholidays.com/umrah_packages/en" target="_blank">
<i className="umrah-package-icon me-3 ms-2"></i><span>Umrah</span>
</a>
</div>
<div className="sticky-links-item rounded-2">
<a href="https://www.booking.com/?aid=922212&amp;amplabel=flynas-des-homepage-bed-icon/en"
                                    target="_blank">
<i className="fa-color fa fa-bed me-2 ms-2"></i><span>Hotels</span>
</a>
</div>
<div className="sticky-links-item rounded-2">
<a href="https://cars.cartrawler.com/flynas/en/?clientId=565593" target="_blank">
<i className="fa-color fa fa-car me-2 ms-2"></i><span>Car</span>
</a>
</div>

</div>
</div>
</div>

<div id="mdlTravelInformationAlert" className="modal show" http-equiv="en" aria-modal="true"
                    tabIndex="-1">
<div className="modal-dialog modal-lg">
<div className="modal-content">
<div className="modal-body">
</div>
<div className="modal-footer">
<button type="button" className="btn btn-sm btn-primary"
                                    id="btnAcceptInforAlert">Accept</button>
<button type="button" className="btn btn-sm btn-warning"
                                    id="btnDeclineInforAlert">Decline</button>
</div>
</div>
</div>
</div>

<div id="popupOverlay" className="popup-overlay" style={{ display: "none" }}></div>
<div id="createaccountpopupnasmiles" className="popup-container mob-popup-container"
                    style={{ display: "none" }}>
<div className="popup-content">
<div className="card-header">
<i className="nasmile_join_icon"></i>
<h5 className="card-title text-start">
                                Join nasmiles
                            </h5>
<a className="close" id="createAccountPopupclose" href="https://www.flynas.com/en#">×</a>
</div>
<div className="card-body">
<ul>
<li className="row d-flex m-0 pb-2"><i className="flight_icon col-1 p-0"></i>
<p className="col-10 p-0 my-auto">
                                        Enjoy Faster Booking
                                    </p>
</li>
<li className="row d-flex m-0 pb-2"><i className="flight_icon col-1 p-0"></i>
<p className="col-10 p-0 my-auto">
                                        Earn Rewards on Every Flight
                                    </p>
</li>
<li className="row d-flex m-0 pb-2"><i className="flight_icon col-1 p-0"></i>
<p className="col-10 p-0 my-auto">
                                        Complimentary lounge access (Prime members)
                                    </p>
</li>
<li className="row d-flex m-0 pb-2">
<i className="flight_icon col-1 p-0"></i>
<p className="col-10 p-0 my-auto">
                                        Exclusive offers
                                    </p>
</li>
</ul>
<button className="btn btn-primary btn-sm" id="btnCreateAccount">
                                Create My Account
                            </button>
</div>
</div>
</div>


</section>



<section className="section section-sm bg-default novi-background bg-cover">
<div className="">
<div className="summer-destinations-carousel-section py-lg-5"
                        style={{ backgroundImage: "url(&#39", https: "//static.flynas.com/media/ynthzuv1/summer-deal-banner-2026.png&#39" }}>
<h3 className="text-white text-center mb-4 summer-destinations-title">Our Summer Destinations
                        </h3>
<div className="container">
<div className="slider summer-destinations-carousel slick-initialized slick-slider"
                                dir="ltr">
<button className="slick-prev slick-arrow" aria-label="Previous" type="button"
                                   >Previous</button>
<div className="slick-list draggable">
<div className="slick-track"
                                        style={{ opacity: 1, width: "4700px", transform: "translate3d(-940px, 0px, 0px)" }}>
<div className="slick-slide slick-cloned" data-slick-index="-4"
                                            aria-hidden="true" style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-maldives"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223b6e" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/maldives-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Maldives
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-3"
                                            aria-hidden="true" style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-podgorica"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/montenegro-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Podgorica
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-2"
                                            aria-hidden="true" style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-prague"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/prague-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Prague
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-1"
                                            aria-hidden="true" style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-rize"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/rize-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Rize
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-current slick-active" data-slick-index="0"
                                            aria-hidden="false" style={{ width: "235px" }}>
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-Tirana"
                                                            tabIndex="0">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/tirana-250x400.png"
                                                                            width="250" height="400" alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Tirana
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="1"
                                            aria-hidden="false" style={{ width: "235px" }}>
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-istanbul"
                                                            tabIndex="0">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/istanbul-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Istanbul
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="2"
                                            aria-hidden="false" style={{ width: "235px" }}>
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-sarajevo"
                                                            tabIndex="0">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/sarajevo-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Sarajevo
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="3"
                                            aria-hidden="false" style={{ width: "235px" }}>
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-munich"
                                                            tabIndex="0">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#f08624" }}>New
                                                                </div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/munich-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Munich
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="4" aria-hidden="true"
                                            style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-maldives"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223b6e" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/maldives-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Maldives
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="5" aria-hidden="true"
                                            style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-podgorica"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/montenegro-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Podgorica
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="6" aria-hidden="true"
                                            style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-prague"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/prague-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Prague
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="7" aria-hidden="true"
                                            style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-rize"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/rize-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Rize
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="8"
                                            aria-hidden="true" style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-Tirana"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/tirana-250x400.png"
                                                                            width="250" height="400" alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Tirana
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="9"
                                            aria-hidden="true" style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-istanbul"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/istanbul-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Istanbul
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="10"
                                            aria-hidden="true" style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-sarajevo"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/sarajevo-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Sarajevo
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="11"
                                            aria-hidden="true" style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-munich"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#f08624" }}>New
                                                                </div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/munich-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Munich
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="12"
                                            aria-hidden="true" style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-maldives"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223b6e" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/maldives-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Maldives
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="13"
                                            aria-hidden="true" style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-podgorica"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/montenegro-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Podgorica
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="14"
                                            aria-hidden="true" style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-prague"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/prague-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Prague
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="15"
                                            aria-hidden="true" style={{ width: "235px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                    style={{ width: "100%", display: "inline-block" }}>
<div className="summer-destinations-layer">
<a href="https://www.flynas.com/en/flights-to-rize"
                                                            tabIndex="-1">
<div className="card position-relative rounded-0">
<div className="ribbon"
                                                                    style={{ backgroundColor: "#223B6E" }}>
                                                                    Popular</div>
<div className="card-image">
<figure>
<img src="./refresh-icon_files/rize-250x400.png"
                                                                            loading="lazy" width="250" height="400"
                                                                            alt="" />
</figure>
</div>
<div className="card-footer text-center">
                                                                    Rize
                                                                </div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div><button className="slick-next slick-arrow" aria-label="Next" type="button"
                                   >Next</button>
</div>
</div>
</div>
</div>
</section>




<div className="section section-sm novi-background bg-cover pt-5 pb-5">
<div className="container container-bigger">
<h3>Enjoy your trip even more</h3>
<div>Explore the additional services we offer to make your journey even more memorable.</div>
<div className="row justify-content-sm-center text-center pt-4">
<div className="col-sm-10 col-md-6 col-xl-3 mb-3">
<div className="h-100 d-flex flex-column box-minimal box-minimal-border p-0">
<div className="box-minimal-icon novi-icon"><img alt=""
                                        src="./refresh-icon_files/h-baggage.jpg"
                                        style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
                                        loading="lazy" /></div>
<div className="d-flex flex-column  flex-grow-1">
<h4 className="enjoy-trip-sub-heading mb-3">Extra Baggage</h4>
<div className=" text-spacing-sm mb-3 flex-grow-1">Save up to 50% from airports
                                        prices,
                                        add your extra baggage now.</div>
<div className="box-minimal-footer mb-3 mt-auto"><a
                                            href="https://www.flynas.com/en/plan-my-trip/checked-baggage"
                                            className="btn btn-primary btn-sm">Add Now</a></div>
</div>
</div>
</div>
<div className="col-sm-10 col-md-6 col-xl-3 mb-3">
<div className="h-100 d-flex flex-column  box-minimal box-minimal-border p-0">
<div className="box-minimal-icon novi-icon"><img alt=""
                                        src="./refresh-icon_files/banner_400x181-1.png"
                                        style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
                                        loading="lazy" /></div>
<div className="d-flex flex-column  flex-grow-1">
<h4 className="enjoy-trip-sub-heading mb-3">Pre-ordered Meals</h4>
<div className="text-spacing-sm mb-3 flex-grow-1">Feeling hungry? Choose one of our
                                        delicious meals to be specially served to you on your trip.</div>
<div className="box-minimal-footer mt-auto mb-3"><a
                                            href="https://www.flynas.com/en/plan-my-trip/pre-order-meals"
                                            className="btn btn-primary btn-sm">Add Now</a></div>
</div>
</div>
</div>
<div className="col-sm-10 col-md-6 col-xl-3 mb-3">
<div className="h-100 d-flex flex-column box-minimal box-minimal-border p-0">
<div className="box-minimal-icon novi-icon"><img alt=""
                                        src="./refresh-icon_files/h-seat.jpg"
                                        style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
                                        loading="lazy" /></div>
<div className="d-flex flex-column  flex-grow-1">
<h4 className="enjoy-trip-sub-heading mb-3">Seat Selection</h4>
<div className="text-spacing-sm mb-3 flex-grow-1">Hurry! Don’t miss your chance to
                                        sit
                                        on your preferred seat.</div>
<div className="box-minimal-footer mt-auto mb-3"><a
                                            href="https://www.flynas.com/en/plan-my-trip/seat-selection"
                                            className="btn btn-primary btn-sm">Add Now</a></div>
</div>
</div>
</div>
<div className="col-sm-10 col-md-6 col-xl-3 mb-3">
<div className="h-100 d-flex flex-column  box-minimal box-minimal-border p-0">
<div className="box-minimal-icon novi-icon"><img alt=""
                                        src="./refresh-icon_files/mask-group-1.jpg"
                                        style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
                                        loading="lazy" /></div>
<div className="d-flex flex-column  flex-grow-1">
<h4 className="enjoy-trip-sub-heading mb-3">Upgrade to Premium</h4>
<div className="text-spacing-sm mb-3 flex-grow-1">With flynas, you can now upgrade
                                        your
                                        flight to Premium Class, ensuring a luxurious and comfortable arrival at your
                                        destination.</div>
<div className="box-minimal-footer mt-auto mb-3"><a
                                            href="https://www.flynas.com/en/premium-class"
                                            className="btn btn-primary btn-sm">Add Now</a></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section novi-background bg-cover bg-gray-lighter desktop-only text-center"><a
                    href="https://www.flynas.com/en/dynamic-routemap"><img alt=""
                        src="./refresh-icon_files/flynas_combined.gif" width="100%" height="100%" loading="lazy" /></a>
</div>
<div className="section novi-background bg-cover bg-gray-lighter mobile-only text-center"><a
                    href="https://www.flynas.com/en/dynamic-routemap"><img alt=""
                        src="./refresh-icon_files/flynas_combined.gif" loading="lazy" width="100%" /></a></div>




















<section className="section section-sm bg-gray-lighter novi-background bg-cover text-center">

<div className="container desktop-only text-center"><a href="https://www.flynas.com/en/payment-methods">
<img alt="" src="./refresh-icon_files/owned-media_1200-ù-190.png" /></a></div>

<div className="container-bigger mobile-only"><a href="https://www.flynas.com/en/payment-methods"><img
                            alt="" src="./refresh-icon_files/owned-media_750-ù-446-19.png" /></a></div>
</section>


<section className="section section-sm bg-default novi-background bg-cover" style={{ zIndex: 1 }}>
<div className="container">
<div className="row text-center mt-0">
<div className="col-12 text-center">
<div className="hot-deals-tabs">
<div className="more-hotdeals">
<a href="https://www.flynas.com/en/lowest-fare-finder"
                                        className="btn btn-primary btn-sm">Find the best fares</a>
</div>
<ul className="nav nav-tabs" id="myTab" role="tablist">
<li className="nav-item" role="presentation">
<button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                            data-bs-target="#pills-RUH" type="button" role="tab" aria-controls="home"
                                            aria-selected="true">Riyadh</button>
</li>
<li className="nav-item" role="presentation">
<button className="nav-link " id="home-tab" data-bs-toggle="tab"
                                            data-bs-target="#pills-JED" type="button" role="tab" aria-controls="home"
                                            aria-selected="false" tabIndex="-1">Jeddah</button>
</li>
<li className="nav-item" role="presentation">
<button className="nav-link " id="home-tab" data-bs-toggle="tab"
                                            data-bs-target="#pills-DMM" type="button" role="tab" aria-controls="home"
                                            aria-selected="false" tabIndex="-1">Dammam</button>
</li>
<li className="nav-item" role="presentation">
<button className="nav-link " id="home-tab" data-bs-toggle="tab"
                                            data-bs-target="#pills-AHB" type="button" role="tab" aria-controls="home"
                                            aria-selected="false" tabIndex="-1">Abha</button>
</li>
<li className="nav-item" role="presentation">
<button className="nav-link " id="home-tab" data-bs-toggle="tab"
                                            data-bs-target="#pills-ELQ" type="button" role="tab" aria-controls="home"
                                            aria-selected="false" tabIndex="-1">Qassim</button>
</li>
<li className="indicator" style={{ width: "102px", left: "0px" }}></li>
</ul>
</div>
<div className="tab-content tab-content-best-fares">
<div className="tab-pane fade show active" id="pills-RUH" role="tabpanel"
                                    aria-labelledby="pills-RUH-tab">
<div id="hotDealsCarousel_RUH"
                                        className="slider hotdeals-carousel pt-5 slick-initialized slick-slider"
                                        dir="ltr">
<button className="slick-prev slick-arrow" aria-label="Previous" type="button"
                                           >Previous</button>
<div className="slick-list draggable">
<div className="slick-track"
                                                style={{ opacity: 1, width: "5126px", transform: "translate3d(-932px, 0px, 0px)" }}>
<div className="slick-slide slick-cloned" data-slick-index="-4"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_sarajevo.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Sarajevo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">599</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=SJJ&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-19&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-3"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_baku.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Baku</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">567</span><span
                                                                                        className="priceDec">.65</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=GYD&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-13&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-2"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_istambul.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Istanbul</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">459</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=IST&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-1"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/cairo-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">309</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=CAI&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-11&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-current slick-active"
                                                    data-slick-index="0" aria-hidden="false" style={{ width: "233px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/krakow-hot-deals.png"
                                                                                width="250" height="400" alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Krakow</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">779</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=KRK&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-24&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="1"
                                                    aria-hidden="false" style={{ width: "233px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/munich-250x400.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Munich</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">729</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=MUC&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-09&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="2"
                                                    aria-hidden="false" style={{ width: "233px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_tirana.webp"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Tirana</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">829</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=TIA&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-11&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="3"
                                                    aria-hidden="false" style={{ width: "233px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/maldives-250x400.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Male</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">1099</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=MLE&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-20&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="4" aria-hidden="true"
                                                    style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_tbilisi.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Tbilisi</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">716</span><span
                                                                                        className="priceDec">.78</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=TBS&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-23&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="5" aria-hidden="true"
                                                    style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_sarajevo.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Sarajevo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">599</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=SJJ&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-19&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="6" aria-hidden="true"
                                                    style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_baku.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Baku</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">567</span><span
                                                                                        className="priceDec">.65</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=GYD&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-13&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="7" aria-hidden="true"
                                                    style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_istambul.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Istanbul</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">459</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=IST&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="8" aria-hidden="true"
                                                    style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/cairo-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">309</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=CAI&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-11&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="9"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/krakow-hot-deals.png"
                                                                                width="250" height="400" alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Krakow</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">779</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=KRK&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-24&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="10"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/munich-250x400.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Munich</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">729</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=MUC&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-09&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="11"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_tirana.webp"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Tirana</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">829</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=TIA&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-11&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="12"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/maldives-250x400.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Male</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">1099</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=MLE&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-20&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="13"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_tbilisi.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Tbilisi</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">716</span><span
                                                                                        className="priceDec">.78</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=TBS&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-23&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="14"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_sarajevo.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Sarajevo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">599</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=SJJ&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-19&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="15"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_baku.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Baku</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">567</span><span
                                                                                        className="priceDec">.65</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=GYD&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-13&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="16"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_istambul.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Istanbul</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">459</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=IST&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="17"
                                                    aria-hidden="true" style={{ width: "233px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/cairo-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">309</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=RUH&amp;destination=CAI&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-11&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div><button className="slick-next slick-arrow" aria-label="Next" type="button"
                                           >Next</button>
</div>
</div>
<div className="tab-pane fade  " id="pills-JED" role="tabpanel"
                                    aria-labelledby="pills-JED-tab">
<div id="hotDealsCarousel_JED"
                                        className="slider hotdeals-carousel pt-5 slick-initialized slick-slider"
                                        dir="ltr">
<button className="slick-prev slick-arrow" aria-label="Previous" type="button"
                                           >Previous</button>
<div className="slick-list draggable">
<div className="slick-track"
                                                style={{ opacity: 1, width: "0px", transform: "translate3d(0px, 0px, 0px)" }}>
<div className="slick-slide slick-cloned" data-slick-index="-4"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_tbilisi.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Tbilisi</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">709</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=TBS&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-22&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-3"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_abha.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Abha</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">199</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=AHB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-2"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/cairo-521x834(1).png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">349</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=CAI&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-07&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-1"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/antalya.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Antalya</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">647</span><span
                                                                                        className="priceDec">.24</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=AYT&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-28&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-current slick-active"
                                                    data-slick-index="0" aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_sarajevo.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Sarajevo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">599</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=SJJ&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-21&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="1"
                                                    aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/casablanca-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Casablanca</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">1029</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=CMN&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-09&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="2"
                                                    aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/batumi.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Batumi</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">709</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=BUS&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-07&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="3"
                                                    aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/rize-2.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Rize</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">549</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=RZV&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-16&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="4" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_hurghada.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Hurghada</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">469</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=HRG&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="5" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/north-coast.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Al-alamien</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">589</span><span
                                                                                        className="priceDec">.45</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=DBB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-01&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="6" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_baku.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Baku</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">409</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=GYD&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-14&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="7" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_tbilisi.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Tbilisi</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">709</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=TBS&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-22&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="8" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_abha.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Abha</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">199</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=AHB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="9" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/cairo-521x834(1).png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">349</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=CAI&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-07&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="10" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/antalya.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Antalya</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">647</span><span
                                                                                        className="priceDec">.24</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=AYT&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-28&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="11"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_sarajevo.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Sarajevo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">599</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=SJJ&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-21&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="12"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/casablanca-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Casablanca</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">1029</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=CMN&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-09&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="13"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/batumi.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Batumi</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">709</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=BUS&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-07&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="14"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/rize-2.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Rize</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">549</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=RZV&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-16&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="15"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_hurghada.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Hurghada</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">469</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=HRG&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="16"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/north-coast.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Al-alamien</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">589</span><span
                                                                                        className="priceDec">.45</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=DBB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-01&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="17"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_baku.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Baku</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">409</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=GYD&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-14&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="18"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_tbilisi.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Tbilisi</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">709</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=TBS&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-22&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="19"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_abha.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Abha</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">199</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=AHB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="20"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/cairo-521x834(1).png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">349</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=CAI&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-07&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="21"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/antalya.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Antalya</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">647</span><span
                                                                                        className="priceDec">.24</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=JED&amp;destination=AYT&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-28&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div><button className="slick-next slick-arrow" aria-label="Next" type="button"
                                           >Next</button>
</div>
</div>
<div className="tab-pane fade  " id="pills-DMM" role="tabpanel"
                                    aria-labelledby="pills-DMM-tab">
<div id="hotDealsCarousel_DMM"
                                        className="slider hotdeals-carousel pt-5 slick-initialized slick-slider"
                                        dir="ltr">
<button className="slick-prev slick-arrow" aria-label="Previous" type="button"
                                           >Previous</button>
<div className="slick-list draggable">
<div className="slick-track"
                                                style={{ opacity: 1, width: "0px", transform: "translate3d(0px, 0px, 0px)" }}>
<div className="slick-slide slick-cloned" data-slick-index="-4"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/riyadh-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Riyadh</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">199</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=RUH&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-05&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-3"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_medina.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Madinah</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">239</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=MED&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-18&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-2"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_abha(1).jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Abha</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">269</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=AHB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-1"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/amman-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Amman</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">269</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=AMM&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-14&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-current slick-active"
                                                    data-slick-index="0" aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_tbilisi.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Tbilisi</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">709</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=TBS&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-23&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="1"
                                                    aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_baku.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Baku</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">539</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=GYD&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-09&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="2"
                                                    aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_istambul.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Istanbul Sabiha
                                                                            </h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">579</span><span
                                                                                        className="priceDec">.41</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=SAW&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="3"
                                                    aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/cairo-521x834(1).png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">339</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=CAI&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-09&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="4" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_jizan.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Gizan</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">279</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=GIZ&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="5" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_dubai.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Dubai</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">358</span><span
                                                                                        className="priceDec">.73</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=DXB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="6" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/trabzon-2.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Trabzon</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">619</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=TZX&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-15&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="7" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/riyadh-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Riyadh</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">199</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=RUH&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-05&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="8" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_medina.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Madinah</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">239</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=MED&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-18&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="9" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_abha(1).jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Abha</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">269</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=AHB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="10" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/amman-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Amman</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">269</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=AMM&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-14&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="11"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_tbilisi.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Tbilisi</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">709</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=TBS&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-23&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="12"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_baku.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Baku</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">539</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=GYD&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-09&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="13"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_istambul.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Istanbul Sabiha
                                                                            </h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">579</span><span
                                                                                        className="priceDec">.41</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=SAW&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="14"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/cairo-521x834(1).png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">339</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=CAI&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-09&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="15"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_jizan.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Gizan</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">279</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=GIZ&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="16"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_dubai.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Dubai</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">358</span><span
                                                                                        className="priceDec">.73</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=DXB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="17"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/trabzon-2.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Trabzon</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">619</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=TZX&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-15&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="18"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/riyadh-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Riyadh</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">199</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=RUH&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-05&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="19"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_medina.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Madinah</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">239</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=MED&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-18&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="20"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_abha(1).jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Abha</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">269</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=AHB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="21"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/amman-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Amman</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">269</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=DMM&amp;destination=AMM&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-14&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div><button className="slick-next slick-arrow" aria-label="Next" type="button"
                                           >Next</button>
</div>
</div>
<div className="tab-pane fade  " id="pills-AHB" role="tabpanel"
                                    aria-labelledby="pills-AHB-tab">
<div id="hotDealsCarousel_AHB"
                                        className="slider hotdeals-carousel pt-5 slick-initialized slick-slider"
                                        dir="ltr">
<button className="slick-prev slick-arrow" aria-label="Previous" type="button"
                                           >Previous</button>
<div className="slick-list draggable">
<div className="slick-track"
                                                style={{ opacity: 1, width: "0px", transform: "translate3d(0px, 0px, 0px)" }}>
<div className="slick-slide slick-cloned" data-slick-index="-4"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/riyadh-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Riyadh</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">289</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=RUH&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-3"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_dammam.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Dammam</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">269</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=DMM&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-2"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_jeddah.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Jeddah</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">199</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=JED&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-1"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_medina.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Madinah</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">289</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=MED&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-current slick-active"
                                                    data-slick-index="0" aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_dubai.webp"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Dubai</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">421</span><span
                                                                                        className="priceDec">.10</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=DXB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-30&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="1"
                                                    aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/cairo-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">412</span><span
                                                                                        className="priceDec">.53</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=CAI&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-23&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="2"
                                                    aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_istambul.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Istanbul</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">563</span><span
                                                                                        className="priceDec">.15</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=IST&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-26&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="3"
                                                    aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/addis-ababa-3.webp"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Addis Ababa</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">518</span><span
                                                                                        className="priceDec">.78</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=ADD&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="4" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/riyadh-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Riyadh</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">289</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=RUH&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="5" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_dammam.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Dammam</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">269</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=DMM&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="6" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_jeddah.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Jeddah</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">199</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=JED&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="7" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_medina.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Madinah</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">289</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=MED&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="8"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_dubai.webp"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Dubai</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">421</span><span
                                                                                        className="priceDec">.10</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=DXB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-30&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="9"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/cairo-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">412</span><span
                                                                                        className="priceDec">.53</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=CAI&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-23&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="10"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_istambul.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Istanbul</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">563</span><span
                                                                                        className="priceDec">.15</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=IST&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-26&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="11"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/addis-ababa-3.webp"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Addis Ababa</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">518</span><span
                                                                                        className="priceDec">.78</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=ADD&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="12"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/riyadh-521x834.png"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Riyadh</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">289</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=RUH&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="13"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_dammam.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Dammam</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">269</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=DMM&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="14"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_jeddah.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Jeddah</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">199</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=JED&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="15"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_medina.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Madinah</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">289</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=AHB&amp;destination=MED&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-09-04&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div><button className="slick-next slick-arrow" aria-label="Next" type="button"
                                           >Next</button>
</div>
</div>
<div className="tab-pane fade  " id="pills-ELQ" role="tabpanel"
                                    aria-labelledby="pills-ELQ-tab">
<div id="hotDealsCarousel_ELQ"
                                        className="slider hotdeals-carousel pt-5 slick-initialized slick-slider"
                                        dir="ltr">
<button className="slick-prev slick-arrow" aria-label="Previous" type="button"
                                           >Previous</button>
<div className="slick-list draggable">
<div className="slick-track"
                                                style={{ opacity: 1, width: "0px", transform: "translate3d(0px, 0px, 0px)" }}>
<div className="slick-slide slick-cloned" data-slick-index="-4"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/trabzon-2.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Trabzon</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">419</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=TZX&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-22&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-3"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_cairo.webp"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo-Sphinx</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">359</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=SPX&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-27&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-2"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_abha(1).jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Abha</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">429</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=AHB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-19&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="-1"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_dammam.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Dammam</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">359</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=DMM&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-current slick-active"
                                                    data-slick-index="0" aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_istambul(1).jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Istanbul</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">499</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=IST&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="1"
                                                    aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/trabzon-2.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Trabzon</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">419</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=TZX&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-22&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="2"
                                                    aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_cairo.webp"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo-Sphinx</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">359</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=SPX&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-27&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-active" data-slick-index="3"
                                                    aria-hidden="false" style={{ width: "0px" }}>
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_abha(1).jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Abha</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">429</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=AHB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-19&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="0">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide" data-slick-index="4" aria-hidden="true"
                                                    style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_dammam.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Dammam</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">359</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=DMM&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="5"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_istambul(1).jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Istanbul</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">499</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=IST&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="6"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/trabzon-2.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Trabzon</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">419</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=TZX&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-22&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="7"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_cairo.webp"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Cairo-Sphinx</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">359</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=SPX&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-27&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="8"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_abha(1).jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Abha</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">429</span><span
                                                                                        className="priceDec">.99</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=AHB&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-19&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="slick-slide slick-cloned" data-slick-index="9"
                                                    aria-hidden="true" style={{ width: "0px" }} tabIndex="-1">
<div>
<div data-item-interval="5000"
                                                            style={{ width: "100%", display: "inline-block" }}>
<div className="multiple-items-7-layer">
<div className="card position-relative rounded-5">
<div className="card-image">
<figure>
<img src="./refresh-icon_files/hot-deals-update-_dammam.jpg"
                                                                                loading="lazy" width="250" height="400"
                                                                                alt="" />
</figure>
</div>
<div
                                                                        className="card-img-overlay text-center h-100 d-flex flex-column justify-content-end">
<div className="card-title">
<h5 className="text-light">Dammam</h5>
</div>
<p className="card-text mt-2 text-light">From
                                                                        </p>
<p
                                                                            className="card-text mt-2 text-light fw-bold txt-price">
<span className="amount">
<span className="currency">SAR</span>
<span className="amount-price"><span
                                                                                        className="priceInt">359</span><span
                                                                                        className="priceDec">.00</span>*</span>
</span>
</p>
<p className="card-text mt-2 text-light">One Way
                                                                            /
                                                                            Economy</p>
<p className="card-button mt-2 text-light"><a
                                                                                className="btn btn-primary btn-sm xy-popularsearch"
                                                                                href="https://booking.flynas.com/#/booking/search-redirect?origin=ELQ&amp;destination=DMM&amp;origin1=undefined&amp;destination1=0&amp;currency=SAR&amp;departureDate=2026-08-10&amp;returnDate=null&amp;flightMode=oneway&amp;adultCount=1&amp;childCount=0&amp;infantCount=0&amp;culture=en-US&amp;utm_source=admitad&amp;tagtag_uid=0e2adbab9dd78d1403f09e07dc3898a9"
                                                                                tabIndex="-1">Book Now</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div><button className="slick-next slick-arrow" aria-label="Next" type="button"
                                           >Next</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div id="ReasonsFlyWithUs" className="section section-sm bg-gray-lighter novi-background bg-cover">
<div className="container container-wide">
<h3>Book and organise your trip with flynas</h3>
<div>Enjoy our discount packages up to 50% off.</div>
<div className="row justify-content-sm-center text-center">
<div className="col-4">
<div className="book-now"><a rel="noopener"
                                    href="https://www.booking.com/partnerships?aid=922212&amp;label=fn-home-banner"
                                    target="_blank"><img alt="" src="./refresh-icon_files/f-hotel-banneren.jpg"
                                        className="rounded-3" width="368" height="244" loading="lazy" /></a></div>
</div>
<div className="col-4">
<div className="book-now"><a rel="noopener"
                                    href="https://cars.cartrawler.com/flynas/en/?clientId=565593" target="_blank"><img
                                        alt="" src="./refresh-icon_files/f-cars-banneren.jpg" className="rounded-3"
                                        width="368" height="244" loading="lazy" /></a></div>
</div>
<div className="col-4">
<div className="book-now nomargin"><a rel="noopener"
                                    href="https://www.flynas.com/en/evisa"><img alt=""
                                        src="./refresh-icon_files/f-evisa-banneren.jpg" className="rounded-3"
                                        width="368" height="244" loading="lazy" /></a></div>
</div>
</div>
</div>
</div>







<div className="sticky-links">
<ul>
<li>

<a href="https://www.booking.com/?aid=922212&amp;label=flynas-des-homepage-bed-iconen"
                            target="_blank">
<i className="fa fa-bed text-white"></i><span className="tooltip-link">Hotels</span>
</a>
</li>
<li>
<a href="https://cars.cartrawler.com/flynas/en/?clientId=565593" target="_blank"><i
                                className="fa fa-car text-white"></i><span className="tooltip-link">Car</span></a>
</li>
<li className="no-border border-0 umrah-list-item">
<a href="https://nasholidays.com/umrah_packages/en" target="_blank">
<i className="umrah-package-icon"></i><span className="tooltip-link">Umrah Packages</span>
</a>
</li>

</ul>
</div>

<div className="modal-backdrop hide" id="backdrop"></div>


</main>


<footer className="section page-footer page-footer-minimal bg-default novi-background">
<section className="reasons-to-fly">
<div className="container-fluid reasons-fly_bg">
<div className="mobile-view-item1">
<div className="flycard-info">
<h4>Reasons to Fly With Us</h4>
<p>Get to where you want to go in style and enjoy an unrivalled travel experience at
                                low-cost. From booking to landing - here's why you should choose flynas.</p>
<div className="row card-icon-body">
<div className="col-auto card-icon-content aircraft-bg"><i
                                        className="card-icon aircraft"></i>
<h6>Fleet of 67+ aircraft</h6>
</div>
<div className="col-auto card-icon-content flights-bg"><i
                                        className="card-icon flights"></i>
<h6>2000 flights every week</h6>
</div>
<div className="col-auto card-icon-content passenger-bg"><i
                                        className="card-icon passenger"></i>
<h6>More than 80 million passengers</h6>
</div>
<div className="col-auto card-icon-content countries-bg"><i
                                        className="card-icon countries"></i>
<h6>Over 156 routes to 80+ destinations across more than 38 countries</h6>
</div>
</div>
</div>
</div>


<div className="reasons-to-fly_body">
<div className="reason-item1 item-box desktop-view-item1">
<div className="flycard-info">
<h4>Reasons to Fly With Us</h4>
<p>Get to where you want to go in style and enjoy an unrivalled travel experience at
                                    low-cost. From booking to landing - here's why you should choose flynas.</p>
<div className="row card-icon-body">
<div className="col-auto card-icon-content aircraft-bg"><i
                                            className="card-icon aircraft"></i>
<h6>Fleet of 67+ aircraft</h6>
</div>
<div className="col-auto card-icon-content flights-bg"><i
                                            className="card-icon flights"></i>
<h6>2000 flights every week</h6>
</div>
<div className="col-auto card-icon-content passenger-bg"><i
                                            className="card-icon passenger"></i>
<h6>110 million passengers since the launch in 2007</h6>
</div>
<div className="col-auto card-icon-content countries-bg"><i
                                            className="card-icon countries"></i>
<h6>Over 156 routes to 80+ destinations across more than 38 countries.</h6>
</div>
</div>
</div>
</div>

<div className="reason-item2 item-box">
<div className="flycard-img"><img src="./refresh-icon_files/Fly-with-us-1.jpg"
                                    alt="Fly-with-us-1" className="img-fluid" />
<div className="flycard_overlay"></div>
<div className="flycard_content"><a href="https://www.flynas.com/en/lowest-fare-finder"
                                        className="fly-btn">Competitive fares <i className="fly-arrow-icon"></i></a>
<p>tailored travel options and exclusive partner deals</p>
</div>
</div>
</div>
<div className="reason-item3 item-box">
<div className="flycard-img"><img src="./refresh-icon_files/Fly-with-us-2.jpg"
                                    alt="Fly-with-us-1" className="img-fluid" />
<div className="flycard_overlay"></div>
<div className="flycard_content"><a href="https://www.flynas.com/en/book-flight"
                                        className="fly-btn"> Extensive International network <i
                                            className="fly-arrow-icon"></i>
</a></div>
</div>
</div>
<div className="reason-item4 item-box">
<div className="flycard-img"><img src="./refresh-icon_files/Fly-with-us-3.jpg"
                                    alt="Fly-with-us-1" className="img-fluid" />
<div className="flycard_overlay"></div>
<div className="flycard_content"><a href="https://www.flynas.com/en/route-map"
                                        className="fly-btn">Strong Domestic presence <i
                                            className="fly-arrow-icon"></i></a>
</div>
</div>
</div>
<div className="reason-item5 item-box">
<div className="flycard-img"><img src="./refresh-icon_files/Fly-with-us-4.jpg"
                                    alt="Fly-with-us-1" className="img-fluid" />
<div className="flycard_overlay"></div>
<div className="flycard_content"><a href="https://www.flynas.com/en/sustainability"
                                        className="fly-btn">Sustainable &amp; Modern Fleet <i
                                            className="fly-arrow-icon"></i></a></div>
</div>
</div>
<div className="reason-item6 item-box">
<div className="flycard-img"><img src="./refresh-icon_files/Fly-with-us-5.jpg"
                                    alt="Fly-with-us-1" className="img-fluid" />
<div className="flycard_overlay"></div>
<div className="flycard_content"><a
                                        href="https://www.flynas.com/en/award-winning-service"
                                        className="fly-btn">Award-Winning Service <i className="fly-arrow-icon"></i></a>
</div>
</div>
</div>
<div className="reason-item7 item-box">
<div className="flycard-img"><img src="./refresh-icon_files/Fly-with-us-6.jpg"
                                    alt="Fly-with-us-1" className="img-fluid" />
<div className="flycard_overlay"></div>
<div className="flycard_content"><a href="https://www.flynas.com/en/about-nasmiles"
                                        className="fly-btn">nasmiles <i className="fly-arrow-icon"></i></a></div>
</div>
</div>
<div className="reason-item8 item-box">
<div className="flycard-img"><img src="./refresh-icon_files/Fly-with-us-7.jpg"
                                    alt="Fly-with-us-1" className="img-fluid" />
<div className="flycard_overlay"></div>
<div className="flycard_content"><a href="https://www.flynas.com/en/more-comfort-space"
                                        className="fly-btn"> Comfort &amp; Privileges<i className="fly-arrow-icon"></i>
</a>
</div>
</div>
</div>
<div className="reason-item9 item-box">
<div className="flycard-img"><img src="./refresh-icon_files/Fly-with-us-8.jpg"
                                    alt="Fly-with-us-1" className="img-fluid" />
<div className="flycard_overlay"></div>
<div className="flycard_content"><a href="https://booking.nasholidays.com/en/"
                                        className="fly-btn"> nasholidays <i className="fly-arrow-icon"></i></a></div>
</div>
</div>
</div>

</div>
</section>






<section className="footer-subscribe-section">
<div className="row align-items-center">
<div className="col-lg-7 mb-3 mb-lg-0">
<h5 className="mb-1">Never Miss a Deal Again</h5>
<p className="mb-0">Be the first to find out about our promotions and new services</p>
</div>
<div className="col-lg-5">
<form className="needs-validation" id="formSub" novalidate="">
<div className="subscribe-wrapper">
<span className="subscribe-icon"><i></i></span>
<input type="email" className="subscribe-input" placeholder="Email"
                                    id="txtNewsletterEmail" required="" />
<div className="invalid-tooltip">
                                    Please enter a valid email.
                                </div>
<div className="invalid-tooltip-subscribe">
                                    Please enter a valid email.
                                </div>
<button type="submit" className="btn btn-primary"
                                    id="btnSubscribeNewsletter">Subscribe</button>
</div>
</form>
</div>
</div>
</section>
<div className="modal show" id="mdlSubscribeNewsletter" tabIndex="-1">
<div className="modal-dialog modal-lg">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title">Subscribe to our newsletter</h5>
<button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
</div>
<div className="modal-body">
<form className="g-2 needs-validation" novalidate="" id="formSubscribeNewsletter">
<p className="mb-lg-2 mb-3">To be the first to find out our latest news and exclusive
                                    discounts.</p>
<div className="row mb-3 gy-2">
<div className="col-md-4">
<div className="form-floating has-validation text-left">
<select className="form-control" id="ddlTitle" required="">
<option defaultSelected=""></option>
<option defaultValue="1">Mr.</option>
<option defaultValue="2">Mrs.</option>
<option defaultValue="3">Ms.</option>
</select>
<label htmlFor="formSelect">Title*</label>
<div className="invalid-feedback">
                                                Please select Title.
                                            </div>
</div>
</div>
<div className="col-md-4">
<div className="form-floating has-validation text-left">
<input type="text" className="form-control" id="txtFirstName"
                                                placeholder="First Name" required="" maxLength="255" />
<label htmlFor="txtFirstName"> First Name*</label>
<div className="invalid-feedback">
                                                Please enter First Name.
                                            </div>
</div>
</div>
<div className="col-md-4">
<div className="form-floating has-validation text-left">
<input type="text" className="form-control" id="txtLastName"
                                                placeholder="Last Name" required="" maxLength="255" />
<label htmlFor="txtLastName1">Last Name*</label>
<div className="invalid-feedback">
                                                Please enter Last Name.
                                            </div>
</div>
</div>

</div>
<div className="row mb-3 gy-2">
<div className="col-md-4">
<div className="form-floating has-validation text-left rounded-2">
<select className="form-control select2-hidden-accessible"
                                                id="ddlResidenceCountry" required="" multiple="" tabIndex="-1"
                                                aria-hidden="true">
<option defaultValue="AHB">Abha</option>
<option defaultValue="ABJ">Abidjan</option>
<option defaultValue="AUH">Abu Dhabi</option>
<option defaultValue="ABS">Abu Simbel Airport</option>
<option defaultValue="ABV">Abuja</option>
<option defaultValue="ADA">Adana</option>
<option defaultValue="ADD">Addis Ababa</option>
<option defaultValue="AGA">Agadir Almassira Airport</option>
<option defaultValue="AJI">Agri Airport</option>
<option defaultValue="AMD">Ahmedabad</option>
<option defaultValue="ABT">Al Baha</option>
<option defaultValue="AJF">Al Jouf</option>
<option defaultValue="AAN">Al-Ain</option>
<option defaultValue="DBB">Al-alamien</option>
<option defaultValue="ALP">Aleppo</option>
<option defaultValue="HBE">Alexandria</option>
<option defaultValue="ALY">Alexandria</option>
<option defaultValue="ALG">Algiers</option>
<option defaultValue="ALA">Almaty</option>
<option defaultValue="ULH">AlUla</option>
<option defaultValue="ADJ">Amman</option>
<option defaultValue="AMM">Amman</option>
<option defaultValue="JO1">Amman, All Airports</option>
<option defaultValue="ATQ">Amritsar</option>
<option defaultValue="AMS">Amsterdam</option>
<option defaultValue="AOE">Anadolu University Airport</option>
<option defaultValue="ESB">Ankara</option>
<option defaultValue="HTY">Antakya</option>
<option defaultValue="AYT">Antalya</option>
<option defaultValue="RAE">Arar</option>
<option defaultValue="ASM">Asmara</option>
<option defaultValue="ATZ">Assiut</option>
<option defaultValue="ASW">Aswan</option>
<option defaultValue="ATH">Athens</option>
<option defaultValue="IXB">Bagdogra</option>
<option defaultValue="BGW">Baghdad</option>
<option defaultValue="BAH">Bahrain</option>
<option defaultValue="IXE">Bajpe</option>
<option defaultValue="GYD">Baku</option>
<option defaultValue="BKO">Bamako</option>
<option defaultValue="CMB">Bandaranaike</option>
<option defaultValue="BCN">Barcelona</option>
<option defaultValue="BUS">Batumi</option>
<option defaultValue="BEY">Beirut</option>
<option defaultValue="BLR">Bengaluru</option>
<option defaultValue="BER">Berlin</option>
<option defaultValue="BHO">Bhopal</option>
<option defaultValue="BBI">Bhubaneswar</option>
<option defaultValue="BHX">Birmingham</option>
<option defaultValue="BHH">Bisha</option>
<option defaultValue="BSZ">Bishkek</option>
<option defaultValue="BJV">Bodrum</option>
<option defaultValue="TNG">Boukhalef Airport</option>
<option defaultValue="BRU">Brussels</option>
<option defaultValue="BUD">Budapest</option>
<option defaultValue="CAI">Cairo</option>
<option defaultValue="SPX">Cairo-Sphinx</option>
<option defaultValue="EG1">Cairo, All Airports</option>
<option defaultValue="CPT">Cape Town</option>
<option defaultValue="CMN">Casablanca</option>
<option defaultValue="IXC">Chandigarh</option>
<option defaultValue="MAA">Chennai</option>
<option defaultValue="CGN">Cologne</option>
<option defaultValue="CZL">Constantine</option>
<option defaultValue="CPH">Copenhagen</option>
<option defaultValue="NCE">Cote D'Azur Airport</option>
<option defaultValue="DLM">Dalaman</option>
<option defaultValue="DAM">Damascus</option>
<option defaultValue="DMM">Dammam</option>
<option defaultValue="DAR">Dar Es Salaam</option>
<option defaultValue="DEL">Delhi</option>
<option defaultValue="DNZ">Denizli</option>
<option defaultValue="DAC">Dhaka</option>
<option defaultValue="DIY">Diyarbakir</option>
<option defaultValue="JIB">Djibouti – Ambouli</option>
<option defaultValue="DOH">Doha</option>
<option defaultValue="DXB">Dubai</option>
<option defaultValue="DWC">Dubai-Al Maktoum</option>
<option defaultValue="AE1">Dubai, All Airports</option>
<option defaultValue="DUS">Düsseldorf</option>
<option defaultValue="EDI">Edinburgh</option>
<option defaultValue="EDO">Edremit</option>
<option defaultValue="EBB">Entebbe</option>
<option defaultValue="EBL">Erbil</option>
<option defaultValue="ORN">Es Senia</option>
<option defaultValue="LYP">Faisalabad</option>
<option defaultValue="FEG">Fergana</option>
<option defaultValue="FRA">Frankfurt</option>
<option defaultValue="GGR">Garowe</option>
<option defaultValue="GWI">Gateway International Airport</option>
<option defaultValue="GAY">Gaya</option>
<option defaultValue="GZT">Gaziantep</option>
<option defaultValue="GVA">Geneva</option>
<option defaultValue="GIZ">Gizan</option>
<option defaultValue="GOI">Goa</option>
<option defaultValue="CAN">Guangzhou</option>
<option defaultValue="URY">Gurayat</option>
<option defaultValue="HAS">Hail</option>
<option defaultValue="HAJ">Hannover</option>
<option defaultValue="HRE">Harare Airport</option>
<option defaultValue="SGN">Ho Chi Minh City</option>
<option defaultValue="HOF">Hofuf</option>
<option defaultValue="HKG">Hong Kong</option>
<option defaultValue="HRG">Hurghada</option>
<option defaultValue="HYD">Hyderabad</option>
<option defaultValue="IGD">Igdir</option>
<option defaultValue="LOS">Ikeja</option>
<option defaultValue="IKA">Imam Khomeini International Airp</option>
<option defaultValue="IDR">Indore</option>
<option defaultValue="ISB">Islamabad</option>
<option defaultValue="IST">Istanbul</option>
<option defaultValue="SAW">Istanbul Sabiha</option>
<option defaultValue="TR1">Istanbul, All Airports</option>
<option defaultValue="ADB">Izmir</option>
<option defaultValue="CGK">Jakarta</option>
<option defaultValue="IXJ">Jammu</option>
<option defaultValue="JED">Jeddah</option>
<option defaultValue="JDH">Jodhpur</option>
<option defaultValue="JNB">Johannesburg</option>
<option defaultValue="KBL">Kabul</option>
<option defaultValue="KAN">Kano</option>
<option defaultValue="KHI">Karachi</option>
<option defaultValue="KFS">Kastamonu</option>
<option defaultValue="KTM">Kathmandu</option>
<option defaultValue="ASR">Kayseri</option>
<option defaultValue="KRT">Khartoum</option>
<option defaultValue="KGL">Kigali International Airport</option>
<option defaultValue="COK">Kochi</option>
<option defaultValue="CCU">Kolkata</option>
<option defaultValue="KYA">Konya</option>
<option defaultValue="CCJ">Kozhikode</option>
<option defaultValue="KRK">Krakow</option>
<option defaultValue="KUL">Kuala Lumpur</option>
<option defaultValue="KWI">Kuwait</option>
<option defaultValue="LHE">Lahore</option>
<option defaultValue="LCA">Larnaca</option>
<option defaultValue="LHR">London</option>
<option defaultValue="DUR">Louis Botha Airport</option>
<option defaultValue="LKO">Lucknow</option>
<option defaultValue="LUN">Lusaka Airport</option>
<option defaultValue="LXR">Luxor</option>
<option defaultValue="LYS">Lyon</option>
<option defaultValue="MED">Madinah</option>
<option defaultValue="MAD">Madrid</option>
<option defaultValue="MLX">Malatya</option>
<option defaultValue="MLE">Male</option>
<option defaultValue="MAN">Manchester</option>
<option defaultValue="MNL">Manila</option>
<option defaultValue="MRS">Marseille</option>
<option defaultValue="MHD">Mashad Airport</option>
<option defaultValue="COV">Mersin</option>
<option defaultValue="MXP">Milan</option>
<option defaultValue="MBA">Moi</option>
<option defaultValue="DME">Moscow</option>
<option defaultValue="VKO">Moscow</option>
<option defaultValue="MUX">Multan</option>
<option defaultValue="BOM">Mumbai</option>
<option defaultValue="MUC">Munich</option>
<option defaultValue="MCT">Muscat</option>
<option defaultValue="JMK">Mykonos</option>
<option defaultValue="NAG">Nagpur</option>
<option defaultValue="NBO">Nairobi</option>
<option defaultValue="NJF">Najaf</option>
<option defaultValue="EAM">Najran</option>
<option defaultValue="NMA">Namangan</option>
<option defaultValue="NBA">Nambaiyufa Airport</option>
<option defaultValue="NAV">Nevsehir</option>
<option defaultValue="NDJ">North Djamena</option>
<option defaultValue="GHA">Noumerate</option>
<option defaultValue="NCU">Nukus Airport</option>
<option defaultValue="OGU">Ordu Giresun</option>
<option defaultValue="OSS">Osh</option>
<option defaultValue="CDG">Paris</option>
<option defaultValue="ORY">Paris</option>
<option defaultValue="PAT">Patna</option>
<option defaultValue="PEW">Peshawar</option>
<option defaultValue="TGD">Podgorica</option>
<option defaultValue="PRG">Prague</option>
<option defaultValue="PRN">Pristina</option>
<option defaultValue="LED">Pulkovo Airport</option>
<option defaultValue="PNQ">Pune</option>
<option defaultValue="AQI">Qaisumah</option>
<option defaultValue="ELQ">Qassim</option>
<option defaultValue="UET">Quetta </option>
<option defaultValue="RKT">Ra'sal-Khaymah</option>
<option defaultValue="RBA">Rabat</option>
<option defaultValue="RAH">RAFHA</option>
<option defaultValue="RPR">Raipur</option>
<option defaultValue="IXR">Ranchi</option>
<option defaultValue="RSI">Red Sea International Airport</option>
<option defaultValue="RUH">Riyadh</option>
<option defaultValue="RZV">Rize</option>
<option defaultValue="FCO">Rome</option>
<option defaultValue="FEZ">Sais Airport</option>
<option defaultValue="SLL">Salalah</option>
<option defaultValue="SZG">Salzburg</option>
<option defaultValue="SZF">Samsun</option>
<option defaultValue="GNY">Sanliurfa Gap</option>
<option defaultValue="JTR">Santorini</option>
<option defaultValue="GRU">Sao Paulo</option>
<option defaultValue="SJJ">Sarajevo</option>
<option defaultValue="ICN">Seoul</option>
<option defaultValue="SEZ">Seychelles</option>
<option defaultValue="SHJ">Sharjah</option>
<option defaultValue="SSH">Sharm El-Sheikh</option>
<option defaultValue="SHW">Sharurah</option>
<option defaultValue="SVO">Sheremetyevo</option>
<option defaultValue="SKT">Sialkot</option>
<option defaultValue="SIN">Singapore</option>
<option defaultValue="HMB">Sohag</option>
<option defaultValue="SXR">Srinagar</option>
<option defaultValue="STN">Stansted</option>
<option defaultValue="SUB">Surabaya</option>
<option defaultValue="BKK">Suvarnabhumi</option>
<option defaultValue="TUU">Tabuk</option>
<option defaultValue="TIF">Taif</option>
<option defaultValue="TAS">Tashkent</option>
<option defaultValue="TBS">Tbilisi</option>
<option defaultValue="TIA">Tirana</option>
<option defaultValue="TIV">Tivat</option>
<option defaultValue="TJK">Tokat Airport</option>
<option defaultValue="TZX">Trabzon</option>
<option defaultValue="TRV">Trivandrum</option>
<option defaultValue="TUN">Tunis</option>
<option defaultValue="TUI">Turaif</option>
<option defaultValue="TZL">Tuzla International Airport</option>
<option defaultValue="UDR">Udaipur</option>
<option defaultValue="UGC">Urgench</option>
<option defaultValue="VAN">Van</option>
<option defaultValue="VNS">Varanasi</option>
<option defaultValue="VIE">Vienna</option>
<option defaultValue="WAE">Wadi Al-Dawasir</option>
<option defaultValue="YNB">Yanbu</option>
<option defaultValue="EVN">Yerevan</option>
<option defaultValue="ZRH">Zurich</option>
</select><span
                                                className="select2 select2-container select2-container--default"
                                                dir="ltr" style={{ width: "100px" }}><span className="selection"><span
                                                        className="select2-selection select2-selection--multiple"
                                                        role="combobox" aria-haspopup="true" aria-expanded="false"
                                                        tabIndex="-1">
<ul className="select2-selection__rendered">
<li className="select2-search select2-search--inline"><input
                                                                    className="select2-search__field" type="search"
                                                                    tabIndex="0" autoComplete="off" autocorrect="off"
                                                                    autocapitalize="off" spellCheck="false"
                                                                    role="textbox" aria-autocomplete="list"
                                                                    placeholder="" style={{ width: "0.75em" }} /></li>
</ul>
</span></span><span className="dropdown-wrapper"
                                                    aria-hidden="true"></span></span>
<label htmlFor="ddlResidenceCountry">City Of Residence*</label>
<div className="invalid-feedback">
                                                Please Select City Of Residence
                                            </div>
</div>
</div>
<div className="col-md-4">
<div className="form-floating has-validation text-left">
<input type="email" className="form-control text-start" id="txtEmail"
                                                placeholder=" Email Address" required="" />
<label htmlFor="txtEmail"> Email Address*</label>
<div className="invalid-feedback">
                                                Please enter Email Address.
                                            </div>
</div>
</div>
<div className="col-md-4">
<div
                                            className="form-floating has-validation text-left subscribe-newsletter-dob">
<input type="text" className="form-control" id="txtDateOfBirth"
                                                placeholder="Date Of Birth" required="" />
<label htmlFor="txtDateOfBirth">Date Of Birth*</label>
<div className="invalid-feedback">
                                                Please enter Date Of Birth.
                                            </div>
<div className="daterangepicker ltr auto-apply single opensright"><span
                                                    className="close-city-popup mobile-only"><i
                                                        className="fa fa-close"></i></span>
<div className="hijri-dates mt-lg-0 pb-lg-0 mt-5" tabIndex="0">
<div className="hijri"><label className="switch"><input
                                                                type="checkbox" className="toggleBox"
                                                                aria-label="Hijri Calendar" /><span
                                                                className="slider"></span></label><span
                                                            className="toggle-text" id="hijricalenderlbl">Hijri
                                                            Calendar</span></div>
</div>
<div className="ranges"></div>
<div className="drp-calendar left single" style={{ display: "block" }}>
<div className="calendar-table"></div>
<div className="calendar-time" style={{ display: "none" }}></div>
</div>
<div className="drp-calendar right" style={{ display: "none" }}>
<div className="calendar-table"></div>
<div className="calendar-time" style={{ display: "none" }}></div>
</div>
<div className="drp-buttons"><span
                                                        className="drp-selected"></span><button
                                                        className="cancelBtn btn btn-sm btn-default"
                                                        type="button">Cancel</button><button
                                                        className="applyBtn btn btn-sm btn-primary" disabled="disabled"
                                                        type="button">Apply</button></div>
</div>
</div>
</div>


</div>
<div className="row mb-3">
<div className="col-md-12 position-relative">
<div className="g-recaptcha"
                                            data-sitekey="6Lfq4dUiAAAAALovF8hu3tWn2XEF7ZF5G2rdhdso" id="pnlCaptcha"
                                            required="">
<div style={{ width: "304px", height: "78px" }}>
<div></div><textarea
                                                    id="g-recaptcha-response" name="g-recaptcha-response"
                                                    className="g-recaptcha-response"
                                                    style={{ width: "250px", height: "40px", border: "1px solid rgb(193, 193, 193)", margin: "10px 25px", padding: "0px", resize: "none", display: "none" }}></textarea>
</div>
</div>
<div className="invalid-feedback" style={{ display: "none" }}>
                                            Please check this box if you want to proceed
                                        </div>

</div>
</div>
<div className="row d-flex justify-content-md-center mb-5">
<button type="submit" className="btn btn-primary col-md-4"
                                        id="btnNewsletterSubscribe">
                                        Subscribe</button>
</div>
</form>
<div className="success-message text-center" style={{ display: "none" }}>
<p className="" style={{ fontSize: "16px" }}>Thank you for subscription.</p>
<p className="mb-5 " style={{ fontSize: "16px" }}>We've sent an activation link to your e-mail
                                    address. Remember to activate your account within the next 72 hours, before the link
                                    expires.</p>
</div>
<div className="warning-message text-center" id="div-snl-info-message" style={{ display: "none" }}>
<p className="mb-5" id="p-snl-info-message" style={{ fontSize: "16px" }}></p>
<button type="button" id="btnClose" className="btn btn-sm btn-secondary "
                                    data-bs-dismiss="modal">Close</button>
</div>
</div>
</div>
</div>
</div>


<div className="footer-info-links-section">
<div className="p-4">
<div id="footerAccordion" className="accordion justify-content-between">
<div className="accordion-item"><button className="accordion-button" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseOne"> Flynas </button>
<div id="collapseOne" className="accordion-collapse collapse show"
                                data-bs-parent="#footerAccordion">
<div className="accordion-body">
<ul className="list-unstyled">
<li><a href="https://www.flynas.com/en/about-us/fleet">Our Fleet</a></li>
<li><a href="https://www.flynas.com/en/premium-class">Premium Class</a></li>
<li><a href="https://www.flynas.com/en/media-center/news-updates">News &amp;
                                                Updates</a></li>
<li><a
                                                href="https://www.flynas.com/en/booking-flynas/flynas-mobile-application">Mobile
                                                App</a></li>
<li><a href="https://www.flynas.com/en/partnerships">Parternerships</a></li>
<li><a rel="noopener" href="https://career.flynas.com/" target="_blank">Jobs</a>
</li>
</ul>
</div>
</div>
</div>
<div className="accordion-item"><button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"> Manage My Trip </button>
<div id="collapseTwo" className="accordion-collapse collapse"
                                data-bs-parent="#footerAccordion">
<div className="accordion-body">
<ul className="list-unstyled">
<li><a href="https://www.flynas.com/en/help/flight-status">Flight Status</a>
</li>
<li><a href="https://booking.flynas.com/#/wci/search?lang=en-US">Online
                                                Check-in</a></li>
<li><a href="https://www.flynas.com/en/upgrade">Upgrade to Premium</a></li>
<li><a href="https://www.flynas.com/en/insurance">Travel Insurance</a></li>
<li><a
                                                href="https://sp.booking.com/index.html?aid=922212&amp;label=fn-home-navdrop&amp;lang=en&amp;selected_currency=SAR">Book
                                                a hotel</a></li>
<li><a href="https://www.flynas.com/en/contact-us/office-locations">Our
                                                Offices</a></li>
</ul>
</div>
</div>
</div>
<div className="accordion-item"><button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseThree"> Popular Flights </button>
<div id="collapseThree" className="accordion-collapse collapse"
                                data-bs-parent="#footerAccordion">
<div className="accordion-body">
<ul className="list-unstyled">
<li><a href="https://www.flynas.com/en/flights-to-dubai">Flights to Dubai</a>
</li>
<li><a href="https://www.flynas.com/en/flights-to-kuwait">Flights to Kuwait</a>
</li>
<li><a href="https://www.flynas.com/en/flights-to-islamabad">Flights to
                                                Islamabad</a></li>
<li><a href="https://www.flynas.com/en/flights-to-tirana">Flights to Tirana</a>
</li>
<li><a href="https://www.flynas.com/en/flights-to-cairo">Flights to Cairo</a>
</li>
<li><a href="https://www.flynas.com/en/flights-to-amman">Flights to Amman</a>
</li>
</ul>
</div>
</div>
</div>
<div className="accordion-item"><button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseFour"> Top Destinations </button>
<div id="collapseFour" className="accordion-collapse collapse"
                                data-bs-parent="#footerAccordion">
<div className="accordion-body">
<ul className="list-unstyled">
<li><a href="https://www.flynas.com/en/flights-to-india">Flights to India</a>
</li>
<li><a href="https://www.flynas.com/en/flights-to-georgia">Flights to
                                                Georgia</a></li>
<li><a href="https://www.flynas.com/en/flights-to-jordan">Flights to Jordan</a>
</li>
<li><a href="https://www.flynas.com/en/flights-to-egypt">Flights to Egypt</a>
</li>
<li><a href="https://www.flynas.com/en/flights-to-saudi-arabia">Flights to Saudi
                                                Arabia</a></li>
<li><a href="https://www.flynas.com/en/flights-to-uae">Flights to United Arab
                                                Emirates</a></li>
</ul>
</div>
</div>
</div>
<div className="accordion-item"><button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseFive"> Helpful Resources </button>
<div id="collapseFive" className="accordion-collapse collapse"
                                data-bs-parent="#footerAccordion">
<div className="accordion-body">
<ul className="list-unstyled">
<li><a href="https://www.flynas.com/en/contact-us/faqs">FAQ's</a></li>
<li><a href="https://www.flynas.com/en/plan-my-trip/special-services">Special
                                                Services</a></li>
<li><a href="https://www.flynas.com/en/plan-my-trip/visa">Visa Requirements To
                                                KSA</a></li>
<li><a href="https://www.flynas.com/en/plan-my-trip/airports-terminals">Airports
                                                &amp; Terminals</a></li>
<li><a href="https://www.flynas.com/en/contact-us/call-center-csu">Help &amp;
                                                Support</a></li>
<li><a href="https://static.flynas.com/media/wfderxmj/integrated-management-system-policy.pdf"
                                                target="_blank" rel="noopener noreferrer">Integrated Management System
                                                Policy</a></li>
<li><a href="https://www.flynas.com/en/blog">Blog</a></li>
</ul>
</div>
</div>
</div>
<div className="accordion-item"><button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseEight"> Help &amp; Support </button>
<div id="collapseEight" className="accordion-collapse collapse"
                                data-bs-parent="#footerAccordion">
<div className="accordion-body">
<ul className="list-unstyled">
<li><a href="https://help.flynas.com/en/support/refund-request">Request
                                                refund</a></li>
<li><a href="https://help.flynas.com/en/support/payment-issue">Payment
                                                problem</a></li>
<li><a href="https://help.flynas.com/en/complaint-feedback">Feedback</a></li>
<li><a href="https://help.flynas.com/en/baggage-services/baggage-compensation">Track
                                                your Bag</a></li>
<li><a href="https://help.flynas.com/en/voucher/details">Check your voucher</a>
</li>
<li><a href="https://gaca.gov.sa/en/">GACA</a></li>
<li><a href="https://help.flynas.com/en/support">Help</a></li>
<li><a href="https://www.flynas.com/en/dpo-request-form">Data Rights request</a>
</li>
</ul>
</div>
</div>
</div>
<div className="accordion-item"><button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseSix"> Loyalty </button>
<div id="collapseSix" className="accordion-collapse collapse"
                                data-bs-parent="#footerAccordion">
<div className="accordion-body">
<ul className="list-unstyled">
<li><a href="https://www.flynas.com/en/about-nasmiles">About nasmiles</a></li>
<li><a href="https://booking.flynas.com/#/member/register">Join nasmiles</a>
</li>
<li><a href="https://www.flynas.com/en/tiers-and-benefits">Tiers and
                                                benefits</a></li>
<li><a href="https://www.flynas.com/en/claim-missing-miles">Claim missing
                                                nasmiles</a></li>
<li><a href="https://www.flynas.com/en/nasmiles-partners">nasmiles partners</a>
</li>
</ul>
</div>
</div>
</div>
<div className="accordion-item"><button className="accordion-button collapsed" type="button"
                                data-bs-toggle="collapse" data-bs-target="#collapseSeven"> Investor Relations </button>
<div id="collapseSeven" className="accordion-collapse collapse"
                                data-bs-parent="#footerAccordion">
<div className="accordion-body">
<ul className="list-unstyled">
<li><a rel="noopener" href="https://ir.flynas.com/" target="_blank">Investor
                                                Relations</a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="footer-promotions-sections">
<div className="row">
<div className="col-md-3">
<div className="promotions-info-section">
<h4 className="promotions-info-title">Flynas App – Your Journey, Your Way</h4>
<p className="promotions-info-description">Manage your trips anytime, anywhere.</p>
</div>
<div className="row">
<div className="col-md-4">
<div id="qrcode" style={{ textAlign: "center", paddingTop: "5px" }}><img alt="qrcode"
                                        src="./refresh-icon_files/prod-qrcode.png" /></div>

</div>
<div className="col-md-6" style={{ marginTop: "0px" }}>
<div className="app-download-links">
<div className="col-lg-4 col-md-4 col-12"><a id="apple_app_link" rel="noopener"
                                            href="https://itunes.apple.com/us/app/flynas-tyran-nas/id871947665?mt=8"
                                            target="_blank" className="ios-app-link"></a></div>
<div className="col-lg-4 col-md-4 col-12"><a id="android_app_link" rel="noopener"
                                            href="https://play.google.com/store/apps/details?id=com.flynas.android.app"
                                            target="_blank" className="android-app-link"></a></div>
<div className="col-lg-4 col-md-4 col-12"><a id="apple_app_link2" rel="noopener"
                                            href="https://appgallery.huawei.com/#/app/C100154233" target="_blank"
                                            className="app-gallery-link"></a></div>
</div>
</div>
</div>
</div>

<div className="col-md-3">
<div className="promotions-info-section">
<h4 className="promotions-info-title">Flynas on Social</h4>
<p className="promotions-info-description">Get the latest news, travel deals, and support
                                when
                                you need it.</p>
</div>
<div className="social-media-links"><a rel="noopener" href="https://www.facebook.com/flynas/"
                                target="_blank"><i className="facebook-icon"></i></a><a rel="noopener"
                                href="https://twitter.com/flynas/" target="_blank"><i className="twitter-icon"></i>
</a><a rel="noopener" href="https://www.instagram.com/flynas/" target="_blank"><i
                                    className="instagram-icon"></i></a><a rel="noopener"
                                href="https://www.youtube.com/user/flynasdotcom/" target="_blank"><i
                                    className="youtube-icon"></i></a><a rel="noopener"
                                href="https://www.linkedin.com/company/flynas/" target="_blank"><i
                                    className="linkedin-icon"></i></a><a rel="noopener"
                                href="https://www.tiktok.com/@flynas" target="_blank"><i className="tiktok-icon"></i>
</a>
</div>
</div>
<div className="col-md-3">
<div className="promotions-info-section">
<h4 className="promotions-info-title">Middle East's Leading Low Cost Airline</h4>
</div>
<div className="awards-section"><img alt="" src="./refresh-icon_files/apex-logo-200x200.png"
                                width="82" height="100" loading="lazy" /><img alt=""
                                src="./refresh-icon_files/skyt_airline-winner_2025.png" width="85" height="100"
                                loading="lazy" /><img alt="" src="./refresh-icon_files/wta.png" width="95" height="100"
                                loading="lazy" /></div>
</div>
<div className="col-md-3">
<div className="promotions-info-section">
<h4 className="promotions-info-title">Payment Partners</h4>
</div>
<div className="payments-section"><img alt="payments"
                                src="./refresh-icon_files/payments-image-en.png" /></div>
</div>
</div>
</div>
<section className="section bg-gray-darker copyrights">
<div className="px-4">
<div className="row bottom-footer" style={{ lineHeight: "15px" }}>
<div className="col-md-4 col-sm-12">Copyright © 2026 flynas. All rights reserved. <span
                                style={{ fontSize: "9px", display: "block" }}>Site optimized for viewing in Firefox 29+, IE
                                10+, Safari 7+, and Chrome 35+</span></div>
<div className="col-md-8 col-sm-12">
<ul style={{ paddingTop: "5px", textAlign: "right" }}>
<li><a style={{ cursor: "pointer" }}>Change cookie settings
                                        |</a></li>
<li><a href="https://www.flynas.com/en/personal-data-privacy-policy">Personal Data
                                        Privacy Policy | </a></li>
<li><a href="https://www.flynas.com/en/privacy-policy">Privacy Policy |</a></li>
<li><a href="https://www.flynas.com/en/cookie-policy">Cookie Policy |</a></li>
<li><a rel="noopener"
                                        href="https://static.flynas.com/images/terms_and_conditions/EN-Terms-and-Conditions-of-Carriage.pdf"
                                        target="_blank">Terms &amp; Conditions |</a></li>
<li><a rel="noopener"
                                        href="https://static.flynas.com/images/Fares_and_Regulations/flynas-EN-fare-regulations.pdf"
                                        target="_blank">Fare Regulations |</a></li>
<li><a href="https://www.flynas.com/en/sitemap">Site Map</a></li>
</ul>
</div>
</div>
</div>
</section>
</footer>
</div>










<div id="criteo-tags-div" style={{ display: "none" }}></div><img src="./refresh-icon_files/adsct" height="1" width="1"
        fetchPriority="high" style={{ display: "none" }} /><img src="./refresh-icon_files/adsct(1)" height="1" width="1"
        fetchPriority="high" style={{ display: "none" }} />














<div id="_webengage_script_tag"></div>



<img src="./refresh-icon_files/adsct(2)" height="1" width="1" fetchPriority="high" style={{ display: "none" }} /><img
        src="./refresh-icon_files/adsct(3)" height="1" width="1" fetchPriority="high" style={{ display: "none" }} />





<div id="root"></div>















<div data-test-dir="found" data-language="en" dir="ltr"><template shadowrootmode="open">

<div className="chatbot-wrapper" dir="ltr">
<div>
<div className="chatbot-container" data-testid="chatbot-container">
<div className="chat-header" data-testid="chatbot-header">
<div className="header-left"><i className="header-logo-icon"
                                    data-testid="chatbot-header-logo"></i>
<h3 className="header-title">Flynas AI</h3>
</div>
<div className="header-actions"><button className="icon-button"><i
                                        className="refresh-icon"></i></button><button className="icon-button"
                                    data-testid="chat-close-button"><i className="minimize-icon"></i></button><button
                                    type="button" className="icon-button " data-testid="header-end-chat-button"
                                    aria-label="End Chat"><i className="cross-icon"></i></button></div>
</div>
<div className="menu-popup " data-testid="tiles-menu">
<div className="inner">
<div>
<section className="category-section">
<div className="category-header mb2">
<div className="gradient-line gradient-line-prev"></div><span
                                                className="category-title uppercase">About Booking</span>
<div className="gradient-line gradient-line-next"></div>
</div>
<div className="tiles-container">
<div className="tiles-wrapper"><button className="blank-btn tiles-card ">
<div className="tiles-icon"><i className="plane-icon"></i></div>
<p className="tiles-title capitalize">Check flight status</p>
</button><button className="blank-btn tiles-card ">
<div className="tiles-icon"><i className="book-icon"></i></div>
<p className="tiles-title capitalize">Search For Flight</p>
</button><button className="blank-btn tiles-card ">
<div className="tiles-icon"><i className="manage-icon"></i></div>
<p className="tiles-title capitalize">Manage My Bookings</p>
</button><button className="blank-btn tiles-card ">
<div className="tiles-icon"><i className="route-icon"></i></div>
<p className="tiles-title capitalize">Terminal Details</p>
</button></div>
</div>
</section>
<section className="category-section">
<div className="category-header mb2">
<div className="gradient-line gradient-line-prev"></div><span
                                                className="category-title uppercase">Refunds</span>
<div className="gradient-line gradient-line-next"></div>
</div>
<div className="tiles-container">
<div className="tiles-wrapper"><button className="blank-btn tiles-card ">
<div className="tiles-icon"><i className="refund-icon"></i></div>
<p className="tiles-title capitalize">What's the refund policy?</p>
</button><button className="blank-btn tiles-card ">
<div className="tiles-icon"><i className="flight-icon"></i></div>
<p className="tiles-title capitalize">Can I get a refund for my
                                                        cancelled flight?</p>
</button></div>
</div>
</section>
<section className="category-section">
<div className="category-header mb2">
<div className="gradient-line gradient-line-prev"></div><span
                                                className="category-title uppercase">Baggage queries</span>
<div className="gradient-line gradient-line-next"></div>
</div>
<div className="tiles-container">
<div className="tiles-wrapper"><button className="blank-btn tiles-card ">
<div className="tiles-icon"><i className="lost-icon"></i></div>
<p className="tiles-title capitalize">I lost my suitcase</p>
</button><button className="blank-btn tiles-card ">
<div className="tiles-icon"><i className="weight-icon"></i></div>
<p className="tiles-title capitalize">How much luggage can I carry?
                                                    </p>
</button></div>
</div>
</section>
</div>
</div>
<div className="mt16 text-center"><button className="icon-button"
                                    data-testid="close-tiles-menu"><i className="cross-icon"></i></button></div>
</div>
<div className="message-area" data-testid="chatbot-message-area">
<div className="chat-scroll-container">
<div className="chat-message bot-message">
<div className="avatar avt-logo"><i className="header-logo-icon"
                                            data-testid="circle-icon"></i></div>
<div className="response-column">
<div className="animated-bot-response disabled">
<div className="mt8">
<div className="bot-bubble">
<div className="bubble-content">
<div className="chat-message-text " dir="auto">
<p dir="auto" node="[object Object]">Good day! This is
                                                                Flynas AI, your travel assistant. Need help with a
                                                                flight or booking?</p>
</div>
</div><span className="chat-time" data-testid="chat-time">11:03
                                                        AM</span>
</div>
</div>
</div>
</div>
</div>
<div className="chat-message user-message animated-bot-response">
<div className="user-bubble">
<div className="bubble-content">
<p className="chat-message-text pre-wrap" dir="auto">dsdsd</p>
</div><span className="chat-time" data-testid="user-chat-time">11:03 AM</span>
</div>
</div>
<div className="chat-message bot-message">
<div className="avatar avt-logo"><i className="header-logo-icon"
                                            data-testid="circle-icon"></i></div>
<div className="response-column">
<div className="animated-bot-response disabled">
<div className="mt8">
<div className="bot-bubble">
<div className="bubble-content">
<div className="chat-message-text " dir="auto">
<p dir="auto" node="[object Object]">I'm sorry, I couldn't
                                                                understand your request. If you need assistance with
                                                                flynas travel services, please let me know how I can
                                                                help!</p>
</div>
</div><span className="chat-time" data-testid="chat-time">11:04
                                                        AM</span>
</div>
</div>
</div>
</div>
</div>
<div className="chat-message user-message animated-bot-response">
<div className="user-bubble">
<div className="bubble-content">
<p className="chat-message-text pre-wrap" dir="auto">fdfdf</p>
</div><span className="chat-time" data-testid="user-chat-time">11:10 AM</span>
</div>
</div>
<div className="chat-message bot-message">
<div className="avatar avt-logo"><i className="header-logo-icon"
                                            data-testid="circle-icon"></i></div>
<div className="response-column">
<div className="animated-bot-response ">
<div className="mt8">
<div className="bot-bubble">
<div className="bubble-content">
<div className="chat-message-text " dir="auto">
<p dir="auto" node="[object Object]">I'm sorry, I couldn't
                                                                understand your message. If you need help with flynas
                                                                travel services, please let me know!</p>
</div>
</div><span className="chat-time" data-testid="chat-time">11:10
                                                        AM</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="chat-input-wrapper ">
<div className="input-container " data-testid="chatbot-input-area">
<div className="editable-wrapper long">
<div className="text-editor">
<div className="editable-content">
<div contentEditable="true" className="editable-input"
                                                data-placeholder="Chat with Flynas" data-testid="editable-content"
                                                tabIndex="0" dir="ltr"></div>
</div>
</div>
</div>
<div className="chat-actions">
<div className="right-icons">
<div className="send-mic-wrapper"><button className="send-mic-btn disabled"
                                                aria-label="Send message"><i className="send-icon"></i>
<div className="disabled-overlay"></div>
</button></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</template></div>
<div id="_trackers-67804329">
<div>
<div id="tag-79208925">

</div>
</div>
<div>
<div id="tag-84067096">

</div>
</div>
<div>
<div id="tag-84068464">

</div>
</div>
</div>
<div className="daterangepicker ltr auto-apply show-calendar opensleft"><span
            className="close-city-popup mobile-only"><i className="fa fa-close"></i></span>
<div className="hijri-dates mt-lg-0 pb-lg-0 mt-5" tabIndex="0">
<div className="hijri"><label className="switch"><input type="checkbox" className="toggleBox"
                        aria-label="Hijri Calendar" /><span className="slider"></span></label><span
                    className="toggle-text" id="hijricalenderlbl">Hijri Calendar</span></div>
</div>
<div className="ranges"></div>
<div className="drp-calendar left">
<div className="calendar-table"></div>
<div className="calendar-time" style={{ display: "none" }}></div>
</div>
<div className="drp-calendar right">
<div className="calendar-table"></div>
<div className="calendar-time" style={{ display: "none" }}></div>
</div>
<div className="drp-buttons"><span className="drp-selected"></span><button
                className="cancelBtn btn btn-sm btn-default" type="button">Cancel</button><button
                className="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button></div>
</div>
<div className="daterangepicker ltr auto-apply show-calendar opensleft"><span
            className="close-city-popup mobile-only"><i className="fa fa-close"></i></span>
<div className="hijri-dates mt-lg-0 pb-lg-0 mt-5" tabIndex="0">
<div className="hijri"><label className="switch"><input type="checkbox" className="toggleBox"
                        aria-label="Hijri Calendar" /><span className="slider"></span></label><span
                    className="toggle-text" id="hijricalenderlbl">Hijri Calendar</span></div>
</div>
<div className="ranges"></div>
<div className="drp-calendar left">
<div className="calendar-table"></div>
<div className="calendar-time" style={{ display: "none" }}></div>
</div>
<div className="drp-calendar right">
<div className="calendar-table"></div>
<div className="calendar-time" style={{ display: "none" }}></div>
</div>
<div className="drp-buttons"><span className="drp-selected"></span><button
                className="cancelBtn btn btn-sm btn-default" type="button">Cancel</button><button
                className="applyBtn btn btn-sm btn-primary" disabled="disabled" type="button">Apply</button></div>
</div><a href="https://www.flynas.com/en#" id="ui-to-top" className="ui-to-top active"></a><img alt="" height="1"
        width="1" style={{ display: "none" }} src="./refresh-icon_files/src=5415738" />
<webengagedata>

<div id="webklipper-publisher-widget-container">
<div id="webengage-notification-inbox-container"><template shadowrootmode="open">
<div>



</div>
</template></div>

</div>
</webengagedata>


<img
        className="ywa-10000" src="./refresh-icon_files/sp.pl.download" alt="dot image pixel" style={{ display: "none" }} />
<div id="batBeacon996394855655" style={{ width: "0px", height: "0px", display: "none", visibility: "hidden" }}><img
            id="batBeacon363904952551" width="0" height="0" alt="" src="./refresh-icon_files/0"
            style={{ width: "0px", height: "0px", display: "none", visibility: "hidden" }} /></div>
<img style={{ display: "block", marginTop: "-1px" }} className="crpb" width="1" height="1" alt=""
        src="./refresh-icon_files/src=13668875" /><img style={{ display: "block", marginTop: "-1px" }} className="crpb" width="1"
        height="1" alt="" src="./refresh-icon_files/src=13668875(1)" />
<div
        style={{ backgroundColor: "rgb(255, 255, 255)", border: "1px solid rgb(204, 204, 204)", boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 3px", position: "absolute", transition: "visibility linear 0.3s, opacity 0.3s linear", opacity: 0, visibility: "hidden", zIndex: 2000000000, left: "0px", top: "-10000px" }}>
<div
            style={{ width: "100%", height: "100%", position: "fixed", top: "0px", left: "0px", zIndex: 2000000000, backgroundColor: "rgb(255, 255, 255)", opacity: 0.05 }}>
</div>
<div className="g-recaptcha-bubble-arrow"
            style={{ border: "11px solid transparent", width: "0px", height: "0px", position: "absolute", pointerEvents: "none", marginTop: "-11px", zIndex: 2000000000 }}>
</div>
<div className="g-recaptcha-bubble-arrow"
            style={{ border: "10px solid transparent", width: "0px", height: "0px", position: "absolute", pointerEvents: "none", marginTop: "-10px", zIndex: 2000000000 }}>
</div>
<div style={{ zIndex: 2000000000, position: "relative" }}></div>
</div><img
        src="./refresh-icon_files/adsct(4)" height="1" width="1" fetchPriority="high" style={{ display: "none" }} /><img
        src="./refresh-icon_files/adsct(5)" height="1" width="1" fetchPriority="high" style={{ display: "none" }} />

<div>
<div dir="ltr" id="CookiebotWidget" lang="en"><button className="CookiebotWidget-logo"
                aria-label="Open cookie settings widget" lang="en">{/* svg omitted */}</button>
<div id="CookiebotWidget-widgetContent"></div>
</div>
<div id="CookiebotWidgetUnderlay"></div>
</div>


    </div>
  );
}
