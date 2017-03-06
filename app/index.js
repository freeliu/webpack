/**
 * Created by Administrator on 2017/3/6.
 */
import _ from "lodash"

function component() {
    let element = document.createElement('div');
    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());