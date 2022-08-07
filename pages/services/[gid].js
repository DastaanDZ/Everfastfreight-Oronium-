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
      content: `As an International Air Transport Association (IATA) agent for all major airlines, Everfast Freight Forwarders provides a full menu of air logistics solutions for shipments around the globe and for a wide variety of industries.
  At Everfast Freight Forwarders, we understand that airfreight is a premium and costly service. Our specialists help you save money with solutions that focus on quick transit, constant communication, consolidation, and intermodal opportunities.
  Access to available aircraft capacity around the world allows us to stay flexible and further customize and optimize supply chain solutions for the best routing, pricing, and delivery speed.`,
    },
    {
      img: "",
      service: "Sea Freight",
      content: `As a licensed international Ocean Freight Forwarder, Everfast Freight Forwarders provides flexible and integrated ocean freight services to create the most highly adaptable, reliable and customizable solutions in the industry.
      Our approach starts with having the most experienced and dedicated ocean management team, positioned globally to provide skilled and local expertise in all major trade lanes, and backed by one common systems platform. Highly respected and trusted by our service providers, our preferred status with core carriers is coupled with the right people, capacity and pricing in place to successfully execute on our customers’ needs while providing superior customer service.`,
    },
    {
      img: "",
      service: "Warehousing",
      content: `In today’s challenging and competitive market, a good warehousing and distribution system is the key to success for any business. As an integrated supply chain management company, our superior warehousing services takes care of all your logistical needs efficiently ensuring minimum risk for maximum output. In a dynamic industry, it is important to minimize your investment risk and reduce operational costs. That’s why our warehousing services provide integrated supply chain management solutions, to allow you to make the most of your business`,
    },
    {
      img: "",
      service: "Custom Clearance",
      content: `We’re one of the leading Customs Clearing Agents, ensuring smooth and easy customs clearance for all our customers, so that they receive their goods on time. Our CHA help ease Import and Export regulations and paperwork in record time for all of your shipments. Handling all the trade compliance and procedures, we help clear consignments by sea, land and air more efficiently. . Being leading customs clearing agents our expert team do a proper study of all local rules and regulations so that they can help you overcome even the most complex matters of trade compliance. We identify the demands, challenges and hurdles for your business and help you arrange your paper work accordingly so that day-to-day formalities are met and business flows smoothly.
      Our in-depth knowledge and understanding of this sector has helped us offer customized solutions to all of our clients so that they can reduce lead time, optimize cash flow and minimize customs duties. With the required documents, our team of dedicated professionals ensure end-to-end solutions for both Import Customs Clearance and Export Customs Clearance in the most cost-effective manner.`,
    },
    {
      img: "",
      service: "Door to door",
      content: `Now when most commodities are brought right to your doorstep, what about a company that picks up from your doorstep too! Everfast Freight Forwarders does just that, we provide door-to-door services for sending parcels and large consignment across the nation. Our trained professionals efficiently handle computers, printed materials, product samples, spare parts etc. We carry with care and handle every consignment as if it’s our own. We offer you fast and efficient door to door delivery services. Our road transport department is capable of moving your consignments from your doorstep to the final destination across the world. Further, with our widespread network, we make sure your things are safe and secure during transit and most importantly delivered on time. Our door to door delivery services are reliable and cost effective. We offer these services for various industries.`,
    },
    {
      img: "",
      service: "Road Transport ",
      content: `Everfast Freight Forwarders Ground transportation specializes in performing value-added, white glove, and time definite services to ensure ultimate satisfaction for our customers. 
      Through integrated tracking tools & a network of quality trucking partners in every region. Everfast freight forwarders is optimized to get your cargo safely to destination on schedule. We set a very high bar for our service providers, ensuring the most stringent performance, security, equipment and technology standards are applied to your shipment. 
      Key Performance Indicators (KPIs) and metrics are at the core of how we operate every step of the way. Every milestone in the life of a shipment is captured and measured in our systems in order to drive process improvements uniquely tailored to our customers’ business needs.`,
    },
    {
      img: "",
      service: "Project Forwarding",
      content: `While a massive or heavy load, such as a press or an earthmover, presents a special set of challenges, it still has one thing in common with every other piece of cargo: it needs to get there.
        Project Services gets it done with Everfast Freight Forwarders project management, a creative and customized transport plan and a network of strategically placed oversize freight specialists to supervise the move every step of the way. Project Services experts also work to ensure that the most appropriate routing and modes of transport are used while helping you understand every aspect of your transportation costs. Size, weight, and complexity are challenges we conquer every day.`,
    },
  ];

  const title = [
    "air-freight",
    "sea-freight",
    "warehousing",
    "custom-clearance",
    "door-to-door",
    "road-transport ",
    "project-forwarding",
  ];
  
  useEffect(() => {
    if (gid) {
      setIndex(title.indexOf(gid));
    }
  }, [gid]);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.left}>
          <p className={styles.heading}>{data[index].service}</p>
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
