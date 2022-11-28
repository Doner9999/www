<?
/*
	$num, $page, $scale
*/ 
	session_start();
	@extract($_GET);
    @extract($_POST);
    @extract($_SESSION);
	
	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

	$row = mysql_fetch_array($result);
	$item_subject     = $row[subject];
	$item_content     = $row[content];
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="../common/css/common.css">
<link rel="stylesheet" href="sub4common.css">
<link rel="stylesheet" href="greet.css">
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


			<div class="clear"></div>

			<div class="clear"></div>
			<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>">
			<div id="write_form">
				<div class="write_line"></div>
				<div id="write_row1">
					<div class="col1"> 닉네임 </div>
					<div class="col2"><?=$usernick?></div>
				</div>
				<div class="write_line"></div>
				<div id="write_row2"><div class="col1"> 제목   </div>
									<div class="col2"><input type="text" name="subject" value="<?=$item_subject?>" ></div>
				</div>
				<div class="write_line"></div>
				<div id="write_row3"><div class="col1"> 내용   </div>
									<div class="col2"><textarea rows="15" cols="79" name="content"><?=$item_content?></textarea></div>
				</div>
				<div class="write_line"></div>
			</div>

			<div id="write_button">
				<button>수정</button>&nbsp;
				<a href="list.php?num=<?=$num?>&page=<?=$page?>&scale=<?=$scale?>">글 목록</a>
			</div>
			</form>

		</div> <!-- end of col2 -->
  	</div> <!-- end of content -->
</div> <!-- end of wrap -->
<? include "../common/sub_footer.html" ?>
</body>
</html>
