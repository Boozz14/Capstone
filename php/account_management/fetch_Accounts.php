
<?php

  if (!isset($_SESSION)) {
    session_start();
  }
    $sql = "SELECT * FROM tbl_accounts";
    $result = $conn -> query($sql);
    echo "<tr>
            <th>Employee ID</th>
            <th>Username</th>
            <th>Name</th>
            <th>Action</th>
          </tr>";
         
        if($result->num_rows>0)
        {
           while($row = $result -> fetch_assoc())
           {
             
              if($row['acc_id'] != $_SESSION['ID'])
              {
                  echo "<tr>
                  <td>".$row["emp_id"]."</td>
                  <td>".$row["username"]."</td>
                  <td>".$row["first_name"]." ".$row["middle_name"]." ".$row["last_name"]."</td>
                  <td>
                      <i class='bx bxs-user-account' id='".$row["emp_id"]."'></i>
                      <i class='bx bxs-trash-alt' id='".$row["emp_id"]."'></i>
                  </td>
                  </tr>";
              }
              
               
           }
        }    
?>