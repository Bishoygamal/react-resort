import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer"
      },

    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
            {this.state.services.map((item,index)=>{
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            })}
        </div>
      </section>
    );
  }
}
