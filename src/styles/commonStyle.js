
export const setColor = function(type){
    let colors = null;
    if(type === "about") {
        colors = {
            bgColor: '#f7ecf6',
            // pointColor: '#c291f8',
            pointColor: '#6d548a',
            pointColor02: '#b989b5',
            // pointColor03: '#7a4cd6',
            pointColor03: '#e48fd6'
        }
    } else if(type === "history") {
        colors = {
            bgColor: '#fff3d8',
            pointColor: '#2828cb',
            pointColor02: '#cbbfa5',
            pointColor03: '#62ffbe',
        }
    } else {
        colors = {
            bgColor: '#fff',
            pointColor: '#333',
            pointColor02: '#929292',
        }
    }

    return colors;
}