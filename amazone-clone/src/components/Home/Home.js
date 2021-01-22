import React from "react";
import "./Home.css";
import Product from "../../components/Product/Product";
import hero from "../../assets/img/hero_img.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={hero} alt="" />

        <div className="popular__items">
          <h1>Popular Items</h1>
        </div>

        <div className="home__row">
          <Product
            id="12321341"
            title="Jordan 1 Retro High Off-White University Blue"
            price={1400.0}
            rating={5}
            image="https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Off-White-University-Blue/Images/Air-Jordan-1-Retro-High-Off-White-University-Blue/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606321054&w=1000"
          />
          <Product
            id="49538094"
            title="Jordan 1 Retro High Off-White Chicago"
            price={4700.0}
            rating={4}
            image="https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Off-White-Chicago/Images/Air-Jordan-1-Retro-High-Off-White-Chicago/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606322952&w=1000"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Jordan 1 Retro High Off-White White"
            price={3000.0}
            rating={3}
            image="https://stockx-360.imgix.net/Air-Jordan-1-Retro-High-Off-White-White/Images/Air-Jordan-1-Retro-High-Off-White-White/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1607656930&w=1000"
          />
          <Product
            id="23445930"
            title="Nike Kobe 6 Protro Grinch (2020)"
            price={320}
            rating={5}
            image="https://stockx-360.imgix.net/Nike-Kobe-6-Protro-Grinch/Images/Nike-Kobe-6-Protro-Grinch/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1609445833&w=1000"
          />
          <Product
            id="3254354345"
            title="adidas Yeezy Boost 350 V2 Black Red (2017/2020)"
            price={370}
            rating={4}
            image="https://stockx-360.imgix.net/adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017/Images/adidas-Yeezy-Boost-350-V2-Core-Black-Red-2017/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1606320792&w=1000"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Converse Chuck Taylor All-Star Vulcanized Hi Off-White"
            price={900}
            rating={4}
            image="https://stockx-360.imgix.net/Converse-Chuck-Taylor-All-Star-Hi-Off-White/Images/Converse-Chuck-Taylor-All-Star-Hi-Off-White/Lv2/img01.jpg?auto=format,compress&q=90&updated_at=1610079983&w=1000"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
