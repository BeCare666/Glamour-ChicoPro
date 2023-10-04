		
        // Récupérer l'ID du produit depuis l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get("id");
        // Récupérez une référence à la base de données Firebase
        const firebaseConfig = {
            apiKey: "AIzaSyBFzilWaBL-FeYlSsK2CnbA8djBaD6LIL0",
            authDomain: "glamourchicopro-14e91.firebaseapp.com",
            databaseURL: "https://glamourchicopro-14e91-default-rtdb.firebaseio.com",
            projectId: "glamourchicopro-14e91",
            storageBucket: "glamourchicopro-14e91.appspot.com",
            messagingSenderId: "723590812342",
            appId: "1:723590812342:web:9e51db6c2c53563ed48c17"
            };
            firebase.initializeApp(firebaseConfig);
            const database = firebase.database();
    
            // Récupérez les données des produits depuis Firebase
            const productRef = database.ref("Thedatas");
            productRef.on("value", (snapshot) => {
                const productList = document.getElementById("product-list");
                productList.innerHTML = ""; // Effacez le contenu précédent
                var Canvas =  document.getElementById('canvas');
                var SameToBody =  document.getElementById('sameToBody');
                Canvas.style.display = "block"
                SameToBody.style.display = "none"
                snapshot.forEach((productSnapshot) => {
                    const productData = productSnapshot.val();
                    var myCatory = productData.Category

                    //const productId = productSnapshot.key;
                    if(productId == 1 && myCatory === "Produits de soin du visage"){
                        var photoDataUrl = 'data:image/png;base64,' + productData.RollNo;
                        var BreadcrumbId = document.getElementById('breadcrumbId');
                        BreadcrumbId.innerHTML = `${myCatory} `
                        // Générez le HTML pour chaque produit
                        const productHTML = `
                            <div class="isotope-item col-lg-3 col-md-4 col-sm-6 fashion">
                                <div class="vertical-item content-absolute">
                                    <div class="item-media">
                                        <img src="${photoDataUrl}" alt="${productData.NameOfstd}" style="height: 50vh; width:100%">
                                        <div class="media-links">
                                            <div class="links-wrap">
                                                <a class="snipcart-add-item p-view"
                                                   data-item-id="${productData.Idproduct}"
                                                   data-item-name="${productData.NameOfstd}"
                                                   data-item-price="${productData.Prix}"
                                                   data-item-url="model.html"
                                                   data-item-image="${photoDataUrl}"
                                                   data-item-custom1-name="Plastic cutlery"
                                                   data-item-description="${productData.Genboxtextarea} "
                                                   data-item-custom1-options="Non|Oui[+1.00]|Jamais[+1.00]"
                                                   >
                                                    <i class="fas fa-cart-plus"></i>
                                                </a>
                                                <a class="p-link" title="" href="produitdetails.html?id=${productData.Idproduct}"><i class="fas fa-eye"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-title text-center">
                                    <h4><a href="model.html">${productData.NameOfstd}</a></h4>
                                    <div class = "product-price">
                                    <p class = "last-price"> Nouveau prix: <span>${productData.PrixPromo} $</span></p>
                                    <p class = "new-price"> Ancien prix: <s><span> ${productData.PrixNormo} $</s></span></p>
                                  </div>
                                </div>
                            </div>
                        `;
        
                        productList.innerHTML += productHTML;   

                    }
                    if(productId == 2 && myCatory === "Produits pour les lèvres"){
                        var photoDataUrl = 'data:image/png;base64,' + productData.RollNo;
                        // Générez le HTML pour chaque produit
                        var BreadcrumbId = document.getElementById('breadcrumbId');
                        BreadcrumbId.innerHTML = `${myCatory} `
                        const productHTML = `
                            <div class="isotope-item col-lg-3 col-md-4 col-sm-6 fashion">
                                <div class="vertical-item content-absolute">
                                    <div class="item-media">
                                        <img src="${photoDataUrl}" alt="${productData.NameOfstd}" style="height: 50vh; width:100%">
                                        <div class="media-links">
                                            <div class="links-wrap">
                                                <a class="snipcart-add-item p-view"
                                                   data-item-id="${productData.Idproduct}"
                                                   data-item-name="${productData.NameOfstd}"
                                                   data-item-price="${productData.Prix}"
                                                   data-item-url="model.html"
                                                   data-item-image="${photoDataUrl}"
                                                   data-item-custom1-name="Plastic cutlery"
                                                     data-item-custom1-options="Non|Oui[+1.00]|Jamais[+1.00]"
                                                   >
                                                    <i class="fas fa-cart-plus"></i>
                                                </a>
                                                <a class="p-link" title="" href="produitdetails.html?id=${productData.Idproduct}"><i class="fas fa-eye"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-title text-center">
                                    <h4><a href="model.html">${productData.NameOfstd}</a></h4>
                                    <div class = "product-price">
                                    <p class = "last-price"> Nouveau prix: <span>${productData.PrixPromo} $</span></p>
                                    <p class = "new-price"> Ancien prix: <s><span> ${productData.PrixNormo} $</s></span></p>
                                  </div>
                                </div>
                            </div>
                        `;
        
                        productList.innerHTML += productHTML;   
                    }

                    if(productId == 3 && myCatory === "Produits pour les cils"){
                        var photoDataUrl = 'data:image/png;base64,' + productData.RollNo;
                        var BreadcrumbId = document.getElementById('breadcrumbId');
                        BreadcrumbId.innerHTML = `${myCatory} `
                        // Générez le HTML pour chaque produit
                        const productHTML = `
                            <div class="isotope-item col-lg-3 col-md-4 col-sm-6 fashion">
                                <div class="vertical-item content-absolute">
                                    <div class="item-media">
                                        <img src="${photoDataUrl}" alt="${productData.NameOfstd}" style="height: 50vh; width:100%">
                                        <div class="media-links">
                                            <div class="links-wrap">
                                                <a class="snipcart-add-item p-view"
                                                   data-item-id="${productData.Idproduct}"
                                                   data-item-name="${productData.NameOfstd}"
                                                   data-item-price="${productData.Prix}"
                                                   data-item-url="model.html"
                                                   data-item-image="${photoDataUrl}"
                                                   data-item-custom1-name="Plastic cutlery"
                                                     data-item-custom1-options="Non|Oui[+1.00]|Jamais[+1.00]"
                                                   >
                                                    <i class="fas fa-cart-plus"></i>
                                                </a>
                                                <a class="p-link" title="" href="produitdetails.html?id=${productData.Idproduct}"><i class="fas fa-eye"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-title text-center">
                                    <h4><a href="model.html">${productData.NameOfstd}</a></h4>
                                    <div class = "product-price">
                                    <p class = "last-price"> Nouveau prix: <span>${productData.PrixPromo} $</span></p>
                                    <p class = "new-price"> Ancien prix: <s><span> ${productData.PrixNormo} $</s></span></p>
                                  </div>
                                </div>
                            </div>
                        `;
        
                        productList.innerHTML += productHTML;   
                    }

                    if(productId == 4 && myCatory === "Produits pour les yeux"){
                        var photoDataUrl = 'data:image/png;base64,' + productData.RollNo;
                        var BreadcrumbId = document.getElementById('breadcrumbId');
                        BreadcrumbId.innerHTML = `${myCatory} `
                        // Générez le HTML pour chaque produit
                        const productHTML = `
                            <div class="isotope-item col-lg-3 col-md-4 col-sm-6 fashion">
                                <div class="vertical-item content-absolute">
                                    <div class="item-media">
                                        <img src="${photoDataUrl}" alt="${productData.NameOfstd}" style="height: 50vh; width:100%">
                                        <div class="media-links">
                                            <div class="links-wrap">
                                                <a class="snipcart-add-item p-view"
                                                   data-item-id="${productData.Idproduct}"
                                                   data-item-name="${productData.NameOfstd}"
                                                   data-item-price="${productData.Prix}"
                                                   data-item-url="model.html"
                                                   data-item-image="${photoDataUrl}"
                                                   data-item-custom1-name="Plastic cutlery"
                                                     data-item-custom1-options="Non|Oui[+1.00]|Jamais[+1.00]"
                                                   >
                                                    <i class="fas fa-cart-plus"></i>
                                                </a>
                                                <a class="p-link" title="" href="produitdetails.html?id=${productData.Idproduct}"><i class="fas fa-eye"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-title text-center">
                                    <h4><a href="model.html">${productData.NameOfstd}</a></h4>
                                    <div class = "product-price">
                                    <p class = "last-price"> Nouveau prix: <span>${productData.PrixPromo} $</span></p>
                                    <p class = "new-price"> Ancien prix: <s><span> ${productData.PrixNormo} $</s></span></p>
                                  </div>
                                </div>
                            </div>
                        `;
        
                        productList.innerHTML += productHTML;   
                    }

                });
            });

        // Sélectionnez l'élément d'entrée de recherche par son ID
        const searchInput = document.getElementById("orderby1");

        // Écoutez l'événement d'entrée utilisateur dans l'input
        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase(); // Obtenez le terme de recherche en minuscules

            // Récupérez tous les éléments produits
            const products = document.querySelectorAll(".isotope-item");
            // Parcourez les produits et filtrez-les en fonction du terme de recherche
            products.forEach((product) => {
                const productName = product.querySelector(".item-title a").textContent.toLowerCase();
                if (productName.includes(searchTerm)) {
                    product.style.display = "block"; // Affichez le produit s'il correspond au terme de recherche
                } else {
                    product.style.display = "none"; // Masquez le produit s'il ne correspond pas
                }
            });
        });

      

       

    
    