import StyledComponent from "./StyledComponent";

const strlist = ["We", "are", "the", "world!"];
const strlist2 = strlist.push("hello");
console.log(strlist);
console.log(strlist.push("hello2"));
console.log(strlist2);

function App() {
  return (
    <div>
      <StyledComponent/>
    </div>
  );
}

export default App;
