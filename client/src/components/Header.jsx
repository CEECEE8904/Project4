import React from 'react';


export default function Header() {
  return (
    <header>
      <h4 className="banner-title">TRENDING SUMMER 2019</h4>
      <div class="banner">
        <img src={require('./images/banner.jpg')} />
      </div>
    </header>
  )
};