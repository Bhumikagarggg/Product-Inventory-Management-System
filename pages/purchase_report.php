<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-md-6">
          <h1 class="m-0 text-dark">Purchase Report</h1>
        </div>
        <div class="col-md-6 mt-3">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Purchase Report</li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      
      <!-- Search Card -->
      <div class="card">
        <div class="card-body">
          <div class="box-body">
            <div id="allSearchMethods" class="box-body" style="border: 1px solid #ebedef;">
              <div class="row">
                
                <!-- Date Range Picker -->
                <div class="col-md-5" id="issueDateMethod">
                  <div class="form-group">
                    <label for="">Select Date Range</label>
                    <div class="input-group">
                      <div id="reportrange" style="background: #fff; cursor: pointer; padding: 6px 10px; border: 1px solid #ccc; width: 100%">
                        <i class="fa fa-calendar"></i>&nbsp;
                        <span id="search_date"></span> <i class="fa fa-caret-down"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Supplier Dropdown -->
                <div class="col-md-5" id="supplier">
                  <div class="form-group">
                    <label>Select Supplier</label>
                    <select name="supplier" id="supplier" class="form-control">
                      <option value="all">-All-</option>
                      <?php
                      $all_supplier = $obj->all('suppliar');
                      foreach ($all_supplier as $supplier) {
                      ?>
                        <option value="<?= $supplier->id ?>"><?= $supplier->name ?></option>
                      <?php
                      }
                      ?>
                    </select>
                  </div>
                </div>

                <!-- Search Button -->
                <div class="col-md-2 d-flex align-items-end" id="form-submit-btn">
                  <div class="form-group">
                    <input type="submit" id="search_purchase_report" class="btn btn-primary rounded-0 w-100" value="Show">
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Report Table Card -->
      <div class="card">
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Purchase ID</th>
                <th>Sales Date</th>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Invoice Total</th>
                <th>Paid Payment</th>
                <th>Due Amount</th>
              </tr>
            </thead>
            <tbody id="search_purchase_report_res">
              <!-- Data loads here -->
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </section>
</div>

<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>

<script type="text/javascript">
  $(function() {
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
      $('#reportrange span').html(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
    }

    $('#reportrange').daterangepicker({
      startDate: start,
      endDate: end,
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
      }
    }, cb);

    cb(start, end);

    // Search Button Click
    $(document).on('click', '#search_purchase_report', function(event) {
      event.preventDefault();

      var issuedate = $.trim($("#search_date").text());
      var supplier = $("#supplier option:selected").val();

      // Loading indicator
      $("#search_purchase_report_res").html("<tr><td colspan='8' class='text-center'>Loading...</td></tr>");

      // Ajax call
      $.post('app/ajax/search_purchase_report.php', {
        supplier: supplier,
        issuedate: issuedate
      }, function(data) {
        $("#search_purchase_report_res").html(data);
      });

    });

  });
</script>
