export default function News() {
  return (
    <>
      <div className="col-sm-6 col-lg-12">
        <div className="card">
          {/* <!--  Card header START --> */}
          <div className="card-header pb-0 border-0">
            <h5 className="card-title mb-0">Today’s news</h5>
          </div>
          {/* <!--  Card header END --> */}
          {/* <!--  Card body START --> */}
          <div className="card-body">
            {/* <!--  News item --> */}
            <div className="mb-3">
              <h6 className="mb-0">
                <a href="blog-details.html">
                  Ten questions you should answer truthfully
                </a>
              </h6>
              <small>2hr</small>
            </div>
            {/* <!--  News item --> */}
            <div className="mb-3">
              <h6 className="mb-0">
                <a href="blog-details.html">
                  Five unbelievable facts about money
                </a>
              </h6>
              <small>3hr</small>
            </div>
            {/* <!--  News item --> */}
            <div className="mb-3">
              <h6 className="mb-0">
                <a href="blog-details.html">
                  Best Pinterest Boards for learning about business
                </a>
              </h6>
              <small>4hr</small>
            </div>
            {/* <!--  News item --> */}
            <div className="mb-3">
              <h6 className="mb-0">
                <a href="blog-details.html">
                  Skills that you can learn from business
                </a>
              </h6>
              <small>6hr</small>
            </div>
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
              View all latest news
            </a>
          </div>
          {/* <!--  Card body END --> */}
        </div>
      </div>
    </>
  );
}