<section id='new-session'>

	<button id='new-session-btn' type='button'>New Session</button>

</section>

<script id='session-item-template' type='text/template'>
	<li>
		<header class='grade'>V0</header>
		<%= v0 %>
		<button class='increment-btn' type='button' data-grade='v0'>+</button>
		<button class='decrement-btn' type='button' data-grade='v0'>-</button>
	</li>
	<li>
		<header class='grade'>V1</header>
		<%= v1 %>
		<button class='increment-btn' type='button' data-grade='v1'>+</button>
		<button class='decrement-btn' type='button' data-grade='v1'>-</button>
	</li>
	<li>
		<header class='grade'>V2</header>
		<%= v2 %>
	</li>
	<li>
		<header class='grade'>V3</header>
		<%= v3 %>
	</li>
	<li>
		<header class='grade'>V4</header>
		<%= v4 %>
	</li>
	<li>
		<header class='grade'>V5</header>
		<%= v5 %>
	</li>
</script>