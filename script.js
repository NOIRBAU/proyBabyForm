
document.getElementById("button-send").addEventListener("click", function(event){
  event.preventDefault();
    
  if(!validateFields()){
      alert("Existen campos obligatorios por llenar");
  }
  else{
      // Left side
      let firstName = document.getElementById("firstName").value.trim();
      let pFirstName = document.querySelector(".container__page__send__first-name p");
      pFirstName.innerHTML = firstName;

      let streetAddress = document.getElementById("streetAddress").value.trim();
      let pStreetAddress = document.querySelector(".container__page__send__street-address p");
      pStreetAddress.innerHTML = streetAddress;

      let city = document.getElementById("city").value.trim();
      let pCity = document.querySelector(".container__page__send__city p");
      pCity.innerHTML = city;

      let size = document.getElementById("size");
      let pSize = document.querySelector(".container__page__send__size p");
      pSize.innerHTML = size.options[size.selectedIndex].text;

      let color = document.getElementById("color");
      let pColor = document.querySelector(".container__page__send__color p");
      pColor.innerHTML = color.options[color.selectedIndex].text;
      pColor.style.color = pColor.innerHTML;

      // Right side
      let lastName = document.getElementById("lastName").value.trim();
      let pLastName = document.querySelector(".container__page__send__last-name p");
      pLastName.innerHTML = lastName;

      let zip = document.getElementById("ZIP").value.trim();
      let pZip = document.querySelector(".container__page__send__zip-code p");
      pZip.innerHTML = zip;

      let country = document.getElementById("country");
      let pCountry = document.querySelector(".container__page__send__country p");
      pCountry.innerHTML = country.options[country.selectedIndex].text;

      let quantity = document.getElementById("qty").value.trim();
      let pQuantity = document.querySelector(".container__page__send__quantity p");
      pQuantity.innerHTML = quantity;


      let design = document.getElementsByName("print");
      let idDesign = '';
      for(let designIndividual of design){
          if(designIndividual.checked){
              idDesign = designIndividual.id;
              break;
          }
      }
      let imgDesign = document.querySelector("#img-design");
      switch(idDesign){
        case 'print1':
          imgDesign["src"] = 'assets/body1.jpg';
          break;
        case 'print2':
          imgDesign["src"] = 'assets/body2.jpg';
          break;
        case 'print3':
          imgDesign["src"] = 'assets/body3.jpg';
          break;
        case 'print4':
          imgDesign["src"] = 'assets/body4.jpg';
          break;
      }
      

      let pageSend = document.getElementById("page__send");
      pageSend.style.visibility = 'visible';
      window.scrollTo(0, 0);
  }
});

function validateFields(){
  if(document.getElementById("firstName").value.trim() === ''){
      return false;
  }
  if(document.getElementById("lastName").value.trim() === ''){
      return false;
  }
  if(document.getElementById("streetAddress").value.trim() === ''){
      return false;
  }
  if(document.getElementById("city").value.trim() === ''){
      return false;
  }
  if(document.getElementById("qty").value.trim() === ''){
      return false;
  }
  let design = document.getElementsByName("print");
  let somePrintSelected = false;
  for(let designIndividual of design){
      if(designIndividual.checked){
          somePrintSelected = true;
          break;
      }
  }
  if(!somePrintSelected)
      return false;

  return true;
}

document.getElementById("button--back-order-form").addEventListener("click", function(event){
  // Clean fields
  document.getElementById("firstName").value = '';
  document.getElementById("streetAddress").value = '';
  document.getElementById("city").value = '';
  document.getElementById("lastName").value = '';
  document.getElementById("ZIP").value = '';
  document.getElementById("qty").value = '';
  document.getElementById("color").value = '1';
  document.getElementById("size").value = 'NB';
  document.getElementById("country").value = 'CA';
  let design = document.getElementsByName("print");
  for(let designIndividual of design){
      if(designIndividual.checked){
          designIndividual.checked = false;
          break;
      }
  }

  // Send to order form page
  let pageSend = document.getElementById("page__send");
  pageSend.style.visibility = 'hidden';
  window.scrollTo(0, 0);
});



const iconoMenu = document.querySelector('.icono__menu')
const iconoMenuB = document.querySelector('.icono__menu i')
const menuLateral = document.querySelector('.menu__lateral')

iconoMenu.onclick = function () {
  menuLateral.classList.toggle('abierto')
  const isOpen = menuLateral.classList.contains('abierto')
}