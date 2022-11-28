<?	
/*
	$nym
	$page 
	$scale

*/
	session_start();
	@extract($_GET);
    @extract($_POST);
    @extract($_SESSION);
	
	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);
      // 하나의 레코드 가져오기

	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

    $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="../common/css/common.css">
<link rel="stylesheet" href="sub4common.css">
<link rel="stylesheet" href="greet.css">
<script>
    function del(href) //delete.php?num=1;
    {
        if(confirm("정말 삭제하시겠습니까?")) {
                document.location.href = href;
        }
    }
</script>
</head>

<body>

<div id="wrap">
	<? include "../common/sub_header.html" ?>

	<div class="main">
		<img src="../sub4/common/images/mainImg.jpg" alt="">
		<h3>고객지원</h3>
	</div>

	<div class=subNav>
		<ul>
			<li><a href="../sub4/sub4_1.html">세방 소식</a></li>
			<li><a href="../sub4/sub4_2.html">인증자료</a></li>
			<li><a href="../sub4/sub4_3.html">문의사항</a></li>
			<li><a href="../sub4/sub4_3.html" class="current">물류소식</a></li>
		</ul>
	</div>

  	<div id="content">
	  	<div class="titleArea">
			<div class="lineMap">
			<span>home</span>&nbsp;&gt;&nbsp;<span>고객지원</span>&nbsp;&gt;&nbsp;<strong>물류소식</strong>
			</div>
        <h2>물류소식</h2>
		</div>

		<div id="col2">

			<div id="view_title">
				<div id="view_title1"><?= $item_subject ?></div><div id="view_title2"><?= $item_nick ?> | 조회 : <?= $item_hit ?>
									| <?= $item_date ?> </div>
			</div>

			<div id="view_content">
				<?= $item_content ?>
			</div>

			<div id="view_button">
					<a href="list.php?page=<?=$page?>&scale=<?=$scale?>">목록</a>&nbsp;
	<?
		if($userid==$item_id || $userlevel==1 || $userid=="admin")
		{
	?>
					<a href="modify_form.php?num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>">글 수정하기</a>&nbsp;
					<a href="javascript:del('delete.php?num=<?=$num?>')">삭제</a>&nbsp;
	<?
		}
	?>
	<?
		if($userid )
		{
	?>
					<a href="write_form.php">새글 작성</a>
	<?
		}
	?>
			</div>

			<div class="clear"></div>

		</div> <!-- end of col2 -->
  	</div> <!-- end of content -->
</div> <!-- end of wrap -->
<? include "../common/sub_footer.html" ?>
</body>
</html>
