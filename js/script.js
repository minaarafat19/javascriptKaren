function getBarecode()
{
    return new Promise(function(resolve, reject)
    {
        //("https://world.openfoodfacts.org/api/v0/product/${ean}.json")
        axios.get("https://world.openfoodfacts.org/api/v0/product/[3596710413720].json").then(function(datas){
            resolve(datas);
        })

    });
}
var Barcode = getBarecode();
Barcode.then(function(res){

});

const getInfo = new Promise ( ( resolve,reject) => {
    const found = datas.data.status;
    axios.get("https://world.openfoodfacts.org/api/v0/product/[3596710413720].json").then(datas => {
        if( find == 0)
        {
            alert("non trouver")
        }
    })




})


const bouton= document.getElementById("btn-search");
bouton.addEventListener("click", () =>{
    const ean = document.getElementById("input-ean").ariaValueMax.trim();
    let url = ("https://world.openfoodfacts.org/api/v0/product/[ean].json");
    
    //met url ici/*/

    
    axios.get(url).then(datas => {
        const find = datas.data.status;
        console.log(datas)
        if( find == 0)
        {
            alert("produit non trouver")
            return
        }
        //recupere tout l article  
        //faire dollar et crocher pour produit name sur card class 
        // sur image dolar prodi_image.url
        const produit = datas.data.product;
        console.log(produit);
        let html = `
        
        <div class="card" style="width: 18rem;">
        <img src="${produit_image.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="${product.name}Card title</h5>
          <h6 class="${product.brands}"></h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
        
        //dollar produit.brands

      var liste =   document.getElementById("liste-produit").innerHTML(html);
      liste.innerHTML += html  

      document.getElementById("btn-suppr-" + produit.id).addEventListener("click", () => {
          let elem =  document.getElementById("produit-" + produit.id)
          liste.removeChild(elem)
      })
    })
})

    // VERIFIER 
   // var bouton= document.getElementById("btn-add-todo");

/*bouton.addEventListener("click",function(){
    var input=document.getElementById("add-todo");
    
    if(input.value.trim().length==0) return;

    var ul= document.getElementById("list-todo");
    var li= document.createElement("li");
    li.innerText=input.value;
    li.setAttribute("class","list-group-item");
    ul.appendChild(li);
    input.value="";
    input.focus();

    var badge= document.getElementById("badge-todo");
    var tabLi= document.getElementsByClassName("list-group-item");
    badge.innerText=tabLi.length;
    function search ()
    {
        var code_barre = document.getElementById("code_barre").value;
        var link = "https://world.openfoodfacts.org/api/v0/product/" + code_barre + "json";

        $.getJSON(link,
            function(data)
            {
                document.getElementById("code").innerHTML = "code-barres : " + data["code"];
                document.getElementById("generic_name_fr").innerHTML = "code-barres : " + data["product"]["generic_name_fr"];
            });
    }



});*/


     