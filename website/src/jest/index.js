/**
 * @jsx React.DOM
 */

/* eslint-disable max-len */

const React = require('React');
const Site = require('Site');
const Marked = require('Marked');

const Container = require('Container');
const HomeSplash = require('HomeSplash');
const GridBlock = require('GridBlock');

const siteConfig = require('../../siteConfig.js');
const gettingStartedContent = require('./docs/getting-started.js').content.split('<!--truncate-->')[0];
const blog = require('MetadataBlog');

const index = React.createClass({
  render() {
    const features = [
      {
        content: 'Create coverage reports with `--coverage`. No additional setup or libraries needed!',
        image: 'img/content/feature-pattern-mode.png',
        imageAlign: 'left',
        title: 'Code Coverage Reports',
      },
      {
        content: 'Jest is a complete and easy to setup JavaScript testing solution.',
        image: 'img/content/feature-snapshot-tests.png',
        imageAlign: 'right',
        title: 'Zero-config',
      },
      {
        content: 'Powerful [mocking library](/jest/docs/mock-functions.html) for functions and modules',
        image: 'img/content/feature-pattern-mode.png',
        imageAlign: 'left',
        title: 'Powerful Mocking Library',
      },
      {
        content: 'Jest works with any compile-to-JS language and integrates seamlessly with [Babel](https://babeljs.io). This is a demonstration of a centered unit with a large image. It does not have to be Babel, especifically.',
        image: 'img/content/feature-snapshot-tests.png',
        imageAlign: 'bottom',
        title: 'Babel',
      },
      {
        content: 'Sandboxed test files and automatic global state resets for every test',
        image: 'img/content/feature-snapshot-tests.png',
        imageAlign: 'right',
        title: 'Sandboxed and Fast',
      },
      {
        content: 'Run your tests within a fake DOM implementation (via [jsdom](https://github.com/tmpvar/jsdom)) on the command line. Every DOM API that you call can be observed in the same way it would be observed in a browser.',
        image: 'img/content/feature-pattern-mode.png',
        imageAlign: 'left',
        title: 'Simulated DOM Environment',
      },
      {
        content: 'Jest works with any compile-to-JS language and integrates seamlessly with [Babel](https://babeljs.io)',
        image: 'img/content/feature-pattern-mode.png',
        imageAlign: 'right',
        title: 'Babel',
      },
    ];

    const users = [
      {
        caption: 'Facebook',
        image: 'img/logos/facebook.png',
        infoLink: 'https://code.facebook.com',
      },
      {
        caption: 'Oculus',
        image: 'img/logos/oculus.png',
        infoLink: 'https://www.oculus.com/',
      },
      {
        caption: 'Instagram',
        image: 'img/logos/instagram.png',
        infoLink: 'https://www.instagram.com/',
      },
      {
        caption: 'Twitter',
        image: 'img/logos/twitter.png',
        infoLink: 'https://www.twitter.com',
      },
      {
        caption: 'Pinterest',
        image: 'img/logos/pinterest.png',
        infoLink: 'https://www.pinterest.com',
      },
      {
        caption: 'The New York Times',
        image: 'img/logos/nyt.png',
        infoLink: 'http://www.nytimes.com/',
      },
    ];

    const showcase = users.map(user => {
      return <a href={user.infoLink}><img src={user.image} title={user.caption}/></a>;
    });

    return (
      <Site>
        <HomeSplash mostRecentPost={blog.files[0]} />
        <div className="mainContainer">
          <Container background="light" padding={['bottom', 'top']}>
            <GridBlock align="center" contents={siteConfig.features} layout="fourColumn" />
          </Container>
          <Container padding={['bottom', 'top']}>
            <div className="testingFeatures">
              <h2>Painless JavaScript Testing</h2>
              <p>Fast interactive mode that can switch between running all tests, or only those related to changed files, or even those that match a test pattern. Jest runs failed tests first. Yes, we already said that. I'm only copying this text here for demonstration purposes.</p>
            </div>
          </Container>
          <GridBlock className="testingFeatures" contents={features} alternatingBackground/>
          <Container padding={['bottom', 'top']}>
            <h2>
              <a className="anchor" name="use"></a>
              Try Jest
              <a className="hash-link" href="#use"></a>
            </h2>
            <Marked>You can try out a real version of Jest through [repl.it](https://repl.it). Just edit your test and hit the run button!</Marked>
            <iframe className="jest-repl" src="https://repl.it/languages/jest?lite=true"></iframe>

            <Marked>...or watch a video to get started with Jest:</Marked>
            <div className="video">
              <iframe src="https://fast.wistia.net/embed/iframe/78j73pyz17"></iframe>
            </div>
            <div className="video-shoutout">
              <a href="https://egghead.io/lessons/javascript-test-javascript-with-jest">Video</a> by <a href="https://twitter.com/kentcdodds">Kent C. Dodds</a> hosted by <a href="https://egghead.io">Egghead</a>.
            </div>
            <h2>
              <a className="anchor" name="getting-started"></a>
              Getting Started
              <a className="hash-link" href="#getting-started"></a>
            </h2>
            <Marked>{gettingStartedContent}</Marked>
            <Marked>Refer to [Additional Configuration](/jest/docs/getting-started.html#additional-configuration) to learn how to use Jest with Babel, webpack, or TypeScript.</Marked>
          </Container>
          <Container padding={['bottom']}>
          <div className="miniShowcaseSection">
              <h2>Who's Using Jest?</h2>
              <p>Jest is used by <a href="/jests/users.html">teams of all sizes</a> to test websites, mobile apps, and APIs.</p>
            <div className="logos">
              {showcase}
            </div>
          </div>
          </Container>
        </div>
      </Site>
    );
  },
});

module.exports = index;
