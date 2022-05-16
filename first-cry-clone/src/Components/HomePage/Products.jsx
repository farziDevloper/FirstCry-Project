import React, { useState , useEffect} from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";

let data = [
  {
    id: 1,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26596.webp",
    title: "Own The Looks",
    link: "/products",
    desc: "Best Styles Of The Season",
  },
  {
    id: 2,
    image:
    "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26587.webp",
  title: "Own The Looks",
  link: "/products",
  desc: "Best Styles Of The Season",
  },
  {
    id: 3,
    image:
    "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26594.webp",
  title: "Own The Looks",
  link: "/products",
  desc: "Best Styles Of The Season",
  },
  {
    id: 4,
    image:
    "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26592.webp",
  title: "Own The Looks",
  link: "/products",
  desc: "Best Styles Of The Season",
  },
  {
    id: 5,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26599.webp",
    title: "Own The Looks",
    link: "/products",
    desc: "Best Styles Of The Season",
  },
  {
    id: 6,
    image:
    "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26599.webp",
  title: "Own The Looks",
  link: "/products",
  desc: "Best Styles Of The Season",
  },
  {
    id: 7,
    image:
      "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26588.webp",
    title: "Own The Looks",
    link: "/products",
    desc: "Best Styles Of The Season",
  },
  {
    id: 8,
    image:
    "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26586.webp",
  title: "Own The Looks",
  link: "/products",
  desc: "Best Styles Of The Season",
  },
  {
    id: 9,
    image:
    "https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/26597.webp",
  title: "Own The Looks",
  link: "/products",
  desc: "Best Styles Of The Season",
  }
];

export const Products = () =>  {
  const [state, setState] = useState([])
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://firstcry.herokuapp.com/data`)
      .then((response) => response.json())
      .then((data) => setState(data))
      .then((err) => console.log(err));
  }, [page]);

  
  return (<>
      <div className="premiumSection">
    <div className="ptitle">PREMIUM BOUTIQUES</div>
      <div className="premiumSectioncontainer">
        {data.map((item) => (
          <div className="premiumSectioncBox" key={item.id}>
            <img src={item.image} alt=".." />
            <Link to={item.link}>
              <div className="ptext">
                <div className="phead">{item.title}</div>
                <div className="desc">{item.desc}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="viewall">
        <div className="v1">
          <Link to="/products">View All Boutiques <IoMdArrowDropright className="arrow_logo" /> </Link>
        </div>
        <div className="v2">
          <Link to="/products"> View All Premium Brands <IoMdArrowDropright className="arrow_logo" /> </Link>
        </div>
      </div>
    </div>
    </>
  );
}

