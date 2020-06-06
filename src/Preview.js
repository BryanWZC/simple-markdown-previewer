import React from 'react';
import './Preview.css';

const marked = window.marked;

marked.setOptions({
  gfm: true,
  breaks: true,
});

class Preview extends React.Component {
  render(){
    return(
      <div>
        <div id = 'preview' dangerouslySetInnerHTML = {{__html: marked(this.props.text)}}></div>
      </div>
    )
  }
}
const toBeLoaded = `# Shiba Inu
&nbsp;
![Shiba Inu](https://www.jetaawgtn.org.nz/wp-content/uploads/2019/10/dog-250x250.jpg)
&nbsp;
The Shiba Inu is a Japanese breed of hunting dog. A small-to-medium breed, it is the smallest of the six original and distinct spitz breeds of dog native to Japan.
&nbsp;
A small, alert and agile dog that copes very well with mountainous terrain and hiking trails, the Shiba Inu was originally bred for hunting. It looks similar to and is often mistaken for other Japanese dog breeds like the Akita Inu or Hokkaido, but the Shiba Inu is a different breed with a distinct blood line, temperament, and smaller size than other Japanese dog breeds.
&nbsp;

## Traits
&nbsp;
\`Weight:\` 10 kg (Male), 8 kg (Female)
\`Height:\` 35 to 43 cm (Male), 33 to 41 cm (Female)
\`Coat:\` Double
\`Color:\` Red, sesame, black and tan, or cream
\`Litter Size:\` 3 puppies on average
\`Life Span:\` 13–15 years
\`Temperament:\` Charming, Alert, Keen, Fearless, Confident, Faithful
&nbsp;

## 6 Suprising Facts
1. They are an ancient breed
2. They were originally used as hunting dogs
3. They are one of the most popular breeds in japan
4. There used to be only 3 kinds of Shiba Inus
5. They were once almost extinct
6. They have cat-like qualities
&nbsp;

## Random Shibe Quote
>"The dog has a spirited boldness and is fiercely proud with a good nature and a feeling of artlessness. The Shiba is able to move quickly with nimble, elastic steps."
&nbsp;

\`\`\`
Last thoughts: Are Shibes one of your favorite breeds?
\`\`\`

**Source:** [Wikipedia] 
&nbsp;
&nbsp;
&nbsp;

[Wikipedia]: https://en.wikipedia.org/wiki/Shiba_Inu
`;
export default Preview;
export {toBeLoaded};
