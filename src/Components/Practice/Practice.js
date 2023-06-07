import {Link, Route, Routes} from "react-router-dom"
import "../Practice/Practice.css"
import React, { Component } from "react";
import dummyText from "./DummyText"
import Nav from "./Nav"
import Section from "./Section";



export const Practice = () => {
  return (
    <div className="App">
        <Nav />
        <Section
          title="Section 1"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Section
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={true}
          id="section5"
        />
      </div>
  )
}
