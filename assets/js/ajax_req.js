$("#editCatForm").submit(function (e) {
  e.preventDefault();
  var t = $("#editCatForm").serialize();
  $.ajax({
    type: "POST",
    url: "app/action/edit_cat.php",
    data: t,
    success: function (e) {
      alert(e);
    },
  });
}),
  $(document).on("click", "#catagoryDelete_btn", function (e) {
    e.preventDefault(),
      ($delete_id = $(this).data("id")),
      confirm("Are You sure want to delete this item?") &&
        $.post(
          "app/action/delete_cat.php",
          { delete_id: $delete_id, delete_data: "delete_data" },
          function (e) {
            "true" == $.trim(e)
              ? (alert("data deleted successfull"), location.reload())
              : alert("faild to delete data");
          }
        );
  }),
  $("#adMemberForm").submit(function (e) {
    e.preventDefault();
    var t = $("#adMemberForm").serialize();
    $.ajax({
      type: "POST",
      url: "app/action/add_member.php",
      data: t,
      success: function (e) {
        "yes" == $.trim(e)
          ? (alert("member added successfully"), location.reload())
          : alert(e);
      },
    });
  }),
  $("#editMemberForm").submit(function (e) {
    e.preventDefault();
    var t = $("#editMemberForm").serialize();
    confirm("Are You sure want to edit data")
      ? $.ajax({
          type: "POST",
          url: "app/action/edit_member.php",
          data: t,
          success: function (e) {
            alert(e);
          },
        })
      : alert("your data are save");
  }),
  $(document).on("click", "#memberDelete_btn", function (e) {
    e.preventDefault(),
      ($delete_id = $(this).data("id")),
      confirm("Are You sure want to delete this item?") &&
        $.post(
          "app/action/delete_member.php",
          { delete_id: $delete_id, delete_data: "delete_data" },
          function (e) {
            "true" == e
              ? (alert("data deleted successfull"), location.reload())
              : alert(e);
          }
        );
  }),
  $("#adsuppliarForm").submit(function (e) {
    e.preventDefault();
    var t = $("#adsuppliarForm").serialize();
    $.ajax({
      type: "POST",
      url: "app/action/add_suppliar.php",
      data: t,
      success: function (e) {
        "yes" == $.trim(e)
          ? (alert("suppliar added successfully."), location.reload())
          : alert(e);
      },
    });
  }),
  $("#editSuppliarForm").submit(function (e) {
    e.preventDefault();
    var t = $("#editSuppliarForm").serialize();
    $.ajax({
      type: "POST",
      url: "app/action/edit_suppliar.php",
      data: t,
      success: function (e) {
        alert(e);
      },
    });
  }),
  $(document).on("click", "#suppliarDelete_btn", function (e) {
    e.preventDefault(),
      ($delete_id = $(this).data("id")),
      confirm("Are You sure want to delete this item?") &&
        $.post(
          "app/action/delete_suppliar.php",
          { delete_id: $delete_id, delete_data: "delete_data" },
          function (e) {
            "true" == e
              ? (alert("data deleted successfull"), location.reload())
              : alert(e);
          }
        );
  }),
  $(document).on("click", "#productDelete_btn", function (e) {
    e.preventDefault(),
      ($delete_id = $(this).data("id")),
      confirm("Are You sure want to delete this item?") &&
        $.post(
          "app/action/delete_product.php",
          { delete_id: $delete_id, delete_data: "delete_data" },
          function (e) {
            "true" == e
              ? (alert("data deleted successfull"), location.reload())
              : alert(e);
          }
        );
  }),
  $(document).on("click", "#ex_catagoryDelete_btn", function (e) {
    e.preventDefault(),
      ($delete_id = $(this).data("id")),
      confirm("Are You sure want to delete this item?") &&
        $.post(
          "app/action/delete_exCaragroy.php",
          { delete_id: $delete_id, delete_data: "delete_data" },
          function (e) {
            "true" == e
              ? (alert("data deleted successfull"), location.reload())
              : alert(e);
          }
        );
  }),
  $(document).on("click", "#expenseDelete_btn", function (e) {
    e.preventDefault(),
      ($delete_id = $(this).data("id")),
      confirm("Are You sure want to delete this item?") &&
        $.post(
          "app/action/delete_expense.php",
          { delete_id: $delete_id, delete_data: "delete_data" },
          function (e) {
            "true" == e
              ? (alert("data deleted successfull"), location.reload())
              : alert(e);
          }
        );
  }),
  $("#editProduct").submit(function (e) {
    e.preventDefault();
    var t = $("#editProduct").serialize();
    confirm("Are You sure want to edit data")
      ? $.ajax({
          type: "POST",
          url: "app/action/edit_product.php",
          data: t,
          success: function (e) {
            alert(e);
          },
        })
      : alert("your data are save");
  }),
  $("#addexpenseCat").submit(function (e) {
    e.preventDefault();
    var t = $("#addexpenseCat").serialize();
    $.ajax({
      type: "POST",
      url: "app/action/addexpense_cat.php",
      data: t,
      success: function (e) {
        "yes" == $.trim(e)
          ? (alert("Expense catagory added successfylly"), location.reload())
          : alert(e);
      },
    });
  }),
  $("#addExpenseForm").submit(function (e) {
    e.preventDefault();
    var t = $("#addExpenseForm").serialize();
    $.ajax({
      type: "POST",
      url: "app/action/add_expense.php",
      data: t,
      success: function (e) {
        alert(e);
      },
    });
  }),
  $("#editExpenseForm").submit(function (e) {
    e.preventDefault();
    var t = $("#editExpenseForm").serialize();
    $.ajax({
      type: "POST",
      url: "app/action/edit_expense.php",
      data: t,
      success: function (e) {
        alert(e);
      },
    });
  }),
  $("#adstaffForm").submit(function (e) {
    e.preventDefault();
    var t = $("#adstaffForm").serialize();
    $.ajax({
      type: "POST",
      url: "app/action/add_staff.php",
      data: t,
      success: function (e) {
        "yes" == $.trim(e)
          ? (alert("Staff added successfully"), $("#adstaffForm")[0].reset())
          : alert(e);
      },
    });
  }),
  $("#editstaffForm").submit(function (e) {
    e.preventDefault();
    var t = $("#editstaffForm").serialize();
    $.ajax({
      type: "POST",
      url: "app/action/edit_staff.php",
      data: t,
      success: function (e) {
        alert(e);
      },
    });
  }),
  $("#update_userForm").submit(function (e) {
    e.preventDefault();
    var t = $("#update_userForm").serialize();
    $.ajax({
      type: "POST",
      url: "app/action/edit_update.php",
      data: t,
      success: function (e) {
        "yes" == $.trim(e)
          ? (window.location.href = "app/action/logout.php")
          : alert(e);
      },
    });
  }),
  $(document).on("click", "#staff_delete_btn", function (e) {
    e.preventDefault(),
      ($delete_id = $(this).data("id")),
      confirm("Are You sure want to delete this item?") &&
        $.post(
          "app/action/delete_staff.php",
          { delete_id: $delete_id, delete_data: "delete_data" },
          function (e) {
            "true" == $.trim(e)
              ? (alert("data deleted successfull"), location.reload())
              : alert("faild to delete data");
          }
        );
  }),
  $("#sendSmsForm").submit(function (e) {
    e.preventDefault();
    var t = $("#sms_number").val(),
      a = $("#sms_message").val(),
      d = $("#sendSmsForm").serialize();
    "" != t && "" != a
      ? $.ajax({
          type: "POST",
          url: "app/action/send_sms.php",
          data: d,
          success: function (e) {
            alert(e);
          },
        })
      : alert("All field must be filled out");
  }),
  $("#addFactoryProduct").submit(function (e) {
    e.preventDefault();
    var t = $("#addFactoryProduct").serialize();
    $.ajax({
      type: "POST",
      url: "app/action/add_factoryProduct.php",
      data: t,
      success: function (e) {
        alert(e);
      },
    });
  }),
  $("#editFactoryProduct").submit(function (e) {
    e.preventDefault();
    var t = $("#editFactoryProduct").serialize();
    confirm("Are You sure want to edit data")
      ? $.ajax({
          type: "POST",
          url: "app/action/edit_factoryProduct.php",
          data: t,
          success: function (e) {
            alert(e);
          },
        })
      : alert("your data are save");
  }),
  $(document).on("click", "#factoryProductDelete_btn", function (e) {
    e.preventDefault(),
      ($delete_id = $(this).data("id")),
      confirm("Are You sure want to delete this item?") &&
        $.post(
          "app/action/delete_factoryProduct.php",
          { delete_id: $delete_id, delete_data: "delete_data" },
          function (e) {
            "true" == $.trim(e)
              ? (alert("data deleted successfull"), location.reload())
              : alert("faild to delete data");
          }
        );
  });
