import {
    GlobalSection,
    GlobalSubtitle,
    GlobalTitle,
    SpanTitle,
} from "../../styles/global-components/global-wrapper";

import { Container, Card, CardTitle,Image } from './services.styles';



const Services = ({data}) => {
    return (

        <GlobalSection>
            <GlobalTitle>
                treat yourself with  <SpanTitle>our services </SpanTitle>
            </GlobalTitle>


            <Container>
                
                {data.map((card) => {
                    console.log(card)
                    return (
                        <Card key={card.fields.title}>
                            
                            <Image src={`http:${card.fields.image.fields.file.url}`} />
                            <CardTitle>{card.fields.title}</CardTitle>

                        </Card>                
                    );
                })}

            </Container>
        </GlobalSection>


    );
};

export default Services;