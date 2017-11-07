# React Image Puzzle

Create a simple swap tile puzzle out of an image.

## Example

![](http://g.recordit.co/jUGS1IjwCH.gif)

```js
import { render } from 'react-dom';
import Puzzle from 'react-image-puzzle';

render(
  <Puzzle
    image='https://upload.wikimedia.org/wikipedia/en/6/68/John_Coltrane_-_Blue_Train.jpg'
  />,
  document.getElementById('root')
);
```

Property | Type     | Required | Default value | Description
:---     | :---     | :---     | :---          | :---
image    | string   | yes      |               | image url for the puzzle
size     | number   | no       | 300           | side size of the image
level    | number   | no       | 3             | number of cells per side
onDone   | funciton | no       |               | callback when the puzzle is completed
-----
