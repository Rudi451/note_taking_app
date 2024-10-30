var addNote_el = document.getElementById('addNote_btn');
var notizenZahl = 0;
var deleteBuffer;
for (var i = 1; i < 100; i++) {
	if (localStorage.getItem('notize' + i)) {
		notizenZahl = i;
		addExistNotes(i);
	}
}
// if (localStorage.getItem) if (notizenList.length) notizenZahl = notizenList.length;

addNote_el.addEventListener('click', function () {
	addNote_Func();
});
//add note function
function addNote_Func() {
	notizenZahl += 1;
	console.log(notizenZahl);
	//create note
	var container = document.getElementById('container');
	var notize = document.createElement('div');
	notize.classList.add('notize', 'anime');

	notize.setAttribute('id', 'notize' + notizenZahl);
	container.appendChild(notize);

	// save an delete buttons
	var buttons = document.createElement('div');
	buttons.classList = 'buttons';
	notize.appendChild(buttons);
	// -- save button
	var save_btn = document.createElement('div');
	save_btn.classList = 'save';
	save_btn.setAttribute('onclick', 'save_func(' + notizenZahl + ')');
	save_btn.setAttribute('id', 'save_btn' + notizenZahl);
	buttons.appendChild(save_btn);

	var saveImg = document.createElement('img');
	saveImg.src = 'diskette.png';
	save_btn.appendChild(saveImg);

	//-- delete button
	var delete_btn = document.createElement('div');
	delete_btn.classList = 'delete';
	delete_btn.setAttribute('onclick', 'delete_func(' + notizenZahl + ')');
	delete_btn.setAttribute('id', 'delete_btn' + notizenZahl);
	buttons.appendChild(delete_btn);

	var deleteImg = document.createElement('img');
	deleteImg.src = 'bin.png';
	delete_btn.appendChild(deleteImg);

	//title element
	var title = document.createElement('textarea');
	title.classList = 'title';
	title.placeholder = 'Titletext';
	title.setAttribute('id', 'title' + notizenZahl);
	title.maxLength = 20;

	notize.appendChild(title);

	//notizen_body element
	var notizen_body = document.createElement('textarea');
	notizen_body.classList = 'notizen_body';
	notizen_body.setAttribute('id', 'notizen_body' + notizenZahl);
	notizen_body.placeholder = 'Notizentext';
	notize.appendChild(notizen_body);
}

//add exist notes
function addExistNotes(num) {
	//create note
	var container = document.getElementById('container');
	var notize = document.createElement('div');
	notize.classList.add('notize', 'anime');

	notize.setAttribute('id', 'notize' + notizenZahl);
	container.appendChild(notize);

	// save an delete buttons
	var buttons = document.createElement('div');
	buttons.classList = 'buttons';
	notize.appendChild(buttons);
	// -- save button
	var save_btn = document.createElement('div');
	save_btn.classList = 'save';
	save_btn.setAttribute('onclick', 'save_func(' + notizenZahl + ')');
	save_btn.setAttribute('id', 'save_btn' + notizenZahl);
	buttons.appendChild(save_btn);

	var saveImg = document.createElement('img');
	saveImg.src = 'diskette.png';
	save_btn.appendChild(saveImg);

	//-- delete button
	var delete_btn = document.createElement('div');
	delete_btn.classList = 'delete';
	delete_btn.setAttribute('onclick', 'delete_func(' + notizenZahl + ')');
	delete_btn.setAttribute('id', 'delete_btn' + notizenZahl);
	buttons.appendChild(delete_btn);

	var deleteImg = document.createElement('img');
	deleteImg.src = 'bin.png';
	delete_btn.appendChild(deleteImg);

	//title element
	var buffer = localStorage.getItem('notize' + notizenZahl); // buffer of local storage item

	var title = document.createElement('textarea');
	title.classList = 'title';
	title.placeholder = 'Titletext';
	title.setAttribute('id', 'title' + notizenZahl);

	title.innerText = JSON.parse(buffer).title;
	title.maxLength = 20;

	notize.appendChild(title);

	//notizen_body element
	var notizen_body = document.createElement('textarea');
	notizen_body.classList = 'notizen_body';
	notizen_body.setAttribute('id', 'notizen_body' + notizenZahl);
	notizen_body.placeholder = 'Notizentext';
	notizen_body.innerText = JSON.parse(buffer).text;
	notize.appendChild(notizen_body);
}
//save and delete functions

function save_func(zahl) {
	var notizenTitle = document.getElementById('title' + zahl);
	var notizenText = document.getElementById('notizen_body' + zahl);
	var notize = {
		num: zahl,
		title: notizenTitle.value,
		text: notizenText.value,
	};

	console.log(`save notize ${zahl}`);
	console.log(notize);
	localStorage.setItem('notize' + zahl, JSON.stringify(notize));

	var buffer = localStorage.getItem('notize' + zahl);
	console.log(JSON.parse(buffer));
}

function delete_func(zahl) {
	var notize = document.getElementById('notize' + zahl);
	console.log(`delete notize ${zahl}`);
	var dialog = document.querySelector('dialog');
	dialog.showModal();
	deleteBuffer = zahl;
}
function deleteItem() {
	document.getElementById('notize' + deleteBuffer).remove();
	localStorage.removeItem('notize' + deleteBuffer);
}
