import { FormEvent, useState } from "react";
import "./App.css";
import { Slide, toast, ToastContainer } from "react-toastify";

function App() {
  const [name, setName] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch(
      import.meta.env.VITE_API_URL + `/api/greet?name=${name}`,
    );
    const message = (await response.json()).message;
    // console.log(message);

    toast(message, {
      position: "top-center",
      transition: Slide,
      hideProgressBar: true,
      theme: "dark",
    });
  }

  return (
    <main className="main-container">
      <form className="container" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          placeholder="YourName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Get Greeting</button>
      </form>
      <ToastContainer />
    </main>
  );
}

export default App;
