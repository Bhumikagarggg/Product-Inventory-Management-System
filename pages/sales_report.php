<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-md-6">
          <h1 class="m-0 text-dark">Sales Report</h1>
        </div>
        <div class="col-md-6 mt-3">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">Sales Report</li>
          </ol>
        </div>
      </div>
    </div>
  </div>

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">

      <div class="card">
        <div class="card-body">
          <!-- Search Form -->
          <div class="box-body" style="border: 1px solid #ebedef;">
            <div class="row">
              <!-- Date Range Picker -->
              <div class="col-md-5">
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

              <!-- Customer Select -->
              <div class="col-md-5">
                <div class="form-group">
                  <label>Select Customer</label>
                  <select name="customer" id="customer_select" class="form-control">
                    <option value="all">- All -</option>
                    <?php
                    $all_customer = $obj->all('member');
                    foreach ($all_customer as $customer) {
                    ?>
                      <option value="<?= $customer->id; ?>"><?= $customer->name; ?></option>
                    <?php
                    }
                    ?>
                  </select>
                </div>
              </div>

              <!-- Search Button -->
              <div class="col-md-2" style="margin-top: 30px;">
                <div class="form-group">
                  <button id="search_sales_report" class="btn btn-primary rounded-0">Show</button>
                </div>
              </div>
            </div>
          </div>
          <!-- /.Search Form -->
        </div>
      </div>

      <!-- Sales Report Table -->
      <div class="card">
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Invoice Number</th>
                <th>Sales Date</th>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Invoice Total</th>
                <th>Paid Payment</th>
                <th>Due Amount</th>
              </tr>
            </thead>
            <tbody id="search_sales_report_res">
              <!-- Dynamic Data Loads Here -->
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </section>
</div>

<!-- jQuery, Moment.js, Daterangepicker -->
<script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>

<!-- Date Range Picker Setup -->
<script>
  var start = moment().subtract(29, 'days');
  var end = moment();

  function updateDateRange(start, end) {
    $('#search_date').html(start.format('MM/DD/YYYY') + ' - ' + end.format('MM/DD/YYYY'));
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
  }, updateDateRange);

  updateDateRange(start, end);
</script>

<!-- AJAX Search Sales Report -->
<script>
  $(document).on('click', '#search_sales_report', function(event) {
    event.preventDefault();

    var issuedate = $.trim($("#search_date").text());
    var customer = $("#customer_select").val();

    $.post('app/ajax/search_sales_report.php', {
      customer: customer,
      issuedate: issuedate
    }, function(data) {
      $("#search_sales_report_res").html(data);
    });
  });
</script>
