$(document).ready(function() {
    load_ul_list();
    // load_wrap_cate();
    // load_wrap_sort();
    // load_wrap_author();
});


function load_ul_list() {
    var html = "";
    html += "<li class='nav_index'><a href='index.html'><i></i><span>首页</span><b></b><div class='clear'></div></a></li>";
    html += "<li class='nav_experience'><a href='experience.html'><i></i><span>开发心得</span><b></b><div class='clear'></div></a></li>";
    html += "<li class='nav_site'><a href='index.html'><i></i><span>设计师</span><b></b><div class='clear'></div></a></li>";
    html += "<li class='nav_help'><a href='index.html'><i></i><span>帮帮忙</span><b></b><div class='clear'></div></a></li>";
    html += "<li class='nav_about'><a href='index.html'><i></i><span>关于我们</span><b></b><div class='clear'></div></a></li>";
    $("#ul-nav-lst").html(html);
}

function load_wrap_cate() {
    var cateHtml = "";
    cateHtml += "<div class='hd'>";
    cateHtml += "    <div class='wrap'>";
    cateHtml += "        <div class='fl'><span>选择分类</span>";
    cateHtml += "            <div class='clear'></div>";
    cateHtml += "        </div>";
    cateHtml += "        <div class='fr'></div>";
    cateHtml += "        <div class='clear'></div>";
    cateHtml += "    </div>";
    cateHtml += "</div>";
    cateHtml += "<div class='ct'>";
    cateHtml += "    <div id='wrap-cate' class='wrap'>";
    cateHtml += "	 	<ul class='choose_cate'>";
    cateHtml += "    		<li c_data='0' style='font-weight:700;'>";
    cateHtml += "        		<i style='background:none;width:0;margin-right:0;' class='s'></i>";
    cateHtml += "        		<span>全部行业</span>";
    cateHtml += "        		<i class='e'></i>";
    cateHtml += "    		</li>";
    cateHtml += "    		<li style='font-weight:700;' c_data='1' style='background:#f7f7f7;'>";
    cateHtml += "        		<i style='margin-right:0;background:none;width:0;' class='s'></i>";
    cateHtml += "        		<span>网页</span>";
    cateHtml += "        		<i class='e'></i>";
    cateHtml += "    		</li>";
    cateHtml += "    		<li c_data='2'>";
    cateHtml += "       	 	<i style='background:none;width:10px;margin-right:0;' class='s'></i>";
    cateHtml += "       	 	<span>企业集团</span>";
    cateHtml += "        		<i class='e'></i>";
    cateHtml += "    		</li>";
    cateHtml += "		</ul>";
    cateHtml += "		<div class='clear'></div>";
    cateHtml += "	</div>";
    cateHtml += "</div>";
    $("#wrap-cate").html(cateHtml);
}

function load_wrap_sort() {
    var sortHtml = "";
    sortHtml += "<div class='hd'>";
    sortHtml += "    <div class='wrap'>";
    sortHtml += "        <div class='fl'><span>选择排序</span>";
    sortHtml += "            <div class='clear'></div>";
    sortHtml += "        </div>";
    sortHtml += "        <div class='fr'></div>";
    sortHtml += "        <div class='clear'></div>";
    sortHtml += "    </div>";
    sortHtml += "</div>";
    sortHtml += "<div class='ct'>";
    sortHtml += "    <div class='wrap'>";
    sortHtml += "		<ul class='choose_sort'>";
    sortHtml += "    		<li class='a_selected' s_data='rec'><i class='s'></i><span>最新推荐</span><i class='e'></i></li>";
    sortHtml += "    		<li s_data='like'><i class='s'></i><span>最多喜欢</span><i class='e'></i></li>";
    sortHtml += "    		<li s_data='view'><i class='s'></i><span>最多浏览</span><i class='e'></i></li>";
    sortHtml += "    		<li s_data='comment'><i class='s'></i><span>最多评论</span><i class='e'></i></li>";
    sortHtml += "    		<li s_data='laster'><i class='s'></i><span>最新发布</span><i class='e'></i></li>";
    sortHtml += "		</ul>";
    sortHtml += "		<div class='clear'></div>";
    sortHtml += "    </div>";
    sortHtml += "</div>";
    $("#wrap-sort").html(sortHtml);
}


