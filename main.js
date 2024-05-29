
var ballHeight = 100
var ballWidth = 100
function onBallClick(ball) {
    if (ballHeight === 400 ) {
        ballHeight = 100
        ballWidth = 100
    } else {
        ballHeight += 50
        ballWidth += 50
        ball.style.height = ballHeight + 'px'
        ball.style.width = ballWidth + 'px'
    }
}

