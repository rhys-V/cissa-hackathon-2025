import Counter from "../components/Counter";

export default function HomePage() {
  return (
    <main>
      <header>
        <div className="header-style">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <img src="path/to/image.jpg" alt="Website Logo"></img>
              <li>
                <a href="/page2">Home</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <h1 id="title">Scamify</h1>
      <Counter />
    </main>
  );
}
