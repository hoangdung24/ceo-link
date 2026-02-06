import { Partner } from "./components/Partner";
import { Guarantee } from "./components/Guarantee";
import { Exclusive } from "./components/Exclusive";
import { Identity } from "./components/Identity";
import { Feature } from "./components/Feature";
import { Hero } from "./components/Hero";
import { Quote } from "./components/Quote";
import { Network } from "./components/Network";
import { Promotion } from "./components/Promotion";

const Home = () => {
  return (
    <main id="home" class="container flex flex-col gap-12 py-8">
      <Hero />
      <Feature />
      <Network />
      <Identity />
      <Exclusive />
      <Guarantee />
      <Partner />
      <Quote />
      <Promotion />
    </main>
  );
};

export default Home;
