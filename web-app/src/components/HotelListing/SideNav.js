import React,{ useState } from 'react'
import './HotelListing.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import { imageListClasses } from '@mui/material';
import HotelListingCard from './HotelListingCard';
function SideNav(props) {
  //price slider
  console.log(props)
  let hotelData = props.HotelData
  const [value, setValue] = React.useState(1000);
  const handleChange = (event, newValue) => {
    const newHotelData = props.HotelData.filter((item)=>item.offerprice <= newValue)
    props.setData(newHotelData)
    // console.log(typeof newValue)
    setValue(newValue);
  }
  const [hotelFacilitites, setHotelFacilitites] = React.useState([])

  React.useEffect(()=>{
    if(hotelFacilitites.length > 0){
    const hotelamenities =  props.HotelData.map((facility) => {
      return {productId:facility.id, amenitiesArray:facility.amenities}
     })
     console.log(hotelamenities)
     const requiredAmenities = hotelamenities.map((amenity)=>{
      const data = amenity.amenitiesArray.filter((aminity)=>{
        
        return aminity.available == true
      })
      

      return {productId:amenity.productId, amenitiesArray:data}
     })
     
     console.log(requiredAmenities)
     const data2 = requiredAmenities.map((item) =>{
      const res2 =   item.amenitiesArray.map((data) => {
        const res =  hotelFacilitites.map((data3) =>{
            if(data3 == data.amenity){
              console.log(data)
              return data
              
            }
          })
          return res.filter((item)=> item !== undefined)
        })
        return {amenitiesArray:res2.filter((item)=> item !== undefined).filter((item)=> item.length >0), productId:item.productId}
     })
     const responseObject = data2.filter((item)=> item.amenitiesArray.length >0);
     const producIds = responseObject.map((obj) => obj.productId)
     const filteredItems = props.HotelData.filter((item) => producIds.includes(item.id))
     console.log(filteredItems)
     props.setData(filteredItems)
    } else {
      props.setData(props.HotelData)
    }
  },[hotelFacilitites])
  const handleHotelFacilities = (e) => {
    let updatedHotelFacilitites;
    if(e.target.checked){
       updatedHotelFacilitites = [...hotelFacilitites, e.target.value]
    } else {
      updatedHotelFacilitites = hotelFacilitites.filter((item)=> item !== e.target.value)
    }
    console.log(updatedHotelFacilitites)
    setHotelFacilitites(updatedHotelFacilitites)
  }
  const [Collections,setCollections] = React.useState([])
  React.useEffect(()=>{
    if(Collections.length > 0){
    const Collections2  =  props.HotelData.map((Collection) => {
      return {productId:Collection.id, CollectionsArray:Collection.Collections  }
     })
     const requiredCollections = Collections2.map((Collection)=>{
      const data = Collection.CollectionsArray.filter((Collection)=>{
        return Collection.avaialable == true
      })
      return {productId:Collection.productId, CollectionsArray:data}
     })
     const data2 = requiredCollections.map((item) =>{
      const res2 =   item.CollectionsArray.map((data) => {
        const res =  Collections.map((data3) =>{
            if(data3 == data.Collection){
              return data
            }
          })
          return res.filter((item)=> item !== undefined)
        })
        return {CollectionsArray:res2.filter((item)=> item !== undefined).filter((item)=> item.length >0), productId:item.productId}
     })
     const responseObject = data2.filter((item)=> item.CollectionsArray.length >0);
     const producIds = responseObject.map((obj) => obj.productId)
     const filteredItems = props.HotelData.filter((item) => producIds.includes(item.id))
     props.setData(filteredItems)
    } else {
      props.setData(props.HotelData)
    }
  },[Collections])
  const handleCollections = (e) => {
    let updatedCollections;
    if(e.target.checked){
      updatedCollections = [...Collections, e.target.value]
    } else {
      updatedCollections = Collections.filter((item)=> item !== e.target.value)
    }
    console.log(updatedCollections)
    setCollections(updatedCollections)
  }
  const [AccomodationType,setAccomodationType] = React.useState([])
  React.useEffect(()=>{
    if(AccomodationType.length > 0){
    const AccomodationType2  =  props.HotelData.map((type) => {
      return {productId:type.id, AccomodationTypeArray:type.AccomodationType }
     })
     console.log(AccomodationType2)
     const requiredAccomodationType = AccomodationType2.map((type)=>{
      const data = type.AccomodationTypeArray.filter((type)=>{
        return type.availability == true
      })
      return {productId:type.productId, AccomodationTypeArray:data}
     })
     console.log(requiredAccomodationType)
     const data2 = requiredAccomodationType.map((item) =>{
      const res2 =   item.AccomodationTypeArray.map((data) => {
        const res =  AccomodationType.map((data3) =>{
            if(data3 == data.type){
              return data
            }
          })
          return res.filter((item)=> item !== undefined)
        })
        return {AccomodationTypeArray:res2.filter((item)=> item !== undefined).filter((item)=> item.length >0), productId:item.productId}
     })
     const responseObject = data2.filter((item)=> item.AccomodationTypeArray.length >0);
     const producIds = responseObject.map((obj) => obj.productId)
     const filteredItems = props.HotelData.filter((item) => producIds.includes(item.id))
     props.setData(filteredItems)
    } else {
      props.setData(props.HotelData)
    }
  },[AccomodationType])
  const handleAccomodationType = (e) => {
    let updatedAccomodationType;
    if(e.target.checked){
      updatedAccomodationType = [...AccomodationType, e.target.value]
    } else {
      updatedAccomodationType = Collections.filter((item)=> item !== e.target.value)
    }
    console.log(updatedAccomodationType)
    setAccomodationType(updatedAccomodationType)
  }
  const [checkInFeatures,setcheckInFeatures] = React.useState([])
  React.useEffect(()=>{
    if(checkInFeatures.length > 0){
    const checkInFeatures2  =  props.HotelData.map((checkInFeature) => {
      return {productId:checkInFeature.id, checkInFeaturesArray:checkInFeature.checkInFeatures }
     })
     console.log(checkInFeatures2)
     const requiredcheckInFeatures = checkInFeatures2.map((checkInFeature)=>{
      const data = checkInFeature.checkInFeaturesArray.filter((type)=>{
        return type.availability == true
      })
      return {productId:checkInFeature.productId, checkInFeaturesArray:data}
     })
     const data2 = requiredcheckInFeatures.map((item) =>{
      const res2 =   item.checkInFeaturesArray.map((data) => {
        const res =  checkInFeatures.map((data3) =>{
            if(data3 == data.checkInFeature){
              return data
            }
          })
          return res.filter((item)=> item !== undefined)
        })
        return {checkInFeaturesArray:res2.filter((item)=> item !== undefined).filter((item)=> item.length >0), productId:item.productId}
     })
     const responseObject = data2.filter((item)=> item.checkInFeaturesArray.length >0);
     const producIds = responseObject.map((obj) => obj.productId)
     const filteredItems = props.HotelData.filter((item) => producIds.includes(item.id))
     props.setData(filteredItems)
    } else {
      props.setData(props.HotelData)
    }
  },[checkInFeatures])
  const handlecheckInFeatures = (e) => {
    let updatedcheckInFeatures;
    if(e.target.checked){
      updatedcheckInFeatures = [...checkInFeatures, e.target.value]
    } else {
      updatedcheckInFeatures = Collections.filter((item)=> item !== e.target.value)
    }
    console.log(updatedcheckInFeatures)
    setcheckInFeatures(updatedcheckInFeatures)
  }
  return (
    <div >
    <Toolbar />
    <Divider />
    <div className='headtext'>
    <h4>Price</h4>
    </div>
    <div className='slider'>
    <Box width={300}>
    <Slider defaultValue={1000} marks min={1000} max={5000} valueLabelDisplay="auto" aria-label="Always visible"
    step={500}  value={value} onChange={handleChange} />
</Box>
    </div>
   <Divider />
   <div className='headtext'>
   <h4>Hotel Facilities</h4>
   </div>
   <div className='checkbox'>
   <FormGroup>
     <FormControlLabel control={<Checkbox value="Refrigerator" onClick={handleHotelFacilities} />} label="Refrigerator" />
     <FormControlLabel control={<Checkbox value="Seating_Area" onClick={handleHotelFacilities}/>} label="Seating Area" />
     <FormControlLabel control={<Checkbox value="Ac" onClick={handleHotelFacilities}/>} label="Ac" />
    </FormGroup>
   </div>
    <Divider />
   <div className='headtext'>
   <h4>Collections</h4>
   </div>
   <div className='checkbox'>
   <FormGroup>
     <FormControlLabel control={<Checkbox value="Family_Hotel" onClick={handleCollections} />} label="Familiy Hotel's" />
     <FormControlLabel control={<Checkbox value="Local_ID's_accepted" onClick={handleCollections}/>} label="Local ID's accepted" />
     <FormControlLabel control={<Checkbox value="Hotels_Welcomes_Couples" onClick={handleCollections}/>} label="Hotels Welcomes Couples" />
    </FormGroup>
   </div>
   <Divider />
   <div className='headtext'>
   <h4>Accomodation Type</h4>
   </div>
   <div className='checkbox'>
   <FormGroup>
     <FormControlLabel control={<Checkbox value="Hotels" onClick={handleAccomodationType}/>} label="Hotels" />
     <FormControlLabel control={<Checkbox  value="Hostels" onClick={handleAccomodationType}/>} label="Hostels" />
    </FormGroup>
   </div>
   <Divider />
   <div className='headtext'>
   <h4>Check-in features</h4>
   </div>
   <div className='checkbox'>
   <FormGroup>
     <FormControlLabel control={<Checkbox value="payAtHotel" onClick={handlecheckInFeatures} />} label="Pay at Hotel" />
    </FormGroup>
   </div>
   <Divider />
  </div>
  )
}
export default SideNav