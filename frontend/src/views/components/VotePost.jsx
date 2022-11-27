export default function VotePost() {
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
                            {/* <!--  Title --> */}
                            <div>
                                <h6 className="card-title mb-0">

                                    <a href="/"> All in the Mind </a>
                                </h6>
                                <p className="mb-0 small">9 November at 23:29</p>
                            </div>
                        </div>
                        {/* <!--  Card share action menu --> */}
                        <a
                            href="/"
                            className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                            id="cardShareAction7"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fa-solid fa-ellipsis"></i>
                        </a>
                        {/* <!--  Card share action dropdown menu --> */}
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="cardShareAction7"
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
                {/* <!--  Card header START --> */}

                {/* <!--  Card body START --> */}
                <div className="card-body pb-0">
                    <p>How do you protect your business against cyber-crime?</p>
                    <div className="vstack gap-2">
                        {/* <!--  Feed poll item --> */}
                        <div>
                            <input
                                type="radio"
                                className="btn-check"
                                name="poll"
                                id="option"
                            />
                            <label className="btn btn-outline-primary w-100" htmlFor="option">
                                We have cybersecurity insurance coverage
                            </label>
                        </div>
                        {/* <!--  Feed poll item --> */}
                        <div>
                            <input
                                type="radio"
                                className="btn-check"
                                name="poll"
                                id="option2"
                            />
                            <label className="btn btn-outline-primary w-100" htmlFor="option2">
                                Our dedicated staff will protect us
                            </label>
                        </div>
                        {/* <!--  Feed poll item --> */}
                        <div>
                            <input
                                type="radio"
                                className="btn-check"
                                name="poll"
                                id="option3"
                            />
                            <label className="btn btn-outline-primary w-100" htmlFor="option3">
                                We give regular training for best practices
                            </label>
                        </div>
                        {/* <!--  Feed poll item --> */}
                        <div>
                            <input
                                type="radio"
                                className="btn-check"
                                name="poll"
                                id="option4"
                            />
                            <label className="btn btn-outline-primary w-100" htmlFor="option4">
                                Third-party vendor protection
                            </label>
                        </div>
                    </div>

                    {/* <!--  Feed poll votes START --> */}
                    <ul className="nav nav-divider mt-2 mb-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                263 votes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                2d left
                            </a>
                        </li>
                    </ul>
                    {/* <!--  Feed poll votes ED --> */}

                    {/* <!--  Feed react START --> */}
                    <ul className="nav nav-stack pb-2 small mt-4">
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
                </div>
                {/* <!--  Card body END --> */}
                {/* <!--  Card Footer START --> */}
                <div className="card-footer py-3">
                    {/* <!--  Feed react START --> */}
                    <ul className="nav nav-fill nav-stack small">
                        <li className="nav-item">
                            <a className="nav-link mb-0 active" href="/">

                                <i className="bi bi-heart pe-1"></i>Liked (56)
                            </a>
                        </li>
                        {/* <!--  Card share action dropdown START --> */}
                        <li className="nav-item dropdown">
                            <a
                                href="/"
                                className="nav-link mb-0"
                                id="feedActionShare6"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                                (3)
                            </a>
                            {/* <!--  Card share action dropdown menu --> */}
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="feedActionShare6"
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
                        {/* <!--  Card share action dropdown END --> */}
                        <li className="nav-item">
                            <a className="nav-link mb-0" href="/">

                                <i className="bi bi-send-fill pe-1"></i>Send
                            </a>
                        </li>
                    </ul>
                    {/* <!--  Feed react END --> */}
                </div>
                {/* <!--  Card Footer END --> */}
            </div>
            {/* <!--  Card feed item END --> */}
        </>
    );
}