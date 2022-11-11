import React, { useEffect } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = (props) => {

  useEffect(() => {
    console.log(props)
  }, [])

  function onInput(e) {
    let value = e.target.value;
      props.onLoad(
        "all",
        value.length >= 3 ? agent.Items.byTitle(value) : agent.Items.all(),
        Promise.all([agent.Tags.getAll(), value.length >= 3 ? agent.Items.byTitle(value) : agent.Items.all()])
      );
  }

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <div id="search-container">
          <input type="search" placeholder="What is it that you truly desire?" id="search-box" onInput={onInput} />
          <span className="icon">🔍</span>
          </div>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
