
// export default function Greeting() {}

const Greeting = ({ className, id, name, surname }) => {
  // console.log(props)
//   const { className, id, name, surname } = props;
  // console.log(props.age)
  return (
    <h2 key={id} className={className}>
      Hello, {name} {surname}!
    </h2>
  );
};

export default Greeting;

// const greet = (greeting) => {
//     console.log(greeting)
// }

// greet("Hi")
// greet("Hello")
