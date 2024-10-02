import { Footer, Header } from "@/components";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { ninjas: data },
  };
};

const SinglePost = ({ ninjas }) => {
  return (
    <div>
      <Header />
      <div>
        <h1>Single Post</h1>
        {ninjas.map((ninja) => {
          return (
            <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
              <h1>{ninja.name}</h1>
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default SinglePost;
