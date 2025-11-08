<?php
  $mistakes = 0;
  // TODO make call to database to get value for $mistakes
    // Add condition for if it cannot get value
  // TODO set mistakes variable, then send that value back to tell database to update to that value
    // Add condition for it it cannot set

  // Would be nice if there is some sort of identifier for the user so they don't add multiple times
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width= , initial-scale=1.0">
  <title>Zach Dobson???</title>
</head>
<body>
  <h1>Uh Oh!</h1>
  <p>
    It appears you navigated to the wrong website. The correct URL is <a href="https://zachdodson.me">zachdodson.me</a>,
    not <a href="why.php">zachdobson.me</a>!
  </p>
  <?php
    echo "<p>Number of people who also made this mistake 🙁: $mistakes</p>";
  ?>
</body>
</html>
