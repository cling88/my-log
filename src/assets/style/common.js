
export const setColor = function(type){
    /*
        Nothing
        bgColor: white
        pointColor: #333
        pointColor02: #333

        type01
        bgColor: #c291f8
        pointColor: #f7ecf6
        pointColor02: #b989b5

        type02
        bgColor: #2828cb
        pointColor: #fff3d8
        pointColor02: #cbbfa5

    */

    let colors = null;
    if(type === "about") {
        colors = {
            bgColor: '#c291f8',
            pointColor: '#f7ecf6',
            pointColor02: '#b989b5',
        }
    } else if(type === "history") {
        colors = {
            bgColor: '#2828cb',
            pointColor: '#fff3d8',
            pointColor02: '#cbbfa5',
        }
    } else {
        colors = {
            bgColor: '#fff',
            pointColor: '#333',
            pointColor02: 'red',
        }
    }

    return colors;
}