import { Link, Text, useTheme, Spacer } from "@nextui-org/react"
import Image from "next/image";
import NextLink from "next/link";

export const Navbar = () => {

    const { theme } = useTheme();

    return (
        <nav style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray900.value
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                alt="icono de la app"
                width={100}
                height={100}
            />
            <NextLink href="/" passHref>
                <Link>
                    <Text color='white' h1>P</Text>
                    <Text color='white' h2>okémon List</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href="/favorites" passHref>
                <Link css={{ marginRight: '10px' }}>
                    <Text color='white' h3>Favorites</Text>
                </Link>
            </NextLink>

        </nav>
    )
}
