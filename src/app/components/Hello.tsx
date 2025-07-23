
interface namee{
    name: string
}
export default function Hello(props: namee){
  return (
    <div className="">
      {props.name}
    </div>
  );
}
