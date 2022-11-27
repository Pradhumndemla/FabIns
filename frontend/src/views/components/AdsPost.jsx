export default function AdsPost() {
    return (
        <>
            {/* <!--  Card feed item START --> */}
            <div className="card">
                {/* <!--  Card header START --> */}
                <div className="card-header">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            {/* <!--  Avatar --> */}
                            <div className="avatar me-2">
                                <a href="/">

                                    <img
                                        className="avatar-img rounded-circle"
                                        src="assets/images/logo/12.svg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            {/* <!--  Info --> */}
                            <div>
                                <h6 className="card-title mb-0">
                                    <a href="/"> Bootstrap: Front-end framework </a>
                                </h6>
                                <a href="/" className="mb-0 text-body">
                                    Sponsored
                                    <i
                                        className="fa-solid fa-circle-info ps-1"
                                        data-bs-container="body"
                                        data-bs-toggle="popover"
                                        data-bs-placement="top"
                                        data-bs-content="You're seeing this ad because your activity meets the intended audience of our site."
                                        data-bs-original-title=""
                                        title=""
                                    ></i>
                                </a>
                            </div>
                        </div>
                        {/* <!--  Card share action START --> */}
                        <div className="dropdown">
                            <a
                                href="/"
                                className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                                id="cardShareAction2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-ellipsis"></i>
                            </a>
                            {/* <!--  Card share action dropdown menu --> */}
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardShareAction2"
                            >
                                <li>
                                    <a className="dropdown-item" href="/">

                                        <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">

                                        <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                                        ferguson
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">

                                        <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">

                                        <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">

                                        <i className="bi bi-flag fa-fw pe-2"></i>Report post
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <!--  Card share action START --> */}
                    </div>
                </div>
                {/* <!--  Card header START --> */}

                {/* <!--  Card body START --> */}
                <div className="card-body">
                    <p className="mb-0">
                        Quickly design and customize responsive mobile-first sites
                        with Bootstrap.
                    </p>
                </div>
                <img src="assets/images/post/3by2/02.jpg" alt="" />
                {/* <!--  Card body END --> */}
                {/* <!--  Card footer START --> */}
                <div className="card-footer border-0 d-flex justify-content-between align-items-center">
                    <p className="mb-0">Currently v5.1.3 </p>
                    <a className="btn btn-primary-soft btn-sm" href="/">

                        Download now
                    </a>
                </div>
                {/* <!--  Card footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}
        </>
    );
}