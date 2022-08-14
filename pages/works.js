import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbCalcApp from "../public/images/calcApp.png";
import thumbFlutterApp from "../public/images/flutterApp.png";


const works = () => {
    return (
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
                <WorkGridItem id="flutterApp" title="FlutterApp" thumbnail={thumbFlutterApp}>
                        coming soon...
                </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default works;