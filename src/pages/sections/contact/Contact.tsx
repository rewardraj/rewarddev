import { useState } from "react";
import Header from "../../../components/Header/Header";
import { Container } from "../../../components/Layout/Container/Container";
import Grid from "../../../components/Layout/Grid/Grid";
import styles from "./Contact.module.scss";
import Dropdown from "../../../components/Dropdown/Dropdown";
import ButtonDefault from "../../../components/Button/Button";

const Contact = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <section id="contact" className={styles.contact}>
      <Header title="Contact" />
      <Container>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <Grid desktopColumns={2}>
              <input
                type="text"
                placeholder="Name"
                className={`${styles.input} ${styles.inputField}`}
              />
              <input
                type="email"
                placeholder="Email"
                className={`${styles.input} ${styles.inputField}`}
              />
            </Grid>
            <Grid desktopColumns={2} gridGap="20px">
              <Dropdown
                title="What are you interested in?"
                options={[
                  "Web Design",
                  "Mobile App Development",
                  "UI/UX Design",
                  "Branding",
                  "SEO Services",
                  "Other",
                ]}
                isOpen={openDropdown === "dropdown1"}
                onToggle={() => handleToggle("dropdown1")}
              />
              <Dropdown
                title="What is your budget?"
                options={["$500", "$1000", "$2000", "$5000+"]}
                isOpen={openDropdown === "dropdown2"}
                onToggle={() => handleToggle("dropdown2")}
              />
            </Grid>
            <Grid desktopColumns={1}>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                className={`${styles.textarea} ${styles.inputField}`}
              ></textarea>
            </Grid>
            <ButtonDefault variant="primary" className={styles.button}>
              Send
            </ButtonDefault>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
