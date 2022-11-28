<?
    $connect=mysql_connect( "localhost", "readonly1", "qlqjs11@!") or  
        die( "SQL server에 연결할 수 없습니다."); 

    mysql_select_db("readonly1",$connect);
?>

<?
    // $connect=mysql_connect( "localhost", "psh96", "1234") or  
    // die( "SQL server에 연결할 수 없습니다."); 

    // mysql_select_db("psh_db",$connect);
?>