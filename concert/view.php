<? 
	session_start(); 

	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 
	
	include "../lib/dbconn.php";

	$sql = "select * from $table where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

	$image_name[0]   = $row[file_name_0];
	$image_name[1]   = $row[file_name_1];
	$image_name[2]   = $row[file_name_2];


	$image_copied[0] = $row[file_copied_0];
	$image_copied[1] = $row[file_copied_1];
	$image_copied[2] = $row[file_copied_2];

    $item_date    = $row[regist_day];
	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	}
	
	//이미지 가져오기
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i]) //첨부된 이미지가 존재한다면 ...
		{
			$imageinfo = GetImageSize("./data/".$image_copied[$i]);
			// 배열로 리턴[이미지 너비, 이미지 높이, 이미지 타입];

			$image_width[$i] = $imageinfo[0]; //이미지 너비
			$image_height[$i] = $imageinfo[1]; //이미지 높이
			$image_type[$i]  = $imageinfo[2]; //이미지 타입

			if ($image_width[$i] > 785) //이미지 너비 제한
				$image_width[$i] = 785;
		}
		else // 첨부된 이미지가 없다면 ...
		{
			$image_width[$i] = "";
			$image_height[$i] = "";
			$image_type[$i]  = "";
		}
	}

	$new_hit = $item_hit + 1;

	$sql = "update $table set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head> 
<meta charset="utf-8">
<link rel="stylesheet" href="../common/css/common.css">
<link rel="stylesheet" href="sub4common.css">
<link rel="stylesheet" href="concert.css">
<script>
	function check_input()
	{
		if (!document.ripple_form.ripple_content.value)
		{
			alert("내용을 입력하세요!");    
			document.ripple_form.ripple_content.focus();
			return;
		}
		document.ripple_form.submit();
    }
    function del(href) 
    {
        if(confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
        }
    }
</script>
</head>

<body>
	<? include "../common/sub_header.html" ?>
	<div class="main">
        <img src="../sub4/common/images/mainImg.jpg" alt="">
        <h3>고객지원</h3>
    </div>

	<div class=subNav>
        <ul>
            <li><a href="../sub4/sub4_1.html" class="current">세방 소식</a></li>
            <li><a href="../sub4/sub4_2.html">인증자료</a></li>
            <li><a href="../sub4/sub4_3.html">문의사항</a></li>
			<li><a href="../sub4/sub4_3.html">물류소식</a></li>
        </ul>
    </div>


  <div id="content">
  <div class="titleArea">
				<div class="lineMap">
				<span>home</span>&nbsp;&gt;&nbsp;<span>고객지원</span>&nbsp;&gt;&nbsp;<strong>물류소식</strong>
				</div>
				<h2>세방소식</h2>
			</div>

	<div id="col2">
        
		<div id="view_comment"> &nbsp;</div>

		<div id="view_title">
			<div id="view_title1"><?= $item_subject ?></div><div id="view_title2"><?= $item_nick ?> | 조회 : <?= $item_hit ?>  
			                      | <?= $item_date ?> </div>	
		</div>

		<div id="view_content">
<?
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i])
		{
			$img_name = $image_copied[$i];
			$img_name = "./data/".$img_name;
			$img_width = $image_width[$i];
			
			echo "<div class='img'><img src='$img_name' width='$img_width'></div>"."<br><br>";
		}
	}
?>
			<?= $item_content ?>
		</div>

		<div id="ripple">
		<form  name="ripple_form" method="post" action="insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>">  
			<div id="ripple_box">
				<div id="ripple_box1"><span><?= $usernick?></span></div>
				<div id="ripple_box2"><textarea rows="5" cols="65" name="ripple_content"></textarea>
				</div>
				<div id="ripple_box3"><a href="#" onclick="check_input()">쓰기</a></div>
			</div>
			</form>
<?
	    $sql = "select * from free_ripple where parent='$item_num'";
	    $ripple_result = mysql_query($sql);

		while ($row_ripple = mysql_fetch_array($ripple_result))
		{
			$ripple_num     = $row_ripple[num];
			$ripple_id      = $row_ripple[id];
			$ripple_nick    = $row_ripple[nick];
			$ripple_content = str_replace("\n", "<br>", $row_ripple[content]);
			$ripple_content = str_replace(" ", "&nbsp;", $ripple_content);
			$ripple_date    = $row_ripple[regist_day];
?>
			<div id="ripple_writer_title">
			<ul>
			<li id="writer_title1"><?=$ripple_nick?></li>
			<li id="writer_title3"> 
		      <? 
					if($userid=="admin" || $userid==$ripple_id)
			          echo "<a href='delete_ripple.php?table=$table&num=$item_num&ripple_num=$ripple_num'></a>"; 
			  ?>
			</li>
			</ul>
			</div>
			<div id="ripple_content"><?=$ripple_content?></div>
			<div id="writer_title2"><?=$ripple_date?></div>
			
			<div class="hor_line_ripple"></div>
<?
		}
?>			
			
		</div> <!-- end of ripple -->
		

		<div id="view_button">
				<a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>&nbsp;
<? 
	if($userid==$item_id || $userid=="admin" || $userlevel==1 )
	{
?>
				<a href="write_form.php?table=<?=$table?>&mode=modify&num=<?=$num?>&page=<?=$page?>">글 수정</a>&nbsp;
				<a href="javascript:del('delete.php?table=<?=$table?>&num=<?=$num?>')">글 삭제</a>&nbsp;
<?
	}
?>
<? 
	if($userid)
	{
?>
				<a href="write_form.php?table=<?=$table?>">새글 작성</a>
<?
	}
?>
		</div>

		<div class="clear"></div>

	</div> <!-- end of col2 -->
  </div> <!-- end of content -->

  <? include "../common/sub_footer.html" ?>
</body>
</html>
