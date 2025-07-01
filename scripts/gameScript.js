console.log("Game Script loaded");


$("#gamePiece").draggable(
    {
        containment: "#gameBoard", scroll: true,
        snap: ".gameTargets", snapMode: "inner",
        snapTolerance: 60
    }
);

    $('.gameTargets').droppable({
        accept: '#gamePiece',
        drop: function() {
            $( this )
            console.log("Game piece dropped on target!" + $(this).attr('class'));
        }
});