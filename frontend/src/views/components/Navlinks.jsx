export default function Navlinks() {
  return (
    <>
      {/* navlinks start */}
      <ul className="navbar-nav navbar-nav-scroll ms-auto">
        {/* <!--  Nav item 1 Demos --> */}
        <li className="nav-item dropdown">
          <a
            className="nav-link active dropdown-toggle"
            href="/"
            id="homeMenu"
            data-bs-toggle="dropdown"
            // aria-haspopup="true"
            aria-expanded="false"
          >
            Demo
          </a>
          <ul className="dropdown-menu" aria-labelledby="homeMenu">
            <li>

              <a className="dropdown-item active" href="index.html">
                Home default
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="index-classic.html">
                Home classic
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="index-post.html">
                Home post
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="index-video.html">
                Home video
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="index-event.html">
                Home event
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="landing.html">
                Landing page
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="app-download.html">
                App download
              </a>
            </li>
            <li className="dropdown-divider"></li>
            <li>
              <a
                className="dropdown-item"
                href="/"
                target="_blank"
              >
                <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>
                Buy Social!
              </a>
            </li>
          </ul>
        </li>
        {/* <!--  Nav item 2 Pages --> */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="pagesMenu"
            data-bs-toggle="dropdown"
            // aria-haspopup="true"
            aria-expanded="false"
          >
            Pages
          </a>
          <ul className="dropdown-menu" aria-labelledby="pagesMenu">
            <li>

              <a className="dropdown-item" href="albums.html">
                Albums
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="celebration.html">
                Celebration
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="messaging.html">
                Messaging
              </a>
            </li>
            {/* <!--  Dropdown submenu --> */}
            <li className="dropdown-submenu dropend">
              <a className="dropdown-item dropdown-toggle" href="/!">
                Profile
              </a>
              <ul className="dropdown-menu" data-bs-popper="none">
                <li>

                  <a className="dropdown-item" href="my-profile.html">
                    Feed
                  </a>
                </li>
                <li>

                  <a className="dropdown-item" href="my-profile-about.html">
                    About
                  </a>
                </li>
                <li>

                  <a className="dropdown-item" href="my-profile-connections.html">
                    Connections
                  </a>
                </li>
                <li>

                  <a className="dropdown-item" href="my-profile-media.html">
                    Media
                  </a>
                </li>
                <li>

                  <a className="dropdown-item" href="my-profile-videos.html">
                    Videos
                  </a>
                </li>
                <li>

                  <a className="dropdown-item" href="my-profile-events.html">
                    Events
                  </a>
                </li>
                <li>

                  <a className="dropdown-item" href="my-profile-activity.html">
                    Activity
                  </a>
                </li>
              </ul>
            </li>
            <li>

              <a className="dropdown-item" href="events.html">
                Events
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="events-2.html">
                Events 2
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="event-details.html">
                Event details
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="event-details-2.html">
                Event details 2
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="groups.html">
                Groups
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="group-details.html">
                Group details
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="post-videos.html">
                Post videos
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="post-video-details.html">
                Post video details
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="post-details.html">
                Post details
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="video-details.html">
                Video details
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="blog.html">
                Blog
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="blog-details.html">
                Blog details
              </a>
            </li>

            {/* <!--  Dropdown submenu levels --> */}
            <li className="dropdown-divider"></li>
            <li className="dropdown-submenu dropend">
              <a className="dropdown-item dropdown-toggle" href="/">
                Dropdown levels
              </a>
              <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                <li>

                  <a className="dropdown-item" href="/">
                    Dropdown item
                  </a>
                </li>
                <li>

                  <a className="dropdown-item" href="/">
                    Dropdown item
                  </a>
                </li>
                {/* <!--  dropdown submenu open left --> */}
                <li className="dropdown-submenu dropstart">
                  <a className="dropdown-item dropdown-toggle" href="/">
                    Dropdown (start)
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    data-bs-popper="none"
                  >
                    <li>

                      <a className="dropdown-item" href="/">
                        Dropdown item
                      </a>
                    </li>
                    <li>

                      <a className="dropdown-item" href="/">
                        Dropdown item
                      </a>
                    </li>
                  </ul>
                </li>
                <li>

                  <a className="dropdown-item" href="/">
                    Dropdown item
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* <!--  Nav item 3 Post --> */}
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="postMenu"
            data-toggle="dropdown"
            // aria-haspopup="true"
            aria-expanded="false"
          >
            Account
          </a>
          <ul className="dropdown-menu" aria-labelledby="postMenu">
            <li>

              <a className="dropdown-item" href="create-page.html">
                Create a page
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="settings.html">
                Settings
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="notifications.html">
                Notifications
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="help.html">
                Help center
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="help-details.html">
                Help details
              </a>
            </li>
            {/* <!--  dropdown submenu open left --> */}
            <li className="dropdown-submenu dropstart">
              <a className="dropdown-item dropdown-toggle" href="/">
                Authentication
              </a>
              <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                <li>

                  <a className="dropdown-item" href="sign-in.html">
                    Sign in
                  </a>
                </li>
                <li>

                  <a className="dropdown-item" href="sign-up.html">
                    Sing up
                  </a>
                </li>
                <li>

                  <a className="dropdown-item" href="forgot-password.html">
                    Forgot password
                  </a>
                </li>
                <li className="dropdown-divider"></li>
                <li>

                  <a className="dropdown-item" href="sign-in-advance.html">
                    Sign in advance
                  </a>
                </li>
                <li>

                  <a className="dropdown-item" href="sign-up-advance.html">
                    Sing up advance
                  </a>
                </li>
                <li>

                  <a className="dropdown-item" href="forgot-password-advance.html">
                    Forgot password advance
                  </a>
                </li>
              </ul>
            </li>
            <li>

              <a className="dropdown-item" href="error-404.html">
                Error 404
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="offline.html">
                Offline
              </a>
            </li>
            <li>

              <a className="dropdown-item" href="privacy-and-terms.html">
                Privacy &amp; terms
              </a>
            </li>
          </ul>
        </li>

        {/* <!--  Nav item 4 Mega menu --> */}
        <li className="nav-item">
          <a className="nav-link" href="my-profile-connections.html">
            My network
          </a>
        </li>
      </ul>
      {/* navlinks ended */}
    </>
  );
}
