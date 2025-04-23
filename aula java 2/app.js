let senha = "1234"
let usuario = "Mateus"

if(senha === "1234" && usuario === "Mateus")
  (senha === "1357" && usuario === "Jobson")
  (senha === "4321" && usuario === "ADM")
 {
    prompt("Seja bem vindo!")
}
else
{
    prompt("Usuario ou senha incorretos!")
}



(senha === "1234") || (senha === "1357") || (senha === "4321") && (usuario === "Mateus") || (usuario === "Jobson") || (usuario === "ADM") ? 
prompt("Seja bem vindo!"): prompt("Usuário ou senha incorretos!")
