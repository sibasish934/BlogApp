import Features from "@/Components/featured/Features";
import styles from "./homepage.module.css";
import Link from "next/link";
import CategoryList from "@/Components/categoryList/CategoryList";
import Cardlist from "@/Components/cardList/Cardlist";
import Menu from "@/Components/Menu/Menu";


export default function Home() {
  return (
  <div className={styles.container}>
    <Features />
    <CategoryList />
    <div className={styles.content}>
      <Cardlist />
      <Menu />
    </div>
  </div>
  );
}
