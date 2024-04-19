

window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//    


    let title = document.querySelector("#title")
    let rating = document.querySelector("#rating")
    let awards = document.querySelector("#awards")
    let releaseDate = document.querySelector("#release_date")
    let length = document.querySelector("#length")
    let genre = document.querySelector("#genre")
    let submit = document.querySelector(".botonAgregar")
    let errores = document.querySelector(".errores")
    let form = document.querySelector(".form")
    let duracion = document.querySelector("#length")
    /*  let erroresArray=[]
     errores.innerHTML="" */
    form.addEventListener("submit", (e) => {
        let erroresArray = []
        errores.innerHTML = ""

        if (title.value == "") {

            //  alert("CAPO")
            erroresArray.push("Titulo no debe estar vacio")
            title.classList.add("is-invalid")
        }
        if (rating.value == "") {
            erroresArray.push("Rating no debe estar vacio")
            rating.classList.add("is-invalid")
            //  alert("Rating no debe estar vacio")
        }
        else if (rating.value < 0 || rating.value > 10) {
            erroresArray.push("El Rating debe ser en numeros entre el 0 y el 10 ")
            rating.classList.add("is-invalid")
        }
      
        if (awards.value == "") {
            erroresArray.push("Premios no debe estar vacio")
            awards.classList.add("is-invalid")
            /*//  alert("Premios no debe estar vacio") */
        }
        
        else if (awards.value < 0 || awards.value > 10) {
            erroresArray.push("Los premios deben ser en numeros entre el 0 y el 10 ")
            awards.classList.add("is-invalid")
        }
    


        if (releaseDate.value == "") {
            releaseDate.classList.add("is-invalid")
            erroresArray.push("Fecha estreno no debe estar vacia")
            //  alert("Fecha estreno no debe estar vacia")
        }
        if (duracion.value == "") {
            duracion.classList.add("is-invalid")
            erroresArray.push("Duracion no debe estar vacio")
            //  alert("Duracion no debe estar vacio")
        }
        else if (duracion.value < 60 || duracion.value > 360) {
            erroresArray.push("La duracion debe ser entre 60 y 360 minutos ")
            duracion.classList.add("is-invalid")
        }
 
        /*    if(genre.value==undefined){
            erroresArray.push("Genero no debe estar vacio")
            
            alert("Genero no debe estar vacio")
           } */

        if (erroresArray.length > 0) {
            e.preventDefault()
            erroresArray.forEach(elemento => {
                errores.innerHTML += "<li>" + elemento + "</li>"
                errores.style.color = "red"
                errores.style.fontSize = "16px"
            })
        }
    })

    title.addEventListener("blur", (e) => {
        let erroresArray = []
        errores.innerHTML = ""
        if (title.value == "") {

            //  alert("CAPO")
            erroresArray.push("Titulo no debe estar vacio")
            title.classList.add("is-invalid")
        }
        else {
            title.classList.remove("is-invalid")
        }
        if (erroresArray.length > 0) {
            e.preventDefault()
            erroresArray.forEach(elemento => {
                errores.innerHTML += "<li>" + elemento + "</li>"
                errores.style.color = "red"
                errores.style.fontSize = "16px"
            })
        }
    })

    rating.addEventListener("blur", (e) => {
        let erroresArray = []
        errores.innerHTML = ""
        if (rating.value == "") {

            //  alert("CAPO")
            erroresArray.push("Rating no debe estar vacio")
            rating.classList.add("is-invalid")
        }  
        
        else if (rating.value < 0 || rating.value > 10) {
            erroresArray.push("El Rating debe ser en numeros entre el 0 y el 10 ")
            rating.classList.add("is-invalid")
        }
        else {
            rating.classList.remove("is-invalid")
        }

        if (erroresArray.length > 0) {
            e.preventDefault()
            erroresArray.forEach(elemento => {
                errores.innerHTML += "<li>" + elemento + "</li>"
                errores.style.color = "red"
                errores.style.fontSize = "16px"
            })
        }
    })

    awards.addEventListener("blur", (e) => {
        let erroresArray = []
        errores.innerHTML = ""
        if (awards.value == "") {

            //  alert("CAPO")
            erroresArray.push("Premios no debe estar vacio")
            awards.classList.add("is-invalid")
        }  
        
        else if (awards.value < 0 || awards.value > 10) {
            erroresArray.push("Los premios deben ser en numeros entre el 0 y el 10 ")
            awards.classList.add("is-invalid")
        }
        else {
            awards.classList.remove("is-invalid")
        }

     
        if (erroresArray.length > 0) {
            e.preventDefault()
            erroresArray.forEach(elemento => {
                errores.innerHTML += "<li>" + elemento + "</li>"
                errores.style.color = "red"
                errores.style.fontSize = "16px"
            })
        }
    })
    releaseDate.addEventListener("blur", (e) => {
        let erroresArray = []
        errores.innerHTML = ""
        if (releaseDate.value == "") {

            //  alert("CAPO")
            erroresArray.push("Fecha de estreno no debe estar vacia")
            releaseDate.classList.add("is-invalid")
        }
        else {
            releaseDate.classList.remove("is-invalid")
        }
        if (erroresArray.length > 0) {
            e.preventDefault()
            erroresArray.forEach(elemento => {
                errores.innerHTML += "<li>" + elemento + "</li>"
                errores.style.color = "red"
                errores.style.fontSize = "16px"
            })
        }

        duracion.addEventListener("blur", (e) => {
            let erroresArray = []
            errores.innerHTML = ""
            if (duracion.value == "") {
    
                //  alert("CAPO")
                erroresArray.push("Duracion no puede estar vacio")
                duracion.classList.add("is-invalid")
            }  
            
            else if (duracion.value < 0 || duracion.value > 10) {
                erroresArray.push("La duracion debe ser entre 60 y 360 minutos ")
                duracion.classList.add("is-invalid")
            }
            else {
                duracion.classList.remove("is-invalid")
            }
    
         
            if (erroresArray.length > 0) {
                e.preventDefault()
                erroresArray.forEach(elemento => {
                    errores.innerHTML += "<li>" + elemento + "</li>"
                    errores.style.color = "red"
                    errores.style.fontSize = "16px"
                })
            }
        })
    })


    /*● El formulario contará con validaciones especiales para los siguientes campos:
  ○ Calificación y Premios: deberá validar que el valor ingresado esté
  comprendido entre cero (0) y diez (10).
  ○ Duración: deberá validar que el valor ingresado esté comprendido entre 60
  y 360 minutos.
  
  ● Si los campos cumplen con los requerimientos exigidos, debemos hacer lo
  siguiente:
  ○ A todos los campos input o select se les deberá agregar la clase “is-valid”,
  como constancia que ese campo pasó la validación. Esta ya se encuentra
  creada en el archivo: /public/css/style.css.*/

    duracion.addEventListener("blur", (e) => {
        let erroresArray = []
        errores.innerHTML = ""
        if (duracion.value == "") {

            //  alert("CAPO")
            erroresArray.push("Duracion no debe estar vacio")
            duracion.classList.add("is-invalid")
        }
        else if (duracion.value < 60 || duracion.value > 360) {
            erroresArray.push("La duracion debe ser entre 60 y 360 minutos ")
            duracion.classList.add("is-invalid")
        }
        else {
            duracion.classList.remove("is-invalid")
        }
        
        if (erroresArray.length > 0) {
            e.preventDefault()
            erroresArray.forEach(elemento => {
                errores.innerHTML += "<li>" + elemento + "</li>"
                errores.style.color = "red"
                errores.style.fontSize = "16px"
            })
        }
    })
}