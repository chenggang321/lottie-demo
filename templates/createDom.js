export default function ({id=`lottie${guid()}`,style='width: 400px;height: 400px;'}) {
    const div = document.createElement('div');
    div.id=id;
    div.className='lottie'
    div.style = style
    document.body.appendChild(div);
    return id
}
function guid() {
    return Number(Math.random().toString().substr(3, 3) + Date.now()).toString(36);
}
