import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-block;
    align-items: center;
    height: 30%;
    line-height: 20px;
    padding: 10px;

    &:hover {
        transform: rotate(20deg);
    }
`

const Logo = () => {
    const OctopusImg = `/images/octopus${useColorModeValue('', '-dark')}.png`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={OctopusImg} alt="logo" width="20" height="20" />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c'
                        fontWeight="bold"
                        ml={3}>
                        Martín Ríos
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo;