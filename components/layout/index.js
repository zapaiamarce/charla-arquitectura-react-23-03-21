import Head from "next/head";

export default function Layout({ children, dark }) {
  return (
    <div style={{ backgroundColor: dark ? "#000" : "initial" }}>
      <header>Soy el header</header>
      <div>{children}</div>
      <footer>Soy el footer</footer>
    </div>
  );
}
