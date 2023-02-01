T1=''
T2=''
// let a = document.getElementById('text1')
// let b = document.getElementById('text2')
r=''
palabra1 = ''
palabra2 = ''

//  Captura primera palabra
function tex1()
{
    console.log('entro a texto 1')
 T1 =  palabra1.length
}

//  Captura segunda palabra
function tex2()
{
    console.log('entro a texto 2')
 T2 =  palabra2.length
}

// Diferencia entre palabras
function resultado(){

    for (let index = 0; index < palabra1.length; index++) {
        const element = palabra1[index];
        
    }
    console.log('entro a diferencia')
    r= T1-T2
    document.getElementById('res').innerHTML= r
}




// Vacia los campos
function borrar() {
    console.log('entro a borrar')
    document.getElementById('res').innerHTML = ''
    palabra1=''
    palabra2=''
}

    // let a = document.getElementById('text1').value 
    // for (let index = 0; index < a.length; index++) {
    //     const element = a[index]
    //     console.log(element) 
    // } 