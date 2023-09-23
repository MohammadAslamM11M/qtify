import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.css";

const AccordionSection = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>FAQs</h1>
                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    style={{ backgroundColor: "var(--color-black)", border: "1px solid white", borderRadius: "10px" }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: "var(--color-primary)", width: "35px", height: "40px" }} />
                        }
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: "33%", flexShrink: 0, color: "var(--color-white)" }}>
                            Is QTify free to use?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{
                            backgroundColor: "var(--color-white)",
                            border: "1px solid white",
                            borderRadius: "10px",
                        }}
                    >
                        <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    style={{ backgroundColor: "var(--color-black)", border: "1px solid white", borderRadius: "10px" }}
                >
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: "var(--color-primary)", width: "35px", height: "40px" }} />
                        }
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: "33%", flexShrink: 0, color: "var(--color-white)" }}>
                            Can I download and listen to songs offline?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{
                            backgroundColor: "var(--color-white)",
                            border: "1px solid white",
                            borderRadius: "10px",
                        }}
                    >
                        <Typography>
                            Sorry, unfortunately we don't provide the service to download any songs.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default AccordionSection;
