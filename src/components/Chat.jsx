import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { Fieldset } from "primereact/fieldset";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

const Chat = () => {
  const [toSend, setToSend] = useState("");

  return (
    <div>
      <div className="card">
        <Accordion activeIndex={0}>
          <AccordionTab header="Header I">
            <p className="m-0 h-16rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>
            <div className="card flex gap-1">
              <InputText
                className="p-inputtext-sm flex-grow-1 flex"
                placeholder="Small"
                value={toSend}
                onChange={(e) => setToSend(e.target.value)}
              />
              <Button icon="pi pi-send" />
            </div>
          </AccordionTab>
          <AccordionTab header="Header II">
            <p className="m-0 h-18rem">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </AccordionTab>
          <AccordionTab header="Header III">
            <p className="m-0 h-18rem">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

export default Chat;
