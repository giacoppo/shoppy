<body>

<header>
  <!-- Fixed navbar -->
  <nav class="navbar navbar-expand-md navbar-light bg-white">
    <a class="navbar-brand rounded" href="#">
        <h1>Shoppy</h1>
        <img class="img-fluid" src="./assets/img/plain-logo.gif">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
      
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
      
        <!-- highlight if $page_title has 'Products' word. -->
        <li class="nav-item" <?php echo $page_title=="Products" ? "class='active'" : ""; ?>>
            <a href="products.php" class="nav-link dropdown-toggle">Products</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        
      </ul>
<!--
      <form class="form-inline mt-2 mt-md-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
-->
      <ul class="navbar-nav ml-sm-0 ml-md-3 mt-3 mt-md-0">
         <li class="nav-item" <?php echo $page_title=="Cart" ? "class='active'" : ""; ?> >
            <a class="nav-link" href="cart.php">
                <?php
                // count products in cart
                $cart_count=count($_SESSION['cart']);
                ?>
                Cart <span class="badge" id="comparison-count"><?php echo $cart_count; ?></span>
            </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href=""><span class="oi oi-person"></span></a>
        </li>
      </ul>
    </div><!-- .navbar-collapse -->
  </nav>
</header>