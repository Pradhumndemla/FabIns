export default function PostMultiPic() {
    return (
        <>
            {/* <!--  Card feed item START --> */}
            <div className="card">
                {/* <!--  Card header START --> */}
                <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            {/* <!--  Avatar --> */}
                            <div className="avatar me-2">
                                <a href="/">

                                    <img
                                        className="avatar-img rounded-circle"
                                        src="assets/images/avatar/04.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            {/* <!--  Info --> */}
                            <div>
                                <h6 className="card-title mb-0">

                                    <a href="/"> Judy Nguyen </a>
                                </h6>
                                <div className="nav nav-divider">
                                    <p className="nav-item mb-0 small">
                                        Web Developer at Fabins
                                    </p>
                                    <span
                                        className="nav-item small"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        title=""
                                        data-bs-original-title="Public"
                                    >

                                        <i className="fa-solid fa-globe"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <!--  Card share action START --> */}
                        <div className="dropdown">
                            <a
                                href="/"
                                className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                                id="cardShareAction3"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-ellipsis"></i>
                            </a>
                            {/* <!--  Card share action dropdown menu --> */}
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardShareAction3"
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
                        {/* <!--  Card share action END --> */}
                    </div>
                </div>
                {/* <!--  Card header START --> */}
                {/* <!--  Card body START --> */}
                <div className="card-body">
                    <p>
                        I'm so privileged to be involved in the
                        <a href="/">@bootstrap </a>hiring process! Interviewing with
                        their team was fun and I hope this can be a valuable resource
                        for folks! <a href="/"> #inclusivebusiness</a>
                        <a href="/"> #internship</a> <a href="/"> #hiring</a>
                        <a href="/"> #apply </a>
                    </p>
                    {/* <!--  Card feed grid START --> */}
                    <div className="d-flex justify-content-between">
                        <div className="row g-3">
                            <div className="col-6">
                                {/* <!--  Grid img --> */}
                                <a
                                    className="h-100"
                                    href="assets/images/post/1by1/03.jpg"
                                    data-glightbox=""
                                    data-gallery="image-popup"
                                >
                                    <img
                                        className="rounded img-fluid"
                                        src="assets/images/post/1by1/03.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="col-6">
                                {/* <!--  Grid img --> */}
                                <a
                                    href="assets/images/post/3by2/01.jpg"
                                    data-glightbox=""
                                    data-gallery="image-popup"
                                >
                                    <img
                                        className="rounded img-fluid"
                                        src="assets/images/post/3by2/01.jpg"
                                        alt=""
                                    />
                                </a>
                                {/* <!--  Grid img --> */}
                                <div className="position-relative bg-dark mt-3 rounded">
                                    <div className="hover-actions-item position-absolute top-50 start-50 translate-middle z-index-9">
                                        <a className="btn btn-link text-white" href="/">

                                            View all
                                        </a>
                                    </div>
                                    <a
                                        href="assets/images/post/3by2/02.jpg"
                                        data-glightbox=""
                                        data-gallery="image-popup"
                                    >
                                        <img
                                            className="img-fluid opacity-50 rounded"
                                            src="assets/images/post/3by2/02.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--  Card feed grid END --> */}

                    {/* <!--  Feed react START --> */}
                    <ul className="nav nav-stack py-3 small">
                        <li className="nav-item">
                            <a className="nav-link active text-secondary" href="/">

                                <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>
                                Louis, Billy and 126 others
                            </a>
                        </li>
                        <li className="nav-item ms-sm-auto">
                            <a className="nav-link" href="/">

                                <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                            </a>
                        </li>
                    </ul>
                    {/* <!--  Feed react END --> */}

                    {/* <!--  Feed react START --> */}
                    <ul className="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 mb-3">
                        <li className="nav-item">
                            <a className="nav-link mb-0 active" href="/">

                                <i className="bi bi-heart pe-1"></i>Liked (56)
                            </a>
                        </li>
                        {/* <!--  Card share action menu START --> */}
                        <li className="nav-item dropdown">
                            <a
                                href="/"
                                className="nav-link mb-0"
                                id="cardShareAction4"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                                (3)
                            </a>
                            {/* <!--  Card share action dropdown menu --> */}
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardShareAction4"
                            >
                                <li>
                                    <a className="dropdown-item" href="/">

                                        <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                                        Direct Message
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">

                                        <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                                        Bookmark
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">

                                        <i className="bi bi-link fa-fw pe-2"></i>Copy link to post
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">

                                        <i className="bi bi-share fa-fw pe-2"></i>Share post via …
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/">

                                        <i className="bi bi-pencil-square fa-fw pe-2"></i>Share to
                                        News Feed
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* <!--  Card share action menu END --> */}
                        <li className="nav-item">
                            <a className="nav-link mb-0" href="/">

                                <i className="bi bi-send-fill pe-1"></i>Send
                            </a>
                        </li>
                    </ul>
                    {/* <!--  Feed react START --> */}

                    {/* <!--  Comment wrap START --> */}
                    <ul className="comment-wrap list-unstyled">
                        {/* <!--  Comment item START --> */}
                        <li className="comment-item">
                            <div className="d-flex">
                                {/* <!--  Avatar --> */}
                                <div className="avatar avatar-xs">
                                    <a href="/">

                                        <img
                                            className="avatar-img rounded-circle"
                                            src="assets/images/avatar/05.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                <div className="ms-2">
                                    {/* <!--  Comment by --> */}
                                    <div className="bg-light rounded-start-top-0 p-3 rounded">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-1">

                                                <a href="/"> Frances Guerrero </a>
                                            </h6>
                                            <small className="ms-2">5hr</small>
                                        </div>
                                        <p className="small mb-0">
                                            Removed demands expense account in outward tedious
                                            do. Particular way thoroughly unaffected projection.
                                        </p>
                                    </div>
                                    {/* <!--  Comment rect --> */}
                                    <ul className="nav nav-divider py-2 small">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">

                                                Like (3)
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">

                                                Reply
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">

                                                View 5 replies
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!--  Comment item nested START --> */}
                            <ul className="comment-item-nested list-unstyled">
                                {/* <!--  Comment item START --> */}
                                <li className="comment-item">
                                    <div className="d-flex">
                                        {/* <!--  Avatar --> */}
                                        <div className="avatar avatar-xs">
                                            <a href="/">
                                                <img
                                                    className="avatar-img rounded-circle"
                                                    src="assets/images/avatar/06.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        {/* <!--  Comment by --> */}
                                        <div className="ms-2">
                                            <div className="bg-light p-3 rounded">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-1">

                                                        <a href="/"> Lori Stevens </a>
                                                    </h6>
                                                    <small className="ms-2">2hr</small>
                                                </div>
                                                <p className="small mb-0">
                                                    See resolved goodness felicity shy civility
                                                    domestic had but Drawings offended yet answered
                                                    Jennings perceive.
                                                </p>
                                            </div>
                                            {/* <!--  Comment rect --> */}
                                            <ul className="nav nav-divider py-2 small">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/">

                                                        Like (5)
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/">

                                                        Reply
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* <!--  Comment item END --> */}
                                {/* <!--  Comment item START --> */}
                                <li className="comment-item">
                                    <div className="d-flex">
                                        {/* <!--  Avatar --> */}
                                        <div className="avatar avatar-xs">
                                            <a href="/">
                                                <img
                                                    className="avatar-img rounded-circle"
                                                    src="assets/images/avatar/07.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        {/* <!--  Comment by --> */}
                                        <div className="ms-2">
                                            <div className="bg-light p-3 rounded">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-1">

                                                        <a href="/"> Billy Vasquez </a>
                                                    </h6>
                                                    <small className="ms-2">15min</small>
                                                </div>
                                                <p className="small mb-0">
                                                    Wishing calling is warrant settled was lucky.
                                                </p>
                                            </div>
                                            {/* <!--  Comment rect --> */}
                                            <ul className="nav nav-divider py-2 small">
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/">

                                                        Like
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="/">

                                                        Reply
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* <!--  Load more replies --> */}
                            <a
                                href="/"
                                role="button"
                                className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
                                data-bs-toggle="button"
                                aria-pressed="true"
                            >
                                <div className="spinner-dots me-2">
                                    <span className="spinner-dot"></span>
                                    <span className="spinner-dot"></span>
                                    <span className="spinner-dot"></span>
                                </div>
                                Load more replies
                            </a>
                        </li>
                        {/* <!--  Comment item END --> */}
                        {/* <!--  Comment item START --> */}
                        <li className="comment-item">
                            <div className="d-flex">
                                {/* <!--  Avatar --> */}
                                <div className="avatar avatar-xs">
                                    <a href="/">
                                        <img
                                            className="avatar-img rounded-circle"
                                            src="assets/images/avatar/05.jpg"
                                            alt=""
                                        />
                                    </a>
                                </div>
                                {/* <!--  Comment by --> */}
                                <div className="ms-2">
                                    <div className="bg-light p-3 rounded">
                                        <div className="d-flex justify-content-center">
                                            <h6 className="mb-1">

                                                <a href="/"> Frances Guerrero </a>
                                            </h6>
                                            <small className="ms-2">4min</small>
                                        </div>
                                        <p className="small mb-0">Congratulations:)</p>
                                        <div className="card p-2 border border-2 rounded mt-2 shadow-none">
                                            <img src="assets/images/elements/12.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!--  Comment rect --> */}
                                    <ul className="nav nav-divider pt-2 small">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">

                                                Like (1)
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">

                                                Reply
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">

                                                View 6 replies
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {/* <!--  Comment item END --> */}
                    </ul>
                    {/* <!--  Comment wrap END --> */}
                </div>
                {/* <!--  Card body END --> */}
                {/* <!--  Card footer START --> */}
                <div className="card-footer border-0 pt-0">
                    {/* <!--  Load more comments --> */}
                    <a
                        href="/"
                        role="button"
                        className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                        data-bs-toggle="button"
                        aria-pressed="true"
                    >
                        <div className="spinner-dots me-2">
                            <span className="spinner-dot"></span>
                            <span className="spinner-dot"></span>
                            <span className="spinner-dot"></span>
                        </div>
                        Load more comments
                    </a>
                </div>
                {/* <!--  Card footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}
        </>
    );
}