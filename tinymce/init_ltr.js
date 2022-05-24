tinymce.init({
    content_css : "../tinymce/mycontent_ltr.css",
    selector: ".tinymceQuestion",
    language : 'en',
    theme: "modern",
    width: "100%",
    height: 150,
	plugins: ["paste image hr directionality  textcolor jbimages code "],
	toolbar1: "  ltr rtl jbimages underline italic bold forecolor ",
	menubar: false,
    statusbar: false,
	image_advtab: true,
    toolbar_items_size: 'small',
	paste_as_text:false,
    relative_urls: false,
});

tinymce.init({
    content_css : "../tinymce/mycontent_ltr.css",
    selector: ".tinymceAnswer",
    language : 'en',
    theme: "modern",
    width: "100%",
    height: 50,
	plugins: ["paste image hr directionality  textcolor jbimages  "],
	toolbar1: "  ltr rtl jbimages underline italic bold forecolor ",
	menubar: false,
    statusbar: false,
	image_advtab: true,
    toolbar_items_size: 'small',
	paste_as_text:true,
    relative_urls: false,
});