<section id='new-session'>
	<a href='#session'><button id='new-session-btn' type='button'>New Session</button></a>
</section>

<script id='session-item-template' type='text/template'>
	<li>
		<header class='grade'>V1</header>
		<%= v1 %>
		<button class='increment-btn' type='button' data-grade='v1'>+</button>
		<button class='decrement-btn' type='button' data-grade='v1'>-</button>
	</li>
	<li>
		<header class='grade'>V2</header>
		<%= v2 %>
		<button class='increment-btn' type='button' data-grade='v2'>+</button>
		<button class='decrement-btn' type='button' data-grade='v2'>-</button>
	</li>
	<li>
		<header class='grade'>V3</header>
		<%= v3 %>
		<button class='increment-btn' type='button' data-grade='v3'>+</button>
		<button class='decrement-btn' type='button' data-grade='v3'>-</button>
	</li>
	<li>
		<header class='grade'>V4</header>
		<%= v4 %>
		<button class='increment-btn' type='button' data-grade='v4'>+</button>
		<button class='decrement-btn' type='button' data-grade='v4'>-</button>
	</li>
	<li>
		<header class='grade'>V5</header>
		<%= v5 %>
		<button class='increment-btn' type='button' data-grade='v5'>+</button>
		<button class='decrement-btn' type='button' data-grade='v5'>-</button>
	</li>
</script>