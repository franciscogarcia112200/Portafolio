//ComponentsExample.tsx
function MiComponente() {
  return <h3>Hola desde un Componente!</h3>
}

export default function ComponentsExample() {
  return (
    <>
      <h2>3.2 Componentes</h2>
      <p>Un componente es una función que devuelve JSX:</p>
      <pre>{`
function MiComponente() {
  return <h3>Hola desde un Componente!</h3>
}
      `}</pre>
      <p>Ejemplo en vivo:</p>
      <MiComponente />
    </>
  )
}