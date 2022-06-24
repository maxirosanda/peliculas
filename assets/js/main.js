let pelicula = prompt("que pelicula desea ver?").toLowerCase()
const ticket = "aqui esta tu ticket"
while(pelicula != ""){

    switch (pelicula){
        case "duro de matar":
            const edad = prompt("cuantos años tienes?")
            if(edad > 17){
                alert(ticket)
            }else{
                const bambi = prompt("no quieres ver bambi? si o no").toLowerCase()
                
                if(bambi == "si"){
                    alert(ticket)
                }else{
                    alert("Disculpe las molestias")
                }
            }
            pelicula = ""
            break
        case "bambi":
            alert(ticket)
            pelicula = ""
            break
        default:
            alert("la pelicula no esta en cartelera")
            pelicula = prompt("que pelicula desea ver?").toLowerCase()
            break
    }

}