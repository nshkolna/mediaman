(function() {
	// Add event listener for open form button
	var nav = document.querySelector('.nav');

	if (nav) {
        nav.addEventListener('click', function(e) {
            var target = e.target;

            if (target.tagName.toLowerCase() !== 'a') {
                return;
            }

            e.preventDefault();
            MEDIA.navigation.toggleToActiveLink(target);
        });
    }
}());