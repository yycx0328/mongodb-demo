$(document).ready(function () {
	nav_top();
	nav_left();
});

function nav_top()
{
	var topHtml = "";
	topHtml += "<div class='navbar-header'>";
	topHtml += "	<a class='navbar-brand' href='index'><i class='fa fa-comments'></i> <strong>HOME </strong></a>";
	topHtml += "</div>";
	topHtml += "<ul class='nav navbar-top-links navbar-right'>";
	topHtml += "	<li class='dropdown'>";
	topHtml += "		<a class='dropdown-toggle' data-toggle='dropdown' href='#' aria-expanded='false'>";
	topHtml += "			<i class='fa fa-user fa-fw'></i> <i class='fa fa-caret-down'></i>";
	topHtml += "		</a>";
	topHtml += "		<ul class='dropdown-menu dropdown-user'>";
	topHtml += "			<li><a href='about-me'><i class='fa fa-user fa-fw'></i> About Author</a>";
	topHtml += "			</li>";
	topHtml += "		</ul>";
	topHtml += "	</li>";
	topHtml += "</ul>";
	$("#top-navbar").html(topHtml);
            
}

function nav_left()
{
	var leftHtml = "";
	leftHtml += "<div class='sidebar-collapse'>";
	leftHtml += "	<ul class='nav' id='main-menu'>";
	leftHtml += "		<li>";
	leftHtml += "			<a href='#'><i class='fa fa-fw fa-file'></i>开发心得<span class='fa arrow'></span></a>";
	leftHtml += "			<ul class='nav nav-second-level'>";
	leftHtml += "				<li><a href='about-all'>总览</a></li>";
	leftHtml += "				<li><a href='about-me'>简说自己</a></li>";
	leftHtml += "				<li><a href='start-linux'>Linux开始</a></li>";
	leftHtml += "				<li><a href='start-github'>从Github开始</a></li>";
	leftHtml += "			</ul>";
	leftHtml += "		</li>";
	leftHtml += "		<li>";
	leftHtml += "			<a href='#'><i class='fa fa-dashboard'></i>HTML细说<span class='fa arrow'></span></a>";
	leftHtml += "			<ul class='nav nav-second-level'>";
	leftHtml += "				<li><a href='#'>总览</a></li>";
	leftHtml += "				<li><a href='#'>HTML XXX</a></li>";
	leftHtml += "				<li><a href='#'>HTML XXX</a></li>"; 
	leftHtml += "			</ul>";
	leftHtml += "		</li>"; 
	leftHtml += "		<li>";
	leftHtml += "			<a href='#'><i class='fa fa-dashboard'></i>问题集锦<span class='fa arrow'></span></a>";
	leftHtml += "			<ul class='nav nav-second-level'>";
	leftHtml += "				<li><a href='#'>总览</a></li>";
	leftHtml += "				<li><a href='#'>问题集锦1</a></li>";
	leftHtml += "				<li><a href='#'>问题集锦2</a></li>"; 
	leftHtml += "			</ul>";
	leftHtml += "		</li>"; 
	leftHtml += "	</ul>"; 
	leftHtml += "</div>";
	$("#left-navbar").html(leftHtml);
}