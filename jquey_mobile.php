<!doctype html>
<html>
    <head>
		<meta charset="utf-8">
		<title>jQuery Mobile Example</title>
		<meta name="viewport" content="initial-scale=1, user-scalable=no, width=device-width">
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">
		<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
		<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
    </head>
	<script>
	$('.select-text').on('click', function(e) {
		var selector = $(this).data('selector');
		$(selector).selectText();
		alert(selector);
		// e.preventDefault();
	});
	</script>
 
    <body>
        <section data-role="page" id="first" data-theme="a">
            <header data-role="header" data-position="fixed" data-add-next-btn="true">
                <h1 align='center'>Page 1 Header</h1>
            </header>
 
            <article data-role="content">
                <h2 align='center'>Hello, world!</h2>
                <p align='center'><a href="#second" data-role="button" data-inline="true" data-transition="flow" data-icon="carat-r" data-iconpos="right" >Go to Page 2</a></p>
            </article>
 
            <footer data-role="footer" data-position="fixed">
                <h4 align='center'>Page 1 Footer</h4>
            </footer>
        </section>
 
        <section data-role="page" id="second" data-theme="b">
            <header data-role="header" data-position="fixed"  data-add-back-btn="true">
                <h1 align='center'>Page 2 Header</h1>
				
            </header>
 
            <article data-role="content">
                <h2 align='center'>Example Page</h2>
				<p align='center'><a href="#third" data-role="button" data-inline="true" data-transition="flow" data-icon="carat-r" data-iconpos="right" >Go to Page 3</a></p>
            </article>
 
            <footer data-role="footer" data-position="fixed">
                <h4 align='center'>Page 2 Footer</h4>
            </footer>
        </section> 
		<section data-role="page" id="third" data-theme="a">
            <header data-role="header" data-position="fixed"  data-add-back-btn="true">
                <h1 align='center'>Page 3 Header</h1>
            </header>
 
            <article data-role="content">
                <h2 align='center'>Demonstration Page</h2>
            </article>
 
            <footer data-role="footer" data-position="fixed">
                <h4 align='center'>Page 3 Footer</h4>
            </footer>
        </section>
		
		<section data-role="page" id="third" data-theme="a">
            <header data-role="header" data-position="fixed"  data-add-back-btn="true">
                <h1 align='center'>Page 4 Header</h1>
            </header>
 
            <article data-role="content">
                <h2 align='center'>Demonstration Page</h2>
            </article>
 
            <footer data-role="footer" data-position="fixed">
                <h4 align='center'>Page 4 Footer</h4>
            </footer>
        </section>
    </body>
</html>