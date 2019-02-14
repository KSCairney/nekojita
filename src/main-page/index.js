import React, { Component } from 'react';
import './main-page.css';
import Header from './header';
import FeaturedRoast from './featured-roast';
import RoastFilter from './roast-filter';
import SearchResults from '../search-results';
import RoastDetail from '../roast';
import ContactUs from './contact.js';

class App extends Component {
  state = {
    contactShown: false
  }

  componentDidMount() {
    this.fetchCoffees();
  }

  fetchCoffees = () => {
    fetch('/coffees.json')
    .then(rsp => rsp.json())
    .then(allCoffees => {
      this.allCoffees = allCoffees;
      this.determineFeaturedRoast();
      this.determineUniqueRoasts();
    })
  }

  determineFeaturedRoast = () => {
    if (this.allCoffees) {
      const randomIndex = Math.floor(Math.random() * this.allCoffees.length);
      const featuredRoast = this.allCoffees[randomIndex];
      this.setState({ featuredRoast });
    }
  }

  determineUniqueRoasts = () => {
    const roasts = this.allCoffees
      ? Array.from(new Set(this.allCoffees.map(h => h.roast)))
      : [];
    roasts.unshift(null);
    this.setState({ roasts });
  }

  filterRoasts = (roast) => {
    this.setState({ activeRoast: null });
    const filteredRoasts = this.allCoffees.filter((h) => h.roast === roast);
    this.setState({ filteredRoasts });
    this.setState({ roast });
  }

  setActiveRoast = (roast) => {
    this.setState({ activeRoast: roast });
  }

  contactToggle = () => {
    this.setState({ contactShown: !this.state.contactShown })
  }

  render() {
    const contact = this.state.contactShown ?
      <ContactUs /> : null;

    let activeComponent = null;
    if (this.state.roast)
    activeComponent = <SearchResults roast={this.state.roast}
      filteredRoasts={this.state.filteredRoasts} setActiveRoast={this.setActiveRoast} />;
    if (this.state.activeRoast)
      activeComponent = <RoastDetail roast={this.state.activeRoast}/>;
    if (!activeComponent)
      activeComponent = <FeaturedRoast roast={this.state.featuredRoast} />;
    return (
      <div className="container">
        <Header subtitle = "small_batch_coffee_roasters"/>
        <RoastFilter roasts={this.state.roasts} filterRoasts={this.filterRoasts} />
        {activeComponent}
        <button onClick={this.contactToggle} className="btn btn-primary">Contact Us</button>
        {contact}
      </div>
    )
  }
}

export default App;
