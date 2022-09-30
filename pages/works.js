import { Container, Heading, SimpleGrid, } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbCalcApp from "../public/images/calcApp.png";
import thumbMifinanzas from "../public/images/MF.png";
import thumbHomePage from "../public/images/home.png";
import Layout from "../components/layouts/article";


const works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="calcApp" title="Calculator" thumbnail={thumbCalcApp}>
                            A calcApp made in react.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="MiFinanzas" title="Mifinanzas" thumbnail={thumbMifinanzas}>
                            Investment application made in Angular and .Net
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="HomePage" title="HomePage" thumbnail={thumbHomePage}>
                            biography and portfolio made in next.js
                        </WorkGridItem>
                    </Section>T
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default works;