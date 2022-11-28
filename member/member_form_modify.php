<?
	session_start();
    @extract($_POST);
    @extract($_GET);
    @extract($_SESSION);
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="./css/member_form_modify.css">

    <script src="./js/jquery-1.12.4.min.js"></script>
    <script src="./js/jquery-migrate-1.4.1.min.js"></script>


    <script>
        $(document).ready(function(){
            $('.pw_input').keyup(function(){
			 let pass1 = $("#pass").val();
		        let pass2 = $("#pass_confirm").val();

		        if (pass1 != "" || pass2 != ""){
		        	if (pass1 == pass2){
		            	$("#checkPw").html('비밀번호가 일치합니다');
		            	$("#checkPw").css('color','green');
		            } else {
		            	$("#checkPw").html('비밀번호가 일치하지 않습니다');
		                $("#checkPw").css('color','red');
		            }
		        }
		 });


         $("#nick").keyup(function() {    // id입력 상자에 id값 입력시

    var nick = $('#nick').val();

    $.ajax({
        type: "POST",
        url: "check_nick.php",
        data: "nick="+ nick,
        cache: false,
        success: function(data)
        {
             $("#loadtext2").html(data);
        }
    });
});
        })


       function check_id()
       {
         window.open("./check_id.php?id=" + document.member_form.id.value,
             "IDcheck",
              "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
       }

       function check_nick()
       {
         window.open("./check_nick.php?nick=" + document.member_form.nick.value,
             "NICKcheck",
              "left=200,top=200,width=250,height=100,scrollbars=no,resizable=yes");
       }

       function check_input()
       {
          if (!document.member_form.pass.value)
          {
              alert("비밀번호를 입력하세요");
              document.member_form.pass.focus();
              return;
          }

          if (!document.member_form.pass_confirm.value)
          {
              alert("비밀번호확인을 입력하세요");
              document.member_form.pass_confirm.focus();
              return;
          }

          if (!document.member_form.name.value)
          {
              alert("이름을 입력하세요");
              document.member_form.name.focus();
              return;
          }

          if (!document.member_form.nick.value)
          {
              alert("닉네임을 입력하세요");
              document.member_form.nick.focus();
              return;
          }

          if (!document.member_form.hp2.value || !document.member_form.hp3.value )
          {
              alert("휴대폰 번호를 입력하세요");
              document.member_form.nick.focus();
              return;
          }

          if (document.member_form.pass.value !=
                document.member_form.pass_confirm.value)
          {
              alert("비밀번호가 일치하지 않습니다.\n다시 입력해주세요.");
              document.member_form.pass.focus();
              document.member_form.pass.select();
              return;
          }

          document.member_form.submit();
       }

       function reset_form()
       {
          document.member_form.id.value = "";
          document.member_form.pass.value = "";
          document.member_form.pass_confirm.value = "";
          document.member_form.name.value = "";
          document.member_form.nick.value = "";
          document.member_form.hp1.value = "010";
          document.member_form.hp2.value = "";
          document.member_form.hp3.value = "";
          document.member_form.email1.value = "";
          document.member_form.email2.value = "";

          document.member_form.id.focus();

          return;
       }
    </script>
</head>
<?
    include "../lib/dbconn.php";

    $sql = "select * from member where id='$userid'";
    $result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);

    $hp = explode("-", $row[hp]);
    $hp1 = $hp[0];
    $hp2 = $hp[1];
    $hp3 = $hp[2];

    $email = explode("@", $row[email]);
    $email1 = $email[0];
    $email2 = $email[1];

    mysql_close();
?>
<body>


	<article id="content">
	  <h1><a href="../index.html">세방 로고</a></h1>
	  <h2>회원정보수정</h2>
	  <form  name="member_form" method="post" action="modify.php">

     <table>
      <caption class="hidden">회원가입</caption>
     	<tr class="idArea">
     		<th scope="col"><label for="id"></label></th>
     		<td>
                <?= $row[id] ?>
     		</td>
     	</tr>
        <tr class="far">

        </tr>
     	<tr class="pwArea">
     		<th scope="col"><label for="pass"></label></th>
     		<td>
     			 <input type="password" name="pass" id="pass" value="" class="pw_input" placeholder="비밀번호" required>
     		</td>
     	</tr> <tr class="far">

        </tr>
     	<tr class="pwArea">
     		<th scope="col"><label for="pass_confirm"></label></th>
     		<td>
     			<input type="password" name="pass_confirm" value="" id="pass_confirm" class="pw_input" placeholder="비밀번호 확인" required>
				<span id = "checkPw"></span>
     		</td>
     	</tr>
         </tr> <tr class="far">

        </tr>
     	<tr class="nameArea">
     		<th scope="col"><label for="name"></label></th>
     		<td>
     			<input type="text" name="name" id="name" placeholder="이름" value="<?= $row[name] ?>" required>
     		</td>
     	</tr>
         </tr> <tr class="far">

        </tr>
     	<tr class="nickArea">
     		<th scope="col"><label for="nick"></label></th>
     		<td>
     			 <input type="text" name="nick" id="nick" value="<?= $row[nick] ?>" placeholder="닉네임" required>
			     <span id="loadtext2"></span>
     		</td>
     	</tr>
        </tr> <tr class="far">

        </tr>
     	<tr class="phoneArea">
     		<th scope="col"></th>
     		<td>
     			<label class="hidden" for="hp1">전화번호앞3자리</label>
     			<select class="hp" name="hp1" id="hp1">
                <option value='010' <? if($hp1=='010'){echo 'selected';} ?>>010</option>
                <option value='011' <? if($hp1=='011'){echo 'selected';} ?>>011</option>
                <option value='016' <? if($hp1=='016'){echo 'selected';} ?>>016</option>
                <option value='017' <? if($hp1=='017'){echo 'selected';} ?>>017</option>
                <option value='018' <? if($hp1=='018'){echo 'selected';} ?>>018</option>
                <option value='019' <? if($hp1=='019'){echo 'selected';} ?>>019</option>
                </select>  -
                <label class="hidden" for="hp2">전화번호중간4자리</label>
                <input type="number" class="hp" name="hp2" id="hp2" value="<?= $hp2 ?>" required> -
                <label class="hidden" for="hp3">전화번호끝4자리</label>
                <input type="number" class="hp" name="hp3" id="hp3" value="<?= $hp3 ?>" required>

     		</td>
     	</tr>
         </tr> <tr class="far">

        </tr>
     	<tr class="emailArea">
     		<th scope="col"></th>
     		<td>
     		  <label class="hidden" for="email1">이메일아이디</label>
     			<input type="text" id="email1" name="email1" value="<?= $email1 ?>" required placeholder="이메일"> @
     			<label class="hidden" for="email2">이메일주소</label>
     			<input type="text" name="email2" id="email2" value="<?= $email2 ?>" required placeholder="사이트주소">
     		</td>
     	</tr>
			</tr> <tr class="far">

		 </tr>
     	<tr class="finishBtn">
     		<td colspan="2">
     			<a href="#" onclick="check_input()">수정</a>&nbsp;&nbsp;
				 <a href="#" onclick="reset_form()">초기화</a>
     		</td>
     	</tr>
     </table>

	 </form>

	</article>

</body>
</html>
