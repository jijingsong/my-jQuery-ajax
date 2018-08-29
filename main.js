window.jQuery = function (nodeOrSelector) {
    let nodes = {}
    nodes.addClass = function () { }
    nodes.html = function () { }
    return nodes
}

window.jQuery.ajax = function({url, method, data, success, error, headers}) {

    let request = new XMLHttpRequest()

    request.open(method, url)

    for (let key in headers) {
        let value = headers[key]
        request.setRequestHeader(key, value)
    }

    request.send(data)

    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                let str = request.responseText
                let obj = JSON.parse(str)
                success.call(undefined, request.responseText)
            } else {
                error.call(undefined, request)
            }
        }
    }
}

window.$ = window.jQuery

btn.addEventListener('click', () => {
    // let request = new XMLHttpRequest()

    // request.open('get', '/xxx')
    // request.send()

    // request.onreadystatechange = () => {
    //     if (request.readyState === 4) {
    //         if (request.status >= 200 && request.status < 300) {
    //             console.log('请求成功')
    //             console.log(typeof request.responseText)
    //             let str = request.responseText
    //             let obj = JSON.parse(str)
    //             console.log(obj.note.to)
    //             console.log(request.getAllResponseHeaders())
    //         } else {
    //             console.log('请求失败')
    //         }
    //     }
    // }
    $.ajax({
        url: '/xxx',
        method:'post',
        data: 'haha',
        success: (x) => {
            console.log(x)
        },
        error: (x) => {
            console.log(x)
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'jjs': '18'
        }
    })
})



