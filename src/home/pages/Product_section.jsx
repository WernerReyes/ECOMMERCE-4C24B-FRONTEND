import React from 'react';

function Producto_section(){
    return(
       
		<div class="product-section">
			<div class="container">
				<div class="row">

					
					<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title">Crafted with excellent material.</h2>
						<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><a href="shop.html" class="btn">Explore</a></p>
					</div> 
					

				
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src="images/product-1.png" class="img-fluid product-thumbnail"></img>
							<h3 class="product-title">Nordic Chair</h3>
							<strong class="product-price">s/800.00</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"></img>
							</span>
						</a>
					</div> 
					

					
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src="images/product-2.png" class="img-fluid product-thumbnail"></img>
							<h3 class="product-title">Kruzo Aero Chair</h3>
							<strong class="product-price">s/700.00</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"></img>
							</span>
						</a>
					</div>
					

			
					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src="images/product-3.png" class="img-fluid product-thumbnail"></img>
							<h3 class="product-title">Ergonomic Chair</h3>
							<strong class="product-price">s/650.00</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid"></img>
							</span>
						</a>
					</div>
		

				</div>
			</div>
		</div>
		
    );
}

export default Producto_section;