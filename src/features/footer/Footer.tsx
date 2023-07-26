import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "10px 0px",
      }}
    >
      <section style={{ color: "black" }}>
        <a
          href="mailto:jtbenavente@gmail.com"
          style={{ textDecoration: "none", color: "black" }}
        >
          Jaime Torres{" "}
        </a>
        <span>&copy;</span> 2023
      </section>
    </footer>
  );
}
