import Greeting from "./components/Greeting";

function App() {
  const name = "John"
  const surname = "Smith"

  const person2 = {
    name: "Jane",
    surname: "Doe"
  }
  const display = false;
  const people = [
    { id: 1, name: 'Alice', surname: 'Smith' },
    { id:2, name: 'John', surname: 'Smith' },
    { id:3, name: 'Jane', surname: 'Doe' },
  ];
  const classNameList = "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-3xl"
  return (
    <div className='w-screen min-h-screen bg-gray-200'>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>
        Vite + React
      </h1>
      <Greeting
        className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl'
        id={1}
        name='Alice'
        surname='Smith'
        age={22}
      />
      <Greeting
        className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-500 md:text-5xl lg:text-3xl'
        name={name}
        surname={surname}
      />
      {display ? <Greeting name={person2.name} surname={person2.surname} /> : <h2>No person found</h2>}

      {people.map((person) => (
        <Greeting key={person.id} className={classNameList} name={person.name} surname={person.surname} />
      ))}

      {people
        .filter((person) => person.surname !== 'Doe')
        .map((person) => (
          <Greeting key={person.id} className={classNameList} name={person.name} surname={person.surname} />
        ))}
    </div>
  );
}

export default App
