export default function SimplePost2() {
    return (
        <>
            {/* <!--  Card feed item START --> */}
            <div className="card">
                {/* <!--  Card header START --> */}
                <div className="card-header border-0 pb-0">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            {/* <!--  Avatar --> */}
                            <div className="avatar avatar-story me-2">
                                <a href="/">

                                    <img
                                        className="avatar-img rounded-circle"
                                        src="assets/images/avatar/12.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            {/* <!--  Info --> */}
                            <div>
                                <div className="nav nav-divider">
                                    <h6 className="nav-item card-title mb-0">

                                        <a href="/"> Joan Wallace </a>
                                    </h6>
                                    <span className="nav-item small"> 1day</span>
                                </div>
                                <p className="mb-0 small">12 January at 12:00</p>
                            </div>
                        </div>
                        {/* <!--  Card feed action dropdown START --> */}
                        <div className="dropdown">
                            <a
                                href="/"
                                className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                                id="cardFeedAction2"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fa-solid fa-ellipsis"></i>
                            </a>
                            {/* <!--  Card feed action dropdown menu --> */}
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardFeedAction2"
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
                        {/* <!--  Card feed action dropdown END --> */}
                    </div>
                </div>
                {/* <!--  Card header END --> */}
                {/* <!--  Card body START --> */}
                <div className="card-body pb-0">
                    <p>
                        Comfort reached gay perhaps chamber his
                        <a href="/">#internship</a> <a href="/">#hiring</a>
                        <a href="/">#apply</a>
                    </p>
                </div>
                {/* <!--  Card img --> */}
                <div className="overflow-hidden fullscreen-video w-100">
                    {/* <!--  HTML video START --> */}
                    {/* <div className="player-wrapper overflow-hidden">
                <div tabIndex="0" className="plyr plyr--full-ui plyr--video plyr--html5 plyr--fullscreen-enabled plyr--paused plyr--stopped plyr--pip-supported plyr__poster-enabled plyr--is-touch"><div className="plyr__controls"><button className="plyr__controls__item plyr__control" type="button" data-plyr="play" aria-label="Play"><svg className="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-pause"></use></svg><svg className="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="label--pressed plyr__sr-only">Pause</span><span className="label--not-pressed plyr__sr-only">Play</span></button><div className="plyr__controls__item plyr__progress__container"><div className="plyr__progress"><input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" autocomplete="off" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="10.048" aria-valuenow="0" id="plyr-seek-5164" aria-valuetext="00:00 of 00:00" style="--value:0%;"><progress className="plyr__progress__buffer" min="0" max="100" value="0" role="progressbar" aria-hidden="true">% buffered</progress><span className="plyr__tooltip">00:00</span></div></div><div className="plyr__controls__item plyr__time--current plyr__time" aria-label="Current time">00:10</div><div className="plyr__controls__item plyr__volume"><button type="button" className="plyr__control" data-plyr="mute"><svg className="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-muted"></use></svg><svg className="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-volume"></use></svg><span className="label--pressed plyr__sr-only">Unmute</span><span className="label--not-pressed plyr__sr-only">Mute</span></button><input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" role="slider" aria-label="Volume" aria-valuemin="0" aria-valuemax="100" aria-valuenow="100" id="plyr-volume-5164" aria-valuetext="100.0%" style="--value:100%;"></div><button className="plyr__controls__item plyr__control" type="button" data-plyr="captions"><svg className="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-captions-on"></use></svg><svg className="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-captions-off"></use></svg><span className="label--pressed plyr__sr-only">Disable captions</span><span className="label--not-pressed plyr__sr-only">Enable captions</span></button><div className="plyr__controls__item plyr__menu"><button aria-haspopup="true" aria-controls="plyr-settings-5164" aria-expanded="false" type="button" className="plyr__control" data-plyr="settings"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-settings"></use></svg><span className="plyr__sr-only">Settings</span></button><div className="plyr__menu__container" id="plyr-settings-5164" hidden=""><div><div id="plyr-settings-5164-home"><div role="menu"><button data-plyr="settings" type="button" className="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true" hidden=""><span>Captions<span className="plyr__menu__value">Disabled</span></span></button><button data-plyr="settings" type="button" className="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true" hidden=""><span>Quality<span className="plyr__menu__value">undefined</span></span></button><button data-plyr="settings" type="button" className="plyr__control plyr__control--forward" role="menuitem" aria-haspopup="true"><span>Speed<span className="plyr__menu__value">Normal</span></span></button></div></div><div id="plyr-settings-5164-captions" hidden=""><button type="button" className="plyr__control plyr__control--back"><span aria-hidden="true">Captions</span><span className="plyr__sr-only">Go back to previous menu</span></button><div role="menu"></div></div><div id="plyr-settings-5164-quality" hidden=""><button type="button" className="plyr__control plyr__control--back"><span aria-hidden="true">Quality</span><span className="plyr__sr-only">Go back to previous menu</span></button><div role="menu"></div></div><div id="plyr-settings-5164-speed" hidden=""><button type="button" className="plyr__control plyr__control--back"><span aria-hidden="true">Speed</span><span className="plyr__sr-only">Go back to previous menu</span></button><div role="menu"><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="0.5"><span>0.5×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="0.75"><span>0.75×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="true" value="1"><span>Normal</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="1.25"><span>1.25×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="1.5"><span>1.5×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="1.75"><span>1.75×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="2"><span>2×</span></button><button data-plyr="speed" type="button" role="menuitemradio" className="plyr__control" aria-checked="false" value="4"><span>4×</span></button></div></div></div></div></div><button className="plyr__controls__item plyr__control" type="button" data-plyr="pip"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-pip"></use></svg><span className="plyr__sr-only">PIP</span></button><button className="plyr__controls__item plyr__control" type="button" data-plyr="fullscreen"><svg className="icon--pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg className="icon--not-pressed" aria-hidden="true" focusable="false"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span className="label--pressed plyr__sr-only">Exit fullscreen</span><span className="label--not-pressed plyr__sr-only">Enter fullscreen</span></button></div><div className="plyr__video-wrapper"><video className="player-html" crossorigin="anonymous" poster="assets/images/videos/poster.jpg" data-poster="assets/images/videos/poster.jpg">
                  <source src="assets/images/videos/video-feed.mp4" type="video/mp4"/>
                </video><div className="plyr__poster" style={{backgroundImage: url(&quot;assets/images/videos/poster.jpg&quot;);"></div></div><div className="plyr__captions"></div><button type="button" className="plyr__control plyr__control--overlaid" data-plyr="play" aria-label="Play"><svg aria-hidden="true" focusable="false"><use xlink:href="#plyr-play"></use></svg><span className="plyr__sr-only">Play</span></button></div>
              </div> */}
                    {/* <!--  HTML video END --> */}

                    {/* <!--  Plyr resources and browser polyfills are specified in the pen settings --> */}
                </div>
                {/* <!--  Feed react START --> */}
                <div className="card-body pt-0">
                    <ul className="nav nav-stack py-3 small">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">

                                <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">

                                <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                            </a>
                        </li>
                        {/* <!--  Card share action START --> */}
                        <li className="nav-item dropdown ms-sm-auto">
                            <a
                                className="nav-link mb-0"
                                href="/"
                                id="cardShareAction9"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                                (3)
                            </a>
                            {/* <!--  Card share action dropdown menu --> */}
                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="cardShareAction9"
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
                        {/* <!--  Card share action END --> */}
                    </ul>
                    {/* <!--  Feed react END --> */}

                    {/* <!--  Add comment --> */}
                    <div className="d-flex mb-3">
                        {/* <!--  Avatar --> */}
                        <div className="avatar avatar-xs me-2">
                            <a href="/">

                                <img
                                    className="avatar-img rounded-circle"
                                    src="assets/images/avatar/12.jpg"
                                    alt=""
                                />
                            </a>
                        </div>
                        {/* <!--  Comment box  --> */}
                        {/* <!--  Comment box  --> */}
                        <form className="position-relative w-100">
                            <textarea
                                data-autoresize=""
                                className="form-control pe-4 bg-light"
                                rows="1"
                                placeholder="Add a comment..."
                            ></textarea>
                            {/* <!--  Emoji button --> */}
                        </form>
                    </div>
                    {/* <!--  Comment wrap START --> */}
                    <ul className="comment-wrap list-unstyled mb-0">
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
                                            Preference any astonished unreserved Mrs.
                                        </p>
                                    </div>
                                    {/* <!--  Comment react --> */}
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
                                                    Dependent on so extremely delivered by. Yet ﻿no
                                                    jokes worse her why.
                                                </p>
                                            </div>
                                            {/* <!--  Comment react --> */}
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
                            </ul>
                            {/* <!--  Comment item nested END --> */}
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