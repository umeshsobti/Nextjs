export const meta = {
  title: 'Nextjs',
  description: 'Generated by Nextjs'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body>
        <header style={{backgroundColor: "lightblue", padding: "1em", textAlign: "center", fontSize: "20px", fontStyle: "bold"}}>
          Header
        </header>
        {children}
        <footer style={{backgroundColor: "lightblue", padding: "1em", textAlign: "center", fontSize: "20px", fontStyle: "bold"}}>
          Footer
        </footer>
        </body>
    </html>
  );
}
