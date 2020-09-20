import React,{useContext} from "react";
import styles from "./base.module.scss";
import { Link,Route} from "react-router-dom";
import NoImage from "../assets/images/noPicture.jpg";
import LoadingComponent from "./LoadingComponent";
import LoginContext from "../context/loginContext";

export default function Card({ Items }) {
  const {category,handleProduct} = useContext(LoginContext);

  return (
    <div className={styles.cardRow}>
      {Items? Items.map((item,index) => 
        (
          <div>
          <Link to={`/${category}/${item.name}`} className={styles.cardLink}
           key={index} onClick={()=>handleProduct(item)}>
             {console.log(`/${category}/${item.name}`)}
           <div className={styles.card}>
              <div className={styles.card_img}>
              <img
                  src={item.image ? item.image : NoImage}
                  className={styles}
                  alt="..."
                />
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardTitle}>{item.name.substring(0, 27)}</p>
                <p className={styles.card_text}>
                  <small className="text-muted">price: <span>{item.price} T</span></small>
                </p>
                <p className="text-muted">stock:<span className="quantity">{item.quantity}</span></p>
                <p className="card-text-price">brand: {item.brand}</p>
              </div>
            </div>
          </Link>
        </div>
        )
      ):<LoadingComponent/>}
    </div>
  );
}

