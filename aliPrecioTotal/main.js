let searchingClass="vcAi3";
let doThis=true;
if(!window.location.pathname.includes("/wholesale"))
	doThis=false;

//Si aliexpress modificase en el futuro la clase "vcAi3", aún así la buscaríamos aquí a partir de la string "+envío:"
if ( doThis && document.getElementsByClassName(searchingClass).length == 0 ) {
	let limit=50;
	let shippingCostIndex = document.body.innerHTML.indexOf("+envío:");
	
	if(shippingCostIndex > -1 && shippingCostIndex > document.body.innerHTML.indexOf("let searchingClass="))
		shippingCostIndex = -1;
	
	if(shippingCostIndex > -1) {
		let classStartIndex = shippingCostIndex - limit + (document.body.innerHTML.substr(shippingCostIndex-limit, limit)).lastIndexOf("=")+2;
		searchingClass = document.body.innerHTML.substr(classStartIndex, shippingCostIndex-2-classStartIndex);
	} else {
		searchingClass = -1;
	}
}

function patata() {
	document.querySelectorAll("."+searchingClass).forEach(function(shippingCostSpan) {
		if(shippingCostSpan.textContent[0]=='+' && (shippingCostSpan.textContent).indexOf("€")>-1)
		{
			let price = parseFloat(
				shippingCostSpan.parentElement.parentElement.firstChild.firstChild.children[0].textContent + 
				"." +
				shippingCostSpan.parentElement.parentElement.firstChild.firstChild.children[2].textContent
			);

			let shippingCost=parseFloat(shippingCostSpan.textContent.substr(shippingCostSpan.textContent.lastIndexOf("€")+2).replace(",","."));

			for(let i=0;i<4;i++)
			{
				shippingCostSpan.parentElement.parentElement.firstChild.firstChild.children[i].style.color="grey";
				shippingCostSpan.parentElement.parentElement.firstChild.firstChild.children[i].style.fontSize="xx-small";
			}
			let newSpan=document.createElement("span");
			newSpan.append( (price+shippingCost).toFixed(2) + "€" );
			newSpan.style.fontSize="medium";

			shippingCostSpan.parentElement.parentElement.firstChild.firstChild.children[3].textContent += "    +envío = ";
			shippingCostSpan.parentElement.parentElement.firstChild.firstChild.append(newSpan);
			shippingCostSpan.textContent=shippingCostSpan.textContent.substr(1);
		}
		shippingCostSpan.classList.remove(searchingClass);
	});
}

function lookForChanges() {
	if ( document.getElementsByClassName(searchingClass).length > 0 )
		patata();
}

if(doThis && searchingClass) {
	patata();
	setInterval(lookForChanges, 5000);
}