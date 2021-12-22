<?php
if (!isset($_SESSION)) {
    session_start();
  }

$searched = '%'.$_POST['search'].'%';

include_once '../dbconn.php';


        /* Prepared statement, stage 1: prepare */
        $get_accounts_stmt = $connection->prepare("SELECT * FROM tbl_accounts where concat(acc_id,' ',first_name,' ',middle_name,' ',last_name,' ',username,' ',emp_id,' ',first_name,' ',last_name,' ',position) LIKE ? ORDER BY date_created,time_created DESC");

        /* Prepared statement, stage 2: bind and execute */
        $get_accounts_stmt->bind_param("s", $searched); // "is" means that $id is bound as an integer and $label as a string
        $get_accounts_stmt->execute();
        $accounts_result = $get_accounts_stmt->get_result();
        


        if($accounts_result->num_rows>0)
        {
            while($row_account = $accounts_result -> fetch_assoc())
            {                  
                if($row_account['acc_id'] != 37){
                    echo "
                        <tr>
                            <th scope='row'>".$row_account["acc_id"]."</th>
                            <td>".$row_account["emp_id"]."</td>
                            <td>".$row_account["username"]."</td>
                            <td>".$row_account["first_name"]." ".$row_account["middle_name"]." ".$row_account["last_name"]."</td>
                            <td>".$row_account["position"]."</td>
                            <td class='text-center'><i class='bx bxs-trash-alt btn border' id='delete' title='Delete'></i></td>
                    </tr>";
                }
            }
        
        }



?>