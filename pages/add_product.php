<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <h1 class="m-0 text-dark"><!-- Dashboard v2 --></h1>
          </div><!-- /.col -->
          <div class="col-md-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
            </div><!-- /.col -->
            </div><!-- /.row -->
            </div><!-- /.container-fluid -->
          </div>
          <!-- /.content-header -->
          <!-- Main content -->
          <section class="content">
            <div class="container-fluid">
              <!-- .row -->
               <div class="card">
                  <div class="card-header">
                    <h3 class="card-title"><b>Add a new product</b></h3>

                     <button type="button" class="btn btn-primary btn-sm float-right rounded-0" data-toggle="modal" data-target=".catagoryModal"><i class="fas fa-plus"></i> catagory</button>
                  </div>
                  <div class="card-body">
                     <div class="alert alert-primary alert-dismissible fade show addProductError-area" role="alert">
                        <span id="addProductError"></span>
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                <form id="addProduct">
                          <div class="row">
                          <div class="col-md-6 ">
                            <div class="form-group">
                            <label for="product_name">Product name * :</label>
                            <input type="text" class="form-control" id="product_name" placeholder="Product name" name="product_name">
                          </div>
                         </div>
                          <div class="col-md-6">
                             <div class="form-group">
                            <label for="brand">Brand Name * :</label>
                            <input type="text" class="form-control" id="brand" placeholder="Brand name" name="brand">
                          </div>
                         </div>
                       </div>
                        
                          <div class="row">
                            <div class="col-md-6">
                               <div class="form-group">
                                <label for="p_catagory">Product category * :</label>
                                <select name="p_catagory" id="p_catagory" class="form-control select2">
                                  <option disabled selected>Select a category</option>
                                  <?php 
                                    $all_catgory = $obj->all('catagory');
                                    foreach ($all_catgory as $catagory) {
                                      ?>  
                                        <option value="<?=$catagory->id;?>"><?=$catagory->name;?></option>
                                      <?php 
                                    }
                                   ?>
                                </select>
                             </div>
                            </div>
                          
                         
                         <div class="col-md-6">
                             <div class="form-group">
                            <label for="product_source">Product source * :</label>
                            <select name="product_source" id="product_source" class="form-control select2">
                              <option value="factory">Factory</option>
                              <option value="buy">Buying</option>
                            </select>
                           </div>
                         </div>
                       </div>
<div class="row">
                          <div class="col-md-6">
                             <div class="form-group">
                            <label for="sku">SKU :</label>
                            <input type="text" class="form-control" id="sku" placeholder="product SKU" name="sku">
                           </div>
                         </div>
                         <!--  <div class="col-md-4 col-lg-4">
                            <div class="form-group">
                            <label for="quantity">Quantity :</label>
                            <input type="number" class="form-control" id="quantity" placeholder="product quantity" name="quantity">
                          </div>
                         </div> -->
                          <div class="col-md-6">
                            <div class="form-group">
                            <label for="alert_quantity">Alert Quantity * :</label>
                            <input type="number" class="form-control" id="alert_quantity" placeholder="alert quantity" name="alert_quantity">
                          </div>
                         </div>
                         </div>
                       <!--   <div class="col-md-4 col-lg-4">
                           <div class="form-group">
                            <label for="buy_price">Buying Price :</label>
                            <input type="number" class="form-control" id="buy_price" placeholder="buying price" name="buy_price">
                          </div>
                         </div> -->
                         <!--  <div class="col-md-4 col-lg-4">
                           <div class="form-group">
                            <label for="selling_price">Selling Price :</label>
                            <input type="number" class="form-control" id="selling_price" placeholder="selling price" name="selling_price">
                          </div>
                         </div> -->
                        
                           <div class="row text-center  buttons">
                            <div class="col-md-6 offset-md-3 col-lg-6 offset-lg-3">
                              <input type="reset" title="Reset form" class="btn btn-danger pl-5 pr-5 rounded-0">
                              <button type="submit" title="Save data" class="btn btn-primary pl-5 pr-5  rounded-0">Submit</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    
                 </div>
                
                <!-- /.row -->
                </div><!--/. container-fluid -->
              </section>
              <!-- /.content -->
            </div>
            <!-- /.content-wrapper