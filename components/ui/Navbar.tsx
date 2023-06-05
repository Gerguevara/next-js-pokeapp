import Image from "next/image";
import { Spacer, Text, useTheme, Link } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0x 50px",
        backgroundColor: theme?.colors.gray500.value,
      }}
    >
      <Image
        // next js by default use static generation, due that  it request a setup ion next.cong to allow images fetching
        // from another server, by default it looks for the resource into this server, and throw an error if it's not found
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="icono de la app"
        width={70}
        height={70}
      />

      <Link href="/">
        <Text color="white" h2>P</Text>
        <Text color="white" h3>okémon!
        </Text>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link css={{ marginRight: "10px" }} href="/favorites">
        <Text color="white">Favoritos</Text>
      </Link>
    </div>
  );
};
