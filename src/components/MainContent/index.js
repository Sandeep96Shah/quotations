import React from "react";
import { Container } from "./styles";
import {data} from '../../DemoData';

const LeftSection = () => {
  return (
    <Container>
        {data.map((quotation) => (
            <div className="quotation" key={quotation.id}>
            <p className="content">
             {quotation.content}
            </p>
            <p className="by">{quotation.by}</p>
          </div>
        ))}
      
    </Container>
  );
};

export default LeftSection;
