import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import Homepage from '../HomePage'
import Homepage2 from '../HomePage2'
import AboutPage from '../AboutPage'
import PracticePage from '../PracticePage'
import CaseStadies from '../CaseStadies'
import Attorneys from '../Attorneys'
import CaseStadiesDetails from '../Casedetails'
import PracticeDetails from '../PracticeDetails'
import Attorneysdetails from '../Attorneysdetails'
import ContactPage from '../ContactPage'
import FAQPage from '../FAQPage'
import BlogPage from '../BlogPage'
import BlogPageSidebar from '../BlogPageSidebar'
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogSingleSidebar from '../BlogSingleSidebar'
import BlogDetailsFullwidth from '../BlogDetailsFullwidth'

const AllRoute = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage2} />
          <Route path='/about' component={AboutPage} />
          <Route path='/practice' component={PracticePage} />
          <Route path='/case-stadies' component={CaseStadies} />
          <Route path='/Attorneys' component={Attorneys} />
          <Route path='/case-stadies-details' component={CaseStadiesDetails} />
          <Route path='/practice-details' component={PracticeDetails} />
          <Route path='/Attorneys-single' component={Attorneysdetails} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/faq' component={FAQPage} />
          <Route path='/blog' component={BlogPage} />
          <Route path='/blog-list' component={BlogPageSidebar} />
          <Route path='/blog-fullwidth' component={BlogPageFullwidth} />
          <Route path='/blog-single' component={BlogSingleSidebar} />
          <Route path='/blog-single-fullwidth' component={BlogDetailsFullwidth} />

        </Switch>
      </Router>

    </div>
  );
}

export default AllRoute;
