let doThis=true;
if(!window.location.pathname.includes("/wholesale"))
	doThis=false;

let plusSendString="+envío =";
let searchingClass="vcAi3";
if(document.getElementsByClassName(searchingClass).length == 0)
	searchingClass="v3--servicesText--1DI-jq_";

//Cuando no utiliza la clase vcAi3 ni la de servicesText, la buscamos aquí a partir de la string envío
if ( doThis && document.getElementsByClassName(searchingClass).length == 0 ) {
	let limit=50;
	let shippingCostIndex = document.body.innerHTML.indexOf("+envío"+":");

	if(shippingCostIndex < 0) {
		shippingCostIndex = document.body.innerHTML.indexOf("+ envío"+":"); //si viene de un servidor cacheado viene así
	}

	//puede no haber cargado aún ningún producto con gastos de envío, pero esta string aparece más veces
	if(shippingCostIndex < 0) {
		let indexAux = document.body.innerHTML.indexOf("Envío "+"gratis");
		shippingCostIndex = indexAux+100+document.body.innerHTML.substr(indexAux+100).indexOf("Envío "+"gratis");
	}

	if(shippingCostIndex > -1) {
		let classStartIndex = shippingCostIndex - limit + (document.body.innerHTML.substr(shippingCostIndex-limit, limit)).lastIndexOf("=")+2;
		searchingClass = document.body.innerHTML.substr(classStartIndex, shippingCostIndex-2-classStartIndex);
	} else {
		searchingClass = null;
	}
}

function patata() {
	let auxobj;
	document.querySelectorAll("."+searchingClass).forEach(function(shippingCostSpan) {
		// este selector será diferente en base a si viene de servidor cacheado o no
		if(typeof shippingCostSpan.parentElement.parentElement.firstChild.firstChild.children[0] !== 'undefined') {
			auxobj=shippingCostSpan.parentElement.parentElement.firstChild.firstChild;
		} else if(typeof shippingCostSpan.parentElement.parentElement.parentElement.children[1].children[0] !== 'undefined') {
			auxobj=shippingCostSpan.parentElement.parentElement.parentElement.children[1];
		} else {
			auxobj=null
		}

		if(auxobj && (auxobj.lastChild.textContent).indexOf("€") == (auxobj.lastChild.textContent).length-1 ) {
		//si está recalculando hay que eliminar lo existente! (ya que al paginar carga por ajax el contenido sobre los mismos cmapos, así que me obliga a recalcular los ya calculados :S)
			//si el children 1 o 3 tiene plusSendString , de ese span hay que eliminar todo (igualarlo a "€")
			let repeated = 0;
			if(auxobj.children[1].textContent.indexOf(plusSendString) > -1) {
				repeated = 1;
			} else {
				if(typeof auxobj.children[3] !== 'undefined' && auxobj.children[3].textContent.indexOf(plusSendString) > -1) { //si hay decimales
					repeated = 3;
				} else {
					if(typeof auxobj.children[5] !== 'undefined' && auxobj.children[5].textContent.indexOf(plusSendString) > -1) { //si hay miles y decimales
					repeated = 5;
					}
				}
			}
			if(repeated)
			{
				auxobj.children[repeated].textContent="€";
				//si eso fue así, además hay que eliminar el último hijo de de auxobj (el total que se ha calculado)
				auxobj.lastChild.remove();
			}
			if(
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

				let shippingCost=parseFloat(shippingCostSpan.textContent.substr(shippingCostSpan.textContent.lastIndexOf("€")+2).replace(",","."));
				for(let i=0;i<auxobj.children.length;i++) {
					auxobj.children[i].style.color="grey";
					auxobj.children[i].style.fontSize="xx-small";
				}
				let newSpan=document.createElement("span");
				newSpan.append( (price+shippingCost).toFixed(2) + "€" );
				newSpan.style.fontSize="medium";

				auxobj.lastChild.textContent += " "+plusSendString+" ";
				auxobj.append(newSpan);
				shippingCostSpan.textContent="·"+shippingCostSpan.textContent.substr(1); //cambiamos el + por ·
				shippingCostSpan.style.color="grey";
				shippingCostSpan.style.fontSize="xx-small";
			} else {
				if((shippingCostSpan.textContent).indexOf("gratis") > -1) {
					for(let i=0;i<auxobj.children.length;i++) {
						auxobj.children[i].style.color="black";
						auxobj.children[i].style.fontSize="medium";
					}
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
	setInterval(lookForChanges, 4500);
}