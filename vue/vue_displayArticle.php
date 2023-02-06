<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <?php 
        $i=0;
        while(isset($datas[$i+1])){
            // echo 
            // "<tr>
            // <td>".$datas[$i]."</td>
            // <td>".$datas[$i+1]."</td>
            // </tr>";
            // $i+=2;
            //------------------------------
            echo "<div class=card".">";
            echo "<img src=".$datas[$i]."alt=".">";
            echo "<h1>".$datas[$i+1]."</h1>";
            echo "</div>";
            $i+=2;
            //------------------------------------
        }
        ?>
</body>
</html>
