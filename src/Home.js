import React from 'react'
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
          <div className="home_container">
              <img 
              className="home_image"
              src="https://www.aquaupgrade.com/wp-content/uploads/2020/08/AmazonPrimeVideo-genetic.jpg"
               alt=""/>

               <div className="home__row">
                   <Product
                   id="1232145"
                   title="The lean startup"
                   price={79.89}
                   image="https://media.gatesnotes.com/-/media/Images/Books/Why-We-Sleep/EOYB_20191126_Book_WhyWeSleep_blogroll_800x494_v1.ashx"
                   rating={5}
                   />
                   <Product
                   id="1232148"
                   title="I-phone"
                   price={54500}
                   image="https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1-500x500.jpg"
                   rating={4}
                   />
               </div>
               <div className="home__row">
               <Product
                id="1232149"
                title="Glass bottle"
                price={2500}
                image="https://5.imimg.com/data5/VM/QE/MY-28220450/bottle-screen-printing-service-500x500.jpg"
                rating={3}/>
               <Product
               id="1232149"
               title="Godrej 236 L 2 Star Inverter Frost-Free Double Door Refrigerator (RF EON 236B 25 HI SC DR, Scarlet Dremin)"
               price={34000}
               image="https://images-na.ssl-images-amazon.com/images/I/71-XsJoSe1L._SL1500_.jpg"
               rating={4}
               />
               <Product
                 id="1232151"
                 title="Bring the emotion into any room with the Philips TV that’s designed to fit right in. Picture quality is so sharp you’ll think you’re there."
                 price={65000}
                 image="https://images.philips.com/is/image/PhilipsConsumer/58PUT6604_94-IMS-en_IN?$jpglarge$&wid=960"
                 rating={5}
               />
               </div>
               <div className="home__row">
               <Product
                 id="1232152"
                 title="Bring the emotion into any room with the Philips TV that’s designed to fit right in. Picture quality is so sharp you’ll think you’re there."
                 price={75000}
                 image="https://techcrunch.com/wp-content/uploads/2020/12/nokia-laptop.jpg"
                 rating={5}
               />
               </div>
          </div>
        </div>
    )
}

export default Home