function load_wrap_author() {
    var authorHtml = "";
    authorHtml += "<div class='hd'>";
    authorHtml += "    <div class='wrap'>";
    authorHtml += "        <div class='fl'><i></i><span>版权</span>";
    authorHtml += "            <div class='clear'></div>";
    authorHtml += "        </div>";
    authorHtml += "        <div class='fr'></div>";
    authorHtml += "        <div class='clear'></div>";
    authorHtml += "    </div>";
    authorHtml += "</div>";
    authorHtml += "<div class='ct'>";
    authorHtml += "    <div class='wrap'> ";
    authorHtml += "			<ul>";
    authorHtml += "    			<li t_data=''><i></i><span>所有者</span><i class='e'></i></li>";
    authorHtml += "    			<li t_data='1'><i></i><span>原创</span><i class='e'></i></li>";
    authorHtml += "    			<li t_data='2'><i></i><span>转载</span><i class='e'></i></li>";
    authorHtml += "			</ul>";
    authorHtml += "			<div class='clear'></div>";
    authorHtml += "    </div>";
    authorHtml += "</div>";
    $("#wrap-author").html(authorHtml);
}

function load_menu() {
    var menuHtml = "";
    menuHtml += "<div class='search_wrap'>";
    menuHtml += "	<form action='#' method='get'>";
    menuHtml += "		<input type='text' name='search' class='search_input' placeholder='关键字查找' />";
    menuHtml += "		<i class='reset_input'><i></i></i>";
    menuHtml += "	</form>";
    menuHtml += "</div>";
    menuHtml += "<ul>";
    menuHtml += "	<li class='nav_index'><a href='experience.html'><i></i><span>开发心得</span><b></b><div class='clear'></div></a></li>";
    menuHtml += "	<li class='nav_site'><a href='index.html'><i></i><span>设计师</span><b></b><div class='clear'></div></a></li>";
    menuHtml += "	<li class='nav_help'><a href='index.html'><i></i><span>帮帮忙</span><b></b><div class='clear'></div></a></li>";
    menuHtml += "	<li class='nav_about'><a href='index.html'><i></i><span>关于我们</span><b></b><div class='clear'></div></a></li>";
    menuHtml += "</ul>";
    $("#menu").html(menuHtml);
};

function load_user() {
    var userHtml = "";
    userHtml += "<div class='account'>";
    userHtml += "	<div class='login_b_t'>";
    userHtml += "		<div class='pd10'>";
    userHtml += "			<div class='fl'>还没有账号<a id='reg_now' href='' onclick='return false;'>立即注册</a></div>";
    userHtml += "			<div class='fr'><a href='#'>忘记密码?</a></div>";
    userHtml += "			<div class='clear'></div>";
    userHtml += "		</div>";
    userHtml += "	</div>";
    userHtml += "</div>";
    userHtml += "<div class='pd10'>";
    userHtml += "	<form method='post' action=''>";
    userHtml += "		<div class='login_b_i'>";
    userHtml += "			<div class='login_input'>";
    userHtml += "				<div class='login_user'>";
    userHtml += "					<input type='text' name='email' placeholder='邮箱/帐号' /><i></i>";
    userHtml += "				</div>";
    userHtml += "				<div class='login_password'>";
    userHtml += "					<input type='password' name='password' placeholder='密码' /><i></i>";
    userHtml += "				</div>";
    userHtml += "			</div>";
    userHtml += "		</div>";
    userHtml += "		<a class='login_submit'>登录</a>";
    userHtml += "	</form>";
    userHtml += "	<div class='login_quick'>";
    userHtml += "		<p>用第三方帐号直接登录</p>";
    userHtml += "		<a href='#' id='weibo_app'><span><i></i>微博帐号登录</span></a>";
    userHtml += "		<a href='#' id='qq_connect'><span><i></i>QQ&nbsp;&nbsp;帐号登录</span></a>";
    userHtml += "	</div>";
    userHtml += "</div>";
    $("#user").html(userHtml);
};

function load_header() {
    var headerHtml = "";
    headerHtml += "<div class='wrap'>";
    headerHtml += "		<i class='menu_open'></i>";
    headerHtml += "		<div class='logo'>";
    headerHtml += "			<a href='#'><img src='css/logo.png' /></a>";
    headerHtml += "		</div>";
    headerHtml += "		<i class='search_open'></i>";
    headerHtml += "</div>";
    headerHtml += "<div class='logo_msk'></div>";
    $("#header").html(headerHtml);
};
