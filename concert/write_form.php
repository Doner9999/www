<? 
	session_start(); 

	//새글쓰기
	//$table ='conert' , $num , $mode=='modify'

	
	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 
	
	include "../lib/dbconn.php";

	if ($mode=="modify") //수정 글쓰기
	{
		$sql = "select * from $table where num=$num";
		$result = mysql_query($sql, $connect);

		$row = mysql_fetch_array($result);       
	
		$item_subject     = $row[subject];
		$item_content     = $row[content];

		$item_file_0 = $row[file_name_0];
		$item_file_1 = $row[file_name_1];
		$item_file_2 = $row[file_name_2];

		$copied_file_0 = $row[file_copied_0];
		$copied_file_1 = $row[file_copied_1];
		$copied_file_2 = $row[file_copied_2];
	}
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
      if (!document.board_form.subject.value)
      {
          alert("제목을 입력하세요!");    
          document.board_form.subject.focus();
          return;
      }

      if (!document.board_form.content.value)
      {
          alert("내용을 입력하세요!");    
          document.board_form.content.focus();
          return;
      }
      document.board_form.submit();
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

	<div id="col2">
		<div class="titleArea">
			<div class="lineMap">
			<span>home</span>&nbsp;&gt;&nbsp;<span>고객지원</span>&nbsp;&gt;&nbsp;<strong>물류소식</strong>
			</div>
			<h2>세방소식</h2>
		</div>


		<div class="clear"></div>

		<div class="clear"></div>

<?
	if($mode=="modify")
	{

?>
		<form  name="board_form" method="post" action="insert.php?mode=modify&num=<?=$num?>&page=<?=$page?>&table=<?=$table?>" enctype="multipart/form-data"> 
<?
	}
	else
	{
?>
		<form  name="board_form" method="post" action="insert.php?table=<?=$table?>&page=<?=$page?>" enctype="multipart/form-data"> <!-- 파일 첨부할때 항상 선언해여줘야하는 코드-->
<?
	}
?>
		<div id="write_form">
			<div class="write_line"></div>
			<div id="write_row1">
				<div class="col1"> 작성자 </div>
				<div class="col2"><?=$usernick?>
				
			</div>
<?
	if( $userid && ($mode != "modify") )
	{
?>
			<div class="col3"><input type="checkbox" name="html_ok" value="y"> HTML 쓰기</div>
<?
	}
?>						
			</div>
			<div class="write_line"></div>
			<div id="write_row2">
				<div class="col1"> 제목 </div>
				<div class="col2">
					<input type="text" name="subject" value="<?=$item_subject?>" >
				</div>
			</div>
			<div class="write_line"></div>
			<div id="write_row3"><div class="col1"> 내용   </div>
			                     <div class="col2"><textarea rows="15" cols="79" name="content"><?=$item_content?></textarea></div>
			</div>
			<div class="write_line"></div>
			<div id="write_row4"><div class="col1"> 이미지파일1   </div>
			                     <div class="col2"><input type="file" name="upfile[]"></div>
			</div>
			<div class="clear"></div>
<? 	if ($mode=="modify" && $item_file_0)
	{
?>
			<div class="delete_ok"><?=$item_file_0?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="0"> 삭제</div>
			<div class="clear"></div>
<?
	}
?>
			<div class="write_line"></div>
			<div id="write_row5"><div class="col1"> 이미지파일2  </div>
			                     <div class="col2"><input type="file" name="upfile[]"></div>
			</div>
<? 	if ($mode=="modify" && $item_file_1)
	{
?>
			<div class="delete_ok"><?=$item_file_1?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="1"> 삭제</div>
			<div class="clear"></div>
<?
	}
?>
			<div class="write_line"></div>
			<div class="clear"></div>
			<div id="write_row6"><div class="col1"> 이미지파일3   </div>
			                     <div class="col2"><input type="file" name="upfile[]"></div>
			</div>
<? 	if ($mode=="modify" && $item_file_2)
	{
?>
			<div class="delete_ok"><?=$item_file_2?> 파일이 등록되어 있습니다. <input type="checkbox" name="del_file[]" value="2"> 삭제</div>
			<div class="clear"></div>
<?
	}
?>
			<div class="write_line"></div>

			<div class="clear"></div>

			<div id="write_button">
				<button>작성</button>&nbsp;
				<a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>
			</div>
		</div>

			

		</form>

	</div> <!-- end of col2 -->
  </div> <!-- end of content -->

  <? include "../common/sub_footer.html" ?>
</body>
</html>
