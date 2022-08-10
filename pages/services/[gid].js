import React, { useEffect, useState } from "react";
import styles from "../aboutus/aboutus.module.css";
import AboutImg from "../../assets/images/aboutus.jpg";
import Button1 from "../../component/button1/Button1";
import { useRouter } from "next/router";

export default function ServicePage() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const gid = router.query.gid;
  const data = [
    {
      img: "",
      service: "Air Freight",
      content: `Everfast Freight Forwarders Pvt Ltd is a leading IATA agent in our region for all major airlines. We provide a full menu of air logistics solutions for shipments around the globe and for a wide range of industry verticals 

      At Everfast we understand that air freight is a premium and costly service. Our specialists help you save money with solutions that focus on quick transit, constant communication, consolidation, and intermodal opportunities. 
      
      Access to available aircraft capacity around the world with our special contract rates allows us to stay flexible and further customize and optimize supply chain solutions for the best routing, pricing, and delivery speed for General, Hazardous and Perishable shipments  
      `,
    },
    {
      img: "",
      service: "Ocean freight",
      content: `As a licensed international Ocean Freight Forwarder with MTO license and FMC accredited; Everfast Freight Forwarders Pvt Ltd provides flexible and integrated ocean freight services to create the most highly adaptable, reliable and customizable solutions in the industry. 

      Our approach starts with having the most experienced and dedicated ocean management team, positioned globally to provide skilled and local expertise in all major trade lanes backed by our advanced system platform.
      
      Highly reputed and trusted by our service providers, our preferred status with core carriers coupled with the right people, capacity with special contracted pricing in place to successfully execute our customers' needs while providing superior customer service.
      `,
    },
    {
      img: "",
      service: "Warehousing",
      content: `In today's challenging and competitive market, a good warehousing and distribution system is the key to success for any business. 

      As an integrated supply chain management company, our superior warehousing services takes care of all your logistical needs efficiently ensuring minimum risk for maximum output. In a dynamic industry, it is important to minimize your investment risk and reduce operational costs. 
      
      Our warehousing services provide integrated supply chain management solutions, to allow you to make the most out of your all business models ie. B2C, B2B, C2C and C2B
      `,
    },
    {
      img: "",
      service: "Customs Brokerage",
      content: `We are one of the leading licensed Customs Brokers ensuring smooth and easy customs clearances PAN India. 
      We help ease Import and Export regulations and paperwork in record time for all of your shipments. Handling all the trade compliance and procedures, we help clear consignments by sea, land and air mode efficiently. 
      
      Being leading customs clearing agents our expert team do a proper study of all regional rules and regulations to help you overcome even the most complex matters of trade compliance. We identify the demands, challenges and hurdles for your business and help you arrange your paper work accordingly so that day-to-day formalities are met and business flows smoothly. 
      
      Our in-depth knowledge and understanding of this sector have helped us offer customized solutions to all of our clients so that they can reduce lead time, optimize cash flow by proper classification. With the required documents, our team of dedicated professionals ensure end-to-end solutions for both Import and Export Customs Clearance in the most cost-effective manner.
      `,
    },
    {
      img: "",
      service: "Door to door",
      content: `Now when most commodities are brought right to your doorstep, what about a company that picks up from your doorstep too! Everfast Freight Forwarders does just that, we provide door-to-door services for sending parcels and large consignment across worldwide. 

      We carry with care and handle every consignment as if it's our own. We offer you fast and efficient door to door delivery services. Our Multi-Modal transport system is capable of moving consignments from your doorstep to the final destination across the world. 
      
      Further, with our widespread network, we make sure your things are safe and secure during transit and most importantly delivered on time. Our door to door delivery services are reliable and cost effective. We offer these services for various industry verticals
      `,
    },
    {
      img: "",
      service: "Road Transport ",
      content: `NEverfast Freight Forwarders road feeder services specializes in performing value-added, and time definite services to ensure ultimate satisfaction for our customers through integrated tracking tools and with network of quality trucking partners in every region.

      Everfast freight forwarders capabilities are optimized to get your cargo safely to its destination on schedule. We set a very high bar for our service providers, ensuring the most stringent performance, security, equipment and technology standards are applied to your shipment. 
      
      Key Performance Indicators (KPIs) and metrics are at the core of how we operate every step of the way. Every milestone in the life of a shipment is captured and measured in our systems in order to drive process improvements uniquely tailored to our customers' business needs.
      
      `,
    },
    {
      img: "",
      service: "Project Forwarding",
      content: `A massive or heavy load with over size dimensions presents a special set of challenges, it still has one thing in common with every other piece of cargo:  i.e. it needs to get there.

      Everfast project management, is   creative and specialized to customize transport plan and a network of strategically placed freight specialists to supervise the move at every step of the way. 
      
      Project Services experts also work to ensure that the most appropriate routing and mode of transport are used while helping you understand every aspect of your transportation ie. Cost, security ,risk  involved and  all complexity  and challenges.
      
      `,
    },
  ];

  const title = [
    "air-freight",
    "sea-freight",
    "warehousing",
    "custom-clearance",
    "door-to-door",
    "road-transport",
    "project-forwarding",
  ];

  useEffect(() => {
    if (gid) {
      setIndex(title.indexOf(gid));
      console.log(index);
    }
  }, [gid]);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.left}>
        <div className={styles.heading_container}> 
          <p className={styles.heading}>{data[index].service}</p>
        </div>
          <p className={styles.desc}>{data[index].content}</p>
          <Button1 text="Contact Us" route="/contact" />
        </div>
        <div className={styles.right}>
          <img src={`/service/${index}.jpg`} className={styles.img} alt="" />
        </div>
      </div>
    </div>
  );
}
