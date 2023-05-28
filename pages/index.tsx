import type { NextPage } from "next";

import { Button } from "@nextui-org/react";
import { Layout } from "../components/layouts";
import { useEffect } from "react";

const Home: NextPage = ({name}: any) => {

  useEffect(() => {
    console.log(name);
  })
  return (
    <>
      <Layout>
        <Button>Click me!</Button>
      </Layout>
    </>
  );
};

//las props que se pasen aca son utilizadas  por el componente
// en la linea 6

// get static props solo se ejecuta en el lado del servidor y solo el build time


// get static props solo se puede utilizar en pages
export const getServerSideProps =  (context: any) => {
  return {
    props: {
      name: 'Gerardo'
    },
  };
};


export default Home;
