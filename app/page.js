import Layout from "@/components/layout/Layout";
import Hero1 from "@/components/sections/Hero1";
import Marque1 from "@/components/sections/Marque1";
import "../styles/globals.css"


export default function Home() {
  return (
    <>
 
        <Layout headerStyle={1} footerStyle={1}>
          <Hero1 />
           <Marque1 />
        </Layout>
      
    </>
  );
}
