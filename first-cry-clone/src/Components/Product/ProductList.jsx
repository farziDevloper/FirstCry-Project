import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { BsPinterest, BsFacebook } from "react-icons/bs";
import { FaGooglePlus } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import {mydata }from "../../redux/actions/productAction"
import {  Link } from "react-router-dom";


import { NavLink } from 'react-router-dom';
export const ProductList = () => {
    const [val, setVal] = useState("");
    const [value, setValue] = useState([]);
     
    const dispatch = useDispatch();
    const data = useSelector((state) => state.product.products);
      // console.log("data", data);
  
  const sortBylow = (m) => {
    if (m === "l") {
      let res = data.sort((a, b) => a.price - b.price);
      setValue([...res]);
      //console.log(res)
    } else if (m === "h") {
      let res = data.sort((a, b) => b.price - a.price);
      setValue([...res]);
      //console.log(res)
    }
  };
  
  useEffect(() => {
    dispatch(mydata());
  }, [dispatch]);
  const atoz = (arg) => {
      if(arg === "a"){
          let outcome =  data.sort((a, b) => a.title.localeCompare(b.title));
          setValue([...outcome])
      }else if(arg === "z"){
        let outcome =  data.sort((a, b) => b.title.localeCompare(a.title))
        setValue([...outcome])
      }
  }
  const [show, setShow ] = useState(false)
  const [filt , setFilt ] = useState(false)


  return (
    <div>
      <div className="Firstdiv">
        <div className="seconddiv dis-flex">
          <div className="divtext1">
            Home / Premium Boutiques / Own the Looks
          </div>
          <div className="divtext2">Boutique open until stocks last</div>
        </div>

        <div id="bannerImg">
          <div className="secondBannnerImg">
            <img
              src="https://cdn.fcglcdn.com/brainbees/images/cattemplate//wdl_110122_01.jpg"
              alt="Own the Looks"
            />
          </div>
        </div>
      </div>

      <div className="filter">
        <div className="divcontainer">
          <div className="head dis-flex">
            <div className="fleft"> 
<Button onClick={() => setShow(!show)} className="filterBtn" >Sort By: </Button>
    {show && <div className="btnsortFilter"> <Button  size="small" variant="contained" onClick={() => { sortBylow("l")}} >Low to High</Button>
<Button variant="contained"   onClick={() => { sortBylow("h")}} >High to Low</Button>
<Button variant="contained"   onClick={() => { atoz("a")}}  >A to Z</Button>   
<Button variant="contained"   onClick={() => { atoz("z")}}  >Z to A</Button> </div> }
            </div>
            <div className="rightDiv ">
              <div className="divCreater ">
              
                <div className="fdropdown">

           
                </div>
              </div>
        
            </div>
          </div>
        </div>
        <div className="menuBar">
          <div className="options">
        <Button onClick={() => setFilt(!filt)} className="filterBtn" >Filter By: </Button>

          {filt && <div className="btnsortFilter">   <Button id="filter_btns"  variant="contained"   onClick={() => setVal("Clothing")} > Clothing </Button>
          <Button id="filter_btns"  variant="contained"   onClick={() => setVal("Toys")} > Toys </Button>
          <Button id="filter_btns"  variant="contained"   onClick={() => setVal("Shoes")} > Shoes </Button>
          <Button id="filter_btns"  variant="contained"   onClick={() => setVal("Slippers")} > Slippers </Button>
          <Button id="filter_btns"  variant="contained"   onClick={() => setVal("Baggings")} > Bags </Button>
          <Button id="filter_btns"  variant="contained"   onClick={() => setVal("Electronic")} > Electronic </Button>
          <Button id="filter_btns"  variant="contained"   onClick={() => setVal("Sanitiser")} > Sanitiser </Button> </div>}

          </div>
        </div>
       
   
      </div>
      <div className="productLists">
        <div className="maincontainer">
          <div className="products" 
          // onClick={() => {navigate({id})}}
          >
            {data
             .filter((elements) => {
                if (elements.category === val) {
                  return elements.category === val;
                } else if (val === "") {
                  return elements;
                }
              })
            
            .map((item) => (
              <div key={item.id}  
               
              >
               
                <div className="productPart1"            
                >
                   <NavLink to={`/products/${item.id}`} className="navMapping" >
                
                    <div className="productsimg">
                      <img
                        src={item.images}
                        alt={item.name}
                        className="productsimg"
                      />
                    </div>

                    <div className="details">
                      <p>{item.title}</p>
                      <p>Multiple Sizes Available</p>
                      <span className="price newPrice">
                        <BiRupee />
                            {item.price}
                      </span>
                      <span className="price">
                        <BiRupee />
                        <span className="discount">
                        {item.price + 120}
                            </span>
                      </span>
                     
                      <div className="blockData">
                        <span className="starImg"></span>
                        <span className="pText">
                          Club Price: <BiRupee />
                          {Math.round(item.price - (item.price * 10)/100 ) }
                        </span>
                      </div>
                    </div>
                    </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


