const input = document.querySelectorAll("[contenteditable='true']")[1];

function dispatch(input, message){
    // var evt = new InputEvent('input', {
    //     bubbles: true,
    // });
    // input.innerHTML = message;
    // console.log(input);
    // input.dispatchEvent(evt);
    // document.querySelector('span[data-icon="send"]').click();

	input.innerText = message;
	input.dispatchEvent(new InputEvent('input', {
		inputType: 'insertText',
		data: message,
		bubbles: true,
		cancelable: false,
		composed: true,
		detail: 0,
	}));

    console.log(document.querySelector('button[data-testid="compose-btn-send"]'));
	document.querySelector('button[data-testid="compose-btn-send"]').click();
}

function lyricsPrank(text){
    text.split(' ').map((word) => dispatch(input, word));
}

function bombPrank(message, count){
    let i = 0;
    while(i < count){
        dispatch(input, message);
        i++;
    }
}

//example lyricsPrank
// let text = 'lyrics goes here';
// lyricsPrank(text);

//example bombPrank
// bombPrank('WOI', 100);
