$(document).ready(function () {
  // User adds a new task
  $("#add-task").click(function (e) {
    e.preventDefault();

    var newTaskText = $("#new-task-input").val();
    if (newTaskText.trim() !== "") {
      // Create a new task item with a checkbox
      var newTaskItem = $('<li class="task-item">');
      newTaskItem.append('<input type="checkbox">');
      newTaskItem.append("<label>" + newTaskText + "</label>");

      // Append the new task to the task list
      $("#task-list").append(newTaskItem);

      // Clear the input field
      $("#new-task-input").val("");
    }
  });

//   $("#submit").click(function (e) {
//     $(".task-item").click(function () {

//         $('input[type="checkbox"]:checked').css('background-color', 'green');

//         $('input[type="checkbox"]:not(:checked)').css('background-color', 'red'); 
    
//       });
//     });
  });

// $(document).ready(function() {
    
//     $('.submit').click(function(e) {
//         e.preventDefault(); 

//         $('input[type="checkbox"]:checked').closest('.task-item').css('background-color', 'green');

//         $('input[type="checkbox"]:not(:checked)').closest('.task-item').css('background-color', 'red');
//     });
// });

    
    //  var isChecked = $(this).find('input[type="checkbox"]').prop("checked");
    //  if (isChecked) {
    //    $(this).css("background-color", "red");
    //  } else {
    //    $(this).css("background-color", "green");