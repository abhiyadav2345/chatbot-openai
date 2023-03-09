import { useState } from "react";
import send from "./assets/send.svg";
import user from "./assets/user.png";
import bot from "./assets/bot.png";
import loadingIcon from "./assets/loader.svg";

// let arr = [
//   { type: "user", post: "hello" },
//   { type: "loading", post: "hello" },
// ];
function App() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const onSubmit = () => {
    if (input.trim() === "") return;
    updatePosts(input);
  };

  const updatePosts = (post) => {
    setPosts((prevState) => {
      return [...prevState, { type: "user", post }];
    });
  };

  const onkeyup = (e) => {
    if (e.key === "Enter" || e.which === 13) {
      onSubmit();
    }
  };

  return (
    <main className="chatGPT-app">
      <section className="chat-container">
        <div className="layout">
          {posts.map((post, index) => (
            <div
              className={`chat-bubble ${
                post.type === "bot" || post.type === "loading" ? "bot" : ""
              }`}
              key={index}
            >
              <div className="avatar">
                <img
                  src={
                    post.type === "bot" || post.type === "loading" ? bot : user
                  }
                />
              </div>
              {post.type === "loading" ? (
                <div className="loader">
                  <img src={loadingIcon} />
                </div>
              ) : (
                <div className="post">{post.post}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      <footer>
        <input
          className="composebar"
          autoFocus
          type="text"
          value={input}
          placeholder="Ask Anything"
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={onkeyup}
        />
        <div className="send-button" onClick={onSubmit}>
          <img src={send} />
        </div>
      </footer>
    </main>
  );
}

export default App;
