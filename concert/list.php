<? 
	session_start(); 
	$table = "concert";
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head> 
<meta charset="utf-8">
<link rel="stylesheet" href="../common/css/common.css">
<link rel="stylesheet" href="sub4common.css">
<link rel="stylesheet" href="concert.css">
</head>
<?
	@extract($_GET); 
	@extract($_POST); 
	@extract($_SESSION); 

	include "../lib/dbconn.php";
	if(!$scale)
	$scale=10;			// 한 화면에 표시되는 글 수

    if ($mode=="search")
	{
		if(!$search)
		{
			echo("
				<script>
				 window.alert('검색할 단어를 입력해 주세요!');
			     history.go(-1);
				</script>
			");
			exit;
		}

		$sql = "select * from $table where $find like '%$search%' order by num desc";
	}
	else
	{
		$sql = "select * from $table order by num desc";
	}

	$result = mysql_query($sql, $connect);

	$total_record = mysql_num_rows($result); // 전체 글 수

	// 전체 페이지 수($total_page) 계산 
	if ($total_record % $scale == 0)     
		$total_page = floor($total_record/$scale);      
	else
		$total_page = floor($total_record/$scale) + 1; 
 
	if (!$page)                 // 페이지번호($page)가 0 일 때
		$page = 1;              // 페이지 번호를 1로 초기화
 
	// 표시할 페이지($page)에 따라 $start 계산  
	$start = ($page - 1) * $scale;      
	$number = $total_record - $start;
?>
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
			
			<form  name="board_form" method="post" action="list.php?table=<?=$table?>&mode=search"> 
				<div id="list_search">
					<div id="list_search1">총 <?= $total_record ?> 개의 게시물이 있습니다.  </div>
					<div id="list_search2"></div>
					<div id="list_mode">
						<ul>
							<li><a href="#" class="on"></a></li>
							<li><a href="#"></a></li>
						</ul>
					</div>
					<div id="list_search3">
						<select name="find">
							<option value='subject'>제목</option>
							<option value='content'>내용</option>
							<option value='nick'>별명</option>
							<option value='name'>이름</option>
						</select></div>
					<div id="list_search4"><input type="text" name="search"></div>
					<div id="list_search5"><button>검색</button></div>
				</div>
			</form>
			<div class="clear"></div>

			<div id="list_top_title">
				<!-- <ul>
					<li id="list_title1">번호</li>
					<li id="list_title2">제목</li>
					<li id="list_title3">글쓴이</li>
					<li id="list_title4">등록일</li>
					<li id="list_title5">조회</li>
				</ul>		 -->
			</div>

			<div id="list_content">
				<div class="list_item_wrap">
				<?		
				for ($i=$start; $i<$start+$scale && $i < $total_record; $i++)                    
				{
					mysql_data_seek($result, $i);       
					// 가져올 레코드로 위치(포인터) 이동  
					$row = mysql_fetch_array($result);       
					// 하나의 레코드 가져오기
					
					$item_num     = $row[num];
					$item_id      = $row[id];
					$item_name    = $row[name];
					$item_nick    = $row[nick];
					$item_hit     = $row[hit];
					$item_date    = $row[regist_day];
					$item_date 	  = substr($item_date, 0, 10);  
					$item_subject = str_replace(" ", "&nbsp;", $row[subject]);
					$item_content = $row[content];
					$len_content = strlen($row[content]);
					


					if($row[file_copied_0]){
						$item_img='./data/'.$row[file_copied_0];
					}else{
						$item_img='./data/default.jpg';
					}
					
					if ($len_content > 200)   //제목의 길이가 지정한 길이보다 크면
					{
						$item_content = mb_substr($row[content], 0, 200, 'utf-8');  
						// 첫번째 문자부터 $char_limit만큼 잘라낸다.
						//mb_substr 은 입력받은 문자열을 정해진 길이만큼 잘라서 리턴하는데 
						//2byte 문자인 한글에 대해서도 처리가 가능한 함수입니다. 

						$item_content = $item_content."...";   // 잘라낸 문자열에 ...을 추가한다.
					}
					

				?>
				
					<div id="list_item">
						<!-- <div id="list_item1"></div> -->
						<div id="list_img"><a href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>"><img src="<?=$item_img?>" style="width:250px; height:160px;" alt=""></a></div>
						<div class="list_info">
							<div id="list_item2"><a href="view.php?table=<?=$table?>&num=<?=$item_num?>&page=<?=$page?>"><?= $item_subject ?></a></div>
							<div class="list_item_sub">
									<div id="list_item3"><?= $item_nick ?></div>
									<div id="list_item4"><?= $item_date ?></div>
									<div id="list_item5">조회수 : <?= $item_hit ?></div>
							</div>
							<div class="clearArea"></div>
							<div id="list_item6"><?= $item_content ?></div>
						</div>
					</div>
	<?
		$number--;
	}
	?>
				</div>
				<div class="clearArea"></div>
				<div id="page_button">
					<div id="page_num">  &nbsp;&nbsp;&nbsp;&nbsp; 
	<?
	// 게시판 목록 하단에 페이지 링크 번호 출력
	for ($i=1; $i<=$total_page; $i++)
	{
			if ($page == $i)     // 현재 페이지 번호 링크 안함
			{
				echo "<b> $i </b>";
			}
			else
			{ 
				echo "<a href='list.php?table=$table&page=$i'> $i </a>";
			}      
	}
	?>			
				&nbsp;&nbsp;&nbsp;&nbsp;
					</div>
					<div id="button">
					<a href="list.php?table=<?=$table?>&page=<?=$page?>">목록</a>&nbsp;
	<? 
		if($userid)
		{
	?>
			<a href="write_form.php?table=<?=$table?>&scale=<?=$scale?>&page=<?=$page?>">글 작성</a>
	<?
		}
	?>
					</div>
				</div> <!-- end of page_button -->		
			</div> <!-- end of list content -->
			<div class="clear"></div>

		</div> <!-- end of col2 -->
	</div> <!-- end of content -->

	<? include "../common/sub_footer.html" ?>
	<script>
		$(document).ready(function(){
			$('#list_mode ul li:eq('+0+') a').click(function(){
				$('#list_mode ul li a').removeClass('on');
				$('#list_mode ul li:eq('+0+') a').addClass('on');
				$('#list_content').removeClass('on');
			})

			$('#list_mode ul li:eq('+1+') a').click(function(){
				$('#list_mode ul li a').removeClass('on');
				$('#list_mode ul li:eq('+1+') a').addClass('on');
				$('#list_content').addClass('on');
			})
		});
	</script>
</body>
</html>
