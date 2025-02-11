var btn = document.getElementById('change');
var text = document.getElementById('color');
var newColor = '#E63C44';

const generateColor = () => {
    newColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    console.log(newColor.length);

    if (newColor.length < 7) {
        generateColor();
    }
};


btn.addEventListener('click', function () {
    generateColor();

    document.body.style.backgroundColor = newColor;
    btn.style.color = newColor;
    text.innerHTML = newColor;
});

