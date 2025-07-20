import React from "react";
import { Accordion, AccordionItem } from "carbon-components-react";
import "./styles.scss";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      <h1>CDS v9</h1>
      <br />
      <div>
        <div className="bx--row">
          <div className="bx--col-sm-4 bg1">First Column</div>
          <div className="bx--col-sm-4 bg2">Second Column</div>
        </div>
        <br />
        <hr />
        <br />
        <article>
          <Accordion>
            <AccordionItem title="Example">
              <p>
                This is a Component imported from Carbon and styled with the CSS
                from the main Carbon Components GitHub repo!
              </p>
            </AccordionItem>
            <AccordionItem title="Questions?">
              <p>
                Hi there!{" "}
                <span aria-label="Hand wave" role="img">
                  👋{" "}
                </span>{" "}
                if you have any questions about this demo, or are running into
                any issues setting this up in your own development environment,
                please feel free to reach out to us on Slack or make an issue on
                the GitHub Repository.
              </p>
            </AccordionItem>
          </Accordion>
        </article>
      </div>
    </div>
  );
}

export default App;
