import React, { useState } from 'react';
import './Product.css';
import Footer from './Footer';
import {NavLink} from 'react-router-dom'

const Product = () => {
  const [appliances, setAppliances] = useState([
    { id: 1, name: 'Washing Machine', description: 'LG 7 Kg 5 Star Semi-Automatic Top Loading Washing Machine', imageLink: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcllUCjOu-eL1Q26TvMrPB-a6xsK_K5j3foF1xRGHGjEArlSD8Mv971iLEE0yOObiHVycbUGqXbnUfujAIc7Hbl62z6nzuA3Mx0JmopOyJ61gQ6CWn98Hx', cost: '800$' },
    { id: 2, name: 'chimmney', description: 'Faber 90 cm 1200 m³/hr Auto-clean Slant Chimney', imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3ZK28Jzpgl_GfrcgKucY3CCWcVqlScz6HA&usqp=CAU', cost:'350$' },
    { id: 3, name: 'Oven', description: 'Lifelong 9 Litres 1100 W Oven, Toaster & Griller OTG Oven for Baking Cake, Pizza, Grilling and Toasting at Home', imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK_tZdLgiN8lWjeGVSQKfTDa9DFf1K-g1bzw&usqp=CAU',cost:'300$'},
    { id: 4, name: 'Refrigerator', description: 'Bosch MaxFlex Convert 332L Inverter Frost Free Triple Door Refrigerator', imageLink: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSN5OvmRZzpNuBmjvxytBQIj9cbfC1oxnpLpmuLFY0ZHbJenliPZMHrhpXxII0YlsRXmxsYCC0vv-00pG744-KLvL6p6DWqaIn7eSqV-m6XQaufA2Ow6k-xiA',cost:'400$' },
    { id: 5, name: 'Dishwasher', description: 'Neptune VX 12 Place Setting Dishwasher', imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefmGP0XOs6EtTaojJUwHchCURTQGbiB0ETw&usqp=CAU',cost:'249$' },
    { id: 6, name: 'Iron Box', description: 'Impex Electric IronBox Heavy weight Fabrika', imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QPa5jaq6QgW1EbhEsufeAvIp65UtCmdwAw&usqp=CAU',cost:'59$' },
    
  ]);

  const handleImageLinkChange = (id, value) => {
    setAppliances(prevAppliances => (
      prevAppliances.map(appliance => (
        appliance.id === id ? { ...appliance, imageLink: value } : appliance
      ))
    ));
  };

  return (<>
  
    <div className="home-container">
      
     <section className="hero">
        <h1>Book Your Appliances Online</h1>
        <p>Convenient and hassle-free appliance booking at your fingertips.</p>
      </section>
        <h2><center>Available Appliances</center></h2>
      <section className="appliance-section">
        {appliances.map(appliance => (
          <div className="appliance-card" key={appliance.id}>
            <h3><center><u>{appliance.name}</u></center></h3>
            <p><centre>{appliance.description}</centre></p>
            {appliance.imageLink && (
             <center> <img src={appliance.imageLink} alt={appliance.name} className="appliance-image" /></center>
            )}
            <button>Buy <h4>{appliance.cost}</h4></button>
          </div>
        ))}
       
      </section>
    </div>
   <Footer></Footer> </>
  );
};

export default Product;
