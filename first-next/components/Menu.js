import React, { useState, useEffect } from 'react'


const Menu = () => {
    const [items] = useState([1, 2, 3, 4, 5]);

    const menuItems = items.map(item =>
        <div className="sidenav__item" >
            {item}
        </div>)
    return (


        <div class="sidenav">
            <div className="company-logo"><img src="image/logo.png" className="company-logo-image" /></div>
            {menuItems}
            <div className="company-logo-name">Codecraft</div>
            <style jsx global>{`
            .sidenav {
    height: 100%;
    width: 88px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-image: linear-gradient(-135deg, #2E3166 0%, #3B244A 100%);
    overflow-x: hidden;
  }
  
  .company-logo{
    background-image: linear-gradient(-135deg, #7782FF 0%, #8072FD 100%);
    width:100%;
    height:70px;
    display: inline-block;
    background-repeat: no-repeat;
    background-color: black;
  }

  .company-logo-image{
    padding: 25px;
    width: 37px;
    height: 20px;
  }

  .company-logo-name{
    margin-top: 175px;
    opacity: 0.2;
    transform: rotate(-90deg);
    font-family: JosefinSans-Bold;
    font-size: 24px;
    color: #FFFFFF;
    text-shadow: 0 6px 4px rgba(0,0,0,0.64);
  }

.sidenav__item{
    text-align: center;
    background-repeat: no-repeat; 
    background-position: center;
    background-size: contain;
    color: transparent;
    margin: 15px 10px 0px 6px;
    filter:    none;
  }

  .sidenav__item:hover,.header-icons:hover{
    filter:invert();
    cursor: pointer;
          
  }

  [data-highcharts-chart]{
    overflow:unset!important;
  }

  .highcharts-container {
    overflow:unset!important;
  }`}
            </style>
        </div>


    )
}

export default Menu