# Chess Implementation

The setup of the game is managed in the `GameContainer`. This renders the `<Board />` component, which in turn renders the `<Square />` components and the `<Knight />`.

The `Square` is given an `onDrop` callback to handle a drop event, its position (as X and Y coordinates) and whether it is black or white. A `Square` is also told whether it is available for the `Knight` to move to.

The `Knight` is simply given its position on the board, which will match a `Square`'s position. The `Knight` is not made a child of the `Square` in the DOM to avoid unnecessary DOM manipulations - instead it is positioned absolutely over the board based on its X and Y coordinates.

When the `Knight` is dragged onto a `Square`, the drop action is dispatched to the Redux Store. The action calls the `Moves` service, which calculates the next available moves based on the piece's current position and some predefined rules. The game's state is then updated by the reducer with the new position and available moves.
