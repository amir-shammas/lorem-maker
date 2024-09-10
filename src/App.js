import { useState } from "react";
import data from "./Database"

function App() {

  // console.log(data);

  const [count, setCount] = useState(1);
  // console.log(count);

  const [text, setText] = useState([]);
  // console.log(text);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(count);
    let amount = Number(count);
    if(amount <= 0){
      amount = 1;
    }

    if(amount > 4){
      amount = 4;
    }

    // setText(data);
    // setText(data.slice(0, count));
    setText(data.slice(0, amount));
  }

  return (
    <>
      <div className="section-center">
        <h4>لورم ساز</h4>

        <form className="lorem" onSubmit={handleSubmit}>
          <label htmlFor="total">تعداد پارگراف :</label>
          <input type="number" name="total" value={count} onChange={(e) => setCount(e.target.value)} />
          <button type="submit">بساز</button>
        </form>

        <article className="lorem-text">
          {/* {text} */}
          {
            text.map((item, index) => {
              return <p key={index}>{item}</p>
            })
          }
        </article>
    </div>
    </>
  );
}

export default App;
