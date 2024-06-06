document.addEventListener('DOMContentLoaded', ()=>{
    const btnAdd = document.querySelector('#btnAdd')
    btnAdd.addEventListener('click', () => { 
    add()
    clean()
    })

    const btnCancelar = document.querySelector('#btnCancelar')
    btnCancelar.addEventListener('click', cancelar)
    
})

const btnAdd = document.querySelector('#btnAdd')


function add() {

        const description = document.querySelector('#description').value
        const quantity = document.querySelector('#quantity').value
        const price = document.querySelector('#price').value

    if (description.length < 1 || quantity < 1 || price < 1 || isNaN(quantity) || isNaN(price) ) {
        alert('informacion Incompleta')
        return

    } else { 
        const description = document.querySelector('#description').value
        const quantity = document.querySelector('#quantity').value
        const price = document.querySelector('#price').value
        let importe = parseInt(quantity) * parseInt(price)
        
        const detalle = document.querySelector('#detalle')
        let tr = document.createElement('tr')
        
        let td = document.createElement('td')
        td.textContent = quantity
        tr.appendChild(td)
        detalle.appendChild(tr)

        td = document.createElement('td')
        td.textContent = description
        tr.appendChild(td)
        detalle.appendChild(tr)

        td = document.createElement('td')
        td.textContent = price
        tr.appendChild(td)
        detalle.appendChild(tr)

        td = document.createElement('td')
        td.textContent = importe
        tr.appendChild(td)
        detalle.appendChild(tr)

        btn = document.createElement('button')
        btn.setAttribure
        let o = 0

        let lista = document.querySelector("#detalle")
        let filas = lista.querySelectorAll('tr')
        let nume = filas.length
        
        btn.id = `buttonItem${nume-1}`
        btn.style.background = "red"
        btn.style.color = "white"
        btn.style.padding = "4px"
        btn.textContent = "X"
        tr.appendChild(btn)
        detalle.appendChild(tr)

        // sacar iva de html
        const tfoot = document.querySelector('tfoot') 
        tr = tfoot.querySelectorAll('tr')[1]
        th = tr.querySelectorAll('th')[1]
        nIva = parseInt(th.textContent.slice(5, 7))

        // eliminar
        for (let i = 0; i < filas.length; i++) {
            const btnErase = document.querySelector(`#buttonItem${i}`)
            btnErase.addEventListener('click', () => {
                let eliminar = filas[i]
                const response = confirm('Seguro desea cancelar este producto?')
                if(response){
                    eliminar.remove()
                }
                sumar();
            })
        }

        sumar();
    }    
}

function clean() { 
    document.querySelector('#description').value = ''
    document.querySelector('#quantity').value = ''
    document.querySelector('#price').value = ''
}

function sumar() { 
        lista = document.querySelector("#detalle")
        filas = lista.querySelectorAll('tr')
        nume = filas.length
                    // asiganr btn
        let suma = 0
        for (let i = 0; i < filas.length; i++) {
            let column = filas[i]
            let item = column.querySelectorAll('td')[3]
            subtot=parseInt(item.textContent)
            suma += subtot;    
        }
        
        const subtotal = document.querySelector('#subtotal')
        subtotal.textContent = suma
        
        const iva = document.querySelector('#iva') 
        iva.textContent = suma * (nIva/100)

        const total = document.querySelector('#total')
    total.textContent = (1 + (nIva / 100)) * (suma)
    
}

function cancelar(){
    const response = confirm('Seguro desea cancelar la factura?')
    if(response){
        location.reload()
    }
}
