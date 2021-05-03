export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    //visit a page that does not exist will cause a 404 page
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

const Details = ({ ninja }) => {
  return (
    <>
      <h1>Name: {ninja.name}</h1>
      <p>Email: {ninja.email}</p>
      <p>Username: {ninja.username}</p>
      <p>Website: {ninja.website}</p>
      <p>City: {ninja.address.city}</p>
    </>
  );
};

export default Details;
