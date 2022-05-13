import Button from '@mui/material/Button';
import React, { useEffect , useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { useParams, Link } from "react-router-dom";
import "./ProductSchema.css";
import { BiRupee } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { addToCart } from "../../redux/action";
import { CCardBody } from '@coreui/react'
import { CCardImage } from '@coreui/react'
import { CCardText } from '@coreui/react'
import { CCardTitle } from '@coreui/react'
import { CCard } from '@coreui/react'
import { CRow , CCol} from '@coreui/react'




export const  ProductSchema = () => {
  const { id } = useParams();
  // console.log(id);
  const [product , setProduct] = useState([])
  const [loading , setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product)  =>{      
    dispatch(addToCart(product))
  }
  useEffect(() => {
    const getProducts = async () => {
        setLoading(true)
        const response =  await fetch(`https://first-cry-db.herokuapp.com/data/${id}`)
        setProduct(await response.json())
        setLoading(false)
        // console.log(product);
    }
    getProducts()
},[] )

const Loading = () => {
    return <>
    <h1>Loading . .  . . . </h1>
    </>
}
  const ShowProducts = () => {
    return <>
    <CCard className="mb-4 mainBox" style={{ maxWidth: '100%' }}>
  <CRow className="g-0 newRow">
    <CCol md={4} >
      <CCardImage src={product.images} />
    </CCol>
    <CCol md={10}>
      <CCardBody>
        <CCardTitle style={{fontSize:"24px"}}>{product.title}</CCardTitle>
        <CCardText style={{fontSize:"20px", color:"black"}}>
         {product.desc}
        <div> 
          <h3>₹ : {product.price}</h3>
          <p> <b>{product.gender}</b> </p>
        </div>
        </CCardText>
     <span>colors :  {product.colors}</span>
        <CCardText>
          <small className="text-larger-emphasis">Material : {product.fabric}</small>
        </CCardText>
        <Button variant="contained" disableElevation 
   onClick={() => addProduct(product)}
  >
  Add To Cart
</Button>
      </CCardBody>
    </CCol>
  </CRow>

  
</CCard>
    </>
  }
  return (<>
       {loading ? <Loading /> : <ShowProducts /> }
  </>
   
  );
}


