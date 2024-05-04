import ContactCard from "./ContactCard";
import styles from "./Sidebar.module.css"
export default function Sidebar({ contacts }) {

    for (let i = 0; i < contacts.length; i++) {

    }

    return (
        <nav className={styles.sidebar}>
            <div className = {styles.corner}>
                <h2>Friends</h2>
                <input className = {styles.searchBar} type="text" />
            </div>
            <div className ={styles.contactList}>
                {contacts.map((contact) => (
                    // <p>{contact.name}</p>
                    <ContactCard contact={contact} />
                ))}
            </div>
        </nav>
    );
}