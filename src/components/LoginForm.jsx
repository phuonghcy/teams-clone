import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authoOject = { 'Project-ID' : "292a738e-6944-448a-a05b-f80376345c9a", 'User-Name' : username, 'User-Secret': password};
    try {

        await axios.get('https://api.chatengine.io/chats', { headers: authoOject });

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        window.location.reload();

    } catch (error) {

        setError('Opps, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Điền thông tin cái nè!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            required
            placeholder="Tên nè"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            required
            placeholder="Mật khẩu nữa nè"
          />
          <div align="center">
            <button type="submit" className="button" style={{ backgroundColor: '#33FFFF'}}>
                <span>Bắt đầu thôi !!!!</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
