import useFetch from "../useFetch";

function SignIn()
{
    const [data] = useFetch();
    return (<div>
        SignIn
        {data && data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>)
}
export default SignIn;