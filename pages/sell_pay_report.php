<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

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
          <!-- Search method start -->
          <div class="box-body">
            <div id="allSearchMethods" class="box-body" style="border: 1px solid #ebedef;">
              <div class="row">
                <div class="col-md-5" id="issueDateMethod">
                  <div class="form-group">
                    <label for="reportrange">Select Date Range</label>
                    <div id="reportrange" style="background: #fff; cursor: pointer; padding: 6px 10px; border: 1px solid #ccc; width: 100%;">
                      <i class="fa fa-calendar"></i>&nbsp;
                      <span id="search_date"></span> <i class="fa fa-caret-down"></i>
                    </div>
                  </div>
                </div>

                <div class="col-md-5" id="customerDiv">
                  <div class="form-group">
                    <label for="customerSelect">Select Customer</label>
                    <select name="customer" id="customerSelect" class="form-control">
                      <option value="all">-All-</option>
                      <?php
                      $all_customer = $obj->all('member');
                      foreach ($all_customer as $customer) {
                      ?>
                        <option value="<?= $customer->id; ?>"><?= htmlspecialchars($customer->name); ?></option>
                      <?php
                      }
                      ?>
                    </select>
                  </div>
                </div>

                <div class="col-md-2" style="margin-top: 30px;">
                  <div class="form-group">
                    <button id="search_sell_payment_report" class="btn btn-primary rounded-0">Show</button>
                  </div>
                </div>
              </div> <!-- row -->
            </div> <!-- allSearchMethods -->
          </div> <!-- box-body -->
        </div> <!-- card-body -->
      </div> <!-- card -->

      <div class="card">
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Payment Date</th>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Payment Type</th>
                <th>Paid Amount</th>
              </tr>
            </thead>
            <tbody id="search_sell_payment_report_res">
              <!-- Data will be loaded here -->
            </tbody>
          </table>
        </div>
      </div>

    </div> <!-- container-fluid -->
  </section> <!-- content -->
</div> <!-- content-wrapper -->

<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>

<script>
  $(function() {
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
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
    }, cb);

    cb(start, end);

    // Search Button Click
    $('#search_sell_payment_report').on('click', function(event) {
      event.preventDefault();
      var issuedate = $.trim($("#search_date").text());
      var customer = $("#customerSelect").val();

      $.post('app/ajax/search_sell_payment_report.php', { // make sure this file exists
        customer: customer,
        issuedate: issuedate
      }, function(data) {
        $("#search_sell_payment_report_res").html(data);
      });
    });
  });
</script>
