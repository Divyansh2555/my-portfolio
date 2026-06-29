import { useState, useEffect, useRef } from "react";
import "../styles/Contact.css";

function Contact() {

  const chatRef = useRef(null);

  const contactLinks = {
    instagram: "https://instagram.com/divyan.sh255",
    facebook: "https://facebook.com/Manashprajapari",
    telegram: "https://t.me/YOUR_ID",
    email: "singhmanash540mail@gmail.com"
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋! How can I help you today?" },
    { from: "bot", text: "👉 Type message or choose contact option." },
  ]);

  const [showOptions, setShowOptions] = useState(false);

  // ✅ AUTO SCROLL
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessages((prev) => [
      ...prev,
      { from: "user", text: formData.message },
      { from: "bot", text: "👍 Message received from form!" },
      { from: "bot", text: "👉 You can also chat below." },
    ]);

    setFormData({ name: "", email: "", message: "" });
    setShowOptions(true);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      { from: "bot", text: "👉 Choose contact option below." },
    ]);

    setInput("");
    setShowOptions(true);
  };

  const handleOption = (type) => {

    const links = {
      instagram: contactLinks.instagram,
      facebook: contactLinks.facebook,
      telegram: contactLinks.telegram,
      email: `mailto:${contactLinks.email}`,
    };

    const selectedLink = links[type];

    setMessages((prev) => [
      ...prev,
      { from: "user", text: type },

      {
        from: "bot",
        text: `🔗 Open ${type}`,
        link: selectedLink
      },

      { from: "bot", text: "💬 Click above link to open." }
    ]);

    setShowOptions(false);
  };

  return (
    <div className="contact-page">

      <div className="contact-hero">
        <h1>📩 Contact Me</h1>
        <p>Form + Chatbot both working</p>
      </div>

      <div className="contact-container">

        {/* FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message 🚀</button>
        </form>

        {/* CHAT */}
        <div className="chat-box-ui">

          <div className="chat-header">💬 Chat Assistant</div>

          <div className="chat-body" ref={chatRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>

                {msg.link ? (
                  <a href={msg.link} target="_blank" rel="noopener noreferrer">
                    {msg.text}
                  </a>
                ) : (
                  msg.text
                )}

              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
          </div>

          {showOptions && (
            <div className="chat-buttons">
              <button onClick={() => handleOption("instagram")}>Instagram</button>
              <button onClick={() => handleOption("email")}>Email</button>
              <button onClick={() => handleOption("facebook")}>Facebook</button>
              <button onClick={() => handleOption("telegram")}>Telegram</button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Contact;