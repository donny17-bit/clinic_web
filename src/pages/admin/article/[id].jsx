import { useRouter } from "next/router";
import htmr from "htmr";
import axios from "@/config/axios";

export async function getServerSideProps(context) {
  try {
    const id = context.query.id;
    const response = await axios.get(`article/${id}`);
    const data = response.data.data;

    return {
      props: {
        query: context.query,
        data: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        query: context.query,
        data: null,
      },
    };
  }
}

function Content({ query, data }) {
  console.log(data);
  return (
    <>
      {data.title}
      <br />
      {htmr(data.content)}
      {/* <div dangerouslySetInnerHTML={{ __html: data.content }} /> */}
    </>
  );
}

export default Content;
