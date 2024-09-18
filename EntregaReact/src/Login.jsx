

function Login() {
  
  return (
    <div className="container bg-dark text-light p-3 rounded">
      <h1 id="bienvenido">Bienvenido Invitado</h1>
      <form onSubmit={userSubmit}>
        <label htmlFor="nombre" className="me-3">Nombre: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
        /><br /><br />

        <label htmlFor="apellido" className="me-3">Apellido: </label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          required
        /><br /><br />

        <label htmlFor="email" className="me-3">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          required
        /><br /><br />

        <label htmlFor="telefono" className="me-3">Teléfono: </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          required
        /><br /><br />

        <label htmlFor="password" className="me-3">Contraseña: </label>
        <input
          type="password"
          id="password"
          name="password"
          required
        /><br /><br />

        <label htmlFor="confirmPassword" className="me-3">Confirmar Contraseña: </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
        /><br /><br />

        <button type="submit" >Registrarse </button>
      </form>
    </div>
  )
}

function userSubmit(event) {
  event.preventDefault()

  const pass1= document.getElementById('password').value
  const pass2= document.getElementById('confirmPassword').value

  if (pass1==pass2){
    const username = document.getElementById('nombre').value
    const userapellido = document.getElementById('apellido').value
    document.getElementById('bienvenido').innerText="Bienvenido " + username + " " + userapellido
  } else {
    alert("Confirmacion de contraseña incorrecta. Compruebe nuevamente")
  }

}

export default Login
