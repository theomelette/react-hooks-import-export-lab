import React from "react";
import * as username from '../data/user.js'
import * as city from '../data/user.js'

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export function Home()