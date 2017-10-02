<?

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);

//saving to database
//save query

?>

You submitted the following:

Name: <?=$data->name; ?> 
Email: <?=$data->email; ?> 
Contact: <?=$data->contact; ?> 


