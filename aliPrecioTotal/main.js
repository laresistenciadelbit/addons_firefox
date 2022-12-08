let doThis=true;
if(!window.location.pathname.includes("/wholesale"))
	doThis=false;

let searchingClass="vcAi3";

let plusSendString="+envío =";
let sendingWord="envío";
let freeShippingWord="Envío "+"gratis";

if( doThis ) 
{
	if(document.getElementsByClassName(searchingClass).length == 0 )
		searchingClass="v3--servicesText--1DI-jq_";
	
	if(document.getElementsByClassName("language_txt")[0].textContent == "English") {
		sendingWord="Shipping";
		freeShippingWord="Free "+"Shipping";
		plusSendString="+shipping =";
	}
}

//Cuando no utiliza la clase vcAi3 ni la de servicesText, la buscamos aquí a partir de la string envío
if ( doThis && document.getElementsByClassName(searchingClass).length == 0 ) {
	let limit=50;
	let shippingCostIndex = document.body.innerHTML.indexOf("+"+sendingWord+":");

	if(shippingCostIndex < 0) {
		shippingCostIndex = document.body.innerHTML.indexOf("+ "+sendingWord+":"); //si viene de un servidor cacheado viene con espacio extra S: //la separación (+) es necesaria para pruebas locales donde se duplica el código del script en la fuente de la web
	}

	//puede no haber cargado aún ningún producto con gastos de envío, podemos obtener el objeto de los que tienen envío gratis (pero esa frase también se repite fuera de los productos así que no se toma la primera)
	if(shippingCostIndex < 0) {
		let indexAux = document.body.innerHTML.indexOf(freeShippingWord);
		shippingCostIndex = indexAux+100+document.body.innerHTML.substr(indexAux+100).indexOf(freeShippingWord);
	}

	if(shippingCostIndex > -1) {
		let classStartIndex = shippingCostIndex - limit + (document.body.innerHTML.substr(shippingCostIndex-limit, limit)).lastIndexOf("=")+2;
		searchingClass = document.body.innerHTML.substr(classStartIndex, shippingCostIndex-2-classStartIndex);
	} else {
		searchingClass = null;
	}
}

function patata()
{
	document.querySelectorAll(".totalpriceclass").forEach(function(totalPriceSpan) {
		let totalPriceSpanParent = totalPriceSpan.parentElement;
		totalPriceSpan.remove();
		totalPriceSpanParent.lastChild.textContent="€";
	});
	
	let auxobj;
	document.querySelectorAll("."+searchingClass).forEach(function(shippingCostSpan)
	{
		// este selector será diferente en base a si viene de servidor cacheado o no
		if(typeof shippingCostSpan.parentElement.parentElement.firstChild.firstChild.children[0] !== 'undefined') {
			auxobj=shippingCostSpan.parentElement.parentElement.firstChild.firstChild;
		} else if(typeof shippingCostSpan.parentElement.parentElement.parentElement.children[1].children[0] !== 'undefined') {
			auxobj=shippingCostSpan.parentElement.parentElement.parentElement.children[1];
		} else {
			auxobj=null
		}

		if(
			auxobj &&
			auxobj.lastChild.textContent == "€" &&
			( shippingCostSpan.textContent[0]=='·' || shippingCostSpan.textContent[0]=='+' ) &&
			(shippingCostSpan.textContent).indexOf("€") > -1
		) {
			let price =	parseFloat(auxobj.children[0].textContent);
			if(auxobj.children[1].textContent == ',') {
				price += parseFloat("0."+auxobj.children[2].textContent);
			} else {
				if(auxobj.children[1].textContent == '.') //para millares paso de sumarle los decimales, porque habría que comprobar también si los tiene o no...
					price = parseFloat(auxobj.children[0].textContent + auxobj.children[2].textContent);
			}

			let shippingCost=parseFloat(shippingCostSpan.textContent.substr(shippingCostSpan.textContent.lastIndexOf("€")+2).replace(".","").replace(",","."));
			for(let i=0;i<auxobj.children.length;i++) {
				auxobj.children[i].style.color="grey";
				auxobj.children[i].style.fontSize="xx-small";
			}
			let newSpan=document.createElement("span");
			newSpan.append( (price+shippingCost).toFixed(2) + "€" );
			newSpan.style.fontSize="medium";
			newSpan.classList.add("totalpriceclass");

			auxobj.lastChild.textContent += " "+plusSendString+" ";
			auxobj.append(newSpan);
			shippingCostSpan.textContent="·"+shippingCostSpan.textContent.substr(1); //cambiamos el + por ·
			shippingCostSpan.style.color="grey";
			shippingCostSpan.style.fontSize="xx-small";
		} else {
			if((shippingCostSpan.textContent).indexOf("gratis") > -1 || (shippingCostSpan.textContent).indexOf("Free Shipping") > -1) {
				for(let i=0;i<auxobj.children.length;i++) {
					auxobj.children[i].style.color="black";
					auxobj.children[i].style.fontSize="medium";
				}
			}
		}
	});
}

function lookForChanges() {
	patata();
}

if(doThis && searchingClass) {
	patata();
	setInterval(lookForChanges, 3500);
}