export default function Search() {
  return (
    <>
      {/* <!--  Nav Search START --> */}
      <div className="nav mt-3 mt-lg-0 flex-nowrap align-items-center px-4 px-lg-0">
        <div className="nav-item w-100">
          <form className="rounded position-relative">
            <input
              className="form-control ps-5 bg-light"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <button
              className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
              type="submit"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
      {/* <!--  Nav Search END --> */}
    </>
  );
}
