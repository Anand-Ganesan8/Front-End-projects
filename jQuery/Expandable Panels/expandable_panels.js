/*  JavaScript Document  */

$(document).ready(function() {
	injectMarkup();
});

function injectMarkup() {
	$('.expandable_panel').each(function() {
		var linkText = $(this).attr('data-link-text');
		var content = $(this).html();

		$(this).html(
			'<div class="expandable_panel_content_container" style=height:0px;><div class="expandable_panel_content">' +
				content +
				'</div></div>'
		);

		$(this).append('<div class="expandable_panel_trigger">' + linkText + '</div>');
	});
	setPanels();
}

function setPanels() {
	$('.expandable_panel_trigger').on('click', function() {
		// console.log(this);
		var newHeight = null;
		var root = $(this).closest('.expandable_panel');
		// console.log(root);
		var contentPanel = root.find('.expandable_panel_content_container');
		root.toggleClass('open');

		if (root.hasClass('open')) {
			newHeight = root.find('.expandable_panel_content').outerHeight(true);
		} else {
			newHeight = 0;
		}
		contentPanel.animate({ height: newHeight }, 1000, function() {
			if (newHeight != 0) $(this).removeAttr('style');
		});
	});
}
