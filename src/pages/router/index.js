import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages imports - все страницы используют единый формат Page в названии папки
import HomePage from "../HomePage";
import AboutPage from "../AboutPage";
import PracticePage from "../PracticePage";
import CaseStudiesPage from "../CaseStudiesPage";
import PracticeDetailsPage from "../PracticeDetailsPage";
import ContactPage from "../ContactPage";
import BlogPageFullwidth from "../BlogPageFullwidth";
import BlogDetailsFullwidth from "../BlogDetailsFullwidth";
import PersonalDetailPage from "../PersonalDetailPage";

const AllRoute = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/practice" component={PracticePage} />
          <Route path="/case-stadies" component={CaseStudiesPage} />
          <Route path="/practice-details/:id" component={PracticeDetailsPage} />
          <Route path="/personal-detail" component={PersonalDetailPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/blog-fullwidth" component={BlogPageFullwidth} />
          <Route
            path="/blog-single-fullwidth/:id"
            component={BlogDetailsFullwidth}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default AllRoute;

