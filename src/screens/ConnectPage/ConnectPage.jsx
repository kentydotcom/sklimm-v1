import React from "react";
import "./style.css";

export const ConnectPage = () => {
  return (
    <div className="connect-page">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="text-wrapper">Serendale</div>
          <div className="div">Elevate Your Blogging</div>
          <div className="text-wrapper-2">Experience</div>
          <div className="navbar">
            <div className="text-wrapper-3">Services</div>
            <div className="text-wrapper-4">Smart Contracts</div>
            <div className="text-wrapper-5">Solutions</div>
            <div className="text-wrapper-6">Roadmap</div>
            <div className="text-wrapper-7">Whitepaper</div>
          </div>
          <p className="p">
            Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of
            Stake, its consensus algorithm enables unlimited speeds.
          </p>
          <img className="group" alt="Group" src="https://c.animaapp.com/6stSPytI/img/group-2@2x.png" />
          <div className="cta">
            <div className="frame">
              <div className="text-wrapper-8">Get started</div>
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-8">Ecosystems</div>
            </div>
          </div>
          <img
            className="serendale-ai"
            alt="Serendale ai"
            src="https://c.animaapp.com/6stSPytI/img/serendale-ai-alternate@2x.png"
          />
        </div>
      </div>
    </div>
  );
};
