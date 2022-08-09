import React from "react";
import styles from "../../component/cards/card.module.css";
import axios from "axios";
import { API_URL } from "../../utils/urls";

const index = ({ branches }) => {
  const sortedResponse = branches.data.sort(function (a, b) {
    return parseInt(a.id) - parseInt(b.id);
  });
  console.log(sortedResponse);
  // console.log(branches)
  return (
    <>
      <div className={styles.container}>
        {branches.data.map((items, index) => {
          return (
            <div className={styles.card1} key={index}>
              {/* <div className={styles.bullet}>
                <p>{items.id}</p>
              </div> */}
              <div className={styles.title}>
                <p>{items.attributes.Branches}</p>
              </div>
              <div className={styles.manager}>
                <p>{items.attributes.Manager}</p>
              </div>
              <div className={styles.description}>
                <p>{items.attributes.Contact}</p>
                <p>{items.attributes.Landline}</p>
                <p>{items.attributes.Email}</p>
                <p>{items.attributes.Address}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const branchesRes = await axios.get(`${API_URL}/api/branches`);
  // console.log(newsRes);
  return {
    props: {
      branches: branchesRes.data,
    },
  };
}
