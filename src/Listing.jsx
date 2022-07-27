import React from "react";
import "./Listing.css";
class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNames: [
        {
          id: 1,
          name: "Anarkali Kurti",
          img: "https://images.meesho.com/images/products/1049184/2_400.webp",
          link: "https://www.meesho.com/women-crepe-flared-printed-yellow-kurti/p/mhk0",
          off: "15% off",
        },
        {
          id: 2,
          name: "Aagam  Kurtis",
          img: "https://images.meesho.com/images/products/51153281/0heog_400.webp",
          link: "https://www.meesho.com/trendy-superior-kurtis/p/uge4h",
          off: "15% off",
        },
        {
          id: 3,
          name: "Alisha  Kurta",
          img: "https://images.meesho.com/images/products/79949590/6spyz_400.webp",
          link: "https://www.meesho.com/jivika-alluring-women-kurta-sets/p/1bllhy",
          off: "13% off",
        },
        {
          id: 4,
          name: "Front Slit",
          img: "https://images.meesho.com/images/products/6611275/f9f5c_400.webp",
          link: "https://www.meesho.com/women-rayon-high-slit-solid-yellow-kurti/p/3xpaj",
          off: "15% off",
        },
        {
          id: 5,
          name: "Adrika Kurti",
          img: "https://images.meesho.com/images/products/69181261/v7slz_400.webp",
          link: "https://www.meesho.com/adrika-ensemble-kurtis/p/156slp",
          off: "15% off",
        },
        {
          id: 6,
          name: "Banita Kurta",
          img: "https://images.meesho.com/images/products/42458536/npbjb_400.webp",
          link: "https://www.meesho.com/banita-ensemble-women-dupatta-sets/p/pa17s",
          off: "9% off",
        },
        {
          id: 7,
          name: "Aagyeyi Fashion",
          img: "https://images.meesho.com/images/products/55751936/al505_400.webp",
          link: "https://www.meesho.com/aagyeyi-fashionable-kurtis/p/x6ygw",
          off: "13% off",
        },
        {
          id: 8,
          name: "Alisha Fashion",
          img: "https://images.meesho.com/images/products/48920314/opilc_512.webp",
          link: "https://www.meesho.com/aakarsha-petite-kurtis/p/t4j5m",
          off: "23% off",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <h2>Product Listing Page In React.js</h2>
        <hr />
        <div className="wrap">
          {this.state.listNames.map((item) => (
            <div className="col-md-3">
              <a href={item.link} target="_blank">
                <div className="card">
                  <img className="cardImg" src={item.img} alt="kurtis" />
                  <div className="cardName">{item.name}</div>
                  <div className="offer">{item.off}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Listing;
