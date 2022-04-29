import React from 'react';
import styled from 'styled-components';
import Navbar from "./Navbar";
import FAQ from "./FAQ";
import Analytics from "./Analytics";
import Earnings from "./Earnings";
import Transfers from "./Transfers";
import Profile from "./Profile";

function Dashboard() {
  return (
    <Section>
      <Navbar />
      <div className="grid">
        <div className="row_one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row_two">
          <Earnings />
          <Transfers />
          <Profile />
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
`;

export default Dashboard