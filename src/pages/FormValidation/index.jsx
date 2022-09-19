import React from "react";
import styles from "./index.module.css";

const Input = ({ label, name, type, onChangeFunction }) => {
  return (
    <div>
      <label htmlFor={name}>{label} </label>
      <br />
      <input
        type={type}
        name={name}
        onChange={(e) => onChangeFunction(e.target.value)}
        style={{ width: "100%" }}
      />
      <br />
      <br />
    </div>
  );
};

//Tampilan jika terjadi error
const ShowErrors = ({ errors }) => {
  return (
    <ul style={{ color: "red", marginLeft: "-20px" }}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};

// Styling Form dan Button
const StyleForm = {
  margin: "100px auto",
  border: "1px solid black",
  padding: "10px 30px",
  fontFamily: "Poppins",
};

const StyleButton = {
  width: "100px",
  height: "35px",
  color: "white",
  backgroundColor: "#00994c",
  border: "none",
  marginLeft: "auto",
  marginRight: "auto",
  fontFamily: "Poppins",
};

class FormValidation extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    errors: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, email, password } = this.state;
    let message = [];

    // Variabel re digunakan untuk verifikasi email
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //Verifikasi username
    if (username.length === 0) {
      message = [...message, "Username tidak boleh kosong"];
    } else {
      if (username.indexOf(" ") >= 0) {
        message = [...message, "Username tidak boleh menggunakan spasi"];
      }
      if (username.length > 20) {
        message = [
          ...message,
          "Username terlalu panjang (harus berisi 1 - 20 karakter)",
        ];
      }
    }

    //Verifikasi email
    if (email.length === 0) {
      message = [...message, "Email tidak boleh kosong"];
    } else if (!String(email).toLowerCase().match(re)) {
      message = [...message, "Email tidak valid"];
    }

    //Verifikasi password
    if (password.length === 0) {
      message = [...message, "Password tidak boleh kosong"];
    } else if (password.length > 0 && password.length < 8) {
      message = [
        ...message,
        "Password terlalu pendek (harus berisi 8 - 20 karakter)",
      ];
    } else if (password.length > 20) {
      message = [
        ...message,
        "Password terlalu panjang (harus berisi 8 - 20 karakter)",
      ];
    }

    //Mengubah state error jika terjadi error atau menampilkan alert jika berhasil
    if (message.length > 0) {
      this.setState({ errors: message });
    } else {
      alert(`
                Registrasi Berhasil!

                Username: ${this.state.username}
                Email: ${this.state.email}
                Password: ${this.state.password}
            `);
      this.setState({ errors: [] });
    }
  };

  render() {
    return (
      <>
        {/* Navbar */}
        <nav className="navbar navbar-dark bg-dark py-3">
          <div className="container">
            <a
              className="navbar-brand ms-auto"
              href="#home"
              style={{ fontFamily: "Poppins" }}
            >
              Form Validation
            </a>
          </div>
        </nav>

        {/* Form */}
        <div style={StyleForm} className={styles.formWidthResp}>
          <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
            Registration Page
          </h2>
          {this.state.errors && <ShowErrors errors={this.state.errors} />}
          <form onSubmit={this.handleSubmit}>
            <Input
              label="Username"
              name="username"
              type="username"
              onChangeFunction={(value) => this.setState({ username: value })}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              onChangeFunction={(value) => this.setState({ email: value })}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              onChangeFunction={(value) => this.setState({ password: value })}
            />
            <br />
            <div className="text-center">
              <button type="submit" style={StyleButton}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default FormValidation;
