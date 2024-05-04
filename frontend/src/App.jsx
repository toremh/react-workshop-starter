import styles from "./App.module.css";
import ContactDisplay from "./components/ContactDisplay";
import { INITIAL_CONTACTS } from "./data/initial-contacts";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function App() {

    const [contact, setContact] = useState(INITIAL_CONTACTS[0]);
  

  function handleContactClicked(c) {
    // console.log("contact");
    setContact(c);
  }

  return (
    <>
      <div className={styles.container}>
        <Sidebar contacts={INITIAL_CONTACTS} onContactClicked={handleContactClicked} />

        {/* <h1>Hello, WDCC! 🐮💻</h1> */}
        <ContactDisplay contact={contact} />
      </div>
    </>
  );
}
