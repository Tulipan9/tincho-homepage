import { Button, Container, Box, Heading, Image, useColorModeValue, Link } from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import Layout from "../components/layouts/article";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";

const Page = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius="lg"
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                    p={3}
                    mb={6}
                    align="center"
                >
                    Hello, I&apos;m a full-stack developer based in Uruguay!
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Martín Ríos
                        </Heading>
                        <p> Full Stack Developer </p>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                    >
                        <Image
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            maxWidth="100px"
                            display="inline-block"
                            borderRadius="full"
                            src="/images/Tincho.jpg"
                            alt="Profile Image" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph> I am a software engineering student with extensive experience in the software industry.
                        During the last few years, I have brought my passion for technology and business to every position I have held.
                        When I am not at work, I spend my time looking for new ventures of my own and training in new technologies.
                        {' '}
                        <NextLink href="/works/flutterApp">
                            <Link>flutterApp</Link>
                        </NextLink>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1998</BioYear>
                        Born in Montevideo, Uruguay.
                    </BioSection>
                    <BioSection>
                        <BioYear>2016</BioYear>
                        I started Computer Engineering School
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>
                        Worked as a Specialised development and support in INTEGRADOC
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>
                        Worked as a Software Account Executive in INTEGRADOC
                    </BioSection>
                    <BioSection>
                        <BioYear>2021 to present</BioYear>
                        Works as a Full Stack Developer in MiFinanzas
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        ❤
                    </Heading>
                    <Paragraph>
                        Music, Soccer, Travel, and Technology.
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page;