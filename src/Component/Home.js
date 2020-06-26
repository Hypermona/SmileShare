import React, { Component } from "react";
import Navbar from "./Header";
import Tree from "./Tree";
import Jokes from "./Jokes";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="view">
          <div className="part1">
            <Tree />
          </div>
          <div class="vl"></div>
          <div className="onemore">
            <div className="part2">
              <Jokes />
              <Jokes />
              <Jokes />
              <Jokes />
              <Jokes />
              <Jokes />
            </div>
            <div className="part2">
              <Jokes />
              <Jokes />
              <Jokes />
              <Jokes />
              <Jokes />
              <Jokes />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
