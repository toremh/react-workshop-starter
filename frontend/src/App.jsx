import styles from "./App.module.css";
import ContactDisplay from "./components/ContactDisplay";
import { INITIAL_CONTACTS } from "./data/initial-contacts";
import Sidebar from "./components/Sidebar";

export default function App() {
  const contact = {
    
      _id: "b8853e3f-38d1-4712-9071-8f62d71c19b8",
      name: "Walter White",
      phoneNumber: "+1 555-000-1003",
      funFact: "Is also known as Heisenberg.",
      photoUrl: "https://th.bing.com/th/id/OIP.PoS7waY4-VeqgNuBSxVUogAAAA?rs=1&pid=ImgDetMain"
    }
  

  return (
    <>
      <div className={styles.container}>
        <Sidebar contacts ={INITIAL_CONTACTS}/>

        {/* <h1>Hello, WDCC! 🐮💻</h1> */}
        <ContactDisplay contact= {contact}/>
      </div>
    </>
  );
}
