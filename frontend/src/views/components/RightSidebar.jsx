import FollowSuggestion from "./FollowSuggestion";
import News from "./News";

export default function RightSidebar() {
  return (
    <>
      {/* <!--  Right sidebar START --> */}
      <div className="col-lg-3">
        <div className="row g-4">
          {/* <!--  Card follow START --> */}
          <FollowSuggestion />
          {/* <!--  Card follow START --> */}

          {/* <!--  Card News START --> */}
          <News />
          {/* <!--  Card News END --> */}
        </div>
      </div>
      {/* <!--  Right sidebar END --> */}
    </>
  );
}