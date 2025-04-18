function editAddNewRow() {
  $.ajax({
    url: "app/ajax/addNewRow.php",
    method: "POST",
    data: { getOrderItem: 1 },
    success: function (a) {
      $("#editInvoiceItem").append(a), $(".select2").select2();
      var t = 0;
      $(".si_number").each(function () {
        $(this).html(++t);
      });
    },
  });
}
$("#empTable").DataTable({
  processing: !0,
  serverSide: !0,
  serverMethod: "post",
  ajax: { url: "app/ajax/member_data.php" },
  columns: [
    { data: "member_id" },
    { data: "name" },
    { data: "company" },
    { data: "address" },
    { data: "con_num" },
    { data: "total_buy" },
    { data: "total_paid" },
    { data: "total_due" },
    { data: "action" },
  ],
}),
  $("#suppliarTable").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/suppliar_data.php" },
    columns: [
      { data: "suppliar_id" },
      { data: "name" },
      { data: "company" },
      { data: "address" },
      { data: "con_num" },
      { data: "total_buy" },
      { data: "total_paid" },
      { data: "total_due" },
      { data: "action" },
    ],
  }),
  $("#staffTable").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/staff_data.php" },
    columns: [
      { data: "id" },
      { data: "name" },
      { data: "designation" },
      { data: "con_no" },
      { data: "email" },
      { data: "address" },
      { data: "action" },
    ],
  }),
  $("#addCatForm").submit(function (a) {
    a.preventDefault();
    var t = $("#addCatForm").serialize();
    $.ajax({
      type: "POST",
      url: "app/action/add_catagory.php",
      data: t,
      success: function (a) {
        "yes" == $.trim(a) &&
          (alert("Catagory added successfull"), location.reload());
      },
    });
  }),
  $("#catagoryTable").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/catagory_data.php" },
    columns: [
      { data: "id" },
      { data: "name" },
      { data: "description" },
      { data: "action" },
    ],
  }),
  $("#ex_catagoryTable").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/ex_catagory_data.php" },
    columns: [
      { data: "id" },
      { data: "name" },
      { data: "description" },
      { data: "action" },
    ],
  }),
  $("#addProduct").submit(function (a) {
    a.preventDefault();
    var t = $("#product_name").val(),
      e = $("#brand").val(),
      d = $("#p_catagory").val();
    if ("" != t && "" != e && null != d) {
      var r = $("#addProduct").serialize();
      $.ajax({
        type: "POST",
        url: "app/action/add_product.php",
        data: r,
        success: function (a) {
          "yes" == $.trim(a)
            ? ($(".addProductError-area").show(),
              $("#addProductError").html("Product added successfull"),
              $("#addProduct")[0].reset())
            : ($(".addProductError-area").show(),
              $("#addProductError").html(a));
        },
      });
    } else $(".addProductError-area").show(), $("#addProductError").html("pleasse filled out all required filled");
  }),
  $("#productTable").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/product_data.php" },
    columns: [
      { data: "product_id" },
      { data: "product_name" },
      { data: "brand_name" },
      { data: "catagory_name" },
      { data: "product_source" },
      { data: "quantity" },
      { data: "buy_price" },
      { data: "sell_price" },
      { data: "action" },
    ],
  }),
  $("#otherProductTable").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/factoryProduct_data.php" },
    columns: [
      { data: "id" },
      { data: "product_id" },
      { data: "product_name" },
      { data: "brand_name" },
      { data: "catagory_name" },
      { data: "quantity" },
      { data: "product_expense" },
      { data: "sell_price" },
      { data: "action" },
    ],
  }),
  $("#purchaseTable").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/purchase_data.php" },
    columns: [
      { data: "id" },
      { data: "product_name" },
      { data: "purchase_date" },
      { data: "purchase_quantity" },
      { data: "purchase_price" },
      { data: "purchase_sell_price" },
      { data: "purchase_net_total" },
      { data: "purchase_due_bill" },
      { data: "return_status" },
      { data: "action" },
    ],
  }),
  $("#purchasereturnTable").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/purchase_return_data.php" },
    columns: [
      { data: "id" },
      { data: "sell_id" },
      { data: "suppliar_name" },
      { data: "return_date" },
      { data: "product_name" },
      { data: "return_quantity" },
      { data: "subtotal" },
      { data: "discount" },
      { data: "netTotal" },
    ],
  }),
  $("#sellTable").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/sell_data.php" },
    columns: [
      { data: "id" },
      { data: "customer_name" },
      { data: "order_date" },
      { data: "sub_total" },
      { data: "prev_due" },
      { data: "net_total" },
      { data: "paid_amount" },
      { data: "due_amount" },
      { data: "return_status" },
      { data: "payment_type" },
      { data: "action" },
    ],
  }),
  $("#sell_returnList").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/sell_return_data.php" },
    columns: [
      { data: "id" },
      { data: "customer_name" },
      { data: "invoice_id" },
      { data: "return_date" },
      { data: "amount" },
    ],
  }),
  $("#expenseList").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/expense_data.php" },
    columns: [
      { data: "id" },
      { data: "ex_date" },
      { data: "expense_for" },
      { data: "amount" },
      { data: "expense_cat" },
      { data: "ex_description" },
      { data: "action" },
    ],
  }),
  $(document).ready(function () {
    function a() {
      $.ajax({
        url: "app/ajax/addNewRow.php",
        method: "POST",
        data: { getOrderItem: 1 },
        success: function (a) {
          $("#invoiceItem").append(a), $(".select2").select2();
          var t = 0;
          $(".si_number").each(function () {
            $(this).html(++t);
          });
        },
      });
    }
    function t(a) {
      var t = 0,
        e = 0,
        d = parseInt($("#prev_due").val()),
        r = a;
      $(".tprice").each(function () {
        (t += 1 * $(this).val()), $("#netTotal").val(e);
      });
      var n = (t / 100) * r;
      $("#s_discount_amount").val(n),
        (e = t - n),
        (e += d),
        $("#subtotal").val(t),
        $("#netTotal").val(e);
    }
    a(),
      $("#addNewRowBtn").on("click", function (t) {
        t.preventDefault(), a();
      }),
      $(document).on("click", ".cancelThisItem", function (a) {
        a.preventDefault(), $(this).parent().parent().remove(), t(0);
      }),
      $(document).on("change", ".pid", function (a) {
        a.preventDefault();
        var e = $(this).val(),
          d = $(this).parent().parent();
        $.ajax({
          url: "app/ajax/single_sell_item.php",
          method: "POST",
          dataType: "json",
          data: { getSellSingleInfo: 1, id: e },
          success: function (a) {
            d.find(".qaty").val(a.quantity),
              d.find(".oqty").val(1),
              d.find(".price").val(a.sell_price),
              d.find(".pro_name").val(a.product_name),
              d
                .find(".tprice")
                .val(d.find(".oqty").val() * d.find(".price").val()),
              t(0);
          },
        });
      }),
      $(document).on("keyup", ".oqty", function (a) {
        var e = $(this),
          d = $(this).parent().parent();
        e.val() - 0 > d.find(".qaty").val() - 0
          ? alert("please enter a valid quantity")
          : (d
              .find(".tprice")
              .val(d.find(".oqty").val() * d.find(".price").val()),
            t(0));
      }),
      $(document).on("change", "#customer_name", function (a) {
        a.preventDefault();
        var t = $("#customer_name").val();
        $.ajax({
          url: "app/ajax/find_customer_due.php",
          method: "POST",
          dataType: "json",
          data: { getcusTotalDue: 1, id: t },
          success: function (a) {
            $("#prev_due").val(a.total_due);
          },
        });
      }),
      $("#discount").on("keyup", function (a) {
        a.preventDefault(), t($(this).val());
      }),
      $(document).on("keyup", ".price", function (a) {
        a.preventDefault();
        var e = $(this).parent().parent(),
          d = $(this).val();
        e.find(".tprice").val(d);
        t(0);
      }),
      $(document).on("keyup", "#s_discount_amount", function (a) {
        a.preventDefault();
        var t = $("#s_discount_amount").val(),
          e = $("#subtotal").val() - t;
        $("#netTotal").val(e);
      }),
      $("#paidBill").on("keyup", function (a) {
        a.preventDefault();
        var t = $(this).val(),
          e = $("#netTotal").val() - t;
        $("#dueBill").val(e);
      }),
      $("#sellBtn").on("click", function (a) {
        a.preventDefault();
        $("#sellForm").serialize();
        var t = $("#customer_name").val(),
          e = $("#payMethode").val();
        null != t && null != e
          ? $.ajax({
              url: "app/action/sell.php",
              method: "POST",
              data: $("#sellForm").serialize(),
              success: function (a) {
                var t = a;
                1 != isNaN(t)
                  ? (window.location.href =
                      "index.php?page=view_sell&&view_id=" + t)
                  : alert("Failed to make sell. please try again.");
              },
            })
          : alert("You missed some required field");
      });
  }),
  $(document).on("click", "#editSellBtn", function (a) {
    a.preventDefault();
    var t = confirm("Are You sure want to edit this sell"),
      e = $("#payMethode").val();
    t
      ? null != e
        ? $.ajax({
            url: "app/action/edit_sell.php",
            method: "POST",
            data: $("#editSellForm").serialize(),
            success: function (a) {
              var t = a;
              1 != isNaN(t)
                ? (window.location.href =
                    "index.php?page=view_sell&&view_id=" + t)
                : alert(a);
            },
          })
        : alert("please select a payment methode")
      : alert("Your data are save");
  }),
  $("#customer_blance_report_data").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/customer_blance_report_data.php" },
    columns: [
      { data: "member_id" },
      { data: "member_name" },
      { data: "company" },
      { data: "phone_number" },
      { data: "cus_total_transaction" },
      { data: "cus_paid_total" },
      { data: "cus_due_toal" },
    ],
  }),
  $("#suppliar_blance_report_data").DataTable({
    processing: !0,
    serverSide: !0,
    serverMethod: "post",
    ajax: { url: "app/ajax/suppliar_blance_report_data.php" },
    columns: [
      { data: "supplier_id" },
      { data: "supplier_name" },
      { data: "company" },
      { data: "phone_number" },
      { data: "net_total" },
      { data: "paid_bill" },
      { data: "due_bill" },
    ],
  }),
  $(document).on("keyup", ".returnQty", function (a) {
    var t = $(this),
      e = $(this).parent().parent();
    t.val() - 0 > e.find(".orderQty").val() - 0 &&
      alert("Return quantity must not getter than order quantity");
  }),
  $("#returnSellBtn").on("click", function (a) {
    a.preventDefault();
    $(".orderQty").val(), $(".returnQty").val();
    confirm("Are You sure want to edit this sell")
      ? $.ajax({
          url: "app/action/sell_return.php",
          method: "POST",
          data: $("#returnSell").serialize(),
          success: function (a) {
            "yes" == $.trim(a) ? alert("Product return successfull") : alet(a);
          },
        })
      : alert("Your data are save");
  }),
  $("#EditaddNewRowBtn").on("click", function (a) {
    a.preventDefault(), editAddNewRow();
  });
