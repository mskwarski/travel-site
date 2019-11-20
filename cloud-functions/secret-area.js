exports.handler = function(event, context, callback) {
    const secretContent = 
    <h3>Welcome to The Secret Area</h3>
    <p>Quickly network proactive alignments <strong>whereas</strong> transparent results.</p>

    
    let body

    if (event.body) {
        body = JSON.parse(event.body)
    } else {
        body = {}
    }

    if (body.password == "javascript") {
        callback(null, {
            statusCode: 200,
            body: "Secret Content"
        })
    } else {
        callback(null, {
            statusCode: 401
        })
    }

    
}