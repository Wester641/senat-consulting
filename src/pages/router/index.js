import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Lazy load pages for better performance
const HomePage = lazy(() => import("../HomePage"));
const AboutPage = lazy(() => import("../AboutPage"));
const PracticePage = lazy(() => import("../PracticePage"));
const CaseStudiesPage = lazy(() => import("../CaseStudiesPage"));
const CaseDetailsPage = lazy(() => import("../CaseDetailsPage"));
const PracticeDetailsPage = lazy(() => import("../PracticeDetailsPage"));
const ContactPage = lazy(() => import("../ContactPage"));
const FAQPage = lazy(() => import("../FAQPage"));
const BlogPage = lazy(() => import("../BlogPage"));
const BlogPageSidebar = lazy(() => import("../BlogPageSidebar"));
const BlogPageFullwidth = lazy(() => import("../BlogPageFullwidth"));
const BlogSingleSidebar = lazy(() => import("../BlogSingleSidebar"));
const BlogDetailsFullwidth = lazy(() => import("../BlogDetailsFullwidth"));
const PersonalDetailPage = lazy(() => import("../PersonalDetailPage"));

// Loading component
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '18px',
    color: '#e3e3e3ff',
    backgroundColor: '#0c5050',
    animation: 'pulse 2s infinite'
  }}>
    Loading...
  </div>
);

const AllRoute = () => {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/practice" component={PracticePage} />
            <Route path="/case-stadies" component={CaseStudiesPage} />
            <Route path="/case-stadies-details" component={CaseDetailsPage} />
            <Route path="/practice-details/:id" component={PracticeDetailsPage} />
            <Route path="/personal-detail" component={PersonalDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/faq" component={FAQPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/blog-list" component={BlogPageSidebar} />
            <Route path="/blog-fullwidth" component={BlogPageFullwidth} />
            <Route path="/blog-single" component={BlogSingleSidebar} />
            <Route
              path="/blog-single-fullwidth/:id"
              component={BlogDetailsFullwidth}
            />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default AllRoute;

