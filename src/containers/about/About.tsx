import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";

const About = () => {
  return (
    <>
      <Title>About | CEO Link</Title>
      <main class="mx-auto p-4 text-center text-gray-700">
        <h1 class="max-6-xs my-16 text-6xl font-thin uppercase text-sky-700">
          About Page
        </h1>

        <p class="my-4">
          <A href="/" class="text-sky-600 hover:underline">
            Home
          </A>
          {" - "}
          <span>About Page</span>
        </p>
      </main>
    </>
  );
};

export default About;
